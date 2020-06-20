import Portrait from '../../library/defines/Portrait';

import PortraitFactory from '../_utilities/PortraitFactory';
import ConditionFactory from '../_utilities/ConditionFactory';

let deadCondition = ConditionFactory.alwaysTrue('Dead Dragon');

let deadPortraits: Array<Portrait> = [
    PortraitFactory.customPortrait('grave-default-u', "Default", true),
    PortraitFactory.customPortrait('grave-alpine-u', "Alpine", false, ConditionFactory.checkFirstGeneration("Alpine")),
    PortraitFactory.customPortrait('grave-coast-u', "Coast", false, ConditionFactory.checkFirstGeneration("Coast")),
    PortraitFactory.customPortrait('grave-desert-u', "Desert", false, ConditionFactory.checkFirstGeneration("Desert")),
    PortraitFactory.customPortrait('grave-jungle-u', "Jungle", false, ConditionFactory.checkFirstGeneration("Jungle")),
    PortraitFactory.customPortrait('grave-forest-u', "Forest", false, ConditionFactory.checkFirstGeneration("Forest")),
    PortraitFactory.customPortrait('grave-volcano-u', "Volcano", false, ConditionFactory.checkFirstGeneration("Volcano"))
]

export {deadPortraits, deadCondition};