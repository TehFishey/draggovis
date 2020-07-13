import DataManager, { executionStrategy, executionOutput } from "../DataManager";

import Tree from "../../library/controller/Tree";
import Controller from "./Controller";

export default class ImportPanelController extends Controller {
    constructor(parent: DataManager) {
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