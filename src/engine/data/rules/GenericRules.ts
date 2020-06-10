import DragonNode from "../../library/DragonNode";
import Rule from "../../library/Rule";

let GenericRules : Array<Rule> = [
    new Rule(
        (node: DragonNode) => { return node.breed.condition.validate(node);}, 
        (node: DragonNode) => { return "Invalid Breed:\n"+node.breed.condition.warning;}
    ),
    new Rule(
        (node: DragonNode) => { return node.portrait.condition.validate(node);}, 
        (node: DragonNode) => { return "Invalid Portrait:\n"+node.portrait.condition.warning;}
    )
]

export default GenericRules;
