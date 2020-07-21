import DragonNode from "../../library/model/DragonNode";
import Rule from "../../library/model/Rule";

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
        (node: DragonNode) => { return node.sprite.condition.validateVerbose(node) }, 
        'Invalid Sprite:<br/>'
    )
]

export default GenericRules;
