import Condition from "./Condition";

import DragonNode from "../controller/DragonNode";
import { TimeRange } from "./Time";

export default class Portrait {
    id: string;
    label: string;
    imagePath: string;
    thumbPath: string;
    isDefault: boolean;
    timeSwaps: Map<TimeRange, Array<Portrait>>;
    condition: Condition;

    constructor(id: string, label: string, isDefault: boolean, condition?: Condition, timeSwaps?: Map<TimeRange, Array<Portrait>>) {
        this.id = id || "undefined-portrait";
        this.label = label || "Undefined Portrait";
        this.imagePath = "art/" + this.id + ".png";
        this.thumbPath = "thumbs/" + this.id + ".png";
        this.isDefault = isDefault || true;
        this.condition = condition || {
            validate: (dragon: DragonNode) => {return true;},
            warning: `${this.label} is always valid.`
        }
        this.timeSwaps = timeSwaps || new Map<TimeRange, Array<Portrait>>();
    }

    hasTimeSwaps() : boolean {
        return this.timeSwaps.size > 0
    }

    static imgRoot = `${process.env.PUBLIC_URL}portraits/`
    static unkLargeImgPath = `${Portrait.imgRoot}/unknown_large.png`;
    static unkThumbImgPath = `${Portrait.imgRoot}/unknown_small.png`;

    private static getLargeImg(portrait : Portrait | null) : string {
        let path: string;
        if(portrait != null) {
            return path = Portrait.imgRoot+portrait.imagePath;}
        return Portrait.unkLargeImgPath;
    }

    private static getThumbImg(portrait : Portrait | null) : string {
        let path: string;
        if(portrait != null) return path = Portrait.imgRoot+portrait.thumbPath;
        return Portrait.unkThumbImgPath;
    }

    static getImgPath(portrait : Portrait | null, thumb?: boolean) : string {
        return (thumb) ? Portrait.getThumbImg(portrait) : Portrait.getLargeImg(portrait);
    }
};