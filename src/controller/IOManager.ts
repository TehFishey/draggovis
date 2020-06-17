import {Breeds, Portraits} from "../data/Model";
import Portrait from "../library/Portrait";
import Breed from "../library/Breed";
import Tree from "../library/Tree";
import DataManager from "./DataManager";
import { Gender } from "../library/Dragon";

import breed0 from "../data/io/breeds/breed0.json";
import portrait0 from "../data/io/portraits/portrait0.json";

interface Lookup {
    [key: string]: string
}

const lookupVersion = 0;

export default class IOManager {
    readonly parent: DataManager;
    readonly pLookups: Array<Lookup>;
    readonly bLookups: Array<Lookup>;
    readonly version: number;

    constructor(parent: DataManager) {
        this.parent = parent;
        this.version = lookupVersion;
        this.bLookups = [breed0];
        this.pLookups = [portrait0];
    }

    generateLookups() {
        let portraitLookup: Lookup = {'version' : this.version.toString()};
        let breedLookup: Lookup = {'version' : this.version.toString()};
        Portraits.arr.forEach((portrait: Portrait, index: number) => {
            let n = index.toString(36);
            portraitLookup[n] = portrait.id;
        });
        Breeds.arr.forEach((breed: Breed, index: number) => {
            let n = index.toString(36);
            breedLookup[n] = breed.id;
        });

        function download(object : any, fileName: string) {
            let jsonData = JSON.stringify(object);
            let a = document.createElement("a");
            let file = new Blob([jsonData], {type: 'text/plain'});
            a.href = URL.createObjectURL(file);
            a.download = fileName;
            a.click();
        }

        download(breedLookup, `breed${this.version}.json`);
        download(portraitLookup, `portrait${this.version}.json`);
    }

    export() : string {
        let tree: Tree = this.parent.lineageSnapshot;
        let version: number = this.version;
        let bLookup: Array<Array<string>> = Object.entries(this.bLookups[version]);
        let pLookup: Array<Array<string>> = Object.entries(this.pLookups[version]);

        let out = tree2string();
        return out;
        
        function tree2string() {
            let out: string = '';
            out += `${version}|`
            if(tree[0]!.gender === Gender.Male) out += `m`;
            else if (tree[0]!.gender === Gender.Female) out += `f`;
            else if (tree[0]!.gender === Gender.Undefined) out += `u`
            
            for (let i = 0; i < tree.length; i++) {
                let node = tree[i];
                let str = '|';
                if(node != null) {
                    let b = getIndexById(bLookup, node.breed.id);
                    let p = getIndexById(pLookup, node.portrait.id);
                    let n = node.name;
                    str += `${b}-${p}-${n}`
                }
                out += str
            }

            return out;
        }

        function getIndexById(lookup: Array<Array<string>>, id: string) : string {
            let index = '';
            lookup.forEach((tuple)=>{
                if(tuple[1] === id) index = tuple[0];
            });
            if(index !== '') return index;
            else throw new Error(`Parse Error: Could not find index for id ${id}`);
        }
    }

    import(importString: string) : Tree {
        let tree: Tree;
        let data: Array<string> = importString.split('|');
        let version: number;
        let rootGender: Gender;
        let bLookup: Lookup;
        let pLookup: Lookup;

        let vString = data.shift();
        let gString = data.shift();

        try { version = +vString! } 
        catch { throw new Error('Parse Error: Version number is invalid or unreadable.') }

        if(this.bLookups[version] != null) bLookup = this.bLookups[version];
        else throw new Error(`Lookup Error: Cannot find breed lookup for version ${version}`)

        if(this.pLookups[version] != null) pLookup = this.pLookups[version];
        else throw new Error(`Lookup Error: Cannot find portrait lookup for version ${version}`)
        
        if( gString != null && ['m','f','u'].includes(gString!)) {
            switch (gString) {
                case 'm': 
                    rootGender = Gender.Male; 
                    break;
                case 'f':
                    rootGender = Gender.Female;
                    break;
                case 'u':
                    rootGender = Gender.Undefined;
                    break;
            }
        } else throw new Error('Parse Error: 1g gender is invalid or unreadable.')

        tree = strings2tree();
        return this.parent.setTree(tree);

        function strings2tree() : Tree {
            let out = new Tree();
            for (let i = 0; i < data.length; i++) {
                if(data[i] !== '') {
                    let node: Array<string> = data[i].split('-');
                    let breed: Breed;
                    let portrait: Portrait;
                    let gender: Gender = (i === 0) ? rootGender : 
                        (i % 2 === 0) ? Gender.Female : Gender.Male;
                    let name = node[2]

                    let bid: string = getIdByIndex(bLookup, node[0]);
                    let pid: string = getIdByIndex(pLookup, node[1]);

                    if(Breeds.dict.get(bid) != null) breed = Breeds.dict.get(bid)!;
                    else throw new Error(`Lookup Error: Cannot find breed with id ${bid}.`)

                    if(Portraits.dict.get(pid) != null) portrait = Portraits.dict.get(pid)!;
                    else throw new Error(`Lookup Error: Cannot find portrait with id ${pid}.`)
                    
                    out.createNode(i,gender,breed,portrait);
                    out[i]!.name = name;
                }
            }
            return out;
        }

        function getIdByIndex(lookup: Lookup, index: string) : string {
            let id = lookup[index]
            if(id != null) return id;
            else throw new Error(`Lookup Error: Cannot lookup id with index ${index}`);
        }
    }
}