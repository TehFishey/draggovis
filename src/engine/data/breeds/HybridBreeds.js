import Breed from '../../library/Breed';
import PortraitFactory from '../../utilities/PortraitFactory';

class HybridBreed extends Breed {
    constructor(breed, name, type, portraits, reqs) {
        super(breed, name, type, "mf-mf", portraits, reqs)
    }
}

let HybridBreeds = [
    new HybridBreed("avatar-of-change", "Avatar of Change", "dragon", PortraitFactory.uPortraits("avatar-of-change")),
    new HybridBreed("avatar-of-creation", "Avatar of Creation", "dragon", PortraitFactory.uPortraits("avatar-of-creation")),
    new HybridBreed("avatar-of-destruction", "Avatar of Destruction", "dragon", PortraitFactory.uPortraits("avatar-of-destruction")),
    new HybridBreed("carina-dragon", "Carina Dragon", "dragon", PortraitFactory.mfPortraits("carina")),
    new HybridBreed("dusk-pygmy", "Dusk Pygmy", "pygmy", "dragon", PortraitFactory.mfPortraits("dusk")),
    new HybridBreed("geode-dragon", "Geode Dragon", "dragon", PortraitFactory.mfPortraits("geode")),
    new HybridBreed("hellhorse-dragon", "Hellorse Dragon", "dragon", PortraitFactory.mfPortraits("hellhorse")),
    new HybridBreed("risensong-dragon", "Risensong Dragon", "dragon", PortraitFactory.uPortraits("risensong")),
    new HybridBreed("setsong-dragon", "Setsong Dragon", "dragon", PortraitFactory.uPortraits("setsong")),
    new HybridBreed("shallow-water-dragon", "Shallow Water Dragon", "dragon", PortraitFactory.mfPortraits("shallow-water")),
    new HybridBreed("soulpeace-dragon", "Soulpeace Dragon", "dragon", PortraitFactory.mfPortraits("soulpeace")),
    //new HybridModel("storm-rider-dragon", "Storm-Rider Dragon", "dragon"), TBD TBD
    new HybridBreed("two-finned-bluna", "Two-Finned Bluna", "dragon", PortraitFactory.mfPortraits("two-finned-bluna")),
    new HybridBreed("ultraviolet-dragon", "Ultraviolet Dragon", "dragon", PortraitFactory.uPortraits("ultraviolet")),
]

export default HybridBreeds;