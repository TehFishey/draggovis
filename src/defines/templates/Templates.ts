import _range from 'lodash/range';

import Template from '../../library/view/LineageTemplate';
import { DragProperty, NumProperty, GenderProperty } from '../../library/view/TemplateProperty';
import Dragon, { Gender } from '../../library/defines/Dragon';
import Tree from '../../library/controller/Tree';
import DragonNode from '../../library/controller/DragonNode';
import Janitors from '../../controller/_utilities/Janitors';

let lineageTemplates : Array<Template> = [
    new Template('even','Even-Gen', 
        [
            new NumProperty('gens', 'Generations', _range(2,13)),
            new DragProperty('dragon', 'Dragon')
        ],
        (gens: number, dragon: Dragon) => {
            let out = new Tree();
            out[0] = out.createNode(0,Gender.Male,dragon.breed,dragon.portrait,dragon.state);
            out[0].portrait = Janitors.correctPortraitGender(out[0]);
            for(let i = 1; i <= gens; i++) {
                let nodes: Array<DragonNode> = Tree.getNodesByGen(out, i);
                nodes.forEach((node)=> {
                    let n: DragonNode;
                    n = out.createNode(node.getFatherIndex(),Gender.Male,dragon.breed,dragon.portrait,dragon.state);
                    n.portrait = Janitors.correctPortraitGender(n);
                    n = out.createNode(node.getMotherIndex(),Gender.Female,dragon.breed,dragon.portrait,dragon.state);
                    Janitors.correctPortraitGender(n);
                    n.portrait = Janitors.correctPortraitGender(n);
                });
            }
            return out;
        }
    ),
    new Template('checker','Checker', 
        [
            new NumProperty('gens', 'Generations', _range(2,13)),
            new DragProperty('mDragon', 'Male Dragon', Gender.Male),
            new DragProperty('fDragon', 'Female Dragon', Gender.Female)
            
        ],
        (gens: number, mDragon: Dragon, fDragon: Dragon) => {
            let out = new Tree();
            out[0] = out.createNode(0,Gender.Male,mDragon.breed,mDragon.portrait,mDragon.state);
            for(let i = 1; i <= gens; i++) {
                let nodes: Array<DragonNode> = Tree.getNodesByGen(out, i);
                nodes.forEach((node)=> {
                    out.createNode(node.getFatherIndex(),Gender.Male,mDragon.breed,mDragon.portrait,mDragon.state);
                    out.createNode(node.getMotherIndex(),Gender.Female,fDragon.breed,fDragon.portrait,fDragon.state);
                });
            }
            return out;
        }
    ),
    new Template('stair','Stairstep', 
        [
            new NumProperty('gens', 'Generations', _range(2,13)),
            new GenderProperty('primeGen', 'Primary Gender'),
            new DragProperty('mDragon', 'Male Dragon', Gender.Male),
            new DragProperty('fDragon', 'Female Dragon', Gender.Female)
            
        ],
        (gens: number, primeGen: Gender, mDragon: Dragon, fDragon: Dragon) => {
            let out = new Tree();
            if(primeGen === Gender.Male) {
                let node: DragonNode = out.createNode(0,Gender.Male,mDragon.breed,mDragon.portrait,mDragon.state);
                for(let i = 1; i <= gens; i++) {
                    out.createNode(node.getFatherIndex(),Gender.Male,mDragon.breed,mDragon.portrait,mDragon.state);
                    out.createNode(node.getMotherIndex(),Gender.Female,fDragon.breed,fDragon.portrait,fDragon.state);
                    node = out[node.getFatherIndex()]!;
                }
            }
            else {
                let node: DragonNode = out.createNode(0,Gender.Female,fDragon.breed,fDragon.portrait,fDragon.state);
                for(let i = 1; i <= gens; i++) {
                    out.createNode(node.getFatherIndex(),Gender.Male,mDragon.breed,mDragon.portrait,mDragon.state);
                    out.createNode(node.getMotherIndex(),Gender.Female,fDragon.breed,fDragon.portrait,fDragon.state);
                    node = out[node.getMotherIndex()]!;
                }
            }
            return out;
        }
    ),
    new Template('spiral','Spiral', 
        [
            new NumProperty('gens', 'Generations', _range(2,13)),
            new GenderProperty('finalGen', 'Final Gender'),
            new DragProperty('mDragon', 'Male Dragon', Gender.Male),
            new DragProperty('fDragon', 'Female Dragon', Gender.Female)
            
        ],
        (gens: number, finalGen: Gender, mDragon: Dragon, fDragon: Dragon) => {
            let out = new Tree();
            let node: DragonNode = out.createNode(0,finalGen,mDragon.breed,mDragon.portrait,mDragon.state);
            let gender: Gender = finalGen;
            for(let i = 1; i <= gens; i++) {
                out.createNode(node.getFatherIndex(),Gender.Male,mDragon.breed,mDragon.portrait,mDragon.state);
                out.createNode(node.getMotherIndex(),Gender.Female,fDragon.breed,fDragon.portrait,fDragon.state);
                node = out[(gender === Gender.Male) ? node.getMotherIndex() : node.getFatherIndex()]!;
                gender = (gender === Gender.Male) ? Gender.Female : Gender.Male;
            }
            return out;
        }
    ),
    new Template('arrow','Arrowhead', 
        [
            new NumProperty('gens', 'Generations', _range(2,13)),
            new DragProperty('mDragonA', 'Stair-A Male Dragon', Gender.Male),
            new DragProperty('fDragonA', 'Stair-A Female Dragon', Gender.Female),
            new DragProperty('mDragonB', 'Stair-B Male Dragon', Gender.Male),
            new DragProperty('fDragonB', 'Stair-B Female Dragon', Gender.Female),
            
        ],
        (gens: number, mDragonA: Dragon, fDragonA: Dragon, mDragonB: Dragon, fDragonB: Dragon) => {
            let out = new Tree();
            let nodeA: DragonNode = out.createNode(0,Gender.Male,mDragonA.breed,mDragonA.portrait,mDragonA.state);
            let nodeB: DragonNode = nodeA;
            for(let i = 1; i <= gens; i++) {
                if(i === 1) {
                    out.createNode(nodeA.getFatherIndex(),Gender.Male,mDragonA.breed,mDragonA.portrait,mDragonA.state);
                    out.createNode(nodeA.getMotherIndex(),Gender.Female,fDragonB.breed,fDragonB.portrait,fDragonB.state);
                }
                else {
                    out.createNode(nodeA.getFatherIndex(),Gender.Male,mDragonA.breed,mDragonA.portrait,mDragonA.state);
                    out.createNode(nodeA.getMotherIndex(),Gender.Female,fDragonA.breed,fDragonA.portrait,fDragonA.state);
                
                    out.createNode(nodeB.getFatherIndex(),Gender.Male,mDragonB.breed,mDragonB.portrait,mDragonB.state);
                    out.createNode(nodeB.getMotherIndex(),Gender.Female,fDragonB.breed,fDragonB.portrait,fDragonB.state);
                }
                nodeA = out[nodeA.getFatherIndex()]!;
                nodeB = out[nodeB.getMotherIndex()]!;
            }
            return out;
        }
    ),
    new Template('heart','Heart', 
        [
            new DragProperty('outerDragon', 'Outer Dragon'),
            new DragProperty('innerDragon', 'Inner Dragon'),
            
        ],
        (outerDragon: Dragon, innerDragon: Dragon) => {
            let out = new Tree();
            let root = out.createNode(0,Gender.Male,outerDragon.breed,outerDragon.portrait,outerDragon.state);
            let nodesA: Array<DragonNode> = new Array<DragonNode>();
            let nodesB: Array<DragonNode> = new Array<DragonNode>();
            for(let i = 1; i <= 4; i++) {
                if(i === 1) {
                    nodesA.push(out.createNode(root.getFatherIndex(),Gender.Male,outerDragon.breed,outerDragon.portrait,outerDragon.state));
                    nodesB.push(out.createNode(root.getMotherIndex(),Gender.Female,outerDragon.breed,outerDragon.portrait,outerDragon.state));
                }
                else {
                    [nodesA, nodesB].forEach((nodeArr) => {
                        let n: Array<DragonNode> = [];
                        if(i === 2) {
                            nodeArr.forEach((node: DragonNode) => { 
                                n.push(out.createNode(node.getFatherIndex(),Gender.Male,outerDragon.breed,outerDragon.portrait,outerDragon.state));
                                n.push(out.createNode(node.getMotherIndex(),Gender.Female,outerDragon.breed,outerDragon.portrait,outerDragon.state));
                            }) 
                        }
                        else {
                            let swapGen = (i%2) ? [Gender.Male,Gender.Female] : [Gender.Female,Gender.Male];
                            nodeArr.forEach((node: DragonNode) => { 
                                if(node.gender === swapGen[0]) {
                                    out.createNode(node.getFatherIndex(),Gender.Male,outerDragon.breed,outerDragon.portrait,outerDragon.state);
                                    n.push(out.createNode(node.getMotherIndex(),Gender.Female,innerDragon.breed,innerDragon.portrait,innerDragon.state));
                                }
                                else if(node.gender === swapGen[1]) {
                                    n.push(out.createNode(node.getFatherIndex(),Gender.Male,innerDragon.breed,innerDragon.portrait,innerDragon.state));
                                    out.createNode(node.getMotherIndex(),Gender.Female,outerDragon.breed,outerDragon.portrait,outerDragon.state);
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
    
export default lineageTemplates;
