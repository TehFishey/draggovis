import DragonNode from "../../library/model/DragonNode";
import Portrait from "../../library/defines/Portrait";
import { DragonType } from "../../library/defines/Breed";
import { Gender, DragonState } from "../../library/defines/Dragon";

import { Portraits } from "../../defines/Defines";

/**
 * Helper functions intended for use in Controller classes. Deal with validating
 * and updating the properties of DragonNodes given the context of their Trees.
 */
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
     * For root node, returns current gender, or Female if current gender is illegal.
     * 
     * @remarks Intended as a followup to dragon lineage translations.
     * 
     * @param node DragonNode to check.
     * @returns Correct gender for DragonNode.
     */
    correctDragonGender(node: DragonNode) : Gender {
        if(node.index === 0) {
            if (node.gender === Gender.Undefined && (node.state !== DragonState.Neglected && node.state !== DragonState.Vampire))
                return Gender.Female;
            else return node.gender
        } else return (node.index % 2 === 0) ? Gender.Female : Gender.Male;
    },
    
    /**
     * Updates dragon's state based on its current position in tree. Clears illegal states.
     * 
     * @remarks Intended as a followup to dragon lineage translations.
     * 
     * @param node DragonNode to check
     * @returns Legal state for DragonNode
     */
    correctDragonState(node: DragonNode) : DragonState {
        if((node.state === DragonState.Neglected || node.state === DragonState.Vampire) && node.index !== 0) {
            return DragonState.Healthy;
        } 
        else if (node.state === DragonState.Vampire && node.breed.type !== DragonType.Dragon ) {
            return DragonState.Healthy;
        }
        return node.state;
    }
}