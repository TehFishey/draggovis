import _range from 'lodash/range';

import Generator from '../../library/controller/Generator';
import { DragProperty, NumProperty, GenderProperty } from '../../library/controller/GeneratorProperty';
import Dragon, { Gender, DragonState } from '../../library/defines/Dragon';
import Tree from '../../library/model/Tree';
import DragonNode from '../../library/model/DragonNode';
import Breed from '../../library/defines/Breed';
import Sprite from '../../library/defines/Sprite';

import Janitors from '../_utilities/Janitors';

let templateGenerators : Array<Generator> = [
    new Generator('even','Even-Gen', 
        "A single-breed lineage where all Caveborn dragons are in the same generation. Lineages of this type have every possible dragon position filled for each generation.",
        [
            new NumProperty('gens', 'Generations', _range(2,13)),
            new DragProperty('dragon', 'Dragons')
        ],
        (gens: number, dragon: Dragon) => {
            let out = new Tree();
            out[0] = out.createNode(0,Gender.Female,dragon.breed,dragon.sprite,dragon.state);
            out[0].sprite = Janitors.correctSpriteGender(out[0]);
            for(let i = 1; i < gens; i++) {
                let nodes: Array<DragonNode> = Tree.getNodesByGen(out, i);
                nodes.forEach((node)=> {
                    createCorrectedNode(out,node.getFatherIndex(),Gender.Male,dragon.breed,dragon.sprite,dragon.state);
                    createCorrectedNode(out,node.getMotherIndex(),Gender.Female,dragon.breed,dragon.sprite,dragon.state);
                });
            }
            return out;
        }
    ),
    new Generator('checker','Checkerboard', 
    "A double-breed variant of the Even-Gen lineage, where all female dragons share one breed (or sprite), and all male dragons share a different breed (or sprite).",
        [
            new NumProperty('gens', 'Generations', _range(2,13)),
            new DragProperty('mDragon', 'Male Dragons', Gender.Male),
            new DragProperty('fDragon', 'Female Dragons', Gender.Female)
            
        ],
        (gens: number, mDragon: Dragon, fDragon: Dragon) => {
            let out = new Tree();
            out[0] = createCorrectedNode(out,0,Gender.Female,mDragon.breed,mDragon.sprite,mDragon.state);
            for(let i = 1; i < gens; i++) {
                let nodes: Array<DragonNode> = Tree.getNodesByGen(out, i);
                nodes.forEach((node)=> {
                    createCorrectedNode(out,node.getFatherIndex(),Gender.Male,mDragon.breed,mDragon.sprite,mDragon.state);
                    createCorrectedNode(out,node.getMotherIndex(),Gender.Female,fDragon.breed,fDragon.sprite,fDragon.state);
                });
            }
            return out;
        }
    ),
    new Generator('stair','Stairstep', 
    "An uneven lineage where all Caveborn dragons have the same gender. 'Primary' gendered dragons are bred from the previous generation's 'primary' gender and a Caveborn secondary gender, resulting in a lineage that looks like stairs.",
        [
            new NumProperty('gens', 'Generations', _range(2,13)),
            new GenderProperty('primeGen', 'Primary Gender'),
            new DragProperty('mDragon', 'Male Dragons', Gender.Male),
            new DragProperty('fDragon', 'Female Dragons', Gender.Female)
            
        ],
        (gens: number, primeGen: Gender, mDragon: Dragon, fDragon: Dragon) => {
            let out = new Tree();
            let node: DragonNode = (primeGen === Gender.Male) ? 
                createCorrectedNode(out,0,primeGen,mDragon.breed,mDragon.sprite,mDragon.state) :
                createCorrectedNode(out,0,primeGen,fDragon.breed,fDragon.sprite,fDragon.state) ;
            for(let i = 1; i < gens; i++) {
                createCorrectedNode(out,node.getFatherIndex(),Gender.Male,mDragon.breed,mDragon.sprite,mDragon.state);
                createCorrectedNode(out,node.getMotherIndex(),Gender.Female,fDragon.breed,fDragon.sprite,fDragon.state);
                node = (primeGen === Gender.Male) ? out[node.getFatherIndex()]! : out[node.getMotherIndex()]!;
            }
            return out;
        }
    ),
    new Generator('spiral','Spiral', 
    "A variant of the Stairstep lineage where Caveborn and Primary dragons alternate genders each generation. Caveborns of the secondary dragon breed are bred with the primary-breed offspring of the each generation, resulting in a lineage that looks like a line.",
        [
            new NumProperty('gens', 'Generations', _range(2,13)),
            new GenderProperty('finalGen', 'Final-Generation Gender'),
            new DragProperty('primeDrag', 'Primary Dragons'),
            new DragProperty('secondDrag', 'Secondary Dragons')
            
        ],
        (gens: number, finalGen: Gender, primeDrag: Dragon, secondDrag: Dragon) => {
            let out = new Tree();
            let node: DragonNode = createCorrectedNode(out,0,finalGen,primeDrag.breed,primeDrag.sprite,primeDrag.state);
            let gender: Gender = (finalGen === Gender.Male) ? Gender.Female : Gender.Male;
            
            for(let i = 1; i < gens; i++) {
                if (gender === Gender.Male) {
                    createCorrectedNode(out,node.getFatherIndex(),Gender.Male,primeDrag.breed,primeDrag.sprite,primeDrag.state);
                    createCorrectedNode(out,node.getMotherIndex(),Gender.Female,secondDrag.breed,secondDrag.sprite,secondDrag.state);
                    gender = Gender.Female;
                    node = out[node.getFatherIndex()]!;
                } else {
                    createCorrectedNode(out,node.getFatherIndex(),Gender.Male,secondDrag.breed,secondDrag.sprite,secondDrag.state);
                    createCorrectedNode(out,node.getMotherIndex(),Gender.Female,primeDrag.breed,primeDrag.sprite,primeDrag.state);
                    gender = Gender.Male;
                    node = out[node.getMotherIndex()]!;
                }
            }
            return out;
        }
    ),
    new Generator('arrow','Arrowhead', 
    "An arrow-shaped lineage which merges two stair-step lineages, one with female Caveborn dragons, the other with male Caveborn dragons.",
        [
            new NumProperty('gens', 'Generations', _range(2,13)),
            new DragProperty('mDragonA', 'Upper Male Dragons', Gender.Male),
            new DragProperty('fDragonA', 'Upper Female Dragons', Gender.Female),
            new DragProperty('mDragonB', 'Lower Male Dragons', Gender.Male),
            new DragProperty('fDragonB', 'Lower Female Dragons', Gender.Female),
            
        ],
        (gens: number, mDragonA: Dragon, fDragonA: Dragon, mDragonB: Dragon, fDragonB: Dragon) => {
            let out = new Tree();
            let nodeA: DragonNode = createCorrectedNode(out,0,Gender.Female,mDragonA.breed,mDragonA.sprite,mDragonA.state);
            let nodeB: DragonNode = nodeA;
            for(let i = 1; i < gens; i++) {
                if(i === 1) {
                    createCorrectedNode(out,nodeA.getFatherIndex(),Gender.Male,mDragonA.breed,mDragonA.sprite,mDragonA.state);
                    createCorrectedNode(out,nodeA.getMotherIndex(),Gender.Female,fDragonB.breed,fDragonB.sprite,fDragonB.state);
                }
                else {
                    createCorrectedNode(out,nodeA.getFatherIndex(),Gender.Male,mDragonA.breed,mDragonA.sprite,mDragonA.state);
                    createCorrectedNode(out,nodeA.getMotherIndex(),Gender.Female,fDragonA.breed,fDragonA.sprite,fDragonA.state);
                
                    createCorrectedNode(out,nodeB.getFatherIndex(),Gender.Male,mDragonB.breed,mDragonB.sprite,mDragonB.state);
                    createCorrectedNode(out,nodeB.getMotherIndex(),Gender.Female,fDragonB.breed,fDragonB.sprite,fDragonB.state);
                }
                nodeA = out[nodeA.getFatherIndex()]!;
                nodeB = out[nodeB.getMotherIndex()]!;
            }
            return out;
        }
    ),
    new Generator('heart','Heart', 
    "A 5-generation, heart-shaped lineage pattern, where dragons on the exterior of the heart share one breed, and dragons on the interior share another.",
        [
            new NumProperty('gens', 'Generations', [5]),
            new DragProperty('outerDragon', 'Outer Dragons'),
            new DragProperty('innerDragon', 'Inner Dragons'),
            
        ],
        (gens: number, outerDragon: Dragon, innerDragon: Dragon) => {
            let out = new Tree();
            let root = createCorrectedNode(out,0,Gender.Female,outerDragon.breed,outerDragon.sprite,outerDragon.state);
            let nodesA: Array<DragonNode> = new Array<DragonNode>();
            let nodesB: Array<DragonNode> = new Array<DragonNode>();
            for(let i = 1; i <= 4; i++) {
                if(i === 1) {
                    nodesA.push(createCorrectedNode(out,root.getFatherIndex(),Gender.Male,outerDragon.breed,outerDragon.sprite,outerDragon.state));
                    nodesB.push(createCorrectedNode(out,root.getMotherIndex(),Gender.Female,outerDragon.breed,outerDragon.sprite,outerDragon.state));
                }
                else {
                    [nodesA, nodesB].forEach((nodeArr) => {
                        let n: Array<DragonNode> = [];
                        if(i === 2) {
                            nodeArr.forEach((node: DragonNode) => { 
                                n.push(createCorrectedNode(out,node.getFatherIndex(),Gender.Male,outerDragon.breed,outerDragon.sprite,outerDragon.state));
                                n.push(createCorrectedNode(out,node.getMotherIndex(),Gender.Female,outerDragon.breed,outerDragon.sprite,outerDragon.state));
                            }) 
                        }
                        else {
                            let swapGen = (i%2) ? [Gender.Male,Gender.Female] : [Gender.Female,Gender.Male];
                            nodeArr.forEach((node: DragonNode) => { 
                                if(node.gender === swapGen[0]) {
                                    createCorrectedNode(out,node.getFatherIndex(),Gender.Male,outerDragon.breed,outerDragon.sprite,outerDragon.state);
                                    n.push(createCorrectedNode(out,node.getMotherIndex(),Gender.Female,innerDragon.breed,innerDragon.sprite,innerDragon.state));
                                }
                                else if(node.gender === swapGen[1]) {
                                    n.push(createCorrectedNode(out,node.getFatherIndex(),Gender.Male,innerDragon.breed,innerDragon.sprite,innerDragon.state));
                                    createCorrectedNode(out,node.getMotherIndex(),Gender.Female,outerDragon.breed,outerDragon.sprite,outerDragon.state);
                                }
                            }) 
                        }
                        nodeArr.splice(0, nodeArr.length, ...n);
                    });
                }
            }
            return out;
        }
    )
]
    
export default templateGenerators;

function createCorrectedNode(tree: Tree,index: number,gender: Gender,breed: Breed,sprite: Sprite,state: DragonState) {
    let n = tree.createNode(index,gender,breed,sprite,state);
    n.sprite = Janitors.correctSpriteGender(n);
    return n
}
