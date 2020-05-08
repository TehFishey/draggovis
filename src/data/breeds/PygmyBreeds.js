import BreedModel from './BreedModel';
import PortraitFactory from '../portraits/PortraitFactory';

class PygmyModel extends BreedModel {
    constructor(breed, name, portraits, reqs) {
        super(breed, name, "pygmy", "mf-mf", portraits, reqs)
    }
}

let PygmyBreeds = [
    new PygmyModel("avea-pygmy", "Avea Pygmy", PortraitFactory.mfPortraits("avea")),
    new PygmyModel("common-pygmy", "Common Pygmy", PortraitFactory.mfPortraits("common")),
    new PygmyModel("coral-pygmy-wyvern", "Coral Pygmy Wyvern", PortraitFactory.mfPortraits("avcoralea")),
    new PygmyModel("crimson-flare-pygmy", "Crimson Flare Pygmy", PortraitFactory.uPortraits("crimson-flare")),
    new PygmyModel("dark-myst-pygmy", "Dark Myst Pygmy", PortraitFactory.mfPortraits("dark-myst")),
    new PygmyModel("glowback-pygmy", "Glowback Pygmy", PortraitFactory.mfPortraits("glowback")),
    new PygmyModel("kovos-pygmy", "Kovos Pygmy", PortraitFactory.uPortraits("kovos")),
    new PygmyModel("kyanite-pygmy", "Kyanite Pygmy", PortraitFactory.uPortraits("kyanite")),
    new PygmyModel("magelight-pygmy-wyvern", "Magelight Pygmy Wyvern", PortraitFactory.mfPortraits("magelight")),
    new PygmyModel("mariner-pygmy", "Mariner Pygmy", PortraitFactory.uPortraits("mariner")),
    new PygmyModel("misfit-pygmy", "Misfit Pygmy", PortraitFactory.mfPortraits("misfit")),
    new PygmyModel("nilia-pygmy", "Nilia Pygmy", PortraitFactory.mfPortraits("nilia")),
    new PygmyModel("pipio-pygmy", "Pipio Pygmy", PortraitFactory.mfPortraits("pipio")),
    new PygmyModel("red-tailed-wyrm-pygmy", "Red-Tailed Wyrm Pygmy", PortraitFactory.uPortraits("red-tailed")),
    new PygmyModel("seawyrm-pygmy", "Seawyrm Pygmy", PortraitFactory.mfPortraits("seawyrm")),
]

export default PygmyBreeds;