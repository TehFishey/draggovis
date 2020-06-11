import { Breeds, Portraits } from "../data/Model";
import Tree from "../library/Tree";
import EditWindowController from "./controllers/EditWindow"


export default class Engine {
    private readonly lineageData : Tree;
    readonly editWindow : EditWindowController;

    constructor() {
        this.lineageData = new Tree();
        this.lineageData.createNode(0,'Male',Breeds.dict.get('guardian-dragon')!,Portraits.dict.get('guardian-u')!);
        
        this.editWindow = new EditWindowController(this);
        console.log(this.lineageData);
    }

    updateTree(callback: (tree: Tree)=>void) : Tree {
        callback.apply(this, [this.lineageData]);
        return this.getTree();
    }

    getTree() : Tree {        
        console.log(`Controller: Updating tree data.`)
        console.log(this.lineageData);
        return this.lineageData.cloneTree()
    }
}