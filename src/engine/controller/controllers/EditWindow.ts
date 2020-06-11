import Engine from "../Engine";
import Tree from "../../library/Tree";
import { Breeds, Portraits } from "../../data/Model";
import DragonNode from "../../library/DragonNode";



export default class EditWindowController {
    readonly parent: Engine;

    constructor(parent: Engine) {
        this.parent = parent;
    }

    updateName(index: number, name: string) {
        return this.parent.updateTree((tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null)
                dragon.name = name;
        });
    }

    updateBreed(index: number, breedId: string) {
        return this.parent.updateTree((tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null) {
                dragon.breed = Breeds.dict.get(breedId)!;
                dragon.portrait = this.getDefaultPortrait(dragon);
            }
        });
    }

    updatePortrait(index: number, portraitId: string) {
        return this.parent.updateTree((tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null)
                dragon.portrait = Portraits.dict.get(portraitId)!;
        });
    }

    createParents(index: number) {
        return this.parent.updateTree((tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null)
                if(!dragon.hasParents()) {
                    let n : DragonNode;
                    n = tree.createNode(dragon.getFatherIndex(), 'Male', dragon.breed, dragon.portrait);
                    n.portrait = this.getDefaultPortrait(n);
                    n = tree.createNode(dragon.getMotherIndex(), 'Female', dragon.breed, dragon.portrait);
                    n.portrait = this.getDefaultPortrait(n);
                }
        });
    }

    removeParents(index: number) {
        return this.parent.updateTree((tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null && dragon.hasParents()) {
                let mi = dragon.getMotherIndex();
                let fi = dragon.getFatherIndex();

                tree.removeNode(mi);
                tree.removeNode(fi);
            }
        });
    }

    getDefaultPortrait(node: DragonNode) {
        // Convert portraits dict to array of form [[key,value], [key,value] ... ] for iteration
        let portraits =  [...node.breed.portraits.values()];

        let validPortraits = portraits.filter((portrait) => {
            return portrait.condition.validate(node) && portrait.isDefault
        });
        return validPortraits[0];
    }
}