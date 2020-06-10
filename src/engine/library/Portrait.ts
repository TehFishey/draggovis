import DragonNode from "./DragonNode";
import Condition from "./Condition";

export default class Portrait {
    id: string;
    label: string;
    imagePath: string;
    thumbPath: string;
    isDefault: boolean;
    condition: Condition;

    constructor(id: string, label: string, isDefault: boolean, condition?: Condition) {
        this.id = id || "undefined-portrait";
        this.label = label || "Undefined Portrait";
        this.imagePath = "art/" + this.id + ".png";
        this.thumbPath = "thumbs/" + this.id + ".png";
        this.isDefault = isDefault || true;
        this.condition = condition || {
            validate: (dragon: DragonNode) => {return true;},
            warning: `${this.label} is always valid.`
        }
    }
};