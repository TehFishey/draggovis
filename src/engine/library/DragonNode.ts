import Dragon from './Dragon';
import Breed from "./Breed";
import Portrait from "./Portrait";
import MetaData from './MetaData';

export default class DragonNode extends Dragon {
    father?: DragonNode;
    mother?: DragonNode;
    meta: MetaData;

    constructor(gender: string, breed: Breed, portrait: Portrait) {
        super(gender, breed, portrait)
        this.father = undefined;
        this.mother = undefined;
        this.meta = new MetaData()
    }
};