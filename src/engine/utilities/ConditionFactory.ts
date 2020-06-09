export default {   
    and(label, conditions) {
        let tooltips = [];
        let rules = [];

        conditions.forEach((condition, index) => {
            tooltips[index] = condition.tooltip;
            rules[index] = condition.validate;
        })
        
        let tooltip = `'${label}' requires `;
        tooltips.forEach((string) => {
            let sub = string.split('requires ')[1];
            sub = sub.substr(0, sub.lastIndexOf('.'));
            tooltip += sub+' AND ';
        })
        tooltip = tooltip.substr(0, tooltip.lastIndexOf(' AND '))+'.';

        let validate = (dragon) => {
            return rules.every((func)=>{
                return func(dragon);
            })
        }

        return {validate : validate, tooltip : tooltip};
    },

    or(label, conditions) {
        let tooltips = [];
        let rules = [];

        conditions.forEach((condition, index) => {
            tooltips[index] = condition.tooltip;
            rules[index] = condition.validate;
        })
        
        let tooltip = `'${label}' requires `;
        tooltips.forEach((string) => {
            let sub = string.split('requires ')[1];
            sub = sub.substr(0, sub.lastIndexOf('.'));
            tooltip += sub+' OR ';
        })
        tooltip = tooltip.substr(0, tooltip.lastIndexOf(' OR '))+'.';

        let validate = (dragon) => {
            return rules.some((func)=>{
                return func(dragon);
            })
        }

        return {validate : validate, tooltip : tooltip};
    },
    
    checkGender(gender, label) {
        let tooltip = `'${label}' requires ${gender} gender.`;
        let validate = (dragon) => {return (dragon.gender === gender)};
        return {validate : validate, tooltip : tooltip}
    },

    checkFirstGeneration(label) {
        let tooltip = `'${label}' requires dragon to be first generation.`;
        let validate = (dragon) => {return ((dragon.mother === undefined) &&
                                            (dragon.father === undefined))};
        return {validate : validate, tooltip : tooltip}
    },

    checkParentPortraitIds(portraits, label) {
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

        let validate = (dragon) => {
            if((dragon.mother !== undefined) && (dragon.father !== undefined)) {
                return ids.includes(dragon.mother.portrait.id) || ids.includes(dragon.father.portrait.id);
            } else {
                return false;
            }};
        return {validate : validate, tooltip : tooltip}
    },

    checkParentBreedIds(breeds, label) {
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

        let validate = (dragon) => {
            if((dragon.mother !== undefined) && (dragon.father !== undefined)) {
                return ids.includes(dragon.mother.breed.id) || ids.includes(dragon.father.breed.id);
            } else {
                return false;
            }};
        return {validate : validate, tooltip : tooltip}
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