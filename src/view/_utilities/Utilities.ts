import ControllerUtils from "../../controller/_utilities/Utilities";
import { Swaps } from "../../defines/Defines";

import Portrait from "../../library/defines/Portrait";
import { TimeRange } from "../../library/defines/Time";
import DragonNode from "../../library/controller/DragonNode";
import Dragon, { DragonState, Gender } from "../../library/defines/Dragon";

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
    getImagePath(node: DragonNode, time: string, thumb?: boolean) : string {
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
    },

    getGenderOptions(node: DragonNode) {
        let options = [];

        if(node.index !== 0) 
            return [{value: node.gender, label: node.gender}];
        else {
            options.push(
                {value: Gender.Male, label: Gender.Male}, 
                {value: Gender.Female, label: Gender.Female}
            );
            if (node.state === DragonState.Vampire || node.state === DragonState.Neglected) {
                options.push(
                    {value: Gender.Undefined, label: Gender.Undefined}
                );
            }
            return options;
        }
    }
}
