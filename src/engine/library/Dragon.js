export default class Dragon {
    constructor(gender, breed, portrait) {
        this.name = "";
        this.gender = gender || "Undefined";
        this.breed = breed || undefined;
        this.portrait = portrait || undefined;
        this.father = undefined;
        this.mother = undefined;
    }
};