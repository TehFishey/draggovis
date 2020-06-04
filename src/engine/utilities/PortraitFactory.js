import Portrait from '../library/Portrait';
import ConditionFactory from './PortraitConditionFactory';

export default {
    uPortraits(id) {
        let uId = id + "-u";
        let portrait = new Portrait(uId, "Standard", true);
        return { [uId] : portrait };
    },
    
    mfPortraits(id) {
        let mId = id + "-m";
        let fId = id + "-f";
        let mPortrait = new Portrait(mId, "Standard  ♂", true, ConditionFactory.checkGender("Male"));
        let fPortrait = new Portrait(fId, "Standard ♀", true, ConditionFactory.checkGender("Female")); 
    
        return { [mId] : mPortrait , [fId] : fPortrait };
    },
    
    uAltPortraits(id) {
        let uId = id + "-u";
        let uAltId = id + "-alt-u";
        let portrait = new Portrait(uId, "Standard", true);
        let altPortrait = new Portrait(uAltId, "Alt", false);
    
        return { [uId] : portrait , [uAltId] : altPortrait };
    },
    
    mfAltPortraits(id) {
        let mId = id + "-m";
        let fId = id + "-f";
        let mAltId = id + "-alt-m";
        let fAltId = id + "-alt-f";
    
        let mPortrait = new Portrait(mId, "Standard  ♂", true, ConditionFactory.checkGender("Male"));
        let fPortrait = new Portrait(fId, "Standard ♀", true, ConditionFactory.checkGender("Female")); 
        let mAltPortrait = new Portrait(mAltId, "Alt  ♂", false, ConditionFactory.checkGender("Male"));
        let fAltPortrait = new Portrait(fAltId, "Alt ♀", false, ConditionFactory.checkGender("Female")); 
    
        return { [mId] : mPortrait , [fId] : fPortrait , [mAltId] : mAltPortrait, [fAltId] : fAltPortrait };
    }
}
