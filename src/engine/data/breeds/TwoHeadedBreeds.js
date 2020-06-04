import Breed from '../../library/Breed';
import Portrait from '../../library/Portrait';
import PortraitFactory from '../../utilities/PortraitFactory';
import ConditionFactory from '../../utilities/PortraitConditionFactory';

class TwoHeadedBreed extends Breed {
    constructor(breed, name, genders, portraits, reqs) {
        super(breed, name, "twohead", "mf-mf", portraits, reqs)
    }
}

let TwoHeadedBreeds = [
    new TwoHeadedBreed("baikala-dragon", "Baikala Dragon", {
        'baikala-b-f' : new Portrait('baikala-b-f', "Blue", true, ConditionFactory.checkGender("Female")),
        'baikala-b-m' : new Portrait('baikala-b-m', "Blue", true, ConditionFactory.checkGender("Male")),
        'baikala-g-f' : new Portrait('baikala-g-f', "Green", true, ConditionFactory.checkGender("Female")),
        'baikala-g-m' : new Portrait('baikala-g-m', "Green", true, ConditionFactory.checkGender("Male")),
    }),
    new TwoHeadedBreed("bauta-dragon", "Bauta Dragon", PortraitFactory.uPortraits("bauta")),
    new TwoHeadedBreed("blancblack-dragon", "Blancblack Dragon", PortraitFactory.mfPortraits("blancblack")),
    new TwoHeadedBreed("duotone-dragon", "Duotone Dragon", PortraitFactory.mfPortraits("blancblack")),
    new TwoHeadedBreed("geminae-dragon", "Geminae Dragon", PortraitFactory.uPortraits("geminae")),
    new TwoHeadedBreed("gilded-bloodscale-dragon", "Gilded Bloodscale Dragon", PortraitFactory.mfPortraits("gilded-bloodscale")),
    new TwoHeadedBreed("hooktalon-dragon", "Hooktalon Dragon", PortraitFactory.mfPortraits("hooktalon")),
    new TwoHeadedBreed("nexus-dragon", "Nexus Dragon", PortraitFactory.mfPortraits("nexus")),
    new TwoHeadedBreed("split-dragon", "Split Dragon", PortraitFactory.mfPortraits("split")),
    new TwoHeadedBreed("two-headed-lindwyrm", "Two-headed Lindwyrm", {
        'two-headed-g-f' : new Portrait('two-headed-g-f', "Green", true, ConditionFactory.checkGender("Female")),
        'two-headed-g-m' : new Portrait('two-headed-g-m', "Green", true, ConditionFactory.checkGender("Male")),
        'two-headed-p-f' : new Portrait('two-headed-p-f', "Purple", true, ConditionFactory.checkGender("Female")),
        'two-headed-p-m' : new Portrait('two-headed-p-m', "Purple", true, ConditionFactory.checkGender("Male")),
    }),
]

export default TwoHeadedBreeds;