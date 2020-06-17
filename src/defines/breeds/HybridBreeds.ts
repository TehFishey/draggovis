import Condition from '../../library/defines/Condition';
import Portrait from '../../library/defines/Portrait';
import Breed from '../../library/defines/Breed';
import DragonNode from '../../library/controller/DragonNode'

import PortraitFactory from '../utilities/PortraitFactory';
import ConditionFactory from '../utilities/ConditionFactory';

class HybridBreed extends Breed {
    constructor(id: string, label: string, type: string, portraits: Array<Portrait>, condition?: Condition) {
        super(id, label, type, "mf-mf", portraits, condition)
    }
}

let HybridBreeds: Array<Breed> = [
    new HybridBreed("avatar-of-change", "Avatar of Change", "dragon", PortraitFactory.uPortraits("avatar-of-change")),
    new HybridBreed("avatar-of-creation", "Avatar of Creation", "dragon", PortraitFactory.uPortraits("avatar-of-creation")),
    new HybridBreed("avatar-of-destruction", "Avatar of Destruction", "dragon", PortraitFactory.uPortraits("avatar-of-destruction")),
    new HybridBreed("carina-dragon", "Carina Dragon", "dragon", PortraitFactory.mfPortraits("carina"), 
        ConditionFactory.or("Carina Dragon", [
            ConditionFactory.checkParentBreedIds([{id: "carina-dragon", label: "Carina Dragon"}]),
            ConditionFactory.and("", [
                ConditionFactory.checkParentBreedIds([{id: "ridgewing-dragon", label: "Ridgewing Dragon"}]),
                ConditionFactory.checkParentBreedIds([{id: "nebula-dragon", label: "Nebula Dragon"}])
            ])
        ])
    ),
    new HybridBreed("dusk-pygmy", "Dusk Pygmy", "pygmy", PortraitFactory.mfPortraits("dusk"), 
        ConditionFactory.or("Dusk Pygmy", [
            ConditionFactory.checkParentBreedIds([{id: "dusk-pygmy", label: "Dusk Pygmy"}]),
            ConditionFactory.and("", [
                ConditionFactory.checkParentBreedIds([{id: "crimson-flare-pygmy", label: "Crimson Flare Pygmy"}]),
                ConditionFactory.checkParentBreedIds([{id: "nilia-pygmy", label: "Nilia Pygmy"}])
            ])
        ])
    ),
    new HybridBreed("geode-dragon", "Geode Dragon", "dragon", PortraitFactory.mfPortraits("geode"),
        {
            warning : "'Geode Dragon' requires a parent with breed 'Geode Dragon' OR parents with any combination of breeds: 'Stone Dragon', 'Green Dragon'.",
            validate : (dragon: DragonNode) => {
                if(dragon.hasParents()) {
                    if((dragon.mother()!.breed.id === "geode-dragon") || (dragon.father()!.breed.id === "geode-dragon"))
                        return true;
                    if(["green-dragon", "stone-dragon"].indexOf(dragon.mother()!.breed.id) >= 0 
                    && ["green-dragon", "stone-dragon"].indexOf(dragon.father()!.breed.id) >= 0)
                        return true;
                }
                return false;
            }
        }
    ),
    new HybridBreed("hellhorse-dragon", "Hellorse Dragon", "dragon", PortraitFactory.mfPortraits("hellhorse"),
        ConditionFactory.or("Hellorse Dragon", [
            ConditionFactory.checkParentBreedIds([{id: "hellhorse-dragon", label: "Hellorse Dragon"}]),
            ConditionFactory.and("", [
                ConditionFactory.checkParentBreedIds([{id: "hellfire-wyvern", label: "Hellfire Wyvern"}]),
                ConditionFactory.checkParentBreedIds([{id: "horse-dragon", label: "Horse Dragon"}])
            ])
        ])
    ),
    new HybridBreed("risensong-dragon", "Risensong Dragon", "dragon", PortraitFactory.uPortraits("risensong"),
        ConditionFactory.or("Risensong Dragon", [
            ConditionFactory.checkParentBreedIds([{id: "risensong-dragon", label: "Risensong Dragon"}]),
            ConditionFactory.and("", [
                ConditionFactory.checkParentBreedIds([{id: "sunrise-dragon", label: "Sunrise Dragon"}]),
                ConditionFactory.or("", [
                    ConditionFactory.checkParentBreedIds([{id: "sunsong-amphiptere", label: "Sunsong Amphiptere"}]),
                    ConditionFactory.checkParentBreedIds([{id: "setsong-dragon", label: "Setsong Dragon"}]),
                ])
            ]),
        ])
    ),
    new HybridBreed("setsong-dragon", "Setsong Dragon", "dragon", PortraitFactory.uPortraits("setsong"),
        ConditionFactory.or("Setsong Dragon", [
            ConditionFactory.checkParentBreedIds([{id: "setsong-dragon", label: "Setsong Dragon"}]),
            ConditionFactory.and("", [
                ConditionFactory.checkParentBreedIds([{id: "sunset-dragon", label: "Sunset Dragon"}]),
                ConditionFactory.or("", [
                    ConditionFactory.checkParentBreedIds([{id: "sunsong-amphiptere", label: "Sunsong Amphiptere"}]),
                    ConditionFactory.checkParentBreedIds([{id: "risensong-dragon", label: "Risensong Dragon"}]),
                ])
            ]),
        ])
    ),
    new HybridBreed("shallow-water-dragon", "Shallow Water Dragon", "dragon", PortraitFactory.mfPortraits("shallow-water"),
        ConditionFactory.or("Shallow Water Dragon", [
            ConditionFactory.checkParentBreedIds([{id: "shallow-water-dragon", label: "Shallow Water Dragon"}]),
            ConditionFactory.and("", [
                ConditionFactory.checkParentBreedIds([{id: "water-dragon", label: "Water Dragon"}]),
                ConditionFactory.checkParentBreedIds([{id: "magi-dragon", label: "Magi Dragon"}])
            ])
        ])
    ),
    new HybridBreed("soulpeace-dragon", "Soulpeace Dragon", "dragon", PortraitFactory.mfPortraits("soulpeace"),
        ConditionFactory.or("Soulpeace Dragon", [
            ConditionFactory.checkParentBreedIds([{id: "soulpeace-dragon", label: "Soulpeace Dragon"}]),
            ConditionFactory.and("", [
                ConditionFactory.checkParentBreedIds([{id: "daydream-dragon", label: "Daydream Dragon"}]),
                ConditionFactory.checkParentBreedIds([{id: "white-dragon", label: "White Dragon"}])
            ])
        ])
    ),
    //new HybridModel("storm-rider-dragon", "Storm-Rider Dragon", "dragon"), TBD TBD
    new HybridBreed("two-finned-bluna", "Two-Finned Bluna", "dragon", PortraitFactory.mfPortraits("two-finned-bluna"),
        ConditionFactory.or("Two-Finned Bluna", [
            ConditionFactory.checkParentBreedIds([{id: "two-finned-bluna", label: "Two-Finned Bluna"}]),
            ConditionFactory.and("", [
                ConditionFactory.checkParentBreedIds([{id: "skywing-dragon", label: "Skywing Dragon"}]),
                ConditionFactory.or("", [
                    ConditionFactory.checkParentBreedIds([{id: "deep-sea-dragon", label: "Deep Sea Dragon"}]),
                    ConditionFactory.checkParentBreedIds([{id: "water-dragon", label: "Water Dragon"}]),
                ])
            ]),
        ])
    ),
    new HybridBreed("ultraviolet-dragon", "Ultraviolet Dragon", "dragon", PortraitFactory.uPortraits("ultraviolet"),
        ConditionFactory.or("Ultraviolet Dragon", [
            ConditionFactory.checkParentBreedIds([{id: "ultraviolet-dragon", label: "Ultraviolet Dragon"}]),
            ConditionFactory.and("", [
                ConditionFactory.checkParentBreedIds([{id: "spitfire-dragon", label: "Spitfire Dragon"}]),
                ConditionFactory.checkParentBreedIds([{id: "purple-dragon", label: "Purple Dragon"}]),
            ]),
        ])
    ),
]

export default HybridBreeds;