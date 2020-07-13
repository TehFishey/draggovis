import DataManager, { executionStrategy, executionOutput } from "../DataManager";

export default class Controller {
    readonly id : string;
    readonly parent : DataManager;

    constructor(id: string, parent: DataManager) {
        this.id = id;
        this.parent = parent;
    }

    protected executeStrategy(strategy : executionStrategy) : Promise<executionOutput> {
        return this.parent.updateTree(strategy);
    }
}