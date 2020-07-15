import DragonNode from "./DragonNode";

type ruleCheck = (node: DragonNode) => boolean;
type ruleTargets = (node: DragonNode) => Array<DragonNode>;
type ruleValidate = (node: DragonNode) => boolean | [boolean, string];

export default class Rule {
    readonly id: string;
    readonly check: ruleCheck;
    readonly targets: ruleTargets;
    readonly validate: ruleValidate;
    readonly tooltip: string;

    constructor(id: string, check: ruleCheck, targets: ruleTargets, validate: ruleValidate, tooltip: string) {
        this.id = id;
        this.check = check;
        this.targets = targets;
        this.validate = validate;
        this.tooltip = tooltip;
    }

    static targetFamily = (node: DragonNode) => {
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