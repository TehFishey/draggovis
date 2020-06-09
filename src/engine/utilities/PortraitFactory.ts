import Portrait from '../library/Portrait';
import ConditionFactory from './ConditionFactory';
import Condition from '../library/Condition';

export default {
    customPortrait(id: string, label: string, isDefault: boolean, condition?: Condition) {
        let portrait = new Portrait(id, label, isDefault, condition);

        return {[id] : portrait};
    },

    uPortraits(id: string) {
        let uId = id + "-u";
        let portrait = new Portrait(uId, "Standard", true);

        let dict: any = { [uId] : portrait };
        return dict;
    },
    
    mfPortraits(id: string) {
        let mId: string = id + "-m";
        let fId: string = id + "-f";
        let mPortrait = new Portrait(mId, "Standard ♂", true, ConditionFactory.checkGender("Male", "Standard ♂"));
        let fPortrait = new Portrait(fId, "Standard ♀", true, ConditionFactory.checkGender("Female", "Standard ♀")); 
        
        let dict: any = { [mId] : mPortrait , [fId] : fPortrait };
        return dict;
    },
    
    uAltPortraits(id: string) {
        let uId = id + "-u";
        let uAltId = id + "-alt-u";
        let portrait = new Portrait(uId, "Standard", true);
        let altPortrait = new Portrait(uAltId, "Alt", false);
    
        let dict: any = { [uId] : portrait , [uAltId] : altPortrait };
        return dict;
    },
    
    mfAltPortraits(id: string) {
        let mId = id + "-m";
        let fId = id + "-f";
        let mAltId = id + "-alt-m";
        let fAltId = id + "-alt-f";
    
        let mPortrait = new Portrait(mId, "Standard ♂", true, ConditionFactory.checkGender("Male", "Standard ♂"));
        let fPortrait = new Portrait(fId, "Standard ♀", true, ConditionFactory.checkGender("Female", "Standard ♀")); 
        let mAltPortrait = new Portrait(mAltId, "Alt ♂", false, ConditionFactory.checkGender("Male", "Alt ♂"));
        let fAltPortrait = new Portrait(fAltId, "Alt ♀", false, ConditionFactory.checkGender("Female", "Alt ♀")); 
    
        let dict: any = { [mId] : mPortrait , [fId] : fPortrait , [mAltId] : mAltPortrait, [fAltId] : fAltPortrait };

        return dict;
    }
}
