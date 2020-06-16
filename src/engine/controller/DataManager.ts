import { Breeds, Portraits, Rules } from "../data/Model";
import Tree from "../library/Tree";
import EditWindowController from "./controllers/EditWindowController"
import DragDropController from "./controllers/DragDropController"
import DragonNode from "../library/DragonNode";
import Rule from "../library/Rule";
import Stack from "../library/Stack";

export type protoCommand = (tree: Tree) => Array<number>;

export default class DataManager {
    private readonly lineageTree : Tree;
    private readonly undoStack : Stack;
    private readonly redoStack : Stack;
    private lineageSnapshot : Tree;
    readonly editWindow : EditWindowController;
    readonly dragDrop : DragDropController;

    constructor() {
        this.lineageTree = new Tree();
        this.lineageTree.createNode(0,'Male',Breeds.dict.get('guardian-dragon')!,Portraits.dict.get('guardian-u')!);
        //for(let i = 0; i <4094; i++) { this.lineageData.createNode(i, (i%2===0) ? 'Male' : 'Female', Breeds.dict.get('guardian-dragon')!,Portraits.dict.get('guardian-u')!); }
        this.lineageSnapshot = this.lineageTree.copyTree();

        this.undoStack = new Stack();
        this.redoStack = new Stack();

        this.editWindow = new EditWindowController(this);
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

    private validateChanges(tree: Tree, changed: Array<number>) {
        changed.forEach((nodeIndex)=>{
            if(tree[nodeIndex] != null) {
                let node: DragonNode = tree[nodeIndex]!
                console.log(`checking all rules for node index: ${nodeIndex}`)
                Rules.checkAll(node);
            }
            else throw new Error(`Controller: node index ${nodeIndex} was marked as changed, but node no longer exists!`)
        });
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
