import DataManager, { executionStrategy, executionOutput } from "../DataManager";

import Tree from "../../library/controller/Tree";
import Controller from "./Controller";

export default class TemplatePanelController extends Controller {
    constructor(parent: DataManager) {
        super('TemplatePanel', parent);
    }

    implementTemplate(templateTree: Tree, validate: boolean=true) : Promise<executionOutput> {
        let strategy : executionStrategy = (tree: Tree) => {
            tree.replaceTree(templateTree);
            return undefined;
        };

        return this.executeStrategy(strategy);
    }
}