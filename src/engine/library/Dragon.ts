import MetaData from './MetaData';

export default class Dragon {
    constructor(gender, breed, portrait) {
        this.name = "";
        this.gender = gender || "undefined";
        this.breed = breed || undefined;
        this.portrait = portrait || undefined;
        this.father = undefined;
        this.mother = undefined;
        this.meta = new MetaData()
    }
};