export default {
    or(conditions) {
        return (dragon) => {
            return conditions.some((condition) => {return condition(dragon)});
        }
    },

    and(conditions) {
        return (dragon) => {
            return conditions.every((condition) => {return condition(dragon)});
        }
    },

    checkGender(gender) {
        return (dragon) => {return (dragon.gender === gender)};
    },

    checkFatherBreed(breedId) {
        return (dragon) => {return (dragon.father.breed.breedId === breedId)};
    },

    checkMotherBreed(breedId) {
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

    checkFirstGeneration() {
        return (dragon) => {return ((dragon.mother === undefined) &&
                                    (dragon.father === undefined))};
    }
}