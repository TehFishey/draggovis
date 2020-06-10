import DragonNode from "./DragonNode";

type nodeReference = (node: DragonNode) => any;

export default class Condition {
    validate: nodeReference;
    warning: string;

    constructor(validate: nodeReference, warning: string) {
        this.validate = validate
        this.warning = warning
    }
};