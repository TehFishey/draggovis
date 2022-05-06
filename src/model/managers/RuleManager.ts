import DragonNode from "../../library/model/DragonNode";
import Rule from "../../library/model/Rule";
import Tree from "../../library/model/Tree";

import { Rules } from "../../defines/Defines";

export default class RuleManager {
    readonly tree : Tree;

    constructor(tree: Tree) {
        this.tree = tree;
    }

    validateNodes(nodeIds? : Array<number>) {
        let nodes : Array<DragonNode> = (nodeIds != null) ? 
            nodeIds.map((index : number) => {
                if(this.tree[index] != null) 
                    return this.tree[index]!;
                else 
                    throw new Error(`RuleManager: node index '${index}' was marked for validation, but node no longer exists!`);
            }) :
            this.tree.filter((node : DragonNode | null) => {return node != null}) as Array<DragonNode>;
        let targetData : Array<Set<string>> = this.getRuleTargets(nodes);

        targetData.forEach((ruleIds : Set<string>, index : number) => {
            let node : DragonNode = this.tree[index]!;

            ruleIds.forEach((id : string) => {
                let rule : Rule = Rules.dict.get(id)!;
                this.executeRule(rule, node);
            })
        });
    };

    updateWarnings() {
        if(this.tree.warnings.length !== 0) {
            this.tree.warnings.forEach((ruleIds : Set<string> | null, index) => {
                if(ruleIds != null) {
                    if(this.tree[index] != null) {
                        let node: DragonNode = this.tree[index]!;
                        ruleIds.forEach((id : string) => {
                            let rule = Rules.dict.get(id)!;
                            this.executeRule(rule, node);
                        });
                    }
                    else throw new Error(`Controller: node index ${index} has warnings, but does not exist in tree!`)
                }
            });
        }
    }

    private getRuleTargets(nodes : Array<DragonNode>) : Array<Set<string>> {
        let out : Array<Set<string>> = [];
        
        nodes.forEach((node: DragonNode) => {
            Rules.arr.forEach((rule : Rule) => {
                if(rule.check(node)) {
                    rule.targets(node).forEach((target: DragonNode) => {
                        if(out[target.index] != null) out[target.index].add(rule.id);
                        else out[target.index] = new Set<string>([rule.id]);
                    })
                }
            })
        });

        return out;
    }

    private executeRule(rule: Rule, node: DragonNode) {
        console.log(`checking rule ${rule.id} against node ${node.index}`)
        let result = rule.validate(node);
        if(typeof result === 'boolean' && !result)
            this.setWarning(node, rule, rule.tooltip);
        else if(result instanceof Array && !result[0])
            this.setWarning(node, rule, rule.tooltip+result[1]);
        else
            this.removeWarning(node, rule);
    }

    private setWarning(node: DragonNode, rule: Rule, tooltip: string) {
        node.meta.invalidData = true;
        node.meta.warnings.set(rule.id, tooltip);
        if(node.tree.warnings[node.index] != null) 
            node.tree.warnings[node.index]!.add(rule.id);
        else
            node.tree.warnings[node.index] = new Set<string>([rule.id]);
    }

    private removeWarning(node: DragonNode, rule: Rule) {
        if(node.tree.warnings[node.index] != null) {
            node.tree.warnings[node.index]!.delete(rule.id);
            if(node.tree.warnings[node.index]!.size < 1)
                node.meta.invalidData = false;
        } 
        else 
            node.meta.invalidData = false;
        node.meta.warnings.delete(rule.id);
    }

}