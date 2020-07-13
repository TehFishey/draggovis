import _invert from 'lodash/invert';
import DataManager from "../DataManager";

import Tree from "../../library/controller/Tree";
import Breed from "../../library/defines/Breed"
import Portrait from "../../library/defines/Portrait"
import { Gender, DragonState } from "../../library/defines/Dragon";

import { Portraits, Breeds } from "../../defines/Defines";
import DragonNode from '../../library/controller/DragonNode';

import key0 from "./lookup-keys/iokey0.json";

interface Lookup {
    [key: string]: string
}

interface IOKey {
    [key: string]: Lookup | string
}

const lookupVersion = 0;

export default class IOManager {
    readonly parent: DataManager;
    readonly ioKeys: Map<string, IOKey>;
    readonly version: string;

    constructor(parent: DataManager, version: number) {
        this.parent = parent;
        this.version = version.toString(36);
        this.ioKeys = new Map<string, IOKey>();

        let keys = [key0]
        try{
            keys.forEach((k: IOKey) => {
                if(typeof k.version == 'string')
                    this.ioKeys.set(k.version as string, k);
                else throw new Error(`Controller: WARNING! IOManager failed to import key file with version id: ${k.version}!`)
            })
        }
        catch(e){
            console.log(e);
        }

    }

    generateLookups() {
        let portraitLookup: Lookup = {};
        let breedLookup: Lookup = {};
        let genderLookup: Lookup = IOManager.createGenderLookup('0');
        let stateLookup: Lookup = IOManager.createStateLookup('0');

        Portraits.arr.forEach((portrait: Portrait, index: number) => {
            let n = index.toString(36);
            portraitLookup[n] = portrait.id;
        });
        Breeds.arr.forEach((breed: Breed, index: number) => {
            let n = index.toString(36);
            breedLookup[n] = breed.id;
        });

        let IOKey: IOKey = {'version' : this.version.toString()}
        IOKey['portraitLookup'] = portraitLookup;
        IOKey['breedLookup'] = breedLookup;
        IOKey['genderLookup'] = genderLookup;
        IOKey['stateLookup'] = stateLookup;

        function download(object : any, fileName: string) {
            let jsonData = JSON.stringify(object);
            let a = document.createElement("a");
            let file = new Blob([jsonData], {type: 'text/plain'});
            a.href = URL.createObjectURL(file);
            a.download = fileName;
            a.click();
        }

        download(IOKey, `iokey${this.version}.json`);
    }

    /**
     * Converts a Tree into a compressed, serialized string.
     */
    export(tree: Tree) : string {
        let version: string = this.version;
        let ioKey: IOKey; 
        let bLookup: Map<string, string>;
        let pLookup: Map<string, string>;
        let gLookup: Map<string, string>;
        let sLookup: Map<string, string>;
        let out: string = '';

        try {
            // Convert all Lookup objects to maps, allowing for proper iteration
            // For export, keys : values are inverted: (ex. key: <object-identity>, value: <index>)
            if (this.ioKeys.get(version) != null) {
                ioKey = this.ioKeys.get(version)!;
                bLookup = new Map(Object.entries(_invert(ioKey.breedLookup as Object)));
                pLookup = new Map(Object.entries(_invert(ioKey.portraitLookup as Object)));
                gLookup = new Map(Object.entries(_invert(ioKey.genderLookup as Object)));
                sLookup = new Map(Object.entries(_invert(ioKey.stateLookup as Object)));
            }
            else throw (`Exporter: Lookup Error! Cannot find ioKey with version number: ${version}`);   

            out = this.tree2string(tree, version, bLookup, pLookup, gLookup, sLookup);
            out = this.compressString(out);
            return out;
        }
        catch(e){
            console.log(e);
            out = ''
            return out;
        }
    }

    /**
     * Converts a compressed, serialized string into a Tree. Imports tree if successful.
     * 
     * @param importString String to attempt to decompress and deserialize into to a tree.
     */
    import(importString: string) : Tree {
        let imp = importString;
        let data: Array<string>;
        let version: string;
        let ioKey: IOKey; 
        let bLookup: Map<string, string>;
        let pLookup: Map<string, string>;
        let gLookup: Map<string, string>;
        let sLookup: Map<string, string>;

        let out: Tree;
        if(imp.includes('|')) {
            imp = this.decompressString(imp);
            data = imp.split('|');
            version = data.shift()!;
            if (version == null || version.length > 2)
                throw new Error(`Importer: Parse Error! Version number '${version}' is invalid or unreadable.`);
            else if (this.ioKeys.get(version) != null) {
                ioKey = this.ioKeys.get(version)!
                bLookup = new Map(Object.entries(ioKey.breedLookup));
                pLookup = new Map(Object.entries(ioKey.portraitLookup));
                gLookup = new Map(Object.entries(ioKey.genderLookup));
                sLookup = new Map(Object.entries(ioKey.stateLookup));
            }
            else throw new Error(`Importer: Lookup Error! Cannot find ioKey with version number: '${version}'`);

            out = this.string2tree(data, bLookup, pLookup, gLookup, sLookup);
            return out;
        } else throw new Error(`Importer: Parse Error! Import string is malformed or unreadable.`)  
    }

    /**
     * Serializes a Tree object, returning a string with format: `'ioKey-version'|'root-node-gender'|'tree[0]-data''|tree[1]-data'|...`
     * @param tree tree to serialize
     * @param version version of iokey to use.
     * @param bLookup Map of breed-id : lookup-index
     * @param pLookup Map of portrait-id : lookup-index
     * @param gLookup Map of Gender : lookup-index
     * @param sLookup Map of DragonState : lookup-index
     */
    private tree2string(tree: Tree, version: string, bLookup: Map<string, string>, pLookup: Map<string, string>, gLookup: Map<string, string>, sLookup: Map<string, string>) : string {
        let out: string = '';
        out += `${version}|`;

        try {
            if(gLookup.get(tree[0]!.gender)!= null) 
                out += `${gLookup.get(tree[0]!.gender)}`;
            else 
                throw new Error(`Exporter: Lookup Error! Cannot find gender key for gender: '${tree[0]!.gender}'`)
        
            // Data for individual tree nodes
            // Format: |'breed id index''portrait id index''state index''name'|`
            for (let i = 0; i < tree.length; i++) {
                let node: DragonNode | null = tree[i]!;
                let str: string = '|';
                
                if(node != null) {
                    let b: string;
                    let p: string;
                    let s: string;
                    let n: string; 

                    if((bLookup.get(node.breed.id)) != null) 
                        b = bLookup.get(node.breed.id)!;
                    else 
                        throw new Error(`Exporter: Lookup Error! Cannot find breed index for breed: '${node.breed.id}'`);

                    if((pLookup.get(node.portrait.id)) != null) 
                        p = pLookup.get(node.portrait.id)!;
                    else 
                        throw new Error(`Exporter: Lookup Error! Cannot find portrait index for breed: '${node.portrait.id}'`);

                    if((sLookup.get(node.state)) != null) 
                        s = sLookup.get(node.state)!;
                    else 
                        throw new Error(`Exporter: Lookup Error! Cannot find state index for state: '${node.state}'`);

                    n = node.name;
                    str += `${b.padStart(2,'-')}${p.padStart(2,'-')}${s}${n}`
                }
                out += str 
            }
            return out;
        }
        catch(e) {
            console.log(e);
            throw e;
        }
    }

    /**
     * Deserializes an array of strings, returning a Tree object. Expects full tree string, split by '|', minus version tag.
     * @param data split data string to parse
     * @param bLookup Map of lookup-index : breed-id
     * @param pLookup Map of lookup-index : portrait-id
     * @param gLookup Map of lookup-index : Gender
     * @param sLookup Map of lookup-index : DragonState
     */
    private string2tree(data: Array<string>, bLookup: Map<string, string>, pLookup: Map<string, string>, gLookup: Map<string, string>, sLookup: Map<string, string>) : Tree {
        let out = new Tree();
        let rootGender: Gender;
        let genderString: string;

        try {
            genderString = data.shift()!;
            if (gLookup.get(genderString) != null && gLookup.get(genderString)! in Gender) 
                rootGender = gLookup.get(genderString)! as Gender;
            else throw new Error(`Importer: Parse Error! First-gen gender '${genderString}' is invalid or unreadable.`)

            for (let i = 0; i < data.length; i++) {
                if(data[i] !== '') {
                    let node: Array<string> = [
                        data[i].slice(0,2).replace('-',''), // Breed code
                        data[i].slice(2,4).replace('-',''), // Portrait code
                        data[i].slice(4,5),                 // State code
                        data[i].slice(5,data[i].length)     // Name
                    ];
                    let breed: Breed;
                    let portrait: Portrait;
                    let gender: Gender = (i === 0) ? rootGender : 
                        (i % 2 === 0) ? Gender.Female : Gender.Male;
                    let state: DragonState;
                    
                    let bId: string | undefined = bLookup.get(node[0]);
                    let pId: string | undefined = pLookup.get(node[1]);

                    if(bId != null ) {
                        if(Breeds.dict.get(bId) != null) breed = Breeds.dict.get(bId)!;
                        else throw new Error(`Lookup Error: Cannot find breed with id '${bId}'.`) 
                    } 
                    else throw new Error(`Importer: Parse Error! Breed id '${bId}' at index ${i} is invalid or unreadable.`)
                    
                    if(pId != null) {
                        if(Portraits.dict.get(pId) != null) portrait = Portraits.dict.get(pId)!;
                        else throw new Error(`Lookup Error: Cannot find portrait with id '${pId}'.`);
                    } 
                    else throw new Error(`Importer: Parse Error! Portrait id '${pId}' at index ${i} is invalid or unreadable.`);

                    if (sLookup.get(node[2]) != null && sLookup.get(node[2])! in DragonState) 
                        state = sLookup.get(node[2])! as DragonState;
                    else throw new Error(`Importer: Parse Error! Dragon State '${node[2]}' at index ${i} is invalid or unreadable.`);

                    out.createNode(i,gender,breed,portrait,state);
                    out[i]!.name = (node[3] != null) ? node[3] : '';
                }
            }
            return out;
        }
        catch(e){
            console.log(e);
            throw e;
        }
    }

    /**
     * Compresses a tree-string. Compressed format can have up to 36 1-character internal node 'lookups', which can replace
     * multi-character node-strings.
     * @param treeStr uncompressed tree-string
     */
    private compressString(treeStr: string) : string {
        let data: Array<string> = treeStr.split('|').slice(2,treeStr.length);
        let out: string = '';
        let encodeNum: number = 0;
        let encodeDict: string = '';
        interface Accumulator {
            [key: string]: number
        }

        let count: Accumulator = data.reduce(
            (acc: Accumulator, node: string) => (
                { ...acc,[node.slice(0,5)]: (acc[node.slice(0,5)] || 0) + 1}
            ), {}
        )

        Object.keys(count).forEach((node: string) => {
            if(node != '' && count[node] > 1 && encodeNum < 36) {
                let encodeChar = `${encodeNum.toString(36)}`;
                encodeNum++;
                encodeDict += `${encodeChar}${node}`
                
                for (let i = 0; i < data.length; i++)
                    if(data[i] != null && data[i].slice(0,5) === node) 
                        data[i] = `$${encodeChar}${data[i].slice(5,data[i].length)}`;
            }
        });
        
        out += treeStr.split('|').slice(0,2).join('|');
        out += `|${encodeDict}`

        for (let i = 0; i < data.length; i++) {
            out += '|';
            if(data[i] != null) {
                out += data[i]
            }
        }

        return out;
    }

    /**
     * Decompresses compressed tree-string, reading node 'lookups' and replacing node-strings as necessary.
     * @param treeStr compressed tree-string
     */
    private decompressString(treeStr: string) : string {
        let data: Array<string> = treeStr.split('|').slice(2,treeStr.length);
        let out: string = '';
        let encodeStr: string = data.shift()!;
        let encodeDict: Map<string, string> = new Map<string, string>();
        
        for (let i = 0, chars = encodeStr.length; i < chars; i += 6)
            encodeDict.set(encodeStr[i], encodeStr.substring(i+1, i+6));
        
        out += treeStr.split('|').slice(0,2).join('|');            
        for (let i = 0; i < data.length; i++) {
            out += '|';
            if(data[i] != null) {
                if(data[i][0] === '$') {
                    let replace = encodeDict.get(data[i][1]);
                    let name = (data[i].length > 2) ? data[i].slice(2, data[i].length) : '';
                    out += `${replace}${name}`
                }
                else out += data[i]
            }
        }
        console.log(out);
        return out
    }

    private static createGenderLookup(version: string): Lookup {
        return {
            'm' : Gender.Male,
            'f' : Gender.Female,
            'u' : Gender.Undefined
        };
    }

    private static createStateLookup(version: string): Lookup {
        return {
            'h' : DragonState.Healthy,
            's' : DragonState.Neglected,
            'd' : DragonState.Dead,
            'z' : DragonState.Undead,
            'v' : DragonState.Vampire
        }
    }
}