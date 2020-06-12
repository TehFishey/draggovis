import DataManager from "../DataManager";
import Tree from "../../library/Tree";

export default class DragDropController {
    readonly parent: DataManager;

    constructor(parent: DataManager) {
        this.parent = parent;
    }

    copyOne(dragNodeIndex: number, dropNodeIndex: number) : Tree {
        return this.parent.updateTree((tree: Tree) => {

            return [];
        })
    }

    swapOne(dragNodeIndex: number, dropNodeIndex: number) : Tree {
        return this.parent.updateTree((tree: Tree) => {

            return [];
        })
    }

    copySet(dragNodeIndex: number, dropNodeIndex: number) : Tree {
        return this.parent.updateTree((tree: Tree) => {

            return [];
        })
    }

    swapSet(dragNodeIndex: number, dropNodeIndex: number) : Tree {
        return this.parent.updateTree((tree: Tree) => {

            return [];
        })
    }
}
