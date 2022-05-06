import Condition, { CompoundCondition, Operator } from "../../library/defines/Condition";
import Breed, { DragonType, DragonSubType } from "../../library/defines/Breed";
import Sprite from "../../library/defines/Sprite";
import { Gender } from "../../library/defines/Dragon";

import DragonNode, {nodeReference} from "../../library/model/DragonNode";

// Sprite- or Breed- like object (containing data necessary for validation)
type pseudoObject = {id: String, label: String}

/**
 * Byukder functions for quickly creating Condition objects for use in validation. Produced Conditions
 * check for many common validation patterns used in DC. Also provides tools for creating multivariate or
 * compound conditions when necessary.
 */
export default {   
    
    /**
     * Factory function; creates a compound condition which returns true if all 
     * provided conditions are true.
     * @param label Frontend label of object condition references
     * @param conditions Conditions to check
     */
    and(label: string, conditions: Array<Condition>) : Condition {
        return new CompoundCondition(conditions, Operator.AND, label);
    },

    /**
     * Factory function; creates a compound condition which returns true if any 
     * provided condition is true.
     * @param label Frontend label of object condition references
     * @param conditions Conditions to check
     */
    or(label: string, conditions: Array<Condition>) : Condition {
        return new CompoundCondition(conditions, Operator.OR, label);
    },
    
    /**
     * Factory function; creates a condition which returns true/false based
     * on subject's gender.
     * @param gender Valid gender for object condition references
     * @param label Frontend label of object condition references
     */
    checkGender(gender: Gender, label?: string) : Condition {
        let validate = (dragon: DragonNode) => {return (dragon.gender === gender)};
        let description = `${gender} gender.`
        return new Condition(validate, description, label);
    },

    /**
     * Factory function; creates a condition which returns true/false on
     * subject's Type (Dragon, Drake, etc.) and SubType (Wyrm, Lindwyrm, etc.).
     * @param type Valid DragonType for object condition references
     * @param subType Valid DragonSubType for object condition references. Ignored if blank.
     * @param label Frontend label of object condition references
     */
    checkType(type: DragonType, subType?: DragonSubType, label?: string) : Condition {
        let validate : nodeReference;
        let description : string;

        if(subType != null) {
            description = `dragon type '${type}' and sub-type '${subType}'.`;
            validate = (dragon: DragonNode) => { return (dragon.breed.type === type && dragon.breed.subType === subType) };
        } else {
            description = `dragon type '${type}'.`;
            validate = (dragon: DragonNode) => { return (dragon.breed.type === type) };
        }

        return new Condition(validate, description, label);
    },

    /**
     * Factory function; creates a condition which returns true only if 
     * subject is first-generation (has no parents).
     * @param label Frontend label of object condition references
     * @param invert If check should be inverted (true if subject is not first-gen)
     */
    checkFirstGeneration(label?: string, invert?: boolean) : Condition {
        let validate : nodeReference;
        let description : string;
        if(!invert) {
            validate = (dragon: DragonNode) => {return !dragon.hasParents()};
            description = `first generation dragon.`
        } else {
            validate = (dragon: DragonNode) => {return dragon.hasParents()};
            description = `non-first generation dragon.`
        }
        return new Condition(validate, description, label);
    },

    /**
     * Factory function; creates a condition which returns true only if 
     * subject is last-generation (has no children).
     * @param label Frontend label of object condition references
     * @param invert If check should be inverted (true if subject is not last-gen)
     */
    checkLastGeneration(label?: string, invert?: boolean) : Condition {
        let validate : nodeReference;
        let description : string;
        if(!invert) {
            validate = (dragon: DragonNode) => {return dragon.index === 0};
            description = `last generation dragon.`
        } else {
            validate = (dragon: DragonNode) => {return dragon.index !== 0};
            description = `non-last generation dragon.`
        }
        
        return new Condition(validate, description, label);
    },

    /**
     * Factory function; creates a condition which returns true/false based on
     * its parent's current Sprites.
     * @param sprites Valid parental sprites (label and Id) for object condition references
     * @param label Frontend label of object condition references
     */
    checkParentSpriteIds(sprites: Array<pseudoObject | Sprite>, label?: string) : Condition {
        let ids = sprites.map((sprite)=>{return sprite.id});
        let labels = sprites.map((sprite)=>{return sprite.label});
        
        let validate = (dragon: DragonNode) => {
            if(dragon.hasParents()) {
                return ids.includes(dragon.mother()!.sprite.id) 
                    || ids.includes(dragon.father()!.sprite.id);
            } else return false;
        };

        let description = `a parent with `
        if(labels.length < 2) {
            description += `sprite: '${labels[0]}'.`
        } else {
            description += `one of the following sprites:`
            labels.forEach((label)=>{description += ` '${label}',`})
            description = description.substr(0, description.lastIndexOf(','))+'.';
        }
        return new Condition(validate, description, label);
    },

    /**
     * Factory function; creates a condition which returns true/false based on
     * its parent's current Breeds.
     * @param breeds Valid parental breeds (label and Id) for object condition references
     * @param label Frontend label of object condition references
     */
    checkParentBreedIds(breeds: Array<pseudoObject | Breed>, label?: string) : Condition {
        let ids = breeds.map((breed)=>{return breed.id});
        let labels = breeds.map((breed)=>{return breed.label});
        
        let validate = (dragon: DragonNode) => {
            if(dragon.hasParents()) {
                return ids.includes(dragon.mother()!.breed.id) 
                || ids.includes(dragon.father()!.breed.id);
            } else return false;
        };
        
        let description = `a parent with `
        if(labels.length < 2) {
            description += `breed: '${labels[0]}'.`
        } else {
            description += `one of the following breeds:`
            labels.forEach((label)=>{description += ` '${label}',`})
            description = description.substr(0, description.lastIndexOf(','))+'.';
        }
        
        return new Condition(validate, description, label);
    },

    /**
     * Factory function; creates a condition which is always true true.
     * @param label Frontend label of object condition references
     */
    alwaysTrue(label?: string) : Condition {
        let validate = (dragon: DragonNode) => {return true};
        let description = `is always valid.`;

        return new Condition(validate, description, label);
    },
}