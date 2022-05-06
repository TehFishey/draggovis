import Sprite from '../../library/defines/Sprite';

import SpriteFactory from '../_utilities/SpriteFactory';
import ConditionBuilder from '../_utilities/ConditionBuilder';

let deadCondition = ConditionBuilder.alwaysTrue('Dead Dragon');

let deadSprites: Array<Sprite> = [
    SpriteFactory.customSprite('grave-default-u', "Default", true),
    SpriteFactory.customSprite('grave-alpine-u', "Alpine", false, ConditionBuilder.checkFirstGeneration("Alpine")),
    SpriteFactory.customSprite('grave-coast-u', "Coast", false, ConditionBuilder.checkFirstGeneration("Coast")),
    SpriteFactory.customSprite('grave-desert-u', "Desert", false, ConditionBuilder.checkFirstGeneration("Desert")),
    SpriteFactory.customSprite('grave-jungle-u', "Jungle", false, ConditionBuilder.checkFirstGeneration("Jungle")),
    SpriteFactory.customSprite('grave-forest-u', "Forest", false, ConditionBuilder.checkFirstGeneration("Forest")),
    SpriteFactory.customSprite('grave-volcano-u', "Volcano", false, ConditionBuilder.checkFirstGeneration("Volcano"))
]

export {deadSprites, deadCondition};