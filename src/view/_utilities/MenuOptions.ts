import { menuOption } from "../general/select/Select";

import { Templates, Breeds, Portraits } from "../../defines/Defines";
import { Gender, DragonState } from "../../library/defines/Dragon";
import LineageTemplate from "../../library/view/LineageTemplate";
import Breed from "../../library/defines/Breed";
import Portrait from "../../library/defines/Portrait";
import DragonNode from "../../library/model/DragonNode";
import PortraitPair from "../../library/defines/PortraitPair";

/**
 * Helper functions intended for use by React components. Deal with creating sets of
 * 'option' objects for easy digestion by react-select components.
 */
export default {
    
    /**
     * Returns a set of menu options for a react-select menu, with each entry corresponding
     * to an existing Portrait object from Defines.
     * @param ids Set of valid Portrait Ids for select menu. Defaults to all.
     * @param pool Pool to select Portraits from. Defaults to Portraits.dict.
     */
    portraitOptions(ids? : Set<string> | Array<string>, pool? : Map<string, Portrait>) : Array<menuOption> {
        if(pool == null) pool = Portraits.dict;
        let out : Array<menuOption> = [];

        if(ids != null) {
            ids.forEach((pId: string) => {
                out.push({
                    value : pId,
                    label : pool!.get(pId)!.label
                });
            });
        } else {
            pool.forEach((p: Portrait) => {
                out.push({
                    value : p.id,
                    label : p.label
                });
            });
        }
        return out
    },

    portraitPairOptions(ids : Array<string>) : Array<menuOption> {
        let pairs: Array<PortraitPair> = [];
        let out : Array<menuOption> = [];

        ids.forEach((id: string) => {
            if(id.endsWith("-u")) {
                out.push({
                    value : id,
                    label : Portraits.dict.get(id)!.label
                });
            } else {
                let pairId = id.slice(0,-2);
                if(id.endsWith("-m") && ids.includes(`${pairId}-f`))
                    pairs.push(Portraits.pairs.get(pairId)!)
            }  
        });

        pairs.forEach((pair: PortraitPair)=> {
            out.push({
                value : pair.male.id,
                label : pair.label
            });
        })

        if(out.length === 0) {
            ids.forEach((id: string) => {
                out.push({
                    value : id,
                    label : Portraits.dict.get(id)!.label
                });
            });
        }
        return out;
    },
    
    /**
     * Returns a set of menu options for a react-select menu, with each entry corresponding
     * to an existing Breed object from Defines.
     * @param ids Set of valid Breed Ids for select menu. Defaults to all.
     * @param pool Pool to select Breed from. Defaults to Breeds.dict.
     */
    breedOptions(ids? : Set<string> | Array<string>, pool? : Map<string, Breed>) : Array<menuOption> {
        if(pool == null) pool = Breeds.dict;
        let out : Array<menuOption> = [];
        if(ids != null) {
            ids.forEach((bId: string) => {
                out.push({
                    value : bId,
                    label : pool!.get(bId)!.label
                });
            });
        } else {
            pool.forEach((b: Breed) => {
                out.push({
                    value : b.id,
                    label : b.label
                });
            });
        }
        return out
    },
    
    /**
     * Returns a set of menu options for a react-select menu, with each entry corresponding
     * to an existing LineageTemplate from Defines.
     */
    templateOptions() : Array<menuOption> {
        let out : Array<menuOption> = [];
        
        Templates.arr.forEach((t: LineageTemplate) => {
            out.push({value: t.id, label: t.label})
        });
        
        return out
    },

    /**
     * Returns a set of menu options for a react-select menu, with each entry corresponding
     * to a valid Gender type for a DragonNode.
     * 
     * @remarks
     * This function is specifically intended for use by the {EditPanel.tsx} react component.
     * 
     * @param ids Set of valid Breed Ids for select menu. Defaults to all.
     * @param pool Pool to select Breed from. Defaults to Breeds.dict.
     */
    nodeGenderOptions(node: DragonNode) : Array<menuOption> {
        let out = [];

        if(node.index !== 0) 
            return [{value: node.gender, label: node.gender}];
        else {
            out.push(
                {value: Gender.Male, label: Gender.Male}, 
                {value: Gender.Female, label: Gender.Female}
            );
            if (node.state === DragonState.Vampire || node.state === DragonState.Neglected) {
                out.push(
                    {value: Gender.Undefined, label: Gender.Undefined}
                );
            }
            return out;
        }
    }
}