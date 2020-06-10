import Condition from "../library/Condition";
import DragonNode from "../library/DragonNode";

type nodeReference = (node: DragonNode) => any;
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
    
    checkGender(gender: string, label?: string) {
        let tooltip = `'${label}' requires ${gender} gender.`;
        let validate = (dragon: DragonNode) => {return (dragon.gender === gender)};
        return new Condition(validate, tooltip);
    },

    checkFirstGeneration(label?: string) {
        let tooltip = `'${label}' requires dragon to be first generation.`;
        let validate = (dragon: DragonNode) => {return ((dragon.mother === undefined) &&
                                                        (dragon.father === undefined))};
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
            if((dragon.mother !== undefined) && (dragon.father !== undefined)) {
                return ids.includes(dragon.mother.portrait.id) || ids.includes(dragon.father.portrait.id);
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
            if((dragon.mother !== undefined) && (dragon.father !== undefined)) {
                return ids.includes(dragon.mother.breed.id) || ids.includes(dragon.father.breed.id);
            } else {
                return false;
            }};
        return new Condition(validate, tooltip);
    },

    /*
    checkFatherBreed(breedId, label) {
        return (dragon) => {return (dragon.father.breed.breedId === breedId)};
    },

    checkMotherBreed(breedId, label) {
        return (dragon) => {return (dragon.mother.breed.breedId === breedId)};
    },

    
    */

    
}