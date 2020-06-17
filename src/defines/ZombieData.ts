import Breed from '../library/defines/Breed';
import Portrait from '../library/defines/Portrait';
import BreedData from './BreedData';

export default class ZombieData {
    readonly dict: Map<string, Portrait>;
    readonly arr: Array<Portrait>;

    constructor(breedData: BreedData) {
        this.dict = new Map<string, Portrait>();
        this.arr = new Array<Portrait>(...[
            
            new Portrait('zombie-drake', "Drake", false),
            new Portrait('zombie-eastern', "Eastern Dragon", false),
            new Portrait('zombie-seaSerpent', "Sea Serpent", false),
            new Portrait('zombie-lindwurm', "Lindwurm", false),
            new Portrait('zombie-pygmy', "Pygmy Dragon", false),
            new Portrait('zombie-pygmyEastern', "Eastern Pygmy", false),
            new Portrait('zombie-pygmyLindwurm', "Pygmy Lindwurm", false),
            new Portrait('zombie-pygmyWyrm', "Pygmy Wyrm", false),
            new Portrait('zombie-pygmyWyvern', "Pygmy Wyvern", false),
            new Portrait('zombie-th', "Two-Headed Dragon", false),
            new Portrait('zombie-thEastern', "Two-Headed Eastern Dragon", false),
            new Portrait('zombie-thLindwurm', "Two-Headed Lindwurm", false),
            new Portrait('zombie-thSeaSerpent', "Two-Headed Sea Serpent", false),
            new Portrait('zombie-wingless', "Wingless Dragon", false),
            new Portrait('zombie-western', "Dragon", false),
            new Portrait('zombie-wyrm', "Wyrm", false),
            new Portrait('zombie-wyvern', "Wyvern", false)
        ]);

        breedData.arr.forEach((breed: Breed)=> {
            breed.portraits.forEach((value, key)=>{
                this.dict.set(key, value);
                this.arr.push(value);
            })
        })

        console.log(`Model: Defining zombie portrait data...`);
    };
};

