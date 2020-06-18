import Condition from "../../library/defines/Condition";
import Breed, { DragonType, DragonSubType } from "../../library/defines/Breed";
import { Gender } from "../../library/defines/Dragon";

import DragonNode, {nodeReference} from "../../library/controller/DragonNode";
import Portrait from "../../library/defines/Portrait";
import { Portraits } from "../../defines/Defines";



export default {   
    /**
     * Returns the first portrait from an array which passes validation for a DragonNode. 
     * If no portraits pass validation, the first array element is returned.
     * 
     * @param node DragonNode to check validation against.
     * @param portraits Portraits to evaluate
     * @returns Validated portrait
     */
    getDefaultPortrait(node: DragonNode, portraits: Array<Portrait>) : Portrait {
        let validPortrait;

        portraits.some((portrait) => {
            if(portrait.condition.validate(node) && portrait.isDefault) {
                validPortrait = portrait;
                return true;
            }
            return false;
        })

        return (validPortrait != null) ? validPortrait : portraits[0];
    },

    /**
     * Finds the correct dimorphic portrait for a DragonNode, given its current
     * portrait and gender.
     * 
     * @remarks Intended as a followup to dragon gender-swaps.
     * 
     * @param node DragonNode to check.
     * @returns Correct variant of DragonNode's portrait.
     */
    correctPortraitGender(node: DragonNode) : Portrait {
        let pid = node.portrait.id;
        let portrait;
        if(pid.endsWith("-m") && node.gender === Gender.Female) {
            let npid = pid.slice(0,-1)+"f"
            portrait = Portraits.dict.get(npid);
        }
        else if(pid.endsWith("-f") && node.gender === Gender.Male) {
            let npid = pid.slice(0,-1)+"m"
            portrait = Portraits.dict.get(npid);
        }

        return (portrait != null) ? portrait : node.portrait;
    },

    /**
     * Finds the correct gender for a DragonNode based on its position in tree.
     * Returns current gender from root node (which can be any gender).
     * 
     * @param node DragonNode to check.
     * @returns Correct gender for DragonNode.
     */
    correctDragonGender(node: DragonNode) : Gender {
        let gender: Gender = (node.index === 0) ? node.gender : 
            (node.index % 2 === 0) ? Gender.Female : Gender.Male;
        return gender;
    }     
}