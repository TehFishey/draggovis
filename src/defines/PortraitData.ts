import Breed from '../library/defines/Breed';
import Portrait from '../library/defines/Portrait';
import BreedData from './BreedData';

export default class PortraitData {
    readonly dict: Map<string, Portrait>;
    readonly arr: Array<Portrait>;

    constructor(breedData: BreedData) {
        this.dict = new Map<string, Portrait>();
        this.arr = new Array<Portrait>();

        breedData.arr.forEach((breed: Breed)=> {
            breed.portraits.forEach((value, key)=>{
                this.dict.set(key, value);
                this.arr.push(value);
            })
        })

        console.log(`Model: Defining portrait data...`);
    };
};

