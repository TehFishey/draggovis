import IOManager from "./IOManager/IOManager";
import EditPanelController from "./controllers/EditPanelController"
import DragDropController from "./controllers/DragDropController"

import Tree from "../library/controller/Tree";
import Stack from "../library/controller/Stack";
import { Gender } from "../library/defines/Dragon";

import { Portraits, Breeds } from "../defines/Defines";
import TemplatePanelController from "./controllers/TemplatePanelController";
import ImportPanelController from "./controllers/ImportPanelController";
import RuleManager from "./RuleManager/RuleManager";

export type executionStrategy = (tree: Tree) => Array<number> | undefined;
export type executionOutput = { error? : string, data : Tree}

export default class DataManager {
    private readonly lineageTree : Tree;
    private readonly undoStack : Stack;
    private readonly redoStack : Stack;
    lineageSnapshot : Tree;
    readonly IOManager : IOManager;
    readonly ruleManager : RuleManager;
    readonly editWindow : EditPanelController;
    readonly templateWindow : TemplatePanelController;
    readonly importWindow : ImportPanelController;
    readonly dragDrop : DragDropController;

    constructor() {
        this.lineageTree = DataManager.getDefaultTree();
        this.lineageSnapshot = this.lineageTree.copyTree();

        this.undoStack = new Stack();
        this.redoStack = new Stack();

        this.IOManager = new IOManager(this, 0);
        this.ruleManager = new RuleManager();
        this.editWindow = new EditPanelController(this);
        this.templateWindow = new TemplatePanelController(this);
        this.importWindow = new ImportPanelController(this);
        this.dragDrop = new DragDropController(this);
    }

    async updateTree(callback: executionStrategy) : Promise<executionOutput> {
        let changed : Array<number> | undefined;
        let error : string;
        
        this.undoStack.put(this.lineageSnapshot);
        
        try { 
            changed = callback.apply(this, [this.lineageTree]); 
            this.ruleManager.updateWarnings(this.lineageTree);
            this.ruleManager.validateNodes(this.lineageTree, changed);

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
        let newTree = DataManager.getDefaultTree();
        this.lineageTree.replaceTree(newTree);

        this.lineageSnapshot = this.lineageTree.copyTree();
        return {data : this.getSnapshot()};
    }

    getSnapshot() : Tree {
        console.log(`Controller: Pushing new tree data.`)
        console.log(`current:`);
        console.log(this.lineageTree);
        console.log(`clone:`);
        console.log(this.lineageSnapshot);

        this.redoStack.clear();
        return this.lineageSnapshot;
    }

    private static getDefaultTree() : Tree {
        let out = new Tree();
        out.createNode(0,Gender.Female,Breeds.dict.get('guardian-dragon')!,Portraits.dict.get('guardian-u')!);
        return out;
    }
}
