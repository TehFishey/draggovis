import DragonModel from './DragonModel';

class TwoHeadModel extends DragonModel {
    constructor(breed, name, genders, reqs) {
        super(breed, name, "twohead", genders, reqs)
    }
}

let TwoHeadBreeds = [
    new TwoHeadModel("baikala-dragon", "Baikala Dragon"),
    new TwoHeadModel("bauta-dragon", "Bauta Dragon"),
    new TwoHeadModel("blancblack-dragon", "Blancblack Dragon"),
    new TwoHeadModel("duotone-dragon", "Duotone Dragon"),
    new TwoHeadModel("geminae-dragon", "Geminae Dragon"),
    new TwoHeadModel("gilded-bloodscale-dragon", "Gilded Bloodscale Dragon"),
    new TwoHeadModel("hooktalon-dragon", "Hooktalon Dragon"),
    new TwoHeadModel("nexus-dragon", "Nexus Dragon"),
    new TwoHeadModel("split-dragon", "Split Dragon"),
    new TwoHeadModel("two-headed-lindwyrm", "Two-headed Lindwyrm")
]

export default TwoHeadBreeds;