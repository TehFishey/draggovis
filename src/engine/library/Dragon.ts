import Breed from "./Breed";
import Portrait from "./Portrait";

export enum Gender {
    Undefined = 'Undefined',
    Male = 'Male',
    Female = 'Female'
}

export default class Dragon {
    name: string;
    gender: Gender;
    breed: Breed;
    portrait: Portrait;

    constructor(gender: Gender, breed: Breed, portrait?: Portrait) {
        this.name = "";
        this.gender = gender || Gender.Undefined;
        this.breed = breed || undefined;
        this.portrait = portrait || new Portrait("undefined-portrait", "Undefined Portrait", false);
    }
};