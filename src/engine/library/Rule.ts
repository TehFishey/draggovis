import Condition from "./Condition";
import {nodeReference} from "./DragonNode";

export default class Rule extends Condition {
    tooltip: nodeReference;

    constructor(validate: nodeReference, tooltip: nodeReference) {
        super(validate, "");
        this.tooltip = tooltip;
    }
}