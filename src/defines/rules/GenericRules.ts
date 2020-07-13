import DragonNode, { nodeReference } from "../../library/controller/DragonNode";
import Rule from "../../library/controller/Rule";

let GenericRules : Array<Rule> = [
    new Rule("g-invbreed",
        (node: DragonNode) => { return true },
        Rule.targetFamily,
        (node: DragonNode) => { return node.breed.condition.validateVerbose(node) },
        'Invalid Breed:<br/>'
    ),
    new Rule("g-invport",
        (node: DragonNode) => { return true },
        Rule.targetFamily,
        (node: DragonNode) => { return node.portrait.condition.validateVerbose(node) }, 
        'Invalid Portrait:<br/>'
    )
]

export default GenericRules;
