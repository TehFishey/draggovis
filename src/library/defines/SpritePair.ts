import Sprite from "./Sprite";

export default class SpritePair {
    readonly male: Sprite;
    readonly female: Sprite;
    readonly id: string;
    readonly label: string;
    
    constructor(male: Sprite, female: Sprite, id: string, label: string) {
        this.male = male;
        this.female = female;
        this.id = id;
        this.label = label;
    }
}