import Breed from '../../library/Breed';
import Portrait from '../../library/Portrait';
import PortraitFactory from '../../utilities/PortraitFactory';
import ConditionFactory from '../../utilities/ConditionFactory';
import Condition from '../../library/Condition';

class TwoHeadedBreed extends Breed {
    constructor(id: string, label: string, portraits: Array<Portrait>, condition?: Condition) {
        super(id, label, "twohead", "mf-mf", portraits, condition)
    }
}

let TwoHeadedBreeds: Array<Breed> = [
    new TwoHeadedBreed("baikala-dragon", "Baikala Dragon", [
        PortraitFactory.customPortrait('baikala-b-f', "Blue", true, ConditionFactory.checkGender("Female")),
        PortraitFactory.customPortrait('baikala-b-m', "Blue", true, ConditionFactory.checkGender("Male")),
        PortraitFactory.customPortrait('baikala-g-f', "Green", true, ConditionFactory.checkGender("Female")),
        PortraitFactory.customPortrait('baikala-g-m', "Green", true, ConditionFactory.checkGender("Male")),
    ]),
    new TwoHeadedBreed("bauta-dragon", "Bauta Dragon", PortraitFactory.uPortraits("bauta")),
    new TwoHeadedBreed("blancblack-dragon", "Blancblack Dragon", PortraitFactory.mfPortraits("blancblack")),
    new TwoHeadedBreed("duotone-dragon", "Duotone Dragon", PortraitFactory.mfPortraits("blancblack")),
    new TwoHeadedBreed("geminae-dragon", "Geminae Dragon", PortraitFactory.uPortraits("geminae")),
    new TwoHeadedBreed("gilded-bloodscale-dragon", "Gilded Bloodscale Dragon", PortraitFactory.mfPortraits("gilded-bloodscale")),
    new TwoHeadedBreed("hooktalon-dragon", "Hooktalon Dragon", PortraitFactory.mfPortraits("hooktalon")),
    new TwoHeadedBreed("nexus-dragon", "Nexus Dragon", PortraitFactory.mfPortraits("nexus")),
    new TwoHeadedBreed("split-dragon", "Split Dragon", PortraitFactory.mfPortraits("split")),
    new TwoHeadedBreed("two-headed-lindwyrm", "Two-headed Lindwyrm", [
        PortraitFactory.customPortrait('two-headed-g-f', "Green", true, ConditionFactory.checkGender("Female")),
        PortraitFactory.customPortrait('two-headed-g-m', "Green", true, ConditionFactory.checkGender("Male")),
        PortraitFactory.customPortrait('two-headed-p-f', "Purple", true, ConditionFactory.checkGender("Female")),
        PortraitFactory.customPortrait('two-headed-p-m', "Purple", true, ConditionFactory.checkGender("Male")),
    ]),
]

export default TwoHeadedBreeds;