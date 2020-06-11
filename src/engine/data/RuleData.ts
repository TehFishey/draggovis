import genericRules from "./rules/GenericRules"
import Rule from "../library/Rule";

export default class RuleData {
    readonly arr: Array<Rule>;

    constructor() {
        let imports: Array<Array<Rule>> = [genericRules];
        this.arr = imports.flat();

        console.log(`Model: Defining validation rules...`);
        console.log(this.arr);
    }
};