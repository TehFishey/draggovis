import Portrait from '../../library/defines/Portrait';
import { Gender } from '../../library/defines/Dragon';

import PortraitFactory from '../_utilities/PortraitFactory';
import ConditionFactory from '../_utilities/ConditionFactory';


let neglectedPortraits: Array<Portrait> = [
    PortraitFactory.customPortrait('neglected-u', "Standard", true, ConditionFactory.checkGender(Gender.Undefined, "Standard")),
    PortraitFactory.customPortrait('neglected-m', "Standard ♂", true, ConditionFactory.checkGender(Gender.Male, "Standard ♂")),
    PortraitFactory.customPortrait('neglected-f', "Standard ♀", true, ConditionFactory.checkGender(Gender.Female, "Standard ♀")),
]

export default neglectedPortraits;