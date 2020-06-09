class Rule {
    constructor(rule, tooltip) {
        this.check = rule;
        this.tooltip = tooltip;
    }
}

export default [
    new Rule(
        (node) => { return node.breed.condition.validate(node);}, 
        (node) => { return "Invalid Breed:\n"+node.breed.condition.tooltip;}
    ),
    new Rule(
        (node) => { return node.portrait.condition.validate(node);}, 
        (node) => { return "Invalid Portrait:\n"+node.portrait.condition.tooltip;}
    )
];
