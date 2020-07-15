import Model, { executionStrategy, executionOutput } from "../../model/Model";

import Tree from "../../library/controller/Tree";
import Operator from "./_Operator";

export default class TemplatePanelOperator extends Operator {
    constructor(target: Model) {
        super('TemplatePanel', target);
    }

    implementTemplate(templateTree: Tree, validate: boolean=true) : Promise<executionOutput> {
        let strategy : executionStrategy = (tree: Tree) => {
            tree.replaceTree(templateTree);
            return undefined;
        };

        return this.executeStrategy(strategy);
    }
}