import ConditionFactory from './ConditionFactory';

import Portrait from "../../library/defines/Portrait";
import Condition from "../../library/defines/Condition";
import TimeRange from '../../library/defines/TimeRange';
import { Gender } from "../../library/defines/Dragon";

export type TimeSwapDefine = {
    range: TimeRange,
    portraits: Array<Portrait>
}

/**
 * Factory functions for quickly creating sets of Portrait objects, conforming to common patterns seen
 * on DC. Output is intended to serve as input in Breed definitions.
 */
export default {

    /**
     * Helper function for defining an individual Portrait object.
     * @param id backend uid
     * @param label frontend label
     * @param isDefault if Portrait is a valid default option
     * @param condition Condition defining criterea for Portrait validation
     * @param swaps Definitions for portrait timeswaps (if any)
     */
    customPortrait(id: string, label: string, isDefault: boolean, condition?: Condition, swaps?: Array<TimeSwapDefine>) {
        let portrait = new Portrait(id, label, isDefault, condition);
        if(swaps != null) {
            swaps.forEach((define) => {
                portrait.timeSwaps.set(define.range, define.portraits);
            })
        }

        return portrait;
    },

    /**
     * Factory function; defines Portraits array for Breeds with only one Portrait.
     * @param id backend uid
     */
    uPortraits(id: string) {
        let uId = id + "-u";
        let portrait = new Portrait(uId, "Standard", true);

        return [portrait];
    },
    
    /**
     * Factory function; defines Portraits array for Breeds with two dimorphic Portraits.
     * @param id backend uid
     */
    mfPortraits(id: string) {
        let mId: string = id + "-m";
        let fId: string = id + "-f";
        let mPortrait = new Portrait(mId, "Standard ♂", true, ConditionFactory.checkGender(Gender.Male, "Standard ♂"));
        let fPortrait = new Portrait(fId, "Standard ♀", true, ConditionFactory.checkGender(Gender.Female, "Standard ♀")); 
        
        return [mPortrait,fPortrait];
    },
    
    /**
     * Factory function; defines Portraits array for Breeds with one standard Portrait and one alt Portrait.
     * @param id backend uid
     */
    uAltPortraits(id: string) {
        let uId = id + "-u";
        let uAltId = id + "-alt-u";
        let portrait = new Portrait(uId, "Standard", true);
        let altPortrait = new Portrait(uAltId, "Alt", false);
    
        return [portrait,altPortrait];
    },
    
    /**
     * Factory function; defines Portraits array for Breeds with two dimorphic Portraits and two dimorphic
     * alt Portraits.
     * @param id backend uid
     */
    mfAltPortraits(id: string) {
        let mId = id + "-m";
        let fId = id + "-f";
        let mAltId = id + "-alt-m";
        let fAltId = id + "-alt-f";
    
        let mPortrait = new Portrait(mId, "Standard ♂", true, ConditionFactory.checkGender(Gender.Male, "Standard ♂"));
        let fPortrait = new Portrait(fId, "Standard ♀", true, ConditionFactory.checkGender(Gender.Female, "Standard ♀")); 
        let mAltPortrait = new Portrait(mAltId, "Alt ♂", false, ConditionFactory.checkGender(Gender.Male, "Alt ♂"));
        let fAltPortrait = new Portrait(fAltId, "Alt ♀", false, ConditionFactory.checkGender(Gender.Female, "Alt ♀")); 

        return [mPortrait,fPortrait,mAltPortrait,fAltPortrait];
    }
}
