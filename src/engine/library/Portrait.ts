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

    static imgRoot = `${process.env.PUBLIC_URL}portraits/`
    static unkLargeImgPath = `${Portrait.imgRoot}/unknown_large.png`;
    static unkThumbImgPath = `${Portrait.imgRoot}/unknown_small.png`;

    static getLargeImg(portrait : Portrait | null) : string {
        let path: string;
        if(portrait != null) return path = Portrait.imgRoot+portrait.imagePath;
        return Portrait.unkLargeImgPath;
    }

    static getThumbImg(portrait : Portrait | null) : string {
        let path: string;
        if(portrait != null) return path = Portrait.imgRoot+portrait.thumbPath;
        return Portrait.unkThumbImgPath;
    }
};