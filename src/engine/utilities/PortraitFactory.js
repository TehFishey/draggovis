import Portrait from '../library/Portrait';
import ConditionFactory from './PortraitConditionFactory';

export default {
    uPortraits(id) {
        let uId = id + "-u";
        let portrait = new Portrait(uId, "Normal", true);
        return { uId : portrait };
    },
    
    mfPortraits(id) {
        let mId = id + "-m";
        let fId = id + "-f";
        let mPortrait = new Portrait(mId, "Normal", true, ConditionFactory.genderCheck("Male"));
        let fPortrait = new Portrait(fId, "Normal", true, ConditionFactory.genderCheck("Female")); 
    
        return { mId : mPortrait , fId : fPortrait };
    },
    
    uAltPortraits(id) {
        let uId = id + "-u";
        let uAltId = id + "-alt-u";
        let portrait = new Portrait(uId, "Normal", true);
        let altPortrait = new Portrait(uAltId, "Alt", false);
    
        return { uId : portrait , uAltId : altPortrait };
    },
    
    mfAltPortraits(id) {
        let mId = id + "-m";
        let fId = id + "-f";
        let mAltId = id + "-alt-m";
        let fAltId = id + "-alt-f";
    
        let mPortrait = new Portrait(mId, "Normal", true, ConditionFactory.genderCheck("Male"));
        let fPortrait = new Portrait(fId, "Normal", true, ConditionFactory.genderCheck("Female")); 
        let mAltPortrait = new Portrait(mAltId, "Alt", false, ConditionFactory.genderCheck("Male"));
        let fAltPortrait = new Portrait(fAltId, "Alt", false, ConditionFactory.genderCheck("Female")); 
    
        return { mId : mPortrait , fId : fPortrait , mAltId : mAltPortrait, fAltId : fAltPortrait };
    }
}
