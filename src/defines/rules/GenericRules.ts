import DragonNode, { nodeReference } from "../../library/controller/DragonNode";
import Rule from "../../library/controller/Rule";

class GenericRule extends Rule {
    constructor(id: string, check: nodeReference, targets: nodeReference, validate: nodeReference, tooltip: string) {
        super(id, check, targets, validate, tooltip);
    }

    execute(node: DragonNode) {
        console.log(`executing rule ${this.id} on node ${node.index}`)

        let targets : Array<DragonNode> = this.targets(node);
        let tids : string = targets.map((n)=>{return n.index}).toString();

        console.log(`${this.id}: check approved! running validation on nodes: ${tids}`)
        targets.forEach((tnode)=>{
            let r: boolean;
            let o: string;
            [r,o] = this.validate(tnode);
            if (!r){
                o = `${this.tooltip}${o}` 
                console.log(`${this.id}: node ${tnode.index} FAILED validation, setting warning...`)
                GenericRule.setWarning(tnode, this, o);
            } else {
                console.log(`${this.id}: node ${tnode.index} passed validation.`)
            }
        });
    }
}

let GenericRules : Array<Rule> = [
    new GenericRule("g-invbreed",
        (node: DragonNode) => { return true },
        Rule.targetFamily,
        (node: DragonNode) => { return node.breed.condition.validateVerbose(node) },
        'Invalid Breed:<br/>'
    ),
    new GenericRule("g-invport",
        (node: DragonNode) => { return true },
        Rule.targetFamily,
        (node: DragonNode) => { return node.portrait.condition.validateVerbose(node) }, 
        'Invalid Portrait:<br/>'
    )
]

export default GenericRules;
