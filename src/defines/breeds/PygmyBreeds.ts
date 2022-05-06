import Condition from '../../library/defines/Condition';
import Sprite from '../../library/defines/Sprite';
import Breed, { DragonType, DragonSubType, Affinity } from '../../library/defines/Breed';
import { Gender } from '../../library/defines/Dragon';

import SpriteFactory from '../_utilities/SpriteFactory';
import ConditionBuilder from '../_utilities/ConditionBuilder';


class PygmyBreed extends Breed {
    constructor(id: string, label: string, subType: DragonSubType, affinity: Array<Affinity>, sprites: Array<Sprite>, condition?: Condition) {
        super(id, label, DragonType.Pygmy, subType, affinity, "mf-mf", sprites, condition)
    }
}

let PygmyBreeds: Array<Breed> = [
    new PygmyBreed("avea-pygmy", "Avea Pygmy", DragonSubType.Western, [Affinity.Air], SpriteFactory.mfSprites("avea")),
    new PygmyBreed("common-pygmy", "Common Pygmy", DragonSubType.Western, [Affinity.None], SpriteFactory.mfSprites("common")),
    new PygmyBreed("coral-pygmy-wyvern", "Coral Pygmy Wyvern", DragonSubType.Wyvern, [Affinity.Water], SpriteFactory.mfSprites("coral")),
    new PygmyBreed("crimson-flare-pygmy", "Crimson Flare Pygmy", DragonSubType.Western, [Affinity.None], SpriteFactory.uSprites("crimson-flare")),
    new PygmyBreed("dark-myst-pygmy", "Dark Myst Pygmy", DragonSubType.Western, [Affinity.None], SpriteFactory.mfSprites("dark-myst")),
    new PygmyBreed("glowback-pygmy", "Glowback Pygmy", DragonSubType.Western, [Affinity.Light], SpriteFactory.mfSprites("glowback")),
    new PygmyBreed("kovos-pygmy", "Kovos Pygmy", DragonSubType.Lindwyrm, [Affinity.Water, Affinity.Death], SpriteFactory.uSprites("kovos")),
    new PygmyBreed("kyanite-pygmy", "Kyanite Pygmy", DragonSubType.Eastern, [Affinity.Earth], SpriteFactory.uSprites("kyanite")),
    new PygmyBreed("magelight-pygmy-wyvern", "Magelight Pygmy Wyvern", DragonSubType.Wyvern, [Affinity.None], SpriteFactory.mfSprites("magelight")),
    new PygmyBreed("mariner-pygmy", "Mariner Pygmy", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.uSprites("mariner")),
    new PygmyBreed("mimic-pygmy", "Mimic Pygmy", DragonSubType.Western, [Affinity.Magi], SpriteFactory.mfSprites("mimic")),
    new PygmyBreed("misfit-pygmy", "Misfit Pygmy", DragonSubType.Western, [Affinity.None], SpriteFactory.mfSprites("misfit")),
    new PygmyBreed("nilia-pygmy", "Nilia Pygmy", DragonSubType.Western, [Affinity.None], SpriteFactory.mfSprites("nilia")),
    new PygmyBreed("pargulus-pygmy", "Pargulus Pygmy", DragonSubType.Western, [Affinity.Life], [
        SpriteFactory.customSprite('pargulus-b-f', "Blue ♀", true, ConditionBuilder.checkGender(Gender.Female,"Blue ♀")),
        SpriteFactory.customSprite('pargulus-b-m', "Blue ♂", true, ConditionBuilder.checkGender(Gender.Male,"Blue ♂")),
        SpriteFactory.customSprite('pargulus-g-f', "Green ♀", true, ConditionBuilder.checkGender(Gender.Female,"Green ♀")),
        SpriteFactory.customSprite('pargulus-g-m', "Green ♂", true, ConditionBuilder.checkGender(Gender.Male,"Green ♂")),
        SpriteFactory.customSprite('pargulus-r-f', "Red ♀", true, ConditionBuilder.checkGender(Gender.Female,"Red ♀")),
        SpriteFactory.customSprite('pargulus-r-m', "Red ♂", true, ConditionBuilder.checkGender(Gender.Male,"Red ♂")),
    ]),
    new PygmyBreed("pipio-pygmy", "Pipio Pygmy", DragonSubType.Western, [Affinity.Air], SpriteFactory.mfSprites("pipio")),
    new PygmyBreed("red-tailed-wyrm-pygmy", "Red-Tailed Wyrm", DragonSubType.Wyrm, [Affinity.Air], SpriteFactory.uSprites("red-tailed")),
    new PygmyBreed("seawyrm-pygmy", "Seawyrm Pygmy", DragonSubType.Lindwyrm, [Affinity.None], SpriteFactory.mfSprites("seawyrm")),
]

export default PygmyBreeds;