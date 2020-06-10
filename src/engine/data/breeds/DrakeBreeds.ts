import Breed from '../../library/Breed';
import PortraitFactory from '../../utilities/PortraitFactory';
import Condition from '../../library/Condition';
import Portrait from '../../library/Portrait';

class DrakeBreed extends Breed {
    constructor(id: string, label: string, portraits: Array<Portrait>, condition?: Condition) {
        super(id, label, "drake", "mf-mf", portraits, condition)
    }
}

let DrakeBreeds: Array<Breed> = [
    new DrakeBreed("day-glory-drake", "Day Glory Drake", PortraitFactory.uPortraits("day-glory")),
    new DrakeBreed("glaucus-drake", "Glaucus Drake", PortraitFactory.mfPortraits("glaucus")),
    new DrakeBreed("greater-spotted-drake", "Greater Spotted Drake", PortraitFactory.uPortraits("greater-spotted")),
    new DrakeBreed("honey-drake", "Honey Drake", PortraitFactory.mfPortraits("honey")),
    new DrakeBreed("howler-drake", "Howler Drake", PortraitFactory.mfPortraits("howler")),
    new DrakeBreed("morphodrake", "Morphodrake", PortraitFactory.uPortraits("morphodrake")),
    new DrakeBreed("night-glory-drake", "Night Glory Drake", PortraitFactory.uPortraits("night-glory")),
    new DrakeBreed("ochredrake", "Ochredrake", PortraitFactory.uPortraits("ochredrake")),
    new DrakeBreed("tarantula-hawk-drake", "Tarantula Hawk Drake", PortraitFactory.uPortraits("tarantula-hawk")),
    new DrakeBreed("tatterdrake", "Tatterdrake", PortraitFactory.uPortraits("tatterdrake")),
    new DrakeBreed("vremya-drake", "Vremya Drake", PortraitFactory.uPortraits("vremya"))
]

export default DrakeBreeds;