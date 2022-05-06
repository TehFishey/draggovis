import Dragon, { Gender, DragonState } from '../defines/Dragon';
import Breed from "../defines/Breed";
import Sprite from "../defines/Sprite";
import MetaData from '../defines/MetaData';
import Tree from './Tree';

export type nodeReference = (node: DragonNode) => any;

export default class DragonNode extends Dragon {
    index: number;
    tree: Tree;
    meta: MetaData;

    constructor(tree: Tree, index: number, gender: Gender, breed: Breed, sprite?: Sprite, state?: DragonState) {
        super(gender, breed, sprite, state)
        this.index = index;
        this.tree = tree;
        this.meta = new MetaData()
    }

    getMotherIndex() : number {
        return ((this.index * 2) + 2);
    }

    getFatherIndex() : number {
        return ((this.index * 2) + 1);
    }

    getChildIndex() : number {
        return Math.ceil((this.index / 2) - 1);
    }

    mother() : DragonNode | null {
        let mi = this.getMotherIndex();
        return this.tree[mi];
    }

    father() : DragonNode | null {
        let fi = this.getFatherIndex();
        return this.tree[fi];
    }

    child() : DragonNode | null {
        if(this.index !== 0) {
            let ci = this.getChildIndex();
            return this.tree[ci];
        }
        else throw new Error(`Model: Attempted to get child node of tree root!`)
    }

    hasParents() : boolean {
        return(this.mother() != null && this.father() != null);
    }
};