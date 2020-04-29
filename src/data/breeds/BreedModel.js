export default class BreedModel {
    constructor(breedId, name, type, genders, reqs) {
        this.breedId = breedId || "undefined-breed";            // Internal breed definition/name
        this.name = name || "Undefined Dragon";             // Label for external display
        this.type = type || "dragon";                       // Type of dragon. Used for breeding logic.
        this.genders = genders || "mf-mf";                  // Possible genders of dragon. Format: "{Genders possible for gen1}-{Genders possible for later gens}"
        this.reqs = reqs || function(parentA,parentB) {     // Validation function for child dragon. Checks parents to see if child is a valid offspring.
            let breedCheck = (parentA.breed === this.breed) || (parentB.breed === this.breed)
            let typeCheck = parentA.type === parentB.type;
            return (breedCheck && typeCheck);
        }
    }
};