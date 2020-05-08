import BreedModel from './BreedModel';
import PortraitFactory from '../portraits/PortraitFactory';

class HybridModel extends BreedModel {
    constructor(breed, name, type, portraits, reqs) {
        super(breed, name, type, "mf-mf", portraits, reqs)
    }
}

let HybridBreeds = [
    new HybridModel("avatar-of-change", "Avatar of Change", "dragon", PortraitFactory.uPortraits("avatar-of-change")),
    new HybridModel("avatar-of-creation", "Avatar of Creation", "dragon", PortraitFactory.uPortraits("avatar-of-creation")),
    new HybridModel("avatar-of-destruction", "Avatar of Destruction", "dragon", PortraitFactory.uPortraits("avatar-of-destruction")),
    new HybridModel("carina-dragon", "Carina Dragon", "dragon", PortraitFactory.mfPortraits("carina")),
    new HybridModel("dusk-pygmy", "Dusk Pygmy", "pygmy", "dragon", PortraitFactory.mfPortraits("dusk")),
    new HybridModel("geode-dragon", "Geode Dragon", "dragon", PortraitFactory.mfPortraits("geode")),
    new HybridModel("hellhorse-dragon", "Hellorse Dragon", "dragon", PortraitFactory.mfPortraits("hellhorse")),
    new HybridModel("risensong-dragon", "Risensong Dragon", "dragon", PortraitFactory.uPortraits("risensong")),
    new HybridModel("setsong-dragon", "Setsong Dragon", "dragon", PortraitFactory.uPortraits("setsong")),
    new HybridModel("shallow-water-dragon", "Shallow Water Dragon", "dragon", PortraitFactory.mfPortraits("shallow-water")),
    new HybridModel("soulpeace-dragon", "Soulpeace Dragon", "dragon", PortraitFactory.mfPortraits("soulpeace")),
    //new HybridModel("storm-rider-dragon", "Storm-Rider Dragon", "dragon"), TBD TBD
    new HybridModel("two-finned-bluna", "Two-Finned Bluna", "dragon", PortraitFactory.mfPortraits("two-finned-bluna")),
    new HybridModel("ultraviolet-dragon", "Ultraviolet Dragon", "dragon", PortraitFactory.uPortraits("ultraviolet")),
]

export default HybridBreeds;