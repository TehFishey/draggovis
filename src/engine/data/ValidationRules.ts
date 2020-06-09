import DragonNode from "../library/DragonNode";

type nodeReference = (node: DragonNode) => any;

class Rule { 
    check: nodeReference;
    tooltip: nodeReference;
    constructor(rule: nodeReference, tooltip: nodeReference) {
        this.check = rule;
        this.tooltip = tooltip;
    }
}

export default [
    new Rule(
        (node: DragonNode) => { return node.breed.condition.validate(node);}, 
        (node: DragonNode) => { return "Invalid Breed:\n"+node.breed.condition.tooltip;}
    ),
    new Rule(
        (node: DragonNode) => { return node.portrait.condition.validate(node);}, 
        (node: DragonNode) => { return "Invalid Portrait:\n"+node.portrait.condition.tooltip;}
    )
];
