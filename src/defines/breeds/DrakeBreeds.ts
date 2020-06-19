import Condition from '../../library/defines/Condition';
import Portrait from '../../library/defines/Portrait';
import Breed, { DragonType, DragonSubType, Affinity } from '../../library/defines/Breed';

import PortraitFactory from '../_utilities/PortraitFactory';

class DrakeBreed extends Breed {
    constructor(id: string, label: string, affinity: Array<Affinity>, portraits: Array<Portrait>, condition?: Condition) {
        super(id, label, DragonType.Drake, DragonSubType.Western, affinity, "mf-mf", portraits, condition)
    }
}

let DrakeBreeds: Array<Breed> = [
    new DrakeBreed("day-glory-drake", "Day Glory Drake", [Affinity.None], PortraitFactory.uPortraits("day-glory")),
    new DrakeBreed("glaucus-drake", "Glaucus Drake", [Affinity.None], PortraitFactory.mfPortraits("glaucus")),
    new DrakeBreed("greater-spotted-drake", "Greater Spotted Drake", [Affinity.None], PortraitFactory.uPortraits("greater-spotted")),
    new DrakeBreed("honey-drake", "Honey Drake", [Affinity.Life], PortraitFactory.mfPortraits("honey")),
    new DrakeBreed("howler-drake", "Howler Drake", [Affinity.None], PortraitFactory.mfPortraits("howler")),
    new DrakeBreed("morphodrake", "Morphodrake", [Affinity.Light], PortraitFactory.uPortraits("morphodrake")),
    new DrakeBreed("night-glory-drake", "Night Glory Drake", [Affinity.None], PortraitFactory.uPortraits("night-glory")),
    new DrakeBreed("ochredrake", "Ochredrake", [Affinity.Neutral], PortraitFactory.uPortraits("ochredrake")),
    new DrakeBreed("tarantula-hawk-drake", "Tarantula Hawk Drake", [Affinity.Earth], PortraitFactory.uPortraits("tarantula-hawk")),
    new DrakeBreed("tatterdrake", "Tatterdrake", [Affinity.Dark], PortraitFactory.uPortraits("tatterdrake")),
    new DrakeBreed("vremya-drake", "Vremya Drake", [Affinity.Time], PortraitFactory.uPortraits("vremya"))
]

export default DrakeBreeds;