import Model, { executionStrategy, executionOutput } from "../../model/Model";
import Janitors from "../_utilities/Janitors";

import Tree from "../../library/model/Tree";
import DragonNode from "../../library/model/DragonNode";
import { Gender, DragonState } from "../../library/defines/Dragon";

import { Sprites, Breeds } from "../../defines/Defines";
import Operator from "../../library/controller/Operator";


export default class EditPanelOperator extends Operator {
    constructor(parent: Model) {
        super('EditPanel', parent);
    }

    updateName(index: number, name: string, validate: boolean=true) : Promise<executionOutput> {
        let strategy : executionStrategy = (tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null) {
                if(name.length > 32) name = name.slice(0,32);
                name = name.replace(/[^a-zA-Z0-9 \-+']/g, '');
                dragon.name = name;
                return[index];
            }
            return[];
        }

        return this.execute(strategy);
    }

    updateGender(index: number, gender: Gender, validate: boolean=true) : Promise<executionOutput> {
        let strategy : executionStrategy = (tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null && index === 0) {
                dragon.gender = gender;
                dragon.sprite = dragon.sprite = Janitors.getDefaultSprite(dragon, [...dragon.breed.sprites.values()]);
                return[index];
            }
            return[];
        }

        return this.execute(strategy);
    }

    updateBreed(index: number, breedId: string, validate: boolean=true) : Promise<executionOutput> {
        let strategy : executionStrategy = (tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null) {
                dragon.breed = Breeds.dict.get(breedId)!;
                dragon.sprite = Janitors.getDefaultSprite(dragon, [...dragon.breed.sprites.values()]);
                return[index];
            }
            return [];
        };

        return this.execute(strategy);
    }

    updateSprite(index: number, spriteId: string, validate: boolean=true) : Promise<executionOutput> {
        let strategy : executionStrategy = (tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null) {
                dragon.sprite = Sprites.dict.get(spriteId)!;
                return[index];
            }
            return [];
        };

        return this.execute(strategy);
    }

    createChild(index: number, validate: boolean=true) : Promise<executionOutput> {
        let strategy : executionStrategy = (tree: Tree) => {
            let dragon = tree[index];
            if(index === 0 && dragon != null) {
                let branch = tree.getBranch(index, true);
                let n : DragonNode;

                tree.removeNode(0);
                n = tree.createNode(0, Gender.Male, dragon.breed, dragon.sprite)
                
                n.sprite = Janitors.correctSpriteGender(n);

                if(dragon.gender === Gender.Male) {
                    tree.setBranch(1, branch);
                    if (validate) tree[1]!.state = Janitors.correctDragonState(tree[1]!);
                    n = tree.createNode(2, Gender.Female, dragon.breed, dragon.sprite);
                    n.sprite = Janitors.correctSpriteGender(n);
                }
                else {
                    tree.setBranch(2, branch);
                    if (validate) tree[2]!.state = Janitors.correctDragonState(tree[2]!);
                    n = tree.createNode(1, Gender.Male, dragon.breed, dragon.sprite);
                    n.sprite = Janitors.correctSpriteGender(n);
                } 
                if(dragon.gender === Gender.Undefined) {
                    tree.setBranch(2, branch);
                    if (validate) tree[2]!.state = Janitors.correctDragonState(tree[2]!);
                    tree[2]!.gender = Janitors.correctDragonGender(tree[2]!);
                    n = tree.createNode(1, Gender.Male, dragon.breed, dragon.sprite);
                    n.sprite = Janitors.correctSpriteGender(n);
                    
                }

                return tree.getBranch(0, false).reduce(
                    function(result, node) {
                        if(node!=null) result.push(node.index);
                        return result;
                    }, Array<number>()
                );
            }
            return [];
        };

        return this.execute(strategy);
    }

    removeChild(index: number, validate: boolean=true) : Promise<executionOutput> {
        let strategy : executionStrategy = (tree: Tree) => {
            let dragon = tree[index];
            if(index !== 0 && dragon != null) {
                let branch = tree.getBranch(index, true);
                tree.setBranch(0, branch);
                tree[0]!.sprite = Janitors.correctSpriteGender(tree[0]!);

                return tree.getBranch(0, false).reduce(
                    function(result, node) {
                        if(node!=null) result.push(node.index);
                        return result;
                    }, Array<number>()
                );
            }
            return [];
        };

        return this.execute(strategy);
    }

    createParents(index: number, validate: boolean=true) : Promise<executionOutput> {
        let strategy : executionStrategy = (tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null) {
                if(!dragon.hasParents()) {
                    let mi = dragon.getMotherIndex();
                    let fi = dragon.getFatherIndex();
                    let n : DragonNode;
                    
                    n = tree.createNode(dragon.getFatherIndex(), Gender.Male, dragon.breed, dragon.sprite);
                    n.sprite = Janitors.getDefaultSprite(n, [...n.breed.sprites.values()]);
                    n = tree.createNode(dragon.getMotherIndex(), Gender.Female, dragon.breed, dragon.sprite);
                    n.sprite = Janitors.getDefaultSprite(n, [...n.breed.sprites.values()]);
                    return [fi, mi];
                };
            }
            return [];
        };

        return this.execute(strategy);
    }

    removeParents(index: number, validate: boolean=true) : Promise<executionOutput> {
        let strategy : executionStrategy = (tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null && dragon.hasParents()) {
                let mi = dragon.getMotherIndex();
                let fi = dragon.getFatherIndex();

                tree.removeNode(mi);
                tree.removeNode(fi);
                return [index];
            }
            return [];
        };

        return this.execute(strategy);
    }

    invertParents(index: number, validate: boolean=true) : Promise<executionOutput> {
        let strategy : executionStrategy = (tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null && dragon.hasParents()) {
                let changed : Array<number> = [];

                let swapParents = (t: Tree, ti: number) => {
                    let node = t[ti];
                    
                    if(node != null && node.hasParents()) {
                        let mi = node.getMotherIndex();
                        let fi = node.getFatherIndex();
                        let mBranch = tree.getBranch(mi, true);
                        let fBranch = tree.getBranch(fi, true);

                        tree.setBranch(mi, fBranch);
                        tree.setBranch(fi, mBranch);
                        [tree[mi], tree[fi]].forEach((n: DragonNode | null) =>{
                            n!.gender = Janitors.correctDragonGender(n!);
                            n!.sprite = Janitors.correctSpriteGender(n!);
                        });
                        changed.push(mi,fi);
                    }
                };
                Tree.iterate(tree, index, [], 0, swapParents);
                return changed;
            }
            return [];
        };

        return this.execute(strategy);
    }

    setDragonState(index: number, state: DragonState, validate: boolean=true) : Promise<executionOutput> {
        let strategy : executionStrategy = (tree: Tree) => {
            let dragon = tree[index];
            if(dragon != null) {
                dragon.state = state;
                if(index === 0 && validate) dragon.gender = Janitors.correctDragonGender(dragon)
                return[index];
            }
            return [];
        };

        return this.execute(strategy);
    }
}