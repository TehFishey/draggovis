import Breed from "./Breed";
import Portrait from "./Portrait";

export default class Dragon {
    name: string;
    gender: string;
    breed: Breed;
    portrait: Portrait;

    constructor(gender: string, breed: Breed, portrait?: Portrait) {
        this.name = "";
        this.gender = gender || "undefined";
        this.breed = breed || undefined;
        this.portrait = portrait || new Portrait("undefined-portrait", "Undefined Portrait", false);
    }
};