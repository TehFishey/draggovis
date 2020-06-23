import DataManager from "../_DataManager";
import ControllerUtils from "../_utilities/Utilities";

import Tree from "../../library/controller/Tree";
import DragonNode from "../../library/controller/DragonNode";
import { Gender, DragonState } from "../../library/defines/Dragon";

import { Portraits, Breeds } from "../../defines/Defines";


export default class EditPanelController {
    readonly parent: DataManager;

    constructor(parent: DataManager) {
        this.parent = parent;
    }

    updateName(index: number, name: string) : Tree {
        return (
            this.parent.updateTree((tree: Tree) => {
                let dragon = tree[index];
                if(dragon != null) {
                    dragon.name = name;
                    return[index];
                }
                return[];
            })
        )
    }

    updateBreed(index: number, breedId: string) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null) {
                dragon.breed = Breeds.dict.get(breedId)!;
                dragon.portrait = ControllerUtils.getDefaultPortrait(dragon, [...dragon.breed.portraits.values()]);
                return[index];
            }
            return [];
        });
    }

    updatePortrait(index: number, portraitId: string) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null) {
                dragon.portrait = Portraits.dict.get(portraitId)!;
                return[index];
            }
            return [];
        });
    }

    createChild(index: number) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            let dragon = tree[index];
            if(index === 0 && dragon != null) {
                let branch = tree.getBranch(index, true);
                let n : DragonNode;

                tree.removeNode(0);
                n = tree.createNode(0, Gender.Male, dragon.breed, dragon.portrait)
                
                n.portrait = ControllerUtils.correctPortraitGender(n);

                if(dragon.gender === Gender.Male) {
                    tree.setBranch(1, branch);
                    n = tree.createNode(2, Gender.Female, dragon.breed, dragon.portrait);
                    n.portrait = ControllerUtils.correctPortraitGender(n);
                }
                else if(dragon.gender === Gender.Female) {
                    tree.setBranch(2, branch);
                    n = tree.createNode(1, Gender.Male, dragon.breed, dragon.portrait);
                    n.portrait = ControllerUtils.correctPortraitGender(n);
                } 
                else if(dragon.gender === Gender.Undefined) {
                    branch[0]!.gender = Gender.Female;
                    tree.setBranch(2, branch);
                    n = tree.createNode(1, Gender.Male, dragon.breed, dragon.portrait);
                    n.portrait = ControllerUtils.correctPortraitGender(n);
                }

                return tree.getBranch(0, false).reduce(
                    function(result, node) {
                        if(node!=null) result.push(node.index);
                        return result;
                    }, Array<number>()
                );
            }
            return [];
        });
    }

    removeChild(index: number) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            let dragon = tree[index];
            if(index !== 0 && dragon != null) {
                let branch = tree.getBranch(index, true);
                tree.setBranch(0, branch);
                tree[0]!.portrait = ControllerUtils.correctPortraitGender(tree[0]!);

                return tree.getBranch(0, false).reduce(
                    function(result, node) {
                        if(node!=null) result.push(node.index);
                        return result;
                    }, Array<number>()
                );
            }
            return [];
        });
    }

    createParents(index: number) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null) {
                if(!dragon.hasParents()) {
                    let mi = dragon.getMotherIndex();
                    let fi = dragon.getFatherIndex();
                    let n : DragonNode;
                    
                    n = tree.createNode(dragon.getFatherIndex(), Gender.Male, dragon.breed, dragon.portrait);
                    n.portrait = ControllerUtils.getDefaultPortrait(n, [...n.breed.portraits.values()]);
                    n = tree.createNode(dragon.getMotherIndex(), Gender.Female, dragon.breed, dragon.portrait);
                    n.portrait = ControllerUtils.getDefaultPortrait(n, [...n.breed.portraits.values()]);
                    return [fi, mi];
                };
            }
            return [];
        });
    }

    removeParents(index: number) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null && dragon.hasParents()) {
                let mi = dragon.getMotherIndex();
                let fi = dragon.getFatherIndex();

                tree.removeNode(mi);
                tree.removeNode(fi);
                return [index];
            }
            return [];
        });
    }

    invertParents(index: number) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null && dragon.hasParents()) {
                let changed : Array<number> = [];

                let swapParents = (t: Tree, ti: number, b: Array<DragonNode | null>, bi: number) => {
                    let node = t[ti];
                    
                    if(node != null && node.hasParents()) {
                        let mi = node.getMotherIndex();
                        let fi = node.getFatherIndex();
                        let mBranch = tree.getBranch(mi, true);
                        let fBranch = tree.getBranch(fi, true);

                        tree.setBranch(mi, fBranch);
                        tree.setBranch(fi, mBranch);
                        [tree[mi], tree[fi]].forEach((n: DragonNode | null) =>{
                            n!.gender = ControllerUtils.correctDragonGender(n!);
                            n!.portrait = ControllerUtils.correctPortraitGender(n!);
                        });
                        changed.push(mi,fi);
                    }
                };
                Tree.iterate(tree, index, [], 0, swapParents);
                return changed;
            }
            return [];
        });
    }

    setDragonState(index: number, state: DragonState) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null) {
                dragon.state = state;
                return[index];
            }
            return [];
        });
    }
}