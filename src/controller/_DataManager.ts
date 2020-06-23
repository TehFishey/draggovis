import IOManager from "./IOManager/IOManager";
import EditPanelController from "./controllers/EditPanelController"
import DragDropController from "./controllers/DragDropController"

import Tree from "../library/controller/Tree";
import DragonNode from "../library/controller/DragonNode";
import Rule from "../library/controller/Rule";
import Stack from "../library/controller/Stack";
import { Gender } from "../library/defines/Dragon";

import { Portraits, Breeds, Rules } from "../defines/Defines";

export type protoCommand = (tree: Tree) => Array<number>;

export default class DataManager {
    private readonly lineageTree : Tree;
    private readonly undoStack : Stack;
    private readonly redoStack : Stack;
    lineageSnapshot : Tree;
    readonly IOManager : IOManager;
    readonly editWindow : EditPanelController;
    readonly dragDrop : DragDropController;

    constructor() {
        this.lineageTree = new Tree();
        this.lineageTree.createNode(0,Gender.Male,Breeds.dict.get('guardian-dragon')!,Portraits.dict.get('guardian-u')!);
        //for(let i = 0; i <4094; i++) { this.lineageTree.createNode(i, (i%2===0) ? Gender.Male : Gender.Female, Breeds.dict.get('guardian-dragon')!,Portraits.dict.get('guardian-u')!); }
        this.lineageSnapshot = this.lineageTree.copyTree();

        this.undoStack = new Stack();
        this.redoStack = new Stack();

        this.IOManager = new IOManager(this, 0);
        this.editWindow = new EditPanelController(this);
        this.dragDrop = new DragDropController(this);
    }

    updateTree(callback: protoCommand) : Tree {
        this.undoStack.put(this.lineageSnapshot);
        let changed = callback.apply(this, [this.lineageTree]);

        this.updateWarnings(this.lineageTree);
        this.validateChanges(this.lineageTree, changed);

        this.lineageSnapshot = this.lineageTree.copyTree();
        return this.getSnapshot();
    }

    setTree(tree: Tree) {
        this.undoStack.put(this.lineageSnapshot);
        this.lineageTree.replaceTree(tree);
        this.validateChanges(this.lineageTree);

        this.lineageSnapshot = this.lineageTree.copyTree();
        return this.getSnapshot();
    }

    private validateChanges(tree: Tree, changed?: Array<number>) {
        if(changed != null) {
            changed.forEach((nodeIndex)=>{
                if(tree[nodeIndex] != null) {
                    let node: DragonNode = tree[nodeIndex]!
                    console.log(`checking all rules for node index: ${nodeIndex}`)
                    Rules.checkAll(node);
                }
                else throw new Error(`Controller Error: node index ${nodeIndex} was marked as changed, but node no longer exists!`)
            });
        } else {
            tree.forEach((node) =>{
                if(node != null) {
                    console.log(`checking all rules for node index: ${node.index}`)
                    Rules.checkAll(node);
                }
            });
        }
    }

    private updateWarnings(tree: Tree) {
        if(tree.warnings.length !== 0) {
            tree.warnings.forEach((idSet : Set<string> | null, index) => {
                if(idSet != null) {
                    if(tree[index] != null) {
                        let node: DragonNode = tree[index]!;
                        idSet.forEach((id) => {
                            let rule = Rules.dict.get(id)!;
                            if(rule.validate(node!)) Rule.removeWarning(node!, rule);
                        })
                    }
                    else throw new Error(`Controller: node index ${index} has warnings, but does not exist in tree!`)
                }
            });
        }
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

    undo() : Tree {
        let tree = this.undoStack.pull();
        if(tree != null) {
            this.redoStack.put(this.lineageSnapshot);
            this.lineageTree.replaceTree(tree);
            this.lineageSnapshot = tree;
        }
        return this.lineageSnapshot;
    }

    redo() : Tree {
        let tree = this.redoStack.pull();
        if(tree != null) {
            this.undoStack.put(this.lineageSnapshot);
            this.lineageTree.replaceTree(tree);
            this.lineageSnapshot = tree;
        }
        return this.lineageSnapshot;
    }
}
