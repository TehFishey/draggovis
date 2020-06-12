import DataManager from "../DataManager";
import Tree from "../../library/Tree";
import { Breeds, Portraits } from "../../data/Model";
import DragonNode from "../../library/DragonNode";



export default class EditWindowController {
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

    createParents(index: number) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null) {
                if(!dragon.hasParents()) {
                    let mi = dragon.getMotherIndex();
                    let fi = dragon.getFatherIndex();
                    let n : DragonNode;
                    
                    n = tree.createNode(dragon.getFatherIndex(), 'Male', dragon.breed, dragon.portrait);
                    n.portrait = this.getDefaultPortrait(n);
                    n = tree.createNode(dragon.getMotherIndex(), 'Female', dragon.breed, dragon.portrait);
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
}