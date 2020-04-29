import DragonModel from './BreedModel';

class PygmyModel extends DragonModel {
    constructor(breed, name, genders, reqs) {
        super(breed, name, "pygmy", genders, reqs)
    }
}

let PygmyBreeds = [
    new PygmyModel("avea-pygmy", "Avea Pygmy"),
    new PygmyModel("common-pygmy", "Common Pygmy"),
    new PygmyModel("coral-pygmy-wyvern", "Coral Pygmy Wyvern"),
    new PygmyModel("crimson-flare-pygmy", "Crimson Flare Pygmy"),
    new PygmyModel("dark-myst-pygmy", "Dark Myst Pygmy"),
    new PygmyModel("dusk-pygmy", "Dusk Pygmy"),
    new PygmyModel("glowback-pygmy", "Glowback Pygmy"),
    new PygmyModel("kovos-pygmy", "Kovos Pygmy"),
    new PygmyModel("kyanite-pygmy", "Kyanite Pygmy"),
    new PygmyModel("magelight-pygmy-wyvern", "Magelight Pygmy Wyvern"),
    new PygmyModel("mariner-pygmy", "Mariner Pygmy"),
    new PygmyModel("misfit-pygmy", "Misfit Pygmy"),
    new PygmyModel("nilia-pygmy", "Nilia Pygmy"),
    new PygmyModel("pipio-pygmy", "Pipio Pygmy"),
    new PygmyModel("pumpkin-dragon", "Pumpkin Dragon"),
    new PygmyModel("red-tailed-wyrn-pygmy", "Red-Tailed Wyrm Pygmy"),
    new PygmyModel("seawyrm-pygmy", "Seawyrm Pygmy")
]

export default PygmyBreeds;