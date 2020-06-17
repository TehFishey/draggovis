import DataManager from "../DataManager";
import Tree from "../../library/Tree";
import DragonNode from "../../library/DragonNode";
import { Portraits } from "../../data/Model";
import { Gender } from "../../library/Dragon";

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
                this.correctGender(n);
                this.correctPortrait(n);
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
                this.correctGender(n);
                this.correctPortrait(n);

                n = tree.copyNode(dropped, dragNodeIndex);
                this.correctGender(n);
                this.correctPortrait(n);

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
                let branch = tree.getBranch(dragNodeIndex, true);

                tree.setBranch(dropNodeIndex, branch);
                this.correctGender(tree[dropNodeIndex]!);
                this.correctPortrait(tree[dropNodeIndex]!);

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

    swapSet(dragNodeIndex: number, dropNodeIndex: number) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            let dragged = tree[dragNodeIndex];
            let dropped = tree[dropNodeIndex];
            if(dragged != null && dropped != null){
                let dragBranch = tree.getBranch(dragNodeIndex, true);
                let dropBranch = tree.getBranch(dropNodeIndex, true);

                tree.setBranch(dropNodeIndex, dragBranch);
                this.correctGender(tree[dropNodeIndex]!);
                this.correctPortrait(tree[dropNodeIndex]!);

                tree.setBranch(dragNodeIndex, dropBranch);
                this.correctGender(tree[dragNodeIndex]!);
                this.correctPortrait(tree[dragNodeIndex]!);

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

    correctPortrait(node: DragonNode) {
        let pid = node.portrait.id;
        let portrait;
        if(pid.endsWith("-m") && node.gender === Gender.Female) {
            let npid = pid.slice(0,-1)+"f"
            portrait = Portraits.dict.get(npid);
        }
        else if(pid.endsWith("-f") && node.gender === Gender.Male) {
            let npid = pid.slice(0,-1)+"m"
            portrait = Portraits.dict.get(npid);
        }

        node.portrait = (portrait != null) ? portrait : node.portrait;
    }

    correctGender(node: DragonNode) {
        node.gender = (node.index % 2 === 0) ? Gender.Female : Gender.Male;
    }
}
