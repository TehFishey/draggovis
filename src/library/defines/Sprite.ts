import Condition from "./Condition";

import TimeRange from "./TimeRange";

export default class Sprite {
    id: string;
    label: string;
    imagePath: string;
    thumbPath: string;
    isDefault: boolean;
    timeSwaps: Map<TimeRange, Array<Sprite>>;
    condition: Condition;

    constructor(id: string, label: string, isDefault=true, condition=new Condition(), timeSwaps=new Map<TimeRange, Array<Sprite>>()) {
        this.id = id || "undefined-sprite";
        this.label = label || "Undefined Sprite";
        this.imagePath = "art/" + this.id + ".png";
        this.thumbPath = "thumbs/" + this.id + ".png";
        this.isDefault = isDefault;
        this.condition = condition;
        this.timeSwaps = timeSwaps
    }

    hasTimeSwaps() : boolean {
        return this.timeSwaps.size > 0
    }

    static imgRoot = `./sprites/`
    static unkLargeImgPath = `${Sprite.imgRoot}/unknown_large.png`;
    static unkThumbImgPath = `${Sprite.imgRoot}/unknown_small.png`;

    private static getLargeImg(sprite : Sprite | null) : string {
        if(sprite != null) 
            return Sprite.imgRoot+sprite.imagePath;
        return Sprite.unkLargeImgPath;
    }

    private static getThumbImg(sprite : Sprite | null) : string {
        if(sprite != null) 
            return Sprite.imgRoot+sprite.thumbPath;
        return Sprite.unkThumbImgPath;
    }

    static getImgPath(sprite : Sprite | null, thumb?: boolean) : string {
        return (thumb) ? Sprite.getThumbImg(sprite) : Sprite.getLargeImg(sprite);
    }
};