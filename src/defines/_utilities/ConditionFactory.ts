import Condition, { CompoundCondition, Operator } from "../../library/defines/Condition";
import { DragonType, DragonSubType } from "../../library/defines/Breed";
import { Gender } from "../../library/defines/Dragon";

import DragonNode, {nodeReference} from "../../library/controller/DragonNode";

type pseudoObject = {id: String, label: String}

export default {   
    /*
    and(label: string, conditions: Array<Condition>) {
        let tooltips: Array<String> = [];
        let rules: Array<nodeReference> = [];

        conditions.forEach((condition, index) => {
            tooltips[index] = condition.warning;
            rules[index] = condition.validate;
        })
        
        let tooltip = `'${label}' requires `;
        tooltips.forEach((string) => {
            let sub = string.split('requires ')[1];
            sub = sub.substr(0, sub.lastIndexOf('.'));
            tooltip += sub+' AND ';
        })
        tooltip = tooltip.substr(0, tooltip.lastIndexOf(' AND '))+'.';

        let validate = (dragon: DragonNode) => {
            return rules.every((func)=>{
                return func(dragon);
            })
        }

        return new Condition(validate, tooltip);
    },

    or(label: string, conditions: Array<Condition>) {
        let tooltips: Array<String> = [];
        let rules: Array<nodeReference> = [];

        conditions.forEach((condition, index) => {
            tooltips[index] = condition.warning;
            rules[index] = condition.validate;
        })
        
        let tooltip = `'${label}' requires `;
        tooltips.forEach((string) => {
            let sub = string.split('requires ')[1];
            sub = sub.substr(0, sub.lastIndexOf('.'));
            tooltip += sub+' OR ';
        })
        tooltip = tooltip.substr(0, tooltip.lastIndexOf(' OR '))+'.';

        let validate = (dragon: DragonNode) => {
            return rules.some((func)=>{
                return func(dragon);
            })
        }

        return new Condition(validate, tooltip);
    },
    */
    
    and(label: string, conditions: Array<Condition>) : Condition {
        return new CompoundCondition(conditions, Operator.AND, label);
    },

    or(label: string, conditions: Array<Condition>) : Condition {
        return new CompoundCondition(conditions, Operator.OR, label);
    },
    
    checkGender(gender: Gender, label?: string) : Condition {
        let validate = (dragon: DragonNode) => {return (dragon.gender === gender)};
        let description = `${gender} gender.`
        return new Condition(validate, description, label);
    },

    checkType(type: DragonType, subType?: DragonSubType, label?: string) : Condition {
        let validate : nodeReference;
        let description : string;
        

        if(subType != null) {
            description = `dragon type '${type}' and sub-type '${subType}'.`;
            validate = (dragon: DragonNode) => { return (dragon.breed.type === type && dragon.breed.subType === subType) };
        } else {
            description = `requires dragon type '${type}'.`;
            validate = (dragon: DragonNode) => { return (dragon.breed.type === type) };
        }

        return new Condition(validate, description, label);
    },

    checkFirstGeneration(label?: string) : Condition {
        let validate = (dragon: DragonNode) => {return !dragon.hasParents()};
        let description = `first generation dragon.`
        return new Condition(validate, description, label);
    },

    checkParentPortraitIds(portraits: Array<pseudoObject>, label?: string) : Condition {
        let ids = portraits.map((portrait)=>{return portrait.id});
        let labels = portraits.map((portrait)=>{return portrait.label});
        
        let validate = (dragon: DragonNode) => {
            if(dragon.hasParents()) {
                return ids.includes(dragon.mother()!.portrait.id) 
                    || ids.includes(dragon.father()!.portrait.id);
            } else return false;
        };

        let description = `a parent with `
        if(labels.length < 2) {
            description += `portrait: '${labels[0]}'.`
        } else {
            description += `one of the following portraits:`
            labels.forEach((label)=>{description += ` '${label}',`})
            description = description.substr(0, description.lastIndexOf(','))+'.';
        }
        return new Condition(validate, description, label);
    },

    checkParentBreedIds(breeds: Array<pseudoObject>, label?: string) : Condition {
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

    alwaysTrue(label?: string) : Condition {
        let validate = (dragon: DragonNode) => {return true};
        let description = `is always valid.`;

        return new Condition(validate, description, label);
    },
}