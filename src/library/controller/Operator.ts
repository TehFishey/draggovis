import Model, { executionStrategy, executionOutput } from "../../model/Model";

export default abstract class Operator {
    readonly id : string;
    readonly parent : Model;

    constructor(id: string, parent: Model) {
        this.id = id;
        this.parent = parent;
    }

    protected executeStrategy(strategy : executionStrategy) : Promise<executionOutput> {
        return this.parent.updateTree(strategy);
    }
}