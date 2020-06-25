import DragonNode from './DragonNode';
import Breed from '../defines/Breed';
import Portrait from '../defines/Portrait';
import { Gender, DragonState } from '../defines/Dragon';

export default class Tree extends Array<DragonNode | null> {
    /**
     * Array for persisting rule validation status. Index is the index of
     * a corresponding DragonNode in this Tree; value is a set of ids for all
     * Rules that have failed or not yet resolved validation on that node.
     */
    warnings: Array<Set<string> | null>;

    constructor(props?: any) {
        super(props);
        this.warnings = [];
    }

    /**
     * Creates a new DragonNode with this Tree as its container.
     * @param index Index of node within the tree.
     * @param gender Gender of dragon.
     * @param breed Breed of dragon.
     * @param portrait Portrait of dragon.
     * @param state DragonState of dragon. Defaults to Healthy.
     */
    createNode(index: number, gender: Gender, breed: Breed, portrait:Portrait, state?:DragonState) : DragonNode {
        this[index] = new DragonNode(this, index, gender, breed, portrait, state);
        return this[index]!;
    }

    /**
     * Recursively removes a DragonNode and all of its 'parents' (child nodes) from this Tree.
     * Also nulls all internal references to removed nodes.
     * @param index Index of node to remove
     */
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

    /**
     * Makes a copy of a DragonNode and places it within this Tree, updating all
     * internal references.
     * @param node DragonNode to copy
     * @param index Index to copy node to. Defaults to same index as target.
     */
    copyNode(node: DragonNode, index?: number) : DragonNode {
        index = (index != null) ? index : node.index;
        let n = this.createNode(index, node.gender, node.breed, node.portrait, node.state);
        n.name = node.name;

        return n;
    }

    /**
     * Returns a deep copy of this Tree and all constituent parts.
     */
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

    /**
     * Replaces all contents of this Tree them with a deep copy of target Tree.
     * @param newData Replacement Tree.
     */
    replaceTree(newData : Tree) : Tree {
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
        return this;
    }

    /**
     * Iterates through this Tree from a given start point, returning an array of
     * all sub-DragonNodes.
     * @param index Index of start point.
     * @param keepStructure If true, output will retain parent-child index relationships
     * between nodes, rebasing Tree[index] onto Branch[0].
     */
    getBranch(index: number, keepStructure: boolean) : Array<DragonNode | null> {
        let branch: Array<DragonNode | null> = [];
        let nodeToBranch = (t: Tree, ti: number, b: Array<DragonNode | null>, bi: number) => {
            (keepStructure) ? branch[bi] = t[ti] : branch.push(t[ti]);
        }

        Tree.iterate(this, index, branch, 0, nodeToBranch);
        return branch;
    }

    /**
     * Removes a given node and all sub-nodes from this Tree, replacing them with the contents of
     * a branch array.
     * 
     * @remark This method expects an array with the same kind of parent-child index relationships used
     * by Tree. It is intended for use with with Tree.getBranch()
     * 
     * @param index Index of start point.
     * @param branch Formatted branch-array to insert.
     */
    setBranch(index: number, branch: Array<DragonNode | null>) {
        let nodeFromBranch = (t: Tree, ti: number, b: Array<DragonNode | null>, bi: number) => {
            t.copyNode(b[bi]!, ti);
        }

        this.removeNode(index);
        Tree.iterate(this, index, branch, 0, nodeFromBranch);
    }

    /**
     * Gets the total length of a Tree array up to (and inclusive of) the specified generation.
     * 
     * @remark Generation is inverted vs. what's shown in view. The root node is at gen=1; final layer is gen=12.
     * 
     * @param gen generation
     */
    static generation(gen: number) : number {
        if(gen < 1) return 0;

        // DC Generations expand as a geometric sequence with common factor 2.
        // (eg. each generation is 2^gen larger than the previous)
        else return gS(1,2,gen-1);

        /**
         * Finds the nth element of geometric sequence Σ(ar^n).
         * @param a first term of the geometric series.
         * @param r common factor of the geometric series.
         * @param n element index.
         */
        function gS(a: number, r: number, n: number) : number {
            let g = 0;
            // Geometric sequence: (a + ar + ar^2 + ar^3 ...)
            for(let i=1; i < n+1; i++)
                g += gs(a,r,i);
            return g
        }

        /**
         * Finds the nth element of geometric series ar^n.
         * @param a first term of the geometric series.
         * @param r common factor of the geometric series.
         * @param n element index.
         */
        function gs(a: number, r: number, n: number) : number {
            // Geometric series: [a, ar, ar^2, ar^3 ...]
            return a*Math.pow(r,n-1);
        }
    }

    /**
     * Gets all DragonNodes included in the specified generational layer of a tree.
     * 
     * @remark Generation is inverted vs. what's shown in view. The root node is at gen=1; final layer is gen=12.
     * 
     * @param tree tree containing nodes
     * @param gen generation
     * 
     * @example 
     * // returns all non-null nodes in tree.slice[3,7];
     * getNodesByGen(tree, 3) 
     */
    static getNodesByGen(tree: Tree, gen: number) : Array<DragonNode> {
        let start: number = Tree.generation(gen-1);
        let stop: number = Tree.generation(gen);
        let out: Array<DragonNode> = tree.slice(start,stop)
            .filter((value: DragonNode | null) => {return value != null}) as Array<DragonNode>;
        return out;
    }

    /**
     * Simultaneously iterates through a Tree and a DragonNode array from parent-index to child-index.
     * Executes a callback on each iteration where either Tree OR array value is not null.
     * @param tree Tree to iterate through.
     * @param treeIndex Index of tree to begin iteration from.
     * @param branch Array to iterate through.
     * @param branchIndex Index of branch to begin iteration from
     * @param callback Function to execute on each iteration. Expects all of the above arguments.
     */
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
    
    /**
     * Returns a deep copy of a Tree.warnings array.
     * @param warnings Warnings array to copy.
     */
    static cloneWarnings(warnings: Array<Set<string> | null>) :  Array<Set<string> | null> {
        let newWarnings : Array<Set<string> | null> = [];

        warnings.forEach((set: Set<string> | null, i)=> {
            if(set != null) newWarnings[i] = new Set(set);
        })

        return newWarnings;
    }

    
};