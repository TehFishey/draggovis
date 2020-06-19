import Condition from "../../library/defines/Condition";
import { DragonType, DragonSubType, Affinity } from "../../library/defines/Breed";
import { Gender } from "../../library/defines/Dragon";

import DragonNode, {nodeReference} from "../../library/controller/DragonNode";


type pseudoObject = {id: String, label: String}

export default {   
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
    
    checkGender(gender: Gender, label?: string) {
        let tooltip = `'${label}' requires ${gender} gender.`;
        let validate = (dragon: DragonNode) => {return (dragon.gender === gender)};
        return new Condition(validate, tooltip);
    },

    checkFirstGeneration(label?: string) {
        let tooltip = `'${label}' requires first generation dragon.`;
        let validate = (dragon: DragonNode) => {
            return !dragon.hasParents()
        };
        return new Condition(validate, tooltip);
    },

    checkParentPortraitIds(portraits: Array<pseudoObject>, label?: String) {
        let ids = portraits.map((portrait)=>{return portrait.id});
        let labels = portraits.map((portrait)=>{return portrait.label});
        
        let tooltip = `'${label}' requires a parent with `
        if(labels.length < 2) {
            tooltip += `portrait '${labels[0]}'.`
        } else {
            tooltip += `one of the following portraits:`
            labels.forEach((label)=>{tooltip += ` '${label}',`})
            tooltip = tooltip.substr(0, tooltip.lastIndexOf(','))+'.';
        }

        let validate = (dragon: DragonNode) => {
            if(dragon.hasParents()) {
                return ids.includes(dragon.mother()!.portrait.id) 
                || ids.includes(dragon.father()!.portrait.id);
            } else {
                return false;
            }};
        return new Condition(validate, tooltip);
    },

    checkParentBreedIds(breeds: Array<pseudoObject>, label?: string) {
        let ids = breeds.map((breed)=>{return breed.id});
        let labels = breeds.map((breed)=>{return breed.label});
        
        let tooltip = `'${label}' requires a parent with `
        if(labels.length < 2) {
            tooltip += `breed '${labels[0]}'.`
        } else {
            tooltip += `one of the following breeds:`
            labels.forEach((label)=>{tooltip += ` '${label}',`})
            tooltip = tooltip.substr(0, tooltip.lastIndexOf(','))+'.';
        }

        let validate = (dragon: DragonNode) => {
            if(dragon.hasParents()) {
                return ids.includes(dragon.mother()!.breed.id) 
                || ids.includes(dragon.father()!.breed.id);
            } else {
                return false;
            }};
        return new Condition(validate, tooltip);
    },

    checkTypes(type: DragonType, subType?: DragonSubType, label?: string) {
        let tooltip : string;
        let validate : nodeReference;
        if(subType != null) {
            tooltip = `'${label}' requires dragon type '${type}' and sub-type '${subType}'.`;
            validate = (dragon: DragonNode) => {
                return (dragon.breed.type === type && dragon.breed.subType === subType);
            };
        } else {
            tooltip = `'${label}' requires dragon type '${type}'.`;
            validate = (dragon: DragonNode) => {
                return (dragon.breed.type === type);
            };
        }
        return new Condition(validate, tooltip);
    },

    alwaysTrue(label?: string) {
        let tooltip = `${label} is always valid.`;
        let validate = (dragon: DragonNode) => {return true;};

        return new Condition(validate, tooltip);
    }        
}