import DragonModel from './BreedModel';

class DrakeModel extends DragonModel {
    constructor(breed, name, genders, reqs) {
        super(breed, name, "drake", genders, reqs)
    }
}

let DrakeBreeds = [
    new DrakeModel("day-glory-drake", "Day Glory Drake"),
    new DrakeModel("glaucus-drake", "Glaucus Drake"),
    new DrakeModel("greater-spotted-drake", "Greater Spotted Drake"),
    new DrakeModel("honey-drake", "Honey Drake"),
    new DrakeModel("howler-drake", "Howler Drake"),
    new DrakeModel("morphodrake", "Morphodrake"),
    new DrakeModel("night-glory-drake", "Night Glory Drake"),
    new DrakeModel("ochredrake", "Ochredrake"),
    new DrakeModel("tarantula-hawk-drake", "Tarantula Hawk Drake"),
    new DrakeModel("tatterdrake", "Tatterdrake"),
    new DrakeModel("vremya-drake", "Vremya Drake")
]

export default DrakeBreeds;