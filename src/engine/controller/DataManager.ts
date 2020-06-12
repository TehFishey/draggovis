import { Breeds, Portraits, Rules } from "../data/Model";
import Tree from "../library/Tree";
import EditWindowController from "./controllers/EditWindowController"
import DragDropController from "./controllers/DragDropController"
import DragonNode from "../library/DragonNode";
import Rule from "../library/Rule";

export type protoCommand = (tree: Tree) => Array<number>;

export default class DataManager {
    private readonly lineageData : Tree;
    readonly editWindow : EditWindowController;
    readonly dragDrop : DragDropController;

    constructor() {
        this.lineageData = new Tree();
        this.lineageData.createNode(0,'Male',Breeds.dict.get('guardian-dragon')!,Portraits.dict.get('guardian-u')!);
        //for(let i = 0; i <4094; i++) { this.lineageData.createNode(i, (i%2===0) ? 'Male' : 'Female', Breeds.dict.get('guardian-dragon')!,Portraits.dict.get('guardian-u')!); }

        this.editWindow = new EditWindowController(this);
        this.dragDrop = new DragDropController(this);
    }

    updateTree(callback: protoCommand) : Tree {
        let changed = callback.apply(this, [this.lineageData]);
        this.validateWarnings(this.lineageData);
        this.validateChanges(this.lineageData, changed);
        return this.pushTree();
    }

    validateChanges(tree: Tree, changed: Array<number>) {
        changed.forEach((nodeIndex)=>{
            if(tree[nodeIndex] != null) {
                let node: DragonNode = tree[nodeIndex]!
                console.log(`checking all rules for node index: ${nodeIndex}`)
                Rules.checkAll(node);
            }
            else throw new Error(`Controller: node index ${nodeIndex} was marked as changed, but node no longer exists!`)
        });
    }

    validateWarnings(tree: Tree) {
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

    pushTree() : Tree {
        console.log(`Controller: Pushing new tree data.`)
        let out = this.lineageData.copyTree();
        console.log(`current:`);
        console.log(this.lineageData);
        console.log(`clone:`);
        console.log(out);

        return out;
    }
}
