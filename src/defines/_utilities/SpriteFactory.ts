import ConditionBuilder from './ConditionBuilder';

import Sprite from "../../library/defines/Sprite";
import Condition from "../../library/defines/Condition";
import TimeRange from '../../library/defines/TimeRange';
import { Gender } from "../../library/defines/Dragon";

export type TimeSwapDefine = {
    range: TimeRange,
    sprites: Array<Sprite>
}

/**
 * Factory functions for quickly creating sets of Sprite objects, conforming to common patterns seen
 * on DC. Output is intended to serve as input in Breed definitions.
 */
export default {

    /**
     * Helper function for defining an individual Sprite object.
     * @param id backend uid
     * @param label frontend label
     * @param isDefault if Sprite is a valid default option
     * @param condition Condition defining criterea for Sprite validation
     * @param swaps Definitions for sprite timeswaps (if any)
     */
    customSprite(id: string, label: string, isDefault: boolean, condition?: Condition, swaps?: Array<TimeSwapDefine>) {
        let sprite = new Sprite(id, label, isDefault, condition);
        if(swaps != null) {
            swaps.forEach((define) => {
                sprite.timeSwaps.set(define.range, define.sprites);
            })
        }

        return sprite;
    },

    /**
     * Factory function; defines Sprites array for Breeds with only one Sprite.
     * @param id backend uid
     */
    uSprites(id: string) {
        let uId = id + "-u";
        let sprite = new Sprite(uId, "Standard", true);

        return [sprite];
    },
    
    /**
     * Factory function; defines Sprites array for Breeds with two dimorphic Sprites.
     * @param id backend uid
     */
    mfSprites(id: string) {
        let mId: string = id + "-m";
        let fId: string = id + "-f";
        let mSprite = new Sprite(mId, "Standard ♂", true, ConditionBuilder.checkGender(Gender.Male, "Standard ♂"));
        let fSprite = new Sprite(fId, "Standard ♀", true, ConditionBuilder.checkGender(Gender.Female, "Standard ♀")); 
        
        return [mSprite,fSprite];
    },
    
    /**
     * Factory function; defines Sprites array for Breeds with one standard Sprite and one alt Sprite.
     * @param id backend uid.
     * @param firstGen is alt sprite available to first-gen dragons?
     */
    uAltSprites(id: string, firstGen? : boolean) {
        let uId = id + "-u";
        let uAltId = id + "-alt-u";

        let sprite = new Sprite(uId, "Standard", true);
        let altSprite : Sprite;

        if(firstGen) 
            altSprite = new Sprite(uAltId, "Alt", false);
        else 
            altSprite = new Sprite(uAltId, "Alt", false, ConditionBuilder.checkFirstGeneration('Alt', true))
    
        return [sprite,altSprite];
    },
    
    /**
     * Factory function; defines Sprites array for Breeds with two dimorphic Sprites and two dimorphic
     * alt Sprites.
     * @param id backend uid.
     * @param firstGen is alt sprite available to first-gen dragons?
     */
    mfAltSprites(id: string, firstGen? : boolean) {
        let mId = id + "-m";
        let fId = id + "-f";
        let mAltId = id + "-alt-m";
        let fAltId = id + "-alt-f";

        let mSprite = new Sprite(mId, "Standard ♂", true, ConditionBuilder.checkGender(Gender.Male, "Standard ♂"));
        let fSprite = new Sprite(fId, "Standard ♀", true, ConditionBuilder.checkGender(Gender.Female, "Standard ♀"));
        let mAltSprite : Sprite;
        let fAltSprite : Sprite;

        if(firstGen) {
            mAltSprite = new Sprite(mAltId, "Alt ♂", false, ConditionBuilder.checkGender(Gender.Male, "Alt ♂"));
            fAltSprite = new Sprite(fAltId, "Alt ♀", false, ConditionBuilder.checkGender(Gender.Female, "Alt ♀")); 
        }
        else {
            mAltSprite = new Sprite(mAltId, "Alt ♂", false, ConditionBuilder.and("Alt ♂", [
                ConditionBuilder.checkGender(Gender.Male),
                ConditionBuilder.checkFirstGeneration('Alt', true)
            ]));
            fAltSprite = new Sprite(fAltId, "Alt ♀", false, ConditionBuilder.and("Alt ♀", [
                ConditionBuilder.checkGender(Gender.Female),
                ConditionBuilder.checkFirstGeneration('Alt', true)
            ]));
        }
        
        return [mSprite,fSprite,mAltSprite,fAltSprite];
    }
}
