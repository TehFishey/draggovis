import ConditionFactory from './ConditionFactory';

import Condition from "../../library/defines/Condition";
import { Gender } from "../../library/defines/Dragon";
import Portrait from "../../library/defines/Portrait";
import { TimeRange } from '../../library/defines/Time';

export type TimeSwapDefine = {
    range: TimeRange,
    portraits: Array<Portrait>
}

export default {
    customPortrait(id: string, label: string, isDefault: boolean, condition?: Condition, swaps?: Array<TimeSwapDefine>) {
        let portrait = new Portrait(id, label, isDefault, condition);
        if(swaps != null) {
            swaps.forEach((define) => {
                portrait.timeSwaps.set(define.range, define.portraits);
            })
        }

        return portrait;
    },

    uPortraits(id: string) {
        let uId = id + "-u";
        let portrait = new Portrait(uId, "Standard", true);

        return [portrait];
    },
    
    mfPortraits(id: string) {
        let mId: string = id + "-m";
        let fId: string = id + "-f";
        let mPortrait = new Portrait(mId, "Standard ♂", true, ConditionFactory.checkGender(Gender.Male, "Standard ♂"));
        let fPortrait = new Portrait(fId, "Standard ♀", true, ConditionFactory.checkGender(Gender.Female, "Standard ♀")); 
        
        return [mPortrait,fPortrait];
    },
    
    uAltPortraits(id: string) {
        let uId = id + "-u";
        let uAltId = id + "-alt-u";
        let portrait = new Portrait(uId, "Standard", true);
        let altPortrait = new Portrait(uAltId, "Alt", false);
    
        return [portrait,altPortrait];
    },
    
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
