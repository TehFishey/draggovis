import {neglectedPortraits, neglectedCondition} from './swaps/NeglectedPortraits';
import {vampirePortraits, vampireCondition} from './swaps/VampirePortraits';
import {zombiePortraits, zombieCondition} from './swaps/ZombiePortraits';
import {deadPortraits, deadCondition} from './swaps/GravePortraits';

import Portrait from '../library/defines/Portrait';
import { DragonState } from '../library/defines/Dragon';
import Condition from '../library/defines/Condition';


export default class SwapData {
    readonly conds: Map<DragonState, Condition>
    readonly dict: Map<DragonState, Array<Portrait>>;
    readonly arr: Array<Array<Portrait>>;

    constructor() {
        this.arr = [deadPortraits, zombiePortraits, vampirePortraits, neglectedPortraits];
        this.dict = new Map<DragonState, Array<Portrait>>();
        this.dict.set(DragonState.Dead, this.arr[0]);
        this.dict.set(DragonState.Undead, this.arr[1]);
        this.dict.set(DragonState.Vampire, this.arr[2]);
        this.dict.set(DragonState.Neglected, this.arr[3]);

        this.conds = new Map<DragonState, Condition>();
        this.conds.set(DragonState.Dead, deadCondition);
        this.conds.set(DragonState.Undead, zombieCondition);
        this.conds.set(DragonState.Vampire, vampireCondition);
        this.conds.set(DragonState.Neglected, neglectedCondition);

        console.log(`Model: Defining alternate portrait data...`);
    };
};

