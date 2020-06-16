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

        let branch = this.getBranch(this[index]!, false);
        
        branch.forEach((node: DragonNode | null) => {
            if(node!=null) {
                this[node.index] = null;
                this.warnings[node.index] = null;
            }
        });
    }

    copyNode(node: DragonNode, index?: number) : DragonNode {
        index = (index != null) ? index : node.index;
        let n = this.createNode(index, node.gender, node.breed, node.portrait);
        n.name = node.name;

        return n;
    }

    copyTree() : Tree {
        let clone = new Tree();
        
        let n : DragonNode;
        this.forEach((node : DragonNode | null) => {
            if(node!=null) {
                n = clone.copyNode(node);
                n.meta.invalidData = node.meta.invalidData
                n.meta.warnings = new Map<string, string>(node.meta.warnings)
            }
        });

        clone.warnings = Tree.cloneWarnings(this.warnings);
        return clone;
    }

    replaceTree(newData : Tree) {
        this.length = 0;
        
        let n : DragonNode;
        newData.forEach((node : DragonNode | null) => {
            if(node!=null) {
                n = this.copyNode(node)
                n.meta.invalidData = node.meta.invalidData
                n.meta.warnings = new Map<string, string>(node.meta.warnings)
            }
        });

        this.warnings = Tree.cloneWarnings(newData.warnings)
    }

    getBranch(root: DragonNode, keepStructure: boolean) : Array<DragonNode | null> {

        function iterate(branch: Array<DragonNode | null>, node : DragonNode | null, index: number=0) {
            if(node!=null) {
                (keepStructure) ? branch[index] = node : branch.push(node)
                if(node.hasParents()) {
                    iterate(branch, node.father(), index*2+1);
                    iterate(branch, node.mother(), index*2+2);
                }
            }
        }

        let branch: Array<DragonNode | null> = [];
        iterate(branch, root);

        return branch;
    }

    setBranch(root: DragonNode, branch: Array<DragonNode | null>) {
        
        function iterate(tree: Tree, treeIndex: number, branchIndex: number) {
            if(branch[branchIndex]!=null) {
                tree.copyNode(branch[branchIndex]!, treeIndex)
                if(branch[branchIndex*2+1] != null && branch[branchIndex*2+2] != null) {
                    iterate(tree, treeIndex*2+1, branchIndex*2+1);
                    iterate(tree, treeIndex*2+2, branchIndex*2+2);
                }
            }
        }

        

        let ti = root.index;
        let bi = 0;

        this.removeNode(ti);
        iterate(this, ti, bi);
    }
    
    static cloneWarnings(warnings: Array<Set<string> | null>) :  Array<Set<string> | null> {
        let newWarnings : Array<Set<string> | null> = [];

        warnings.forEach((set: Set<string> | null, i)=> {
            if(set != null) newWarnings[i] = new Set(set);
        })

        return newWarnings;
    }

    
};