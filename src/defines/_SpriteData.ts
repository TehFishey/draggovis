import Breed from '../library/defines/Breed';
import Sprite from '../library/defines/Sprite';
import BreedData from './_BreedData';
import SpritePair from '../library/defines/SpritePair';

export default class SpriteData {
    readonly pairs: Map<string, SpritePair>;
    readonly dict: Map<string, Sprite>;
    readonly arr: Array<Sprite>;

    constructor(breedData: BreedData) {
        this.dict = new Map<string, Sprite>();
        this.arr = new Array<Sprite>();

        breedData.arr.forEach((breed: Breed)=> {
            breed.sprites.forEach((value, key)=>{
                this.dict.set(key, value);
                this.arr.push(value);
            })
        })

        this.pairs = SpriteData.getSpritePairs(this.dict);

        console.log(`Model: Defining sprite data...`);
    };

    private static getSpritePairs(dict: Map<string, Sprite>) : Map<string, SpritePair> {
        let pairs: Map<string, SpritePair> = new Map<string, SpritePair>();
        let spriteIds: Array<string> = [...dict.keys()];

        spriteIds.forEach((id: string) => {
            if(id.endsWith("-m")) {
                let pid: string = id.slice(0,-2);
                if(spriteIds.includes(`${pid}-f`)) {
                    let male: Sprite = dict.get(`${pid}-m`)!
                    let female: Sprite = dict.get(`${pid}-f`)!
                    let label: string = (male.label.slice(0,-2) === female.label.slice(0,-2)) ? 
                        male.label.slice(0,-2) :
                        SpriteData.getFallbackLabel(dict, male, female);
                    pairs.set(pid, new SpritePair(male, female, pid, label));
                }
            }        
        });

        return pairs;
    }

    private static getFallbackLabel(dict: Map<string, Sprite>, male: Sprite, female: Sprite) : string {
        let dpIds: Array<string> = [...dict.keys()].filter((id: string) => {
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

        if(out !== '') return out;
        else throw new Error(`Defines: Failed to create fallback label for sprite pair: ${male.id}, ${female.id}`);
    }
};

