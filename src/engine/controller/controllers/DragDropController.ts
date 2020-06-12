import DataManager from "../DataManager";
import Tree from "../../library/Tree";
import DragonNode from "../../library/DragonNode";
import { Portraits } from "../../data/Model";

export default class DragDropController {
    readonly parent: DataManager;

    constructor(parent: DataManager) {
        this.parent = parent;
    }

    copyOne(dragNodeIndex: number, dropNodeIndex: number) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            let dragon = tree[dragNodeIndex];
            if(dragon != null) {
                let n = tree.copyNode(dragon, dropNodeIndex);
                this.updateGender(n);
                this.updatePortrait(n);
            }
            return [dropNodeIndex];
        })
    }

    swapOne(dragNodeIndex: number, dropNodeIndex: number) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            let dragged = tree[dragNodeIndex];
            let dropped = tree[dropNodeIndex];
            if(dragged != null && dropped != null){
                let n = tree.copyNode(dragged, dropNodeIndex);
                this.updateGender(n);
                this.updatePortrait(n);

                n = tree.copyNode(dropped, dragNodeIndex);
                this.updateGender(n);
                this.updatePortrait(n);

                return [dragNodeIndex, dropNodeIndex];
            }
            return [];
        })
    }

    copySet(dragNodeIndex: number, dropNodeIndex: number) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            let dragged = tree[dragNodeIndex];
            let dropped = tree[dropNodeIndex];
            if(dragged != null && dropped != null){
                let branch = tree.getBranch(dragged!, true);

                tree.setBranch(dropped!, branch);
                this.updateGender(tree[dropNodeIndex]!);
                this.updatePortrait(tree[dropNodeIndex]!);

                return tree.getBranch(tree[dropNodeIndex]!, false).reduce(
                    function(result, node) {
                        if(node!=null) result.push(node.index);
                        return result;
                    }, Array<number>()
                );
            }
            return [];
        })
    }

    swapSet(dragNodeIndex: number, dropNodeIndex: number) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            let dragged = tree[dragNodeIndex];
            let dropped = tree[dropNodeIndex];
            if(dragged != null && dropped != null){
                let dragBranch = tree.getBranch(dragged!, true);
                let dropBranch = tree.getBranch(dropped!, true);

                tree.setBranch(dropped!, dragBranch);
                this.updateGender(tree[dropNodeIndex]!);
                this.updatePortrait(tree[dropNodeIndex]!);

                tree.setBranch(dragged!, dropBranch);
                this.updateGender(tree[dragNodeIndex]!);
                this.updatePortrait(tree[dragNodeIndex]!);

                let i1 = tree.getBranch(tree[dropNodeIndex]!, false).reduce(
                    function(result, node) {
                        if(node!=null) result.push(node.index);
                        return result;
                    }, Array<number>()
                );

                let i2 = tree.getBranch(tree[dropNodeIndex]!, false).reduce(
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

    updatePortrait(node: DragonNode) {
        let pid = node.portrait.id;
        let portrait;
        if(pid.endsWith("-m") && node.gender === "Female") {
            let npid = pid.slice(0,-1)+"f"
            portrait = Portraits.dict.get(npid);
        }
        else if(pid.endsWith("-f") && node.gender === "Male") {
            let npid = pid.slice(0,-1)+"m"
            portrait = Portraits.dict.get(npid);
        }

        node.portrait = (portrait != null) ? portrait : node.portrait;
    }

    updateGender(node: DragonNode) {
        node.gender = (node.index % 2 === 0) ? "Female" : "Male";
    }
}
