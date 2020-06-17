import Breed from "./Breed";
import Portrait from "./Portrait";

export enum Gender {
    Undefined = 'Undefined',
    Male = 'Male',
    Female = 'Female'
}

export enum DragonState {
    Healthy = 'Healthy',
    Dead = 'Dead',
    Vampire = 'Vampire',
    Sick = 'Sick'
}

export default class Dragon {
    name: string;
    gender: Gender;
    breed: Breed;
    portrait: Portrait;
    state: DragonState;

    constructor(gender: Gender, breed: Breed, portrait?: Portrait, state?: DragonState) {
        this.name = "";
        this.gender = gender || Gender.Undefined;
        this.breed = breed || undefined;
        this.portrait = portrait || new Portrait("undefined-portrait", "Undefined Portrait", false);
        this.state = state || DragonState.Healthy;
    }

    getPortraitImage(thumb:boolean=true) {
        
    }
};