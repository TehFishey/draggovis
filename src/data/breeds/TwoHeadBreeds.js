import BreedModel from './BreedModel';
import PortraitModel from '../portraits/PortraitModel';
import PortraitFactory from '../portraits/PortraitFactory';
import ConditionFactory from '../portraits/PortraitConditionFactory';

class TwoHeadModel extends BreedModel {
    constructor(breed, name, genders, portraits, reqs) {
        super(breed, name, "twohead", "mf-mf", portraits, reqs)
    }
}

let TwoHeadBreeds = [
    new TwoHeadModel("baikala-dragon", "Baikala Dragon", {
        'baikala-b-f' : new PortraitModel('baikala-b-f', "Blue", true, ConditionFactory.genderCheck("Female")),
        'baikala-b-m' : new PortraitModel('baikala-b-m', "Blue", true, ConditionFactory.genderCheck("Male")),
        'baikala-g-f' : new PortraitModel('baikala-g-f', "Green", true, ConditionFactory.genderCheck("Female")),
        'baikala-g-m' : new PortraitModel('baikala-g-m', "Green", true, ConditionFactory.genderCheck("Male")),
    }),
    new TwoHeadModel("bauta-dragon", "Bauta Dragon", PortraitFactory.uPortraits("bauta")),
    new TwoHeadModel("blancblack-dragon", "Blancblack Dragon", PortraitFactory.mfPortraits("blancblack")),
    new TwoHeadModel("duotone-dragon", "Duotone Dragon", PortraitFactory.mfPortraits("blancblack")),
    new TwoHeadModel("geminae-dragon", "Geminae Dragon", PortraitFactory.uPortraits("geminae")),
    new TwoHeadModel("gilded-bloodscale-dragon", "Gilded Bloodscale Dragon", PortraitFactory.mfPortraits("gilded-bloodscale")),
    new TwoHeadModel("hooktalon-dragon", "Hooktalon Dragon", PortraitFactory.mfPortraits("hooktalon")),
    new TwoHeadModel("nexus-dragon", "Nexus Dragon", PortraitFactory.mfPortraits("nexus")),
    new TwoHeadModel("split-dragon", "Split Dragon", PortraitFactory.mfPortraits("split")),
    new TwoHeadModel("two-headed-lindwyrm", "Two-headed Lindwyrm", {
        'two-headed-g-f' : new PortraitModel('two-headed-g-f', "Green", true, ConditionFactory.genderCheck("Female")),
        'two-headed-g-m' : new PortraitModel('two-headed-g-m', "Green", true, ConditionFactory.genderCheck("Male")),
        'two-headed-p-f' : new PortraitModel('two-headed-p-f', "Purple", true, ConditionFactory.genderCheck("Female")),
        'two-headed-p-m' : new PortraitModel('two-headed-p-m', "Purple", true, ConditionFactory.genderCheck("Male")),
    }),
]

export default TwoHeadBreeds;