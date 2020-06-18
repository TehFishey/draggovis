import Condition from '../../library/defines/Condition';
import Portrait from '../../library/defines/Portrait';
import Breed, { DragonType, DragonSubType } from '../../library/defines/Breed';
import { Gender } from '../../library/defines/Dragon';

import PortraitFactory from '../_utilities/PortraitFactory';
import ConditionFactory from '../_utilities/ConditionFactory';

class TwoHeadedBreed extends Breed {
    constructor(id: string, label: string, subType: DragonSubType, portraits: Array<Portrait>, condition?: Condition) {
        super(id, label, DragonType.TwoHeaded, subType, "mf-mf", portraits, condition)
    }
}

let TwoHeadedBreeds: Array<Breed> = [
    new TwoHeadedBreed("baikala-dragon", "Baikala Dragon", DragonSubType.SeaSerpent, [
        PortraitFactory.customPortrait('baikala-b-f', "Blue", true, ConditionFactory.checkGender(Gender.Female)),
        PortraitFactory.customPortrait('baikala-b-m', "Blue", true, ConditionFactory.checkGender(Gender.Male)),
        PortraitFactory.customPortrait('baikala-g-f', "Green", true, ConditionFactory.checkGender(Gender.Female)),
        PortraitFactory.customPortrait('baikala-g-m', "Green", true, ConditionFactory.checkGender(Gender.Male)),
    ]),
    new TwoHeadedBreed("bauta-dragon", "Bauta Dragon", DragonSubType.Western, PortraitFactory.uPortraits("bauta")),
    new TwoHeadedBreed("blancblack-dragon", "Blancblack Dragon", DragonSubType.Eastern, PortraitFactory.mfPortraits("blancblack")),
    new TwoHeadedBreed("duotone-dragon", "Duotone Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("blancblack")),
    new TwoHeadedBreed("geminae-dragon", "Geminae Dragon", DragonSubType.Western, PortraitFactory.uPortraits("geminae")),
    new TwoHeadedBreed("gilded-bloodscale-dragon", "Gilded Bloodscale Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("gilded-bloodscale")),
    new TwoHeadedBreed("hooktalon-dragon", "Hooktalon Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("hooktalon")),
    new TwoHeadedBreed("nexus-dragon", "Nexus Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("nexus")),
    new TwoHeadedBreed("split-dragon", "Split Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("split")),
    new TwoHeadedBreed("two-headed-lindwyrm", "Two-headed Lindwyrm", DragonSubType.Lindwyrm, [
        PortraitFactory.customPortrait('two-headed-g-f', "Green", true, ConditionFactory.checkGender(Gender.Female)),
        PortraitFactory.customPortrait('two-headed-g-m', "Green", true, ConditionFactory.checkGender(Gender.Male)),
        PortraitFactory.customPortrait('two-headed-p-f', "Purple", true, ConditionFactory.checkGender(Gender.Female)),
        PortraitFactory.customPortrait('two-headed-p-m', "Purple", true, ConditionFactory.checkGender(Gender.Male)),
    ]),
]

export default TwoHeadedBreeds;