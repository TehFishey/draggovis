import {neglectedSprites, neglectedCondition} from './swaps/NeglectedSprites';
import {vampireSprites, vampireCondition} from './swaps/VampireSprites';
import {zombieSprites, zombieCondition} from './swaps/ZombieSprites';
import {deadSprites, deadCondition} from './swaps/GraveSprites';

import Sprite from '../library/defines/Sprite';
import { DragonState } from '../library/defines/Dragon';
import Condition from '../library/defines/Condition';


export default class SwapData {
    readonly conds: Map<DragonState, Condition>
    readonly dict: Map<DragonState, Array<Sprite>>;
    readonly arr: Array<Array<Sprite>>;

    constructor() {
        this.arr = [deadSprites, zombieSprites, vampireSprites, neglectedSprites];
        this.dict = new Map<DragonState, Array<Sprite>>();
        this.dict.set(DragonState.Dead, this.arr[0]);
        this.dict.set(DragonState.Undead, this.arr[1]);
        this.dict.set(DragonState.Vampire, this.arr[2]);
        this.dict.set(DragonState.Neglected, this.arr[3]);

        this.conds = new Map<DragonState, Condition>();
        this.conds.set(DragonState.Dead, deadCondition);
        this.conds.set(DragonState.Undead, zombieCondition);
        this.conds.set(DragonState.Vampire, vampireCondition);
        this.conds.set(DragonState.Neglected, neglectedCondition);

        console.log(`Model: Defining alternate sprite data...`);
    };
};

