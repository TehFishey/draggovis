import Condition from '../../library/defines/Condition';
import Sprite from '../../library/defines/Sprite';
import Breed, { DragonType, DragonSubType, Affinity } from '../../library/defines/Breed';
import DragonNode from '../../library/model/DragonNode'

import SpriteFactory from '../_utilities/SpriteFactory';
import ConditionBuilder from '../_utilities/ConditionBuilder';

class HybridBreed extends Breed {
    constructor(id: string, label: string, type: DragonType, subType: DragonSubType, affinity: Array<Affinity>, sprites: Array<Sprite>, condition?: Condition) {
        super(id, label, type, subType, affinity, "mf-mf", sprites, condition)
    }
}

let HybridBreeds: Array<Breed> = [
    new HybridBreed("avatar-of-change", "Avatar of Change", DragonType.Dragon, DragonSubType.Western, [Affinity.Magi], SpriteFactory.uSprites("avatar-of-change"), 
        ConditionBuilder.or('Avatar of Change', [
            ConditionBuilder.checkParentBreedIds([{id: 'avatar-of-change', label: 'Avatar of Change'}]),
            ConditionBuilder.and('', [
                ConditionBuilder.checkParentBreedIds([
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
    new HybridBreed("avatar-of-creation", "Avatar of Creation", DragonType.Dragon, DragonSubType.Western, [Affinity.Light], SpriteFactory.uSprites("avatar-of-creation"),
        ConditionBuilder.or('Avatar of Change', [
            ConditionBuilder.checkParentBreedIds([{id: 'avatar-of-creation', label: 'Avatar of Creation'}]),
            ConditionBuilder.and('', [
                ConditionBuilder.checkParentBreedIds([
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
    new HybridBreed("avatar-of-destruction", "Avatar of Destruction", DragonType.Dragon, DragonSubType.Western, [Affinity.Dark], SpriteFactory.uSprites("avatar-of-destruction"),
        ConditionBuilder.or('Avatar of Destruction', [
            ConditionBuilder.checkParentBreedIds([{id: 'avatar-of-destruction', label: 'Avatar of Destruction'}]),
            ConditionBuilder.and('', [
                ConditionBuilder.checkParentBreedIds([
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
    new HybridBreed("amalthean-dragon", "Amalthean Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Life, Affinity.Water], SpriteFactory.mfSprites("amalthean"),
        ConditionBuilder.or("Amalthean Dragon", [
            ConditionBuilder.checkParentBreedIds([{id: "amalthean-dragon", label: "Amalthean Dragon"}]),
            ConditionBuilder.and("", [
                ConditionBuilder.checkParentBreedIds([{id: "white-dragon", label: "White Dragon"}]),
                ConditionBuilder.checkParentBreedIds([{id: "undine-dragon", label: "Undine Dragon"}])
            ])
        ])
    ),
    new HybridBreed("carina-dragon", "Carina Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Fire], SpriteFactory.mfSprites("carina"), 
        ConditionBuilder.or("Carina Dragon", [
            ConditionBuilder.checkParentBreedIds([{id: "carina-dragon", label: "Carina Dragon"}]),
            ConditionBuilder.and("", [
                ConditionBuilder.checkParentBreedIds([{id: "ridgewing-dragon", label: "Ridgewing Dragon"}]),
                ConditionBuilder.checkParentBreedIds([{id: "nebula-dragon", label: "Nebula Dragon"}])
            ])
        ])
    ),
    new HybridBreed("dusk-pygmy", "Dusk Pygmy", DragonType.Pygmy, DragonSubType.Western, [Affinity.None], SpriteFactory.mfSprites("dusk"), 
        ConditionBuilder.or("Dusk Pygmy", [
            ConditionBuilder.checkParentBreedIds([{id: "dusk-pygmy", label: "Dusk Pygmy"}]),
            ConditionBuilder.and("", [
                ConditionBuilder.checkParentBreedIds([{id: "crimson-flare-pygmy", label: "Crimson Flare Pygmy"}]),
                ConditionBuilder.checkParentBreedIds([{id: "nilia-pygmy", label: "Nilia Pygmy"}])
            ])
        ])
    ),
    new HybridBreed("geode-dragon", "Geode Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Earth], SpriteFactory.mfSprites("geode"),
        ConditionBuilder.or('Geode Dragon', [
            ConditionBuilder.checkParentBreedIds([{id: "geode-dragon", label: "Geode Dragon"}]),
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
    new HybridBreed("hellhorse-dragon", "Hellhorse Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Fire], SpriteFactory.mfSprites("hellhorse"),
        ConditionBuilder.or("Hellorse Dragon", [
            ConditionBuilder.checkParentBreedIds([{id: "hellhorse-dragon", label: "Hellorse Dragon"}]),
            ConditionBuilder.and("", [
                ConditionBuilder.checkParentBreedIds([{id: "hellfire-wyvern", label: "Hellfire Wyvern"}]),
                ConditionBuilder.checkParentBreedIds([{id: "horse-dragon", label: "Horse Dragon"}])
            ])
        ])
    ),
    new HybridBreed("jester-dragon", "Jester Dragon", DragonType.TwoHeaded, DragonSubType.Western, [Affinity.Death], SpriteFactory.mfSprites("jester"),
        ConditionBuilder.and("Jester Dragon", [
            ConditionBuilder.checkParentBreedIds([{id: "blancblack-dragon", label: "Blancblack Dragon"}]),
            ConditionBuilder.checkParentBreedIds([{id: "bauta-dragon", label: "Bauta Dragon"}])
        ])
    ),
    new HybridBreed("risensong-dragon", "Risensong Dragon", DragonType.Dragon, DragonSubType.Lindwyrm, [Affinity.Light], SpriteFactory.uSprites("risensong"),
        ConditionBuilder.or("Risensong Dragon", [
            ConditionBuilder.checkParentBreedIds([{id: "risensong-dragon", label: "Risensong Dragon"}]),
            ConditionBuilder.and("", [
                ConditionBuilder.checkParentBreedIds([{id: "sunrise-dragon", label: "Sunrise Dragon"}]),
                ConditionBuilder.or("", [
                    ConditionBuilder.checkParentBreedIds([{id: "sunsong-amphiptere", label: "Sunsong Amphiptere"}]),
                    ConditionBuilder.checkParentBreedIds([{id: "setsong-dragon", label: "Setsong Dragon"}]),
                ])
            ]),
        ])
    ),
    new HybridBreed("setsong-dragon", "Setsong Dragon", DragonType.Dragon, DragonSubType.Lindwyrm, [Affinity.Light], SpriteFactory.uSprites("setsong"),
        ConditionBuilder.or("Setsong Dragon", [
            ConditionBuilder.checkParentBreedIds([{id: "setsong-dragon", label: "Setsong Dragon"}]),
            ConditionBuilder.and("", [
                ConditionBuilder.checkParentBreedIds([{id: "sunset-dragon", label: "Sunset Dragon"}]),
                ConditionBuilder.or("", [
                    ConditionBuilder.checkParentBreedIds([{id: "sunsong-amphiptere", label: "Sunsong Amphiptere"}]),
                    ConditionBuilder.checkParentBreedIds([{id: "risensong-dragon", label: "Risensong Dragon"}]),
                ])
            ]),
        ])
    ),
    new HybridBreed("shallow-water-dragon", "Shallow Water Dragon", DragonType.Dragon, DragonSubType.SeaSerpent, [Affinity.Water], SpriteFactory.mfSprites("shallow-water"),
        ConditionBuilder.or("Shallow Water Dragon", [
            ConditionBuilder.checkParentBreedIds([{id: "shallow-water-dragon", label: "Shallow Water Dragon"}]),
            ConditionBuilder.and("", [
                ConditionBuilder.checkParentBreedIds([{id: "water-dragon", label: "Water Dragon"}]),
                ConditionBuilder.checkParentBreedIds([{id: "magi-dragon", label: "Magi Dragon"}])
            ])
        ])
    ),
    new HybridBreed("soulpeace-dragon", "Soulpeace Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Light], SpriteFactory.mfSprites("soulpeace"),
        ConditionBuilder.or("Soulpeace Dragon", [
            ConditionBuilder.checkParentBreedIds([{id: "soulpeace-dragon", label: "Soulpeace Dragon"}]),
            ConditionBuilder.and("", [
                ConditionBuilder.checkParentBreedIds([{id: "daydream-dragon", label: "Daydream Dragon"}]),
                ConditionBuilder.checkParentBreedIds([{id: "white-dragon", label: "White Dragon"}])
            ])
        ])
    ),
    new HybridBreed("storm-rider-dragon", "Storm-Rider Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Lightning], SpriteFactory.uSprites("storm-rider"),
        ConditionBuilder.or("Storm-Rider Dragon", [
            ConditionBuilder.checkParentBreedIds([{id: "storm-rider-dragon", label: "Storm-Rider Dragon"}]),
            ConditionBuilder.and("", [
                ConditionBuilder.checkParentBreedIds([{id: "coastal-waverunner", label: "Coastal-Waverunner"}]),
                ConditionBuilder.checkParentBreedIds([{id: "electric-dragon", label: "Electric Dragon"}])
            ])
        ])
    ),
    new HybridBreed("two-finned-bluna", "Two-Finned Bluna", DragonType.Dragon, DragonSubType.Amphiptere, [Affinity.Water], SpriteFactory.mfSprites("two-finned-bluna"),
        ConditionBuilder.or("Two-Finned Bluna", [
            ConditionBuilder.checkParentBreedIds([{id: "two-finned-bluna", label: "Two-Finned Bluna"}]),
            ConditionBuilder.and("", [
                ConditionBuilder.checkParentBreedIds([{id: "skywing-dragon", label: "Skywing Dragon"}]),
                ConditionBuilder.or("", [
                    ConditionBuilder.checkParentBreedIds([{id: "deep-sea-dragon", label: "Deep Sea Dragon"}]),
                    ConditionBuilder.checkParentBreedIds([{id: "water-dragon", label: "Water Dragon"}]),
                ])
            ]),
        ])
    ),
    new HybridBreed("ultraviolet-dragon", "Ultraviolet Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Light], SpriteFactory.mfSprites("ultraviolet"),
        ConditionBuilder.or("Ultraviolet Dragon", [
            ConditionBuilder.checkParentBreedIds([{id: "ultraviolet-dragon", label: "Ultraviolet Dragon"}]),
            ConditionBuilder.and("", [
                ConditionBuilder.checkParentBreedIds([{id: "spitfire-dragon", label: "Spitfire Dragon"}]),
                ConditionBuilder.checkParentBreedIds([{id: "purple-dragon", label: "Purple Dragon"}]),
            ]),
        ])
    ),
]

export default HybridBreeds;