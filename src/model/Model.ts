import IOManager from "./managers/IOManager";
import RuleManager from "./managers/RuleManager";

import Tree from "../library/model/Tree";
import Stack from "../library/model/Stack";
import { Gender } from "../library/defines/Dragon";

import { Sprites, Breeds } from "../defines/Defines";

export type executionStrategy = (tree: Tree) => Array<number> | undefined;
export type executionOutput = { error? : string, data : Tree}

const IOVersion = 4;

export default class Model {
    readonly IOVersion : number;
    readonly IOManager : IOManager;
    readonly ruleManager : RuleManager;
    private readonly lineageTree : Tree;
    private readonly undoStack : Stack;
    private readonly redoStack : Stack;
    lineageSnapshot : Tree;
    
    constructor() {
        this.lineageTree = Model.getDefaultTree();
        this.lineageSnapshot = this.lineageTree.copyTree();

        this.undoStack = new Stack();
        this.redoStack = new Stack();

        this.IOVersion = IOVersion;
        this.IOManager = new IOManager(this.lineageTree, this.IOVersion);
        this.ruleManager = new RuleManager(this.lineageTree);
    }

    async updateTree(callback: executionStrategy) : Promise<executionOutput> {
        let changed : Array<number> | undefined;
        let error : string;
        
        this.undoStack.put(this.lineageSnapshot);
        
        try { 
            changed = callback.apply(this, [this.lineageTree]); 
            this.ruleManager.updateWarnings();
            this.ruleManager.validateNodes(changed);

            this.lineageSnapshot = this.lineageTree.copyTree();
            return {data : this.getSnapshot()};
        }
        catch(err) { 
            error = err.message; 
            this.lineageTree.replaceTree(this.lineageSnapshot);
            return {error : error, data : this.getSnapshot()};
        }
    }

    async undo() : Promise<executionOutput> {
        let tree = this.undoStack.pull();
        if(tree != null) {
            this.redoStack.put(this.lineageSnapshot);
            this.lineageTree.replaceTree(tree);
            this.lineageSnapshot = tree;
        }
        return {data : this.lineageSnapshot};
    }

    async redo() : Promise<executionOutput> {
        let tree = this.redoStack.pull();
        if(tree != null) {
            this.undoStack.put(this.lineageSnapshot);
            this.lineageTree.replaceTree(tree);
            this.lineageSnapshot = tree;
        }
        return {data :this.lineageSnapshot};
    }

    async reset() : Promise<executionOutput> {
        let newTree = Model.getDefaultTree();
        this.lineageTree.replaceTree(newTree);

        this.lineageSnapshot = this.lineageTree.copyTree();
        return {data : this.getSnapshot()};
    }

    private getSnapshot() : Tree {
        console.log(`Controller: Pushing new tree data.`)
        console.log(`current:`);
        console.log(this.lineageTree);
        console.log(`clone:`);
        console.log(this.lineageSnapshot);

        this.redoStack.clear();
        return this.lineageSnapshot;
    }

    static getDefaultTree() : Tree {
        let out = new Tree();
        out.createNode(0,Gender.Female,Breeds.dict.get('guardian-dragon')!,Sprites.dict.get('guardian-u')!);
        return out;
    }
}
