import Condition from "./Condition";
import DragonNode from "./DragonNode";

type nodeReference = (node: DragonNode) => any;

export default class Rule extends Condition {
    tooltip: nodeReference;

    constructor(validate: nodeReference, tooltip: nodeReference) {
        super(validate, "");
        this.tooltip = tooltip;
    }
}