import neglectedPortraits from './swaps/NeglectedPortraits';
import vampirePortraits from './swaps/VampirePortraits';
import zombiePortraits from './swaps/ZombiePortraits';
import gravePortraits from './swaps/GravePortraits';

import Portrait from '../library/defines/Portrait';
import { DragonState } from '../library/defines/Dragon';


export default class SwapData {
    readonly dict: Map<DragonState, Array<Portrait>>;
    readonly arr: Array<Array<Portrait>>;

    constructor() {
        this.arr = [gravePortraits, zombiePortraits, vampirePortraits, neglectedPortraits];
        this.dict = new Map<DragonState, Array<Portrait>>();
        this.dict.set(DragonState.Dead, this.arr[0]);
        this.dict.set(DragonState.Undead, this.arr[1]);
        this.dict.set(DragonState.Vampire, this.arr[2]);
        this.dict.set(DragonState.Neglected, this.arr[3]);

        console.log(`Model: Defining alternate portrait data...`);
    };
};

