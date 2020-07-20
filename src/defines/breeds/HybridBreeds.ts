import Condition from '../../library/defines/Condition';
import Portrait from '../../library/defines/Portrait';
import Breed, { DragonType, DragonSubType, Affinity } from '../../library/defines/Breed';
import DragonNode from '../../library/model/DragonNode'

import PortraitFactory from '../_utilities/PortraitFactory';
import ConditionFactory from '../_utilities/ConditionFactory';

class HybridBreed extends Breed {
    constructor(id: string, label: string, type: DragonType, subType: DragonSubType, affinity: Array<Affinity>, portraits: Array<Portrait>, condition?: Condition) {
        super(id, label, type, subType, affinity, "mf-mf", portraits, condition)
    }
}

let HybridBreeds: Array<Breed> = [
    new HybridBreed("avatar-of-change", "Avatar of Change", DragonType.Dragon, DragonSubType.Western, [Affinity.Magi], PortraitFactory.uPortraits("avatar-of-change"), 
        ConditionFactory.or('Avatar of Change', [
            ConditionFactory.checkParentBreedIds([{id: 'avatar-of-change', label: 'Avatar of Change'}]),
            ConditionFactory.and('', [
                ConditionFactory.checkParentBreedIds([
                    {id: 'guardian-of-nature', label: 'Guardian of Nature'},
                    {id: 'avatar-of-destruction', label: 'Avatar of Destruction'},
                    {id: 'avatar-of-creation', label: 'Avatar of Creation'}
                ]),
                new Condition(
                    (dragon: DragonNode) => {
                        if(dragon.hasParents()) {
                            if(['avatar-of-creation','avatar-of-destruction','guardian-of-nature'].includes(dragon.mother()!.breed.id) && 
                              (['Magi','Air','Time','Ice'].includes(dragon.father()!.breed.affinity[0])))
                                return true;
                            if(['avatar-of-creation','avatar-of-destruction','guardian-of-nature'].includes(dragon.father()!.breed.id) && 
                              (['Magi','Air','Time','Ice'].includes(dragon.mother()!.breed.affinity[0])))
                                return true;
                        } 
                        return false;
                    },
                    'a second parent with primary affinity: Magi, Air, Time, or Ice.'
                )
            ])
        ])
    ),
    new HybridBreed("avatar-of-creation", "Avatar of Creation", DragonType.Dragon, DragonSubType.Western, [Affinity.Light], PortraitFactory.uPortraits("avatar-of-creation"),
        ConditionFactory.or('Avatar of Change', [
            ConditionFactory.checkParentBreedIds([{id: 'avatar-of-creation', label: 'Avatar of Creation'}]),
            ConditionFactory.and('', [
                ConditionFactory.checkParentBreedIds([
                    {id: 'guardian-of-nature', label: 'Guardian of Nature'},
                    {id: 'avatar-of-destruction', label: 'Avatar of Destruction'},
                    {id: 'avatar-of-change', label: 'Avatar of Change'}
                ]),
                new Condition(
                    (dragon: DragonNode) => {
                        if(dragon.hasParents()) {
                            if(['avatar-of-change','avatar-of-destruction','guardian-of-nature'].includes(dragon.mother()!.breed.id) && 
                              (['Light','Life','Earth','Water'].includes(dragon.father()!.breed.affinity[0])))
                            return true;
                            if(['avatar-of-change','avatar-of-destruction','guardian-of-nature'].includes(dragon.father()!.breed.id) && 
                              (['Light','Life','Earth','Water'].includes(dragon.mother()!.breed.affinity[0])))
                            return true;
                        } 
                        return false;
                    },
                    'a second parent with primary affinity: Light, Life, Earth, or Water.'
                )
            ])
        ])
    ),
    new HybridBreed("avatar-of-destruction", "Avatar of Destruction", DragonType.Dragon, DragonSubType.Western, [Affinity.Dark], PortraitFactory.uPortraits("avatar-of-destruction"),
        ConditionFactory.or('Avatar of Destruction', [
            ConditionFactory.checkParentBreedIds([{id: 'avatar-of-destruction', label: 'Avatar of Destruction'}]),
            ConditionFactory.and('', [
                ConditionFactory.checkParentBreedIds([
                    {id: 'guardian-of-nature', label: 'Guardian of Nature'},
                    {id: 'avatar-of-creation', label: 'Avatar of Creation'},
                    {id: 'avatar-of-change', label: 'Avatar of Change'}
                ]),
                new Condition(
                    (dragon: DragonNode) => {
                        if(dragon.hasParents()) {
                            if(['avatar-of-change','avatar-of-creation','guardian-of-nature'].includes(dragon.mother()!.breed.id) && 
                              (['Dark','Lightning','Death','Fire'].includes(dragon.father()!.breed.affinity[0])))
                            return true;
                            if(['avatar-of-change','avatar-of-creation','guardian-of-nature'].includes(dragon.father()!.breed.id) && 
                              (['Dark','Lightning','Death','Fire'].includes(dragon.mother()!.breed.affinity[0])))
                            return true;
                        } 
                        return false;
                    },
                    'a second parent with primary affinity: Dark, Lightning, Death, or Fire.'
                )
            ])
        ])
    ),
    new HybridBreed("amalthean-dragon", "Amalthean Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Life, Affinity.Water], PortraitFactory.mfPortraits("amalthean"),
        ConditionFactory.and("Amalthean Dragon", [
            ConditionFactory.checkParentBreedIds([{id: "white-dragon", label: "White Dragon"}]),
            ConditionFactory.checkParentBreedIds([{id: "undine-dragon", label: "Undine Dragon"}])
        ])
    ),
    new HybridBreed("carina-dragon", "Carina Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Fire], PortraitFactory.mfPortraits("carina"), 
        ConditionFactory.or("Carina Dragon", [
            ConditionFactory.checkParentBreedIds([{id: "carina-dragon", label: "Carina Dragon"}]),
            ConditionFactory.and("", [
                ConditionFactory.checkParentBreedIds([{id: "ridgewing-dragon", label: "Ridgewing Dragon"}]),
                ConditionFactory.checkParentBreedIds([{id: "nebula-dragon", label: "Nebula Dragon"}])
            ])
        ])
    ),
    new HybridBreed("dusk-pygmy", "Dusk Pygmy", DragonType.Pygmy, DragonSubType.Western, [Affinity.None], PortraitFactory.mfPortraits("dusk"), 
        ConditionFactory.or("Dusk Pygmy", [
            ConditionFactory.checkParentBreedIds([{id: "dusk-pygmy", label: "Dusk Pygmy"}]),
            ConditionFactory.and("", [
                ConditionFactory.checkParentBreedIds([{id: "crimson-flare-pygmy", label: "Crimson Flare Pygmy"}]),
                ConditionFactory.checkParentBreedIds([{id: "nilia-pygmy", label: "Nilia Pygmy"}])
            ])
        ])
    ),
    new HybridBreed("geode-dragon", "Geode Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Earth], PortraitFactory.mfPortraits("geode"),
        ConditionFactory.or('Geode Dragon', [
            ConditionFactory.checkParentBreedIds([{id: "geode-dragon", label: "Geode Dragon"}]),
            new Condition(
                (dragon: DragonNode) => {
                    if(dragon.hasParents()) {
                        if(["green-dragon", "stone-dragon"].indexOf(dragon.mother()!.breed.id) >= 0 
                        && ["green-dragon", "stone-dragon"].indexOf(dragon.father()!.breed.id) >= 0)
                            return true;
                    }
                    return false;
                },
                "parents with any combination of breeds: 'Stone Dragon', 'Green Dragon'."
            )
        ]),
    ),
    new HybridBreed("hellhorse-dragon", "Hellhorse Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Fire], PortraitFactory.mfPortraits("hellhorse"),
        ConditionFactory.or("Hellorse Dragon", [
            ConditionFactory.checkParentBreedIds([{id: "hellhorse-dragon", label: "Hellorse Dragon"}]),
            ConditionFactory.and("", [
                ConditionFactory.checkParentBreedIds([{id: "hellfire-wyvern", label: "Hellfire Wyvern"}]),
                ConditionFactory.checkParentBreedIds([{id: "horse-dragon", label: "Horse Dragon"}])
            ])
        ])
    ),
    new HybridBreed("jester-dragon", "Jester Dragon", DragonType.TwoHeaded, DragonSubType.Western, [Affinity.Death], PortraitFactory.mfPortraits("jester"),
        ConditionFactory.and("Jester Dragon", [
            ConditionFactory.checkParentBreedIds([{id: "blancblack-dragon", label: "Blancblack Dragon"}]),
            ConditionFactory.checkParentBreedIds([{id: "bauta-dragon", label: "Bauta Dragon"}])
        ])
    ),
    new HybridBreed("risensong-dragon", "Risensong Dragon", DragonType.Dragon, DragonSubType.Lindwyrm, [Affinity.Light], PortraitFactory.uPortraits("risensong"),
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
    new HybridBreed("setsong-dragon", "Setsong Dragon", DragonType.Dragon, DragonSubType.Lindwyrm, [Affinity.Light], PortraitFactory.uPortraits("setsong"),
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
    new HybridBreed("shallow-water-dragon", "Shallow Water Dragon", DragonType.Dragon, DragonSubType.SeaSerpent, [Affinity.Water], PortraitFactory.mfPortraits("shallow-water"),
        ConditionFactory.or("Shallow Water Dragon", [
            ConditionFactory.checkParentBreedIds([{id: "shallow-water-dragon", label: "Shallow Water Dragon"}]),
            ConditionFactory.and("", [
                ConditionFactory.checkParentBreedIds([{id: "water-dragon", label: "Water Dragon"}]),
                ConditionFactory.checkParentBreedIds([{id: "magi-dragon", label: "Magi Dragon"}])
            ])
        ])
    ),
    new HybridBreed("soulpeace-dragon", "Soulpeace Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Light], PortraitFactory.mfPortraits("soulpeace"),
        ConditionFactory.or("Soulpeace Dragon", [
            ConditionFactory.checkParentBreedIds([{id: "soulpeace-dragon", label: "Soulpeace Dragon"}]),
            ConditionFactory.and("", [
                ConditionFactory.checkParentBreedIds([{id: "daydream-dragon", label: "Daydream Dragon"}]),
                ConditionFactory.checkParentBreedIds([{id: "white-dragon", label: "White Dragon"}])
            ])
        ])
    ),
    new HybridBreed("storm-rider-dragon", "Storm-Rider Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Lightning], PortraitFactory.uPortraits("storm-rider"),
        ConditionFactory.or("Storm-Rider Dragon", [
            ConditionFactory.checkParentBreedIds([{id: "storm-rider-dragon", label: "Storm-Rider Dragon"}]),
            ConditionFactory.and("", [
                ConditionFactory.checkParentBreedIds([{id: "coastal-waverunner", label: "Coastal-Waverunner"}]),
                ConditionFactory.checkParentBreedIds([{id: "electric-dragon", label: "Electric Dragon"}])
            ])
        ])
    ),
    new HybridBreed("two-finned-bluna", "Two-Finned Bluna", DragonType.Dragon, DragonSubType.Amphiptere, [Affinity.Water], PortraitFactory.mfPortraits("two-finned-bluna"),
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
    new HybridBreed("ultraviolet-dragon", "Ultraviolet Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Light], PortraitFactory.mfPortraits("ultraviolet"),
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