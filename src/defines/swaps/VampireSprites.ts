import Sprite from '../../library/defines/Sprite';
import { Gender } from '../../library/defines/Dragon';

import SpriteFactory from '../_utilities/SpriteFactory';
import ConditionBuilder from '../_utilities/ConditionBuilder';
import { DragonType } from '../../library/defines/Breed';

let vampireCondition = ConditionBuilder.and("Vampire Dragon", [
    ConditionBuilder.checkLastGeneration("Vampire Dragon"),
    ConditionBuilder.checkType(DragonType.Dragon, undefined, "Vampire Dragon")
])

let vampireSprites: Array<Sprite> = [
    SpriteFactory.customSprite('vampire-m', "Standard ♂", true, ConditionBuilder.checkGender(Gender.Male, "Standard ♂")),
    SpriteFactory.customSprite('vampire-f', "Standard ♀", true, ConditionBuilder.checkGender(Gender.Female, "Standard ♀")),
]

export {vampireSprites, vampireCondition};