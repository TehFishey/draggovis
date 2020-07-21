import Model, { executionStrategy, executionOutput } from "../../model/Model";
import Janitors from "../_utilities/Janitors"

import Tree from "../../library/model/Tree";
import DragonNode from "../../library/model/DragonNode";
import Operator from "../../library/controller/Operator";

export default class DragDropOperator extends Operator {
    constructor(parent: Model) {
        super('DragDrop', parent);  
    }

    copyOne(dragNodeIndex: number, dropNodeIndex: number, validate: boolean=true) : Promise<executionOutput> {
        let strategy : executionStrategy = (tree: Tree) => {
            let dragon = tree[dragNodeIndex];
            if(dragon != null) {
                let n = tree.copyNode(dragon, dropNodeIndex);
                
                n.gender = Janitors.correctDragonGender(n);
                n.sprite = Janitors.correctSpriteGender(n);
                if (validate) n.state = Janitors.correctDragonState(n);
            }
            return [dropNodeIndex];
        }

        return this.executeStrategy(strategy);
    }

    swapOne(dragNodeIndex: number, dropNodeIndex: number, validate: boolean=true) : Promise<executionOutput> {
        let strategy : executionStrategy = (tree: Tree) => {
            let dragged = tree[dragNodeIndex];
            let dropped = tree[dropNodeIndex];
            if(dragged != null && dropped != null){
                let n = tree.copyNode(dragged, dropNodeIndex);
                n.gender = Janitors.correctDragonGender(n);
                n.sprite = Janitors.correctSpriteGender(n);
                if (validate) n.state = Janitors.correctDragonState(n);

                n = tree.copyNode(dropped, dragNodeIndex);
                n.gender = Janitors.correctDragonGender(n);
                n.sprite = Janitors.correctSpriteGender(n);
                if (validate) n.state = Janitors.correctDragonState(n);

                return [dragNodeIndex, dropNodeIndex];
            }
            return [];
        }

        return this.executeStrategy(strategy);
    }

    copySet(dragNodeIndex: number, dropNodeIndex: number, validate: boolean=true) : Promise<executionOutput> {
        let strategy : executionStrategy = (tree: Tree) => {
            let dragged = tree[dragNodeIndex];
            let dropped = tree[dropNodeIndex];
            if(dragged != null && dropped != null){
                let branch = tree.getBranch(dragNodeIndex, true);
                let n : DragonNode;

                tree.setBranch(dropNodeIndex, branch);
                n = tree[dropNodeIndex]!

                n.gender = Janitors.correctDragonGender(n);
                n.sprite = Janitors.correctSpriteGender(n);
                if (validate) n.state = Janitors.correctDragonState(n);

                return tree.getBranch(dropNodeIndex, false).reduce(
                    function(result, node) {
                        if(node!=null) result.push(node.index);
                        return result;
                    }, Array<number>()
                );
            }
            return [];
        }

        return this.executeStrategy(strategy);
    }

    swapSet(dragNodeIndex: number, dropNodeIndex: number, validate: boolean=true) : Promise<executionOutput> {
        let strategy : executionStrategy = (tree: Tree) => {
            let dragged = tree[dragNodeIndex];
            let dropped = tree[dropNodeIndex];
            if(dragged != null && dropped != null){
                let dragBranch = tree.getBranch(dragNodeIndex, true);
                let dropBranch = tree.getBranch(dropNodeIndex, true);
                let n : DragonNode;

                if(!dragBranch.includes(dropped) && !dropBranch.includes(dragged)) {
                    tree.setBranch(dropNodeIndex, dragBranch);
                    n = tree[dropNodeIndex]!;
                    n.gender = Janitors.correctDragonGender(n);
                    n.sprite = Janitors.correctSpriteGender(n);
                    if (validate) n.state = Janitors.correctDragonState(n);

                    tree.setBranch(dragNodeIndex, dropBranch);
                    n = tree[dragNodeIndex]!;
                    n.gender = Janitors.correctDragonGender(n);
                    n.sprite = Janitors.correctSpriteGender(n);
                    if (validate) n.state = Janitors.correctDragonState(n);

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
                else throw new Error(`Cannot swap ancestor and decendant lineages!`)
            }
            return [];
        }

        return this.executeStrategy(strategy);
    }
}
