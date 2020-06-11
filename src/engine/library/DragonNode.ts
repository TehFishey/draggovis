import Dragon from './Dragon';
import Breed from "./Breed";
import Portrait from "./Portrait";
import MetaData from './MetaData';
import Tree from './Tree';

export type nodeReference = (node: DragonNode) => any;

export default class DragonNode extends Dragon {
    index: number;
    tree: Tree;
    meta: MetaData;

    constructor(tree: Tree, index: number, gender: string, breed: Breed, portrait?: Portrait) {
        super(gender, breed, portrait)
        this.index = index;
        this.tree = tree;
        this.meta = new MetaData()
    }

    getMotherIndex() : number {
        return (this.index * 2) + 1;
    }

    getFatherIndex() : number {
        return this.index * 2 + 2;
    }

    getChildIndex() : number {
        return Math.floor(this.index / 2);
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
        let ci = this.getChildIndex();
        return this.tree[ci];
    }

    hasParents() : boolean {
        return(this.mother() != null && this.father() != null);
    }
};