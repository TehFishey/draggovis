import genericRules from "./rules/GenericRules"
import Rule from "../library/controller/Rule";
import DragonNode from "../library/controller/DragonNode";

export default class RuleData {
    readonly dict: Map<string, Rule>;
    readonly arr: Array<Rule>;

    constructor() {
        let imports: Array<Array<Rule>> = [genericRules];
        this.arr = imports.flat();
        this.dict = new Map<string, Rule>();
        this.arr.forEach((rule: Rule) => {this.dict.set(rule.id, rule)});

        console.log(`Model: Defining validation rules...`);
        console.log(this.dict);
    }

    checkAll(node: DragonNode) {
        this.arr.forEach((rule: Rule)=>{
            rule.execute(node);
        });
    }
};