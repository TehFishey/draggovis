import Condition from '../../library/defines/Condition';
import Portrait from '../../library/defines/Portrait';
import Breed, { DragonType, DragonSubType, Affinity } from '../../library/defines/Breed';
import { Gender } from '../../library/defines/Dragon';

import PortraitFactory from '../_utilities/PortraitFactory';
import ConditionFactory from '../_utilities/ConditionFactory';


class PygmyBreed extends Breed {
    constructor(id: string, label: string, subType: DragonSubType, affinity: Array<Affinity>, portraits: Array<Portrait>, condition?: Condition) {
        super(id, label, DragonType.Pygmy, subType, affinity, "mf-mf", portraits, condition)
    }
}

let PygmyBreeds: Array<Breed> = [
    new PygmyBreed("avea-pygmy", "Avea Pygmy", DragonSubType.Western, [Affinity.Air], PortraitFactory.mfPortraits("avea")),
    new PygmyBreed("common-pygmy", "Common Pygmy", DragonSubType.Western, [Affinity.None], PortraitFactory.mfPortraits("common")),
    new PygmyBreed("coral-pygmy-wyvern", "Coral Pygmy Wyvern", DragonSubType.Wyvern, [Affinity.Water], PortraitFactory.mfPortraits("coral")),
    new PygmyBreed("crimson-flare-pygmy", "Crimson Flare Pygmy", DragonSubType.Western, [Affinity.None], PortraitFactory.uPortraits("crimson-flare")),
    new PygmyBreed("dark-myst-pygmy", "Dark Myst Pygmy", DragonSubType.Western, [Affinity.None], PortraitFactory.mfPortraits("dark-myst")),
    new PygmyBreed("glowback-pygmy", "Glowback Pygmy", DragonSubType.Western, [Affinity.Light], PortraitFactory.mfPortraits("glowback")),
    new PygmyBreed("kovos-pygmy", "Kovos Pygmy", DragonSubType.Lindwyrm, [Affinity.Water, Affinity.Death], PortraitFactory.uPortraits("kovos")),
    new PygmyBreed("kyanite-pygmy", "Kyanite Pygmy", DragonSubType.Eastern, [Affinity.Earth], PortraitFactory.uPortraits("kyanite")),
    new PygmyBreed("magelight-pygmy-wyvern", "Magelight Pygmy Wyvern", DragonSubType.Wyvern, [Affinity.None], PortraitFactory.mfPortraits("magelight")),
    new PygmyBreed("mariner-pygmy", "Mariner Pygmy", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.uPortraits("mariner")),
    new PygmyBreed("mimic-pygmy", "Mimic Pygmy", DragonSubType.Western, [Affinity.Magi], PortraitFactory.mfPortraits("mimic")),
    new PygmyBreed("misfit-pygmy", "Misfit Pygmy", DragonSubType.Western, [Affinity.None], PortraitFactory.mfPortraits("misfit")),
    new PygmyBreed("nilia-pygmy", "Nilia Pygmy", DragonSubType.Western, [Affinity.None], PortraitFactory.mfPortraits("nilia")),
    new PygmyBreed("pargulus-pygmy", "Pargulus Pygmy", DragonSubType.Western, [Affinity.Life], [
        PortraitFactory.customPortrait('pargulus-b-f', "Blue ♀", true, ConditionFactory.checkGender(Gender.Female,"Blue ♀")),
        PortraitFactory.customPortrait('pargulus-b-m', "Blue ♂", true, ConditionFactory.checkGender(Gender.Male,"Blue ♂")),
        PortraitFactory.customPortrait('pargulus-g-f', "Green ♀", true, ConditionFactory.checkGender(Gender.Female,"Green ♀")),
        PortraitFactory.customPortrait('pargulus-g-m', "Green ♂", true, ConditionFactory.checkGender(Gender.Male,"Green ♂")),
        PortraitFactory.customPortrait('pargulus-r-f', "Red ♀", true, ConditionFactory.checkGender(Gender.Female,"Red ♀")),
        PortraitFactory.customPortrait('pargulus-r-m', "Red ♂", true, ConditionFactory.checkGender(Gender.Male,"Red ♂")),
    ]),
    new PygmyBreed("pipio-pygmy", "Pipio Pygmy", DragonSubType.Western, [Affinity.Air], PortraitFactory.mfPortraits("pipio")),
    new PygmyBreed("red-tailed-wyrm-pygmy", "Red-Tailed Wyrm", DragonSubType.Wyrm, [Affinity.Air], PortraitFactory.uPortraits("red-tailed")),
    new PygmyBreed("seawyrm-pygmy", "Seawyrm Pygmy", DragonSubType.Lindwyrm, [Affinity.None], PortraitFactory.mfPortraits("seawyrm")),
]

export default PygmyBreeds;