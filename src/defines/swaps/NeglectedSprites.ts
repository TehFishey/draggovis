import Sprite from '../../library/defines/Sprite';
import { Gender } from '../../library/defines/Dragon';

import SpriteFactory from '../_utilities/SpriteFactory';
import ConditionBuilder from '../_utilities/ConditionBuilder';

let neglectedCondition = ConditionBuilder.checkLastGeneration('Neglected Dragon');

let neglectedSprites: Array<Sprite> = [
    SpriteFactory.customSprite('neglected-u', "Standard", true, ConditionBuilder.checkGender(Gender.Undefined, "Standard")),
    SpriteFactory.customSprite('neglected-m', "Standard ♂", true, ConditionBuilder.checkGender(Gender.Male, "Standard ♂")),
    SpriteFactory.customSprite('neglected-f', "Standard ♀", true, ConditionBuilder.checkGender(Gender.Female, "Standard ♀")),
]

export {neglectedSprites, neglectedCondition};