import Condition from '../../library/defines/Condition';
import Portrait from '../../library/defines/Portrait';
import Breed, { DragonType, DragonSubType, Affinity } from '../../library/defines/Breed';
import { Gender } from '../../library/defines/Dragon';

import PortraitFactory from '../_utilities/PortraitFactory';
import ConditionFactory from '../_utilities/ConditionFactory';

class TwoHeadedBreed extends Breed {
    constructor(id: string, label: string, subType: DragonSubType, affinity: Array<Affinity>, portraits: Array<Portrait>, condition?: Condition) {
        super(id, label, DragonType.TwoHeaded, subType, affinity, "mf-mf", portraits, condition)
    }
}

let TwoHeadedBreeds: Array<Breed> = [
    new TwoHeadedBreed("baikala-dragon", "Baikala Dragon", DragonSubType.SeaSerpent, [Affinity.Water], [
        PortraitFactory.customPortrait('baikala-b-f', "Blue ♀", true, ConditionFactory.checkGender(Gender.Female)),
        PortraitFactory.customPortrait('baikala-b-m', "Blue ♂", true, ConditionFactory.checkGender(Gender.Male)),
        PortraitFactory.customPortrait('baikala-g-f', "Green ♀", true, ConditionFactory.checkGender(Gender.Female)),
        PortraitFactory.customPortrait('baikala-g-m', "Green ♂", true, ConditionFactory.checkGender(Gender.Male)),
    ]),
    new TwoHeadedBreed("bauta-dragon", "Bauta Dragon", DragonSubType.Western, [Affinity.None], PortraitFactory.uPortraits("bauta")),
    new TwoHeadedBreed("blancblack-dragon", "Blancblack Dragon", DragonSubType.Eastern, [Affinity.Light, Affinity.Dark], PortraitFactory.mfPortraits("blancblack")),
    new TwoHeadedBreed("duotone-dragon", "Duotone Dragon", DragonSubType.Western, [Affinity.None], PortraitFactory.mfPortraits("blancblack")),
    new TwoHeadedBreed("geminae-dragon", "Geminae Dragon", DragonSubType.Western, [Affinity.Magi], PortraitFactory.uPortraits("geminae")),
    new TwoHeadedBreed("gilded-bloodscale-dragon", "Gilded Bloodscale Dragon", DragonSubType.Western, [Affinity.None], PortraitFactory.mfPortraits("gilded-bloodscale")),
    new TwoHeadedBreed("hooktalon-dragon", "Hooktalon Dragon", DragonSubType.Western, [Affinity.None], PortraitFactory.mfPortraits("hooktalon")),
    new TwoHeadedBreed("nexus-dragon", "Nexus Dragon", DragonSubType.Western, [Affinity.Dark], PortraitFactory.mfPortraits("nexus")),
    new TwoHeadedBreed("split-dragon", "Split Dragon", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.mfPortraits("split")),
    new TwoHeadedBreed("two-headed-lindwyrm", "Two-headed Lindwyrm", DragonSubType.Lindwyrm, [Affinity.Dark], [
        PortraitFactory.customPortrait('two-headed-g-f', "Green ♀", true, ConditionFactory.checkGender(Gender.Female)),
        PortraitFactory.customPortrait('two-headed-g-m', "Green ♂", true, ConditionFactory.checkGender(Gender.Male)),
        PortraitFactory.customPortrait('two-headed-p-f', "Purple ♀", true, ConditionFactory.checkGender(Gender.Female)),
        PortraitFactory.customPortrait('two-headed-p-m', "Purple ♂", true, ConditionFactory.checkGender(Gender.Male)),
    ]),
]

export default TwoHeadedBreeds;