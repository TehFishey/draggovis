import Model, { executionStrategy, executionOutput } from "../../model/Model";

import Tree from "../../library/controller/Tree";
import Operator from "./_Operator";

export default class ImportPanelOperator extends Operator {
    constructor(parent: Model) {
        super('ImportPanel', parent);
    }

    import(ioString: string) : Promise<executionOutput> {
        let strategy : executionStrategy = (tree: Tree) => {
            let newTree: Tree = this.parent.IOManager.import(ioString);
            tree.replaceTree(newTree);
            return undefined;
        };

        return this.executeStrategy(strategy);
    }
}