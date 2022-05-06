import DragonNode from "../../library/model/DragonNode";
import Rule from "../../library/model/Rule";
import { Gender } from "../../library/defines/Dragon";

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
    ),
    new Rule("g-invmate",
        (node: DragonNode) => { return node.index !== 0 },
        (node: DragonNode) => { 
            let mate : DragonNode;
            if(node.gender === Gender.Male) mate = node.child()!.mother()!;
            else mate = node.child()!.father()!;

            return [node, mate];
        },
        (node: DragonNode) => { 
            let mate : DragonNode;
            if(node.gender === Gender.Male) mate = node.child()!.mother()!;
            else mate = node.child()!.father()!;

            if(node.breed.type === mate.breed.type) return true;
            else return [false, `Dragon type '${node.breed.type}' is incompatible with mate's type '${mate.breed.type}'. These dragons will never produce offspring.`]
        },
        `Invalid Mate:<br/>`
    ),
    new Rule("g-invname",
        (node: DragonNode) => { return node.name !== '' },
        (node: DragonNode) => { 
            let targets : Array<DragonNode> = [];
            
            node.tree.forEach((node: DragonNode | null) => {
                if(node != null && node.name !== '')
                    targets.push(node);
            })
            return targets;
        },
        (node: DragonNode) => { 
            let dupNames: Array<DragonNode> = [];
            node.tree.forEach((n: DragonNode | null) => {
                if(n != null && n.name === node.name && n.index !== node.index) {
                    dupNames.push(n);
                }
            })

            if(dupNames.length === 0) return true;
            else {
                if (dupNames.some((n: DragonNode) => {
                    return(n.breed !== node.breed || n.sprite !== node.sprite || n.state !== node.state)
                }))
                return [false, `Duplicate Name:<br/>Dragon name '${node.name}' cannot be shared by two non-identical dragons.`]
            }
            return [false, `Inbred Lineage:<br/>Dragon name '${node.name}' is shared by other dragons in this lineage. Is the lineage intentionally inbred?`]
        },
        ``
    ),
]

export default GenericRules;
