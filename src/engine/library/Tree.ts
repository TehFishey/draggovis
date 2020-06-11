import DragonNode from './DragonNode';
import Breed from './Breed';
import Portrait from './Portrait';
import MetaData from './MetaData';

export default class Tree extends Array<DragonNode | null> {
    
    warnings: Array<Set<string> | null>;

    constructor(props?: any) {
        super(props);
        this.warnings = [];
    }

    createNode(index: number, gender: string, breed: Breed, portrait:Portrait) : DragonNode {
        this[index] = new DragonNode(this, index, gender, breed, portrait);
        return this[index]!;
    }

    removeNode(index: number) {
        if (this[index]==null) return;
        
        function getBranch(branch: Array<DragonNode>, node : DragonNode | null) {
            if(node!=null) {
                branch.push(node);
                if(node.hasParents()) {
                    getBranch(branch, node.mother());
                    getBranch(branch, node.father());
                }
            }
        }

        let branch: Array<DragonNode> = []
        getBranch(branch, this[index]);

        branch.forEach((node: DragonNode) => {
            this[node.index] = null;
            this.warnings[node.index] = null;
        });
    }

    cloneTree() : Tree {
        let clone = new Tree();
        
        let n : DragonNode;
        this.forEach((node : DragonNode | null, index: number) => {
            if(node!=null) {
                n = clone.createNode(index, node.gender, node.breed, node.portrait);
                n.name = node.name;
                n.meta = new MetaData();
                n.meta.invalidData = node.meta.invalidData
                n.meta.warnings = new Map<string, string>(node.meta.warnings)
            }
        });

        clone.warnings = Tree.cloneWarnings(this.warnings);
        return clone;
    }

    replaceTree(newData : Tree) {
        this.slice(0,0);
        
        let n : DragonNode;
        newData.forEach((node : DragonNode | null, index: number) => {
            if(node!=null)
            if(node!=null) {
                n = this.createNode(index, node.gender, node.breed, node.portrait);
                n.name = node.name;
                n.meta = node.meta;
            }
        });

        this.warnings = Tree.cloneWarnings(newData.warnings)
    }

    static cloneWarnings(warnings: Array<Set<string> | null>) :  Array<Set<string> | null> {
        let newWarnings : Array<Set<string> | null> = [];

        warnings.forEach((set: Set<string> | null, i)=> {
            if(set != null) newWarnings[i] = new Set(set);
        })

        return newWarnings;
    }
};