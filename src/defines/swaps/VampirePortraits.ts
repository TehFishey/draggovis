import Portrait from '../../library/defines/Portrait';
import { Gender } from '../../library/defines/Dragon';

import PortraitFactory from '../_utilities/PortraitFactory';
import ConditionFactory from '../_utilities/ConditionFactory';
import { DragonType } from '../../library/defines/Breed';

let vampireCondition = ConditionFactory.and("Vampire Dragon", [
    ConditionFactory.checkLastGeneration("Vampire Dragon"),
    ConditionFactory.checkType(DragonType.Dragon, undefined, "Vampire Dragon")
])

let vampirePortraits: Array<Portrait> = [
    PortraitFactory.customPortrait('vampire-m', "Standard ♂", true, ConditionFactory.checkGender(Gender.Male, "Standard ♂")),
    PortraitFactory.customPortrait('vampire-f', "Standard ♀", true, ConditionFactory.checkGender(Gender.Female, "Standard ♀")),
]

export {vampirePortraits, vampireCondition};