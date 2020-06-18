import ControllerUtils from "../../controller/_utilities/Utilities";
import { Swaps } from "../../defines/Defines";

import Portrait from "../../library/defines/Portrait";
import { Time, TimeRange } from "../../library/defines/Time";
import DragonNode from "../../library/controller/DragonNode";
import { DragonState } from "../../library/defines/Dragon";

export default {
    /**
     * Returns the correct portrait image path for a DragonNode, accounting for state-based swaps 
     * (undead portraits, etc.) and time-based swaps as necessary.
     * 
     * @param node DragonNode to find image.
     * @param time Current view time context.
     * @param thumb Whether to return thumbnail path.
     * @returns image file path.
     */
    getImagePath(node: DragonNode, time: Time, thumb?: boolean) : string {
        let portrait = node.portrait;

        if(node.state !== DragonState.Healthy) {
            portrait = ControllerUtils.getDefaultPortrait(node, Swaps.dict.get(node.state)!);
        }

        if(portrait.hasTimeSwaps()) {
            portrait.timeSwaps.forEach((swapSet: Array<Portrait>, r: TimeRange) => {
                if(r.includes(time)) portrait = ControllerUtils.getDefaultPortrait(node, swapSet);
            });
        }

        return Portrait.getImgPath(portrait, thumb);
    }
}
