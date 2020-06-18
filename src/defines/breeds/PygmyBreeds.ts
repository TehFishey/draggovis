import Condition from '../../library/defines/Condition';
import Portrait from '../../library/defines/Portrait';
import Breed, { DragonType, DragonSubType } from '../../library/defines/Breed';

import PortraitFactory from '../_utilities/PortraitFactory';

class PygmyBreed extends Breed {
    constructor(id: string, label: string, subType: DragonSubType, portraits: Array<Portrait>, condition?: Condition) {
        super(id, label, DragonType.Pygmy, subType, "mf-mf", portraits, condition)
    }
}

let PygmyBreeds: Array<Breed> = [
    new PygmyBreed("avea-pygmy", "Avea Pygmy", DragonSubType.Western, PortraitFactory.mfPortraits("avea")),
    new PygmyBreed("common-pygmy", "Common Pygmy", DragonSubType.Western, PortraitFactory.mfPortraits("common")),
    new PygmyBreed("coral-pygmy-wyvern", "Coral Pygmy Wyvern", DragonSubType.Wyvern, PortraitFactory.mfPortraits("avcoralea")),
    new PygmyBreed("crimson-flare-pygmy", "Crimson Flare Pygmy", DragonSubType.Western, PortraitFactory.uPortraits("crimson-flare")),
    new PygmyBreed("dark-myst-pygmy", "Dark Myst Pygmy", DragonSubType.Western, PortraitFactory.mfPortraits("dark-myst")),
    new PygmyBreed("glowback-pygmy", "Glowback Pygmy", DragonSubType.Western, PortraitFactory.mfPortraits("glowback")),
    new PygmyBreed("kovos-pygmy", "Kovos Pygmy", DragonSubType.Lindwyrm, PortraitFactory.uPortraits("kovos")),
    new PygmyBreed("kyanite-pygmy", "Kyanite Pygmy", DragonSubType.Eastern, PortraitFactory.uPortraits("kyanite")),
    new PygmyBreed("magelight-pygmy-wyvern", "Magelight Pygmy Wyvern", DragonSubType.Wyvern, PortraitFactory.mfPortraits("magelight")),
    new PygmyBreed("mariner-pygmy", "Mariner Pygmy", DragonSubType.Western, PortraitFactory.uPortraits("mariner")),
    new PygmyBreed("misfit-pygmy", "Misfit Pygmy", DragonSubType.Western, PortraitFactory.mfPortraits("misfit")),
    new PygmyBreed("nilia-pygmy", "Nilia Pygmy", DragonSubType.Western, PortraitFactory.mfPortraits("nilia")),
    new PygmyBreed("pipio-pygmy", "Pipio Pygmy", DragonSubType.Western, PortraitFactory.mfPortraits("pipio")),
    new PygmyBreed("red-tailed-wyrm-pygmy", "Red-Tailed Wyrm", DragonSubType.Wyrm, PortraitFactory.uPortraits("red-tailed")),
    new PygmyBreed("seawyrm-pygmy", "Seawyrm Pygmy", DragonSubType.Lindwyrm, PortraitFactory.mfPortraits("seawyrm")),
]

export default PygmyBreeds;