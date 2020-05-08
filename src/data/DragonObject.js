export default class DragonObject {
    constructor(gender) {
        this.name = "";
        this.gender = gender || "Undefined";
        this.breedObject = undefined;
        this.portraitObject = undefined;
        this.father = undefined;
        this.mother = undefined;
    }
};