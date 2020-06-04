import Breed from '../../library/Breed';
import PortraitFactory from '../../utilities/PortraitFactory';

class PygmyBreed extends Breed {
    constructor(id, label, portraits, condition) {
        super(id, label, "pygmy", "mf-mf", portraits, condition)
    }
}

let PygmyBreeds = [
    new PygmyBreed("avea-pygmy", "Avea Pygmy", PortraitFactory.mfPortraits("avea")),
    new PygmyBreed("common-pygmy", "Common Pygmy", PortraitFactory.mfPortraits("common")),
    new PygmyBreed("coral-pygmy-wyvern", "Coral Pygmy Wyvern", PortraitFactory.mfPortraits("avcoralea")),
    new PygmyBreed("crimson-flare-pygmy", "Crimson Flare Pygmy", PortraitFactory.uPortraits("crimson-flare")),
    new PygmyBreed("dark-myst-pygmy", "Dark Myst Pygmy", PortraitFactory.mfPortraits("dark-myst")),
    new PygmyBreed("glowback-pygmy", "Glowback Pygmy", PortraitFactory.mfPortraits("glowback")),
    new PygmyBreed("kovos-pygmy", "Kovos Pygmy", PortraitFactory.uPortraits("kovos")),
    new PygmyBreed("kyanite-pygmy", "Kyanite Pygmy", PortraitFactory.uPortraits("kyanite")),
    new PygmyBreed("magelight-pygmy-wyvern", "Magelight Pygmy Wyvern", PortraitFactory.mfPortraits("magelight")),
    new PygmyBreed("mariner-pygmy", "Mariner Pygmy", PortraitFactory.uPortraits("mariner")),
    new PygmyBreed("misfit-pygmy", "Misfit Pygmy", PortraitFactory.mfPortraits("misfit")),
    new PygmyBreed("nilia-pygmy", "Nilia Pygmy", PortraitFactory.mfPortraits("nilia")),
    new PygmyBreed("pipio-pygmy", "Pipio Pygmy", PortraitFactory.mfPortraits("pipio")),
    new PygmyBreed("red-tailed-wyrm-pygmy", "Red-Tailed Wyrm Pygmy", PortraitFactory.uPortraits("red-tailed")),
    new PygmyBreed("seawyrm-pygmy", "Seawyrm Pygmy", PortraitFactory.mfPortraits("seawyrm")),
]

export default PygmyBreeds;