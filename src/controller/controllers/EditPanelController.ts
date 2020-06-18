import DataManager from "../_DataManager";

import Tree from "../../library/controller/Tree";
import DragonNode from "../../library/controller/DragonNode";
import { Gender } from "../../library/defines/Dragon";

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
                dragon.portrait = this.getDefaultPortrait(dragon);
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
                tree.removeNode(0);
                tree.createNode(0, Gender.Male, dragon.breed, dragon.portrait)
                this.correctPortrait(tree[0]!);

                if(dragon.gender === Gender.Male) {
                    tree.setBranch(1, branch);
                    tree.createNode(2, Gender.Female, dragon.breed, dragon.portrait);
                    this.correctPortrait(tree[2]!);
                }
                else if(dragon.gender === Gender.Female) {
                    tree.setBranch(2, branch);
                    tree.createNode(1, Gender.Male, dragon.breed, dragon.portrait);
                    this.correctPortrait(tree[1]!);
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
                this.correctPortrait(tree[0]!);

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
                    n.portrait = this.getDefaultPortrait(n);
                    n = tree.createNode(dragon.getMotherIndex(), Gender.Female, dragon.breed, dragon.portrait);
                    n.portrait = this.getDefaultPortrait(n);
                    return [index, fi, mi];
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
                            this.correctGender(n!);
                            this.correctPortrait(n!);
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

    getDefaultPortrait(node: DragonNode) {
        let portraits =  [...node.breed.portraits.values()];
        let validPortrait;

        portraits.some((portrait) => {
            if(portrait.condition.validate(node) && portrait.isDefault) {
                validPortrait = portrait;
                return true;
            }
            return false;
        })

        return (validPortrait != null) ? validPortrait : portraits[0];
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