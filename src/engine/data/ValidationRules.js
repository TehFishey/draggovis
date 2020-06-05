class Rule {
    constructor(rule, warning) {
        this.check = rule;
        this.warning = warning;
    }
}

export default [
    new Rule((node) => {
        return node.breed.validate(node);
    }, "Illegal breed."),
    new Rule((node) => {
        return node.portrait.validate(node);
    }, "Illegal portrait.")
];
