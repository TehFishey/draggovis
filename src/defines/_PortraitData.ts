import Breed from '../library/defines/Breed';
import Portrait from '../library/defines/Portrait';
import BreedData from './_BreedData';
import PortraitPair from '../library/defines/PortraitPair';

export default class PortraitData {
    readonly pairs: Map<string, PortraitPair>;
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

        this.pairs = PortraitData.getPortraitPairs(this.dict);

        console.log(`Model: Defining portrait data...`);
    };

    private static getPortraitPairs(dict: Map<string, Portrait>) : Map<string, PortraitPair> {
        let pairs: Map<string, PortraitPair> = new Map<string, PortraitPair>();
        let portraitIds: Array<string> = [... dict.keys()];

        portraitIds.forEach((id: string) => {
            if(id.endsWith("-m")) {
                let pid: string = id.slice(0,-2);
                if(portraitIds.includes(`${pid}-f`)) {
                    let male: Portrait = dict.get(`${pid}-m`)!
                    let female: Portrait = dict.get(`${pid}-f`)!
                    let label: string = (male.label.slice(0,-2) === female.label.slice(0,-2)) ? 
                        male.label.slice(0,-2) :
                        PortraitData.getFallbackLabel(dict, male, female);
                    pairs.set(pid, new PortraitPair(male, female, pid, label));
                }
            }        
        });

        return pairs;
    }

    private static getFallbackLabel(dict: Map<string, Portrait>, male: Portrait, female: Portrait) : string {
        let dpIds: Array<string> = [... dict.keys()].filter((id: string) => {
            return (id.split('-')[0] === male.id.split('-')[0]);
        });
        let pairCount: number = 0;
        let out: string = ''

        dpIds.forEach((id: string) => {
            if(id.endsWith("-m") && dpIds.includes(`${id.slice(0,-2)}-f`)) {
                pairCount += 1;
                if(id === male.id)
                    out += `Type ${pairCount}`
            }
        });

        if(out != '') return out;
        else throw new Error(`Defines: Failed to create fallback label for portrait pair: ${male.id}, ${female.id}`);
    }
};

