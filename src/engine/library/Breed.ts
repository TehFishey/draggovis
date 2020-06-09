import Portrait from './Portrait';

export default class BreedModel {
    constructor(id, label, type, genders, portraits, condition) {
        this.id = id || "undefined-breed";                      // Id/name for backend reference
        this.label = label || "Undefined Dragon";               // Label for frontend display
        this.type = type || "dragon";                           // Type of dragon. Used for breeding logic.
        this.genders = genders || "mf-mf";                      // Possible genders of dragon. Format: "{Genders possible for gen1}-{Genders possible for later gens}"
        this.portraits = portraits || {                         // Object containing all portraits associated with this breed, formatted as {portrait-id : portrait}
            "blank-portrait" : new Portrait("blank-portrait", "Blank Portrait", "testDrag.png", true, () => {return true})
        };             
        this.condition = condition || BreedModel.defaultCondition(this.id, this.genders, this.label)      // Validation function
    }

    static defaultCondition(id, genders, label) {
        let tooltip = `Invalid gender or parent breeds for ${label}.`;
        let validate = (dragon) => {
            let breedCheck = true;
            let genderCheck = true;
            let isFirstGen = (dragon.mother === undefined || dragon.father === undefined);

            if(!isFirstGen) {
                breedCheck = (dragon.mother.breed.id === id || dragon.father.breed.id === id)
            }

            if(genders !== "mf-mf") {
                if(isFirstGen) {
                    let genderString = dragon.breed.genders.split("-")[0];
                    genderCheck = (
                        (genderString.includes('m') && dragon.gender === "Male") || 
                        (genderString.includes('f') && dragon.gender === "Female")
                    );
                } else {
                    let genderString = dragon.breed.genders.split("-")[1];
                    genderCheck = (
                        (genderString.includes('m') && dragon.gender === "Male") || 
                        (genderString.includes('f') && dragon.gender === "Female")
                    );
                }
            }
            return (breedCheck && genderCheck);
        };

        return {validate : validate, tooltip : tooltip};
    }
};