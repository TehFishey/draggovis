import DataManager from "../_DataManager";
import ControllerUtils from "../_utilities/Utilities"

import Tree from "../../library/controller/Tree";
import DragonNode from "../../library/controller/DragonNode";

export default class DragDropController {
    readonly parent: DataManager;

    constructor(parent: DataManager) {
        this.parent = parent;
    }

    copyOne(dragNodeIndex: number, dropNodeIndex: number, validate: boolean=true) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            let dragon = tree[dragNodeIndex];
            if(dragon != null) {
                let n = tree.copyNode(dragon, dropNodeIndex);
                
                n.gender = ControllerUtils.correctDragonGender(n);
                n.portrait = ControllerUtils.correctPortraitGender(n);
                if (validate) n.state = ControllerUtils.correctDragonState(n);
            }
            return [dropNodeIndex];
        })
    }

    swapOne(dragNodeIndex: number, dropNodeIndex: number, validate: boolean=true) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            let dragged = tree[dragNodeIndex];
            let dropped = tree[dropNodeIndex];
            if(dragged != null && dropped != null){
                let n = tree.copyNode(dragged, dropNodeIndex);
                n.gender = ControllerUtils.correctDragonGender(n);
                n.portrait = ControllerUtils.correctPortraitGender(n);
                if (validate) n.state = ControllerUtils.correctDragonState(n);

                n = tree.copyNode(dropped, dragNodeIndex);
                n.gender = ControllerUtils.correctDragonGender(n);
                n.portrait = ControllerUtils.correctPortraitGender(n);
                if (validate) n.state = ControllerUtils.correctDragonState(n);

                return [dragNodeIndex, dropNodeIndex];
            }
            return [];
        })
    }

    copySet(dragNodeIndex: number, dropNodeIndex: number, validate: boolean=true) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            let dragged = tree[dragNodeIndex];
            let dropped = tree[dropNodeIndex];
            if(dragged != null && dropped != null){
                let branch = tree.getBranch(dragNodeIndex, true);
                let n : DragonNode;

                tree.setBranch(dropNodeIndex, branch);
                n = tree[dropNodeIndex]!

                n.gender = ControllerUtils.correctDragonGender(n);
                n.portrait = ControllerUtils.correctPortraitGender(n);
                if (validate) n.state = ControllerUtils.correctDragonState(n);

                return tree.getBranch(dropNodeIndex, false).reduce(
                    function(result, node) {
                        if(node!=null) result.push(node.index);
                        return result;
                    }, Array<number>()
                );
            }
            return [];
        })
    }

    swapSet(dragNodeIndex: number, dropNodeIndex: number, validate: boolean=true) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            let dragged = tree[dragNodeIndex];
            let dropped = tree[dropNodeIndex];
            if(dragged != null && dropped != null){
                let dragBranch = tree.getBranch(dragNodeIndex, true);
                let dropBranch = tree.getBranch(dropNodeIndex, true);
                let n : DragonNode;

                tree.setBranch(dropNodeIndex, dragBranch);
                n = tree[dropNodeIndex]!;
                n.gender = ControllerUtils.correctDragonGender(n);
                n.portrait = ControllerUtils.correctPortraitGender(n);
                if (validate) n.state = ControllerUtils.correctDragonState(n);

                tree.setBranch(dragNodeIndex, dropBranch);
                n = tree[dragNodeIndex]!;
                n.gender = ControllerUtils.correctDragonGender(n);
                n.portrait = ControllerUtils.correctPortraitGender(n);
                if (validate) n.state = ControllerUtils.correctDragonState(n);

                let i1 = tree.getBranch(dragNodeIndex, false).reduce(
                    function(result, node) {
                        if(node!=null) result.push(node.index);
                        return result;
                    }, Array<number>()
                );

                let i2 = tree.getBranch(dropNodeIndex, false).reduce(
                    function(result, node) {
                        if(node!=null) result.push(node.index);
                        return result;
                    }, Array<number>()
                );

                return i1.concat(i2);
            }
            return [];
        })
    }
}
