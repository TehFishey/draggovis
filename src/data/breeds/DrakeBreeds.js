import BreedModel from './BreedModel';
import PortraitFactory from '../portraits/PortraitFactory';

class DrakeModel extends BreedModel {
    constructor(breed, name, genders, portraits, reqs) {
        super(breed, name, "drake", genders, portraits, reqs)
    }
}

let DrakeBreeds = [
    new DrakeModel("day-glory-drake", "Day Glory Drake", PortraitFactory.uPortraits("day-glory")),
    new DrakeModel("glaucus-drake", "Glaucus Drake", PortraitFactory.mfPortraits("glaucus")),
    new DrakeModel("greater-spotted-drake", "Greater Spotted Drake", PortraitFactory.uPortraits("greater-spotted")),
    new DrakeModel("honey-drake", "Honey Drake", PortraitFactory.mfPortraits("honey")),
    new DrakeModel("howler-drake", "Howler Drake", PortraitFactory.mfPortraits("howler")),
    new DrakeModel("morphodrake", "Morphodrake", PortraitFactory.uPortraits("morphodrake")),
    new DrakeModel("night-glory-drake", "Night Glory Drake", PortraitFactory.uPortraits("night-glory")),
    new DrakeModel("ochredrake", "Ochredrake", PortraitFactory.uPortraits("ochredrake")),
    new DrakeModel("tarantula-hawk-drake", "Tarantula Hawk Drake", PortraitFactory.uPortraits("tarantula-hawk")),
    new DrakeModel("tatterdrake", "Tatterdrake", PortraitFactory.uPortraits("tatterdrake")),
    new DrakeModel("vremya-drake", "Vremya Drake", PortraitFactory.uPortraits("vremya"))
]

export default DrakeBreeds;