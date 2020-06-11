import Condition from "./Condition";
import DragonNode, {nodeReference} from "./DragonNode";

export default class Rule extends Condition {
    readonly id: string;
    check: nodeReference;
    targets: nodeReference;
    tooltip: nodeReference;

    constructor(id: string, check: nodeReference, targets: nodeReference, validate: nodeReference, tooltip: nodeReference) {
        super(validate, "");
        this.id = id;
        this.check = check;
        this.targets = targets;
        this.tooltip = tooltip;
    }

    execute(node: DragonNode) {
        console.log(`executing rule ${this.id} on node ${node.index}`)
        if(this.check(node)) {
            let targets : Array<DragonNode> = this.targets(node);
            let tids : string = targets.map((n)=>{return n.index}).toString();
            console.log(`${this.id}: check passed! running validation on nodes: ${tids}`)
            targets.forEach((tnode)=>{
                if(!this.validate(tnode)) {
                    console.log(`${this.id}: node ${tnode.index} FAILED validation, setting warning...`)
                    Rule.setWarning(tnode, this);
                }
            });
        }
        
    }

    static setWarning(node: DragonNode, rule: Rule) {
        node.meta.invalidData = true;
        node.meta.warnings.set(rule.id, rule.tooltip(node));
        if(node.tree.warnings[node.index] != null) 
            node.tree.warnings[node.index]!.add(rule.id);
        else
            node.tree.warnings[node.index] = new Set<string>([rule.id]);
    }

    static removeWarning(node: DragonNode, rule: Rule) {
        if(node.tree.warnings[node.index] != null) {
            node.tree.warnings[node.index]!.delete(rule.id);
            if(node.tree.warnings[node.index]!.size < 1)
                node.meta.invalidData = false;
        } 
        else 
            node.meta.invalidData = false;
        node.meta.warnings.delete(rule.id);
    }

    static targetFamily = (node: DragonNode) =>{
        let targets : Array<DragonNode> = [];
        targets.push(node);

        if(node.hasParents()) {
            targets.push(node.mother()!);
            targets.push(node.father()!);
        }
        if(node.index !== 0) {
            targets.push(node.child()!);
        }

        return targets;
    }

    static targetTree = (node: DragonNode) => {
        let targets : Array<DragonNode>;

        function notNull<DragonNode>(value: DragonNode | null): value is DragonNode {
            return value != null;
        }

        targets = node.tree.filter(notNull);
        return targets;
    }
}