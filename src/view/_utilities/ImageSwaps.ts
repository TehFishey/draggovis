import Janitors from "../../controller/_utilities/Janitors";
import { Swaps } from "../../defines/Defines";

import Sprite from "../../library/defines/Sprite";
import TimeRange from "../../library/defines/TimeRange";
import DragonNode from "../../library/model/DragonNode";
import { DragonState } from "../../library/defines/Dragon";

/**
 * Helper functions intended for use by React components. Deal with selecting
 * proper Sprite images for Dragons based on different conditions and factors.
 */
export default {

    /**
     * Returns the correct sprite image path for a DragonNode, accounting for state-based swaps 
     * (undead sprites, etc.) and time-based swaps as necessary.
     * 
     * @param node DragonNode to find image.
     * @param time Current time context, as 'HH:MM:SS'.
     * @param thumb Whether to return thumbnail path.
     * @returns image file path.
     */
    getImgForNode(node: DragonNode, time: string, thumb?: boolean) : string {
        let sprite = node.sprite;

        if(node.state !== DragonState.Healthy) {
            sprite = Janitors.getDefaultSprite(node, Swaps.dict.get(node.state)!);
        }

        if(sprite.hasTimeSwaps()) {
            sprite.timeSwaps.forEach((swapSet: Array<Sprite>, r: TimeRange) => {
                if(r.includes(time)) sprite = Janitors.getDefaultSprite(node, swapSet);
            });
        }

        return Sprite.getImgPath(sprite, thumb);
    }
}
