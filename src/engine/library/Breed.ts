import Portrait from './Portrait';
import DragonNode from './DragonNode';
import Condition from './Condition';

export default class Breed {
    id: string;
    label: string;
    type: string;
    genders: string;
    portraits: Object;
    condition: Condition;

    constructor(id: string, label: string, type?: string, genders?: string, portraits?: Object, condition?: Condition) {
        this.id = id;                                           // Id/name for backend reference
        this.label = label;                                     // Label for frontend display
        this.type = type || "dragon";                           // Type of dragon. Used for breeding logic.
        this.genders = genders || "mf-mf";                      // Possible genders of dragon. Format: "{Genders possible for gen1}-{Genders possible for later gens}"
        this.portraits = portraits || {                         // Object containing all portraits associated with this breed, formatted as {portrait-id : portrait}
            "blank-portrait" : new Portrait("blank-portrait", "Blank Portrait", true, {
                validate: (dragon: DragonNode) => {return true;},
                tooltip: `${this.label} is always valid.`
            })
        };             
        this.condition = condition || Breed.defaultCondition(this.id, this.genders, this.label)      // Validation function
    }

    static defaultCondition(id: string, genders: string, label: string) {
        let tooltip = `Invalid gender or parent breeds for ${label}.`;
        let validate = (dragon: DragonNode) => {
            let breedCheck = true;
            let genderCheck = true;
            let isFirstGen = (dragon.mother === undefined || dragon.father === undefined);

            if(!isFirstGen) {
                breedCheck = (dragon.mother?.breed.id === id || dragon.father?.breed.id === id)
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
}