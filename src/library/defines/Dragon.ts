import Breed from "./Breed";
import Sprite from "./Sprite";

export enum Gender {
    Undefined = 'Undefined',
    Male = 'Male',
    Female = 'Female'
}

export enum DragonState {
    Healthy = 'Healthy',
    Dead = 'Dead',
    Undead = 'Undead',
    Vampire = 'Vampire',
    Neglected = 'Neglected'
}

export default class Dragon {
    name: string;
    gender: Gender;
    breed: Breed;
    sprite: Sprite;
    state: DragonState;

    constructor(gender: Gender, breed: Breed, sprite?: Sprite, state?: DragonState) {
        this.name = "";
        this.gender = gender || Gender.Undefined;
        this.breed = breed || undefined;
        this.sprite = sprite || new Sprite("undefined-sprite", "Undefined Sprite", false);
        this.state = state || DragonState.Healthy;
    }
};