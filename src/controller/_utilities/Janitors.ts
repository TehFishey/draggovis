import DragonNode from "../../library/model/DragonNode";
import Sprite from "../../library/defines/Sprite";
import { DragonType } from "../../library/defines/Breed";
import { Gender, DragonState } from "../../library/defines/Dragon";

import { Sprites } from "../../defines/Defines";

/**
 * Helper functions intended for use in Controller classes. Deal with validating
 * and updating the properties of DragonNodes given the context of their Trees.
 */
export default {   
    /**
     * Returns the first sprite from an array which passes validation for a DragonNode. 
     * If no sprites pass validation, the first array element is returned.
     * 
     * @param node DragonNode to check validation against.
     * @param sprites Sprites to evaluate
     * @returns Validated sprite
     */
    getDefaultSprite(node: DragonNode, sprites: Array<Sprite>) : Sprite {
        let validSprite;

        sprites.some((sprite) => {
            if(sprite.condition.validate(node) && sprite.isDefault) {
                validSprite = sprite;
                return true;
            }
            return false;
        })

        return (validSprite != null) ? validSprite : sprites[0];
    },

    /**
     * Finds the correct dimorphic sprite for a DragonNode, given its current
     * sprite and gender.
     * 
     * @remarks Intended as a followup to dragon gender-swaps.
     * 
     * @param node DragonNode to check.
     * @returns Correct variant of DragonNode's sprite.
     */
    correctSpriteGender(node: DragonNode) : Sprite {
        let pid = node.sprite.id;
        let sprite;
        if(pid.endsWith("-m") && node.gender === Gender.Female) {
            let npid = pid.slice(0,-1)+"f"
            sprite = Sprites.dict.get(npid);
        }
        else if(pid.endsWith("-f") && node.gender === Gender.Male) {
            let npid = pid.slice(0,-1)+"m"
            sprite = Sprites.dict.get(npid);
        }

        return (sprite != null) ? sprite : node.sprite;
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