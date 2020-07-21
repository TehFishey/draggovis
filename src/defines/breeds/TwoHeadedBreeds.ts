import Condition from '../../library/defines/Condition';
import Sprite from '../../library/defines/Sprite';
import Breed, { DragonType, DragonSubType, Affinity } from '../../library/defines/Breed';
import { Gender } from '../../library/defines/Dragon';

import SpriteFactory from '../_utilities/SpriteFactory';
import ConditionBuilder from '../_utilities/ConditionBuilder';
import ConditionFactory from '../_utilities/ConditionFactory';

class TwoHeadedBreed extends Breed {
    constructor(id: string, label: string, subType: DragonSubType, affinity: Array<Affinity>, sprites: Array<Sprite>, condition?: Condition) {
        super(id, label, DragonType.TwoHeaded, subType, affinity, "mf-mf", sprites, condition)
    }
}

let TwoHeadedBreeds: Array<Breed> = [
    new TwoHeadedBreed("baikala-dragon", "Baikala Dragon", DragonSubType.SeaSerpent, [Affinity.Water], [
        SpriteFactory.customSprite('baikala-b-f', "Blue ♀", true, ConditionBuilder.checkGender(Gender.Female)),
        SpriteFactory.customSprite('baikala-b-m', "Blue ♂", true, ConditionBuilder.checkGender(Gender.Male)),
        SpriteFactory.customSprite('baikala-g-f', "Green ♀", true, ConditionBuilder.checkGender(Gender.Female)),
        SpriteFactory.customSprite('baikala-g-m', "Green ♂", true, ConditionBuilder.checkGender(Gender.Male)),
    ]),
    new TwoHeadedBreed("bauta-dragon", "Bauta Dragon", DragonSubType.Western, [Affinity.None], SpriteFactory.uSprites("bauta")),
    new TwoHeadedBreed("blancblack-dragon", "Blancblack Dragon", DragonSubType.Eastern, [Affinity.Light, Affinity.Dark], SpriteFactory.mfSprites("blancblack")),
    new TwoHeadedBreed("duotone-dragon", "Duotone Dragon", DragonSubType.Western, [Affinity.None], SpriteFactory.mfSprites("duotone")),
    new TwoHeadedBreed("geminae-dragon", "Geminae Dragon", DragonSubType.Western, [Affinity.Magi], SpriteFactory.uSprites("geminae")),
    new TwoHeadedBreed("gilded-bloodscale-dragon", "Gilded Bloodscale Dragon", DragonSubType.Western, [Affinity.None], SpriteFactory.mfSprites("gilded-bloodscale")),
    new TwoHeadedBreed("hooktalon-dragon", "Hooktalon Dragon", DragonSubType.Western, [Affinity.None], SpriteFactory.mfSprites("hooktalon")),
    new TwoHeadedBreed("nexus-dragon", "Nexus Dragon", DragonSubType.Western, [Affinity.Dark], SpriteFactory.mfSprites("nexus")),
    new TwoHeadedBreed("split-dragon", "Split Dragon", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.mfSprites("split")),
    new TwoHeadedBreed("two-headed-lindwyrm", "Two-headed Lindwyrm", DragonSubType.Lindwyrm, [Affinity.Dark], [
        SpriteFactory.customSprite('two-headed-g-f', "Green ♀", true, 
            ConditionBuilder.and('Green ♀', [
                ConditionBuilder.checkGender(Gender.Female), 
                ConditionFactory.trueBredSprite("Green", [{id: 'two-headed-g-f', label : 'Green ♀'}, {id: 'two-headed-g-m', label : 'Green ♂'}])
            ])
        ),
        SpriteFactory.customSprite('two-headed-g-m', "Green ♂", true, 
            ConditionBuilder.and('Green ♂', [
                ConditionBuilder.checkGender(Gender.Male), 
                ConditionFactory.trueBredSprite("Green", [{id: 'two-headed-g-m', label : 'Green ♂'}, {id: 'two-headed-g-f', label : 'Green ♀'}])
            ])
        ),
        SpriteFactory.customSprite('two-headed-p-f', "Purple ♀", true, 
            ConditionBuilder.and('Purple ♀', [
                ConditionBuilder.checkGender(Gender.Female), 
                ConditionFactory.trueBredSprite("Purple", [{id: 'two-headed-p-f', label : 'Purple ♀'}, {id: 'two-headed-p-m', label : 'Purple ♂'}])
            ])
        ),
        SpriteFactory.customSprite('two-headed-p-m', "Purple ♂", true, 
            ConditionBuilder.and('Purple ♂', [
                ConditionBuilder.checkGender(Gender.Male), 
                ConditionFactory.trueBredSprite("Purple", [{id: 'two-headed-p-m', label : 'Purple ♂'}, {id: 'two-headed-p-f', label : 'Purple ♀'}])
            ])
        ),
    ]),
]

export default TwoHeadedBreeds;