export default class DragonModel {
    constructor(breed, name, type, genders, reqs) {
        this.breed = breed || "undefined-breed";
        this.name = name || "Undefined Dragon"
        this.type = type || "dragon";
        this.genders = genders || "mf-mf";
        this.reqs = reqs || function(parentA,parentB) {
            breedCheck = (parentA.breed === this.breed) || (parentB.breed === this.breed)
            typeCheck = parentA.type === parentB.type;
            return (breedCheck && typeCheck);
        }
    }
};