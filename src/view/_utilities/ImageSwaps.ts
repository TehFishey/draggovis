import Janitors from "../../controller/_utilities/Janitors";
import { Swaps } from "../../defines/Defines";

import Portrait from "../../library/defines/Portrait";
import TimeRange from "../../library/defines/TimeRange";
import DragonNode from "../../library/controller/DragonNode";
import { DragonState, Gender } from "../../library/defines/Dragon";

/**
 * Helper functions intended for use by React components. Deal with selecting
 * proper Portrait images for Dragons based on different conditions and factors.
 */
export default {

    /**
     * Returns the correct portrait image path for a DragonNode, accounting for state-based swaps 
     * (undead portraits, etc.) and time-based swaps as necessary.
     * 
     * @param node DragonNode to find image.
     * @param time Current time context, as 'HH:MM:SS'.
     * @param thumb Whether to return thumbnail path.
     * @returns image file path.
     */
    getImgForNode(node: DragonNode, time: string, thumb?: boolean) : string {
        let portrait = node.portrait;

        if(node.state !== DragonState.Healthy) {
            portrait = Janitors.getDefaultPortrait(node, Swaps.dict.get(node.state)!);
        }

        if(portrait.hasTimeSwaps()) {
            portrait.timeSwaps.forEach((swapSet: Array<Portrait>, r: TimeRange) => {
                if(r.includes(time)) portrait = Janitors.getDefaultPortrait(node, swapSet);
            });
        }

        return Portrait.getImgPath(portrait, thumb);
    }
}
