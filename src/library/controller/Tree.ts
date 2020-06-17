import DragonNode from './DragonNode';
import Breed from '../defines/Breed';
import Portrait from '../defines/Portrait';
import { Gender, DragonState } from '../defines/Dragon';

export default class Tree extends Array<DragonNode | null> {
    
    warnings: Array<Set<string> | null>;

    constructor(props?: any) {
        super(props);
        this.warnings = [];
    }

    createNode(index: number, gender: Gender, breed: Breed, portrait:Portrait, state?:DragonState) : DragonNode {
        this[index] = new DragonNode(this, index, gender, breed, portrait, state);
        return this[index]!;
    }


    removeNode(index: number) {
        if (this[index]==null) return;

        let branch = this.getBranch(index, false);
        
        branch.forEach((node: DragonNode | null) => {
            if(node!=null) {
                this[node.index] = null;
                this.warnings[node.index] = null;
            }
        });
    }

    copyNode(node: DragonNode, index?: number) : DragonNode {
        index = (index != null) ? index : node.index;
        let n = this.createNode(index, node.gender, node.breed, node.portrait, node.state);
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

    getBranch(index: number, keepStructure: boolean) : Array<DragonNode | null> {
        let branch: Array<DragonNode | null> = [];
        let nodeToBranch = (t: Tree, ti: number, b: Array<DragonNode | null>, bi: number) => {
            (keepStructure) ? branch[bi] = t[ti] : branch.push(t[ti]);
        }

        Tree.iterate(this, index, branch, 0, nodeToBranch);
        return branch;
    }

    setBranch(index: number, branch: Array<DragonNode | null>) {
        let nodeFromBranch = (t: Tree, ti: number, b: Array<DragonNode | null>, bi: number) => {
            t.copyNode(b[bi]!, ti);
        }

        this.removeNode(index);
        Tree.iterate(this, index, branch, 0, nodeFromBranch);
    }

    static iterate(tree: Tree, treeIndex: number, branch: Array<DragonNode | null>, branchIndex: number, callback: (tree: Tree, treeIndex: number, branch: Array<DragonNode | null>, branchIndex: number) => any) {
        if(branch[branchIndex]!=null || tree[treeIndex]!=null) {
            callback(tree, treeIndex, branch, branchIndex);
            if((branch[branchIndex*2+1] != null && branch[branchIndex*2+2] != null) ||
              (tree[treeIndex*2+1] != null && tree[treeIndex*2+2] != null)) { 
                this.iterate(tree, treeIndex*2+1, branch, branchIndex*2+1, callback);
                this.iterate(tree, treeIndex*2+2, branch, branchIndex*2+2, callback);
            }
        }
    }
    
    static cloneWarnings(warnings: Array<Set<string> | null>) :  Array<Set<string> | null> {
        let newWarnings : Array<Set<string> | null> = [];

        warnings.forEach((set: Set<string> | null, i)=> {
            if(set != null) newWarnings[i] = new Set(set);
        })

        return newWarnings;
    }

    
};