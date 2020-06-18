import neglectedPortraits from './swaps/NeglectedPortraits';
import vampirePortraits from './swaps/VampirePortraits';
import zombiePortraits from './swaps/ZombiePortraits';
import gravePortraits from './swaps/GravePortraits';

import { DragonState } from '../library/defines/Dragon';
import Portrait from '../library/defines/Portrait';

export default class SwapData {
    readonly dict: Map<DragonState, Array<Portrait>>;
    readonly arr: Array<Array<Portrait>>;
    readonly graveSwap: Array<Portrait>;

    constructor() {
        this.arr = [gravePortraits, zombiePortraits, vampirePortraits, neglectedPortraits];
        this.dict = new Map<DragonState, Array<Portrait>>();
        this.graveSwap = this.arr[0];
        this.dict.set(DragonState.Zombie, this.arr[1]);
        this.dict.set(DragonState.Vampire, this.arr[2]);
        this.dict.set(DragonState.Neglected, this.arr[3]);

        console.log(`Model: Defining alternate portrait data...`);
    };
};

