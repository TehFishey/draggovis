import Portrait from "./Portrait";

export default class PortraitPair {
    readonly male: Portrait;
    readonly female: Portrait;
    readonly id: string;
    readonly label: string;
    
    constructor(male: Portrait, female: Portrait, id: string, label: string) {
        this.male = male;
        this.female = female;
        this.id = id;
        this.label = label;
    }
}