import DragonNode from "./DragonNode";

type nodeReference = (node: DragonNode) => any;

export default class Condition {
    validate: nodeReference;
    tooltip: string;

    constructor(validate: nodeReference, tooltip: string) {
        this.validate = validate
        this.tooltip = tooltip
    }
};