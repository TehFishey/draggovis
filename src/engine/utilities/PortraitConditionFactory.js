export default {
    and(conditions, label) {
        let tooltips = [];
        let rules = [];

        conditions.forEach((condition, index) => {
            tooltips[index] = condition.tooltip;
            rules[index] = condition.validate;
        })
        
        let tooltip = `${label} requires dragon `;
        tooltips.forEach((string) => {
            let sub = string.split('requires dragon ')[1];
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
    
    checkGender(gender, label) {
        let tooltip = `${label} requires dragon to be ${gender}.`;
        let validate = (dragon) => {return (dragon.gender === gender)};
        return {validate : validate, tooltip : tooltip}
    },

    checkFirstGeneration(label) {
        let tooltip = `${label} requires dragon to be first generation.`;
        let validate = (dragon) => {return ((dragon.mother === undefined) &&
                                            (dragon.father === undefined))};
        return {validate : validate, tooltip : tooltip}
    }

    /*
    checkFatherBreed(breedId, label) {
        return (dragon) => {return (dragon.father.breed.breedId === breedId)};
    },

    checkMotherBreed(breedId, label) {
        return (dragon) => {return (dragon.mother.breed.breedId === breedId)};
    },

    checkParentBreeds(breedId1, breedId2) {
        return (dragon) => {
            let check1 = (
                (dragon.mother.breed.breedId === breedId1) ||
                (dragon.father.breed.breedId === breedId1)
            )
            if(breedId2 !== undefined) {
                let check2 = (
                    (dragon.mother.breed.breedId === breedId2) ||
                    (dragon.father.breed.breedId === breedId2)
                )
                return (check1 && check2);
            }
            return check1
        }  
    },
    */

    
}