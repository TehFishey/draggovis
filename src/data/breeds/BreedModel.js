import PortraitModel from '../portraits/PortraitModel';

export default class BreedModel {
    constructor(id, label, type, genders, portraits, reqs) {
        this.id = id || "undefined-breed";                      // Id/name for backend reference
        this.label = label || "Undefined Dragon";               // Label for frontend display
        this.type = type || "dragon";                           // Type of dragon. Used for breeding logic.
        this.genders = genders || "mf-mf";                      // Possible genders of dragon. Format: "{Genders possible for gen1}-{Genders possible for later gens}"
        this.portraits = portraits || {                         // Object containing all portraitObjects associated with this breed, formatted as {portrait-id : portraitObject}
            "blank-portrait" : new PortraitModel("blank-portrait", "Blank Portrait", "testDrag.png", true, () => {return true})
        };             
        this.reqs = reqs || function(parentA,parentB) {         // Validation function for child dragon. Checks parents to see if child is a valid offspring.
            let breedCheck = (parentA.breed === this.breed) || (parentB.breed === this.breed)
            let typeCheck = parentA.type === parentB.type;
            return (breedCheck && typeCheck);
        }
    }
};