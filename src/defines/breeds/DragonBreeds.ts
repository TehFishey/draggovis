import Condition from '../../library/defines/Condition';
import Portrait from '../../library/defines/Portrait';
import Breed, { DragonType, DragonSubType, Affinity } from '../../library/defines/Breed';
import { Gender } from '../../library/defines/Dragon';

import PortraitFactory from '../_utilities/PortraitFactory';
import ConditionFactory from '../_utilities/ConditionFactory';
import TimeRange from '../../library/defines/TimeRange';

class DragonBreed extends Breed {
    constructor(id: string, label: string, subType: DragonSubType, affinity: Array<Affinity>, Portraits: Array<Portrait>, condition?: Condition) {
        super(id, label, DragonType.Dragon, subType, affinity, "mf-mf", Portraits, condition)
    }
}

let DragonBreeds: Array<Breed> = [
    new DragonBreed("aeon-wyvern", "Aeon Wyvern", DragonSubType.Wyvern, [Affinity.Time], PortraitFactory.mfPortraits("aeon")),
    new DragonBreed("aeria-gloris-dragon", "Aeria Gloris Dragon", DragonSubType.Amphiptere, [Affinity.Magi, Affinity.Lightning], PortraitFactory.uPortraits("aeria-gloris")),
    new DragonBreed("aether-wyvern", "Aether Wyvern", DragonSubType.Wyvern, [Affinity.Air], PortraitFactory.uPortraits("aether")),
    new DragonBreed("albino-dragon", "Albino Dragon", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.uPortraits("albino")),
    new DragonBreed("alcedine-wyvern", "Alcedine Wyvern", DragonSubType.Wyvern, [Affinity.Air], [
        PortraitFactory.customPortrait('alcedine-b-u', "Blue", true),
        PortraitFactory.customPortrait('alcedine-r-u', "Red", true),
    ]),
    new DragonBreed("almerald-dragon", "Almerald Dragon", DragonSubType.Eastern, [Affinity.Light], PortraitFactory.uPortraits("almerald")),
    new DragonBreed("anagallis-wyvern", "Anagallis Dragon", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.mfPortraits("anagallis")),
    new DragonBreed("antarean-dragon", "Antarean Dragon", DragonSubType.Western, [Affinity.Light, Affinity.Fire], PortraitFactory.mfPortraits("antarean")),
    new DragonBreed("aqualis-dragon", "Aqualis Dragon", DragonSubType.Eastern, [Affinity.Water], PortraitFactory.mfPortraits("aqualis")),
    new DragonBreed("aranoa-dragon", "Aranoa Dragon", DragonSubType.Wingless, [Affinity.Water], PortraitFactory.uPortraits("aranoa")),
    new DragonBreed("aria-dragon", "Aria Dragon", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.mfPortraits("aria")),
    new DragonBreed("ash-dragon", "Ash Dragon", DragonSubType.Wingless, [Affinity.Earth], PortraitFactory.uPortraits("ash")),
    new DragonBreed("azure-glacewing-dragon", "Azure Glacewing Dragon", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.uPortraits("azure-glacewing")),
    new DragonBreed("balloon-dragon", "Balloon Dragon", DragonSubType.Western, [Affinity.Air], PortraitFactory.uPortraits("balloon")),
    new DragonBreed("black-dragon", "Black Dragon", DragonSubType.Western, [Affinity.Dark], PortraitFactory.mfAltPortraits("black")),
    new DragonBreed("black-capped-teimarr-dragon", "Black Capped Teimarr Dragon", DragonSubType.Western, [Affinity.Water], PortraitFactory.mfPortraits("black-capped-teimarr")),
    new DragonBreed("black-tea-dragon", "Black Tea Dragon", DragonSubType.Western, [Affinity.Life], PortraitFactory.mfPortraits("black-tea")),
    new DragonBreed("black-truffle-dragon", "Black Truffle Dragon", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.uPortraits("black-truffle")),
    new DragonBreed("blacktip-dragon", "Blacktip Dragon", DragonSubType.Western, [Affinity.Air], PortraitFactory.uPortraits("blacktip")),
    new DragonBreed("bleeding-moon-dragon", "Bleeding Moon Dragon", DragonSubType.Western, [Affinity.Dark], PortraitFactory.mfPortraits("bleeding-moon")),
    new DragonBreed("blue-banded-dragon", "Blue-Banded Dragon", DragonSubType.Western, [Affinity.Water], PortraitFactory.uPortraits("blue-banded")),
    new DragonBreed("blusang-lindwyrm", "Blusang Lindwyrm", DragonSubType.Lindwyrm, [Affinity.Water], PortraitFactory.mfPortraits("blusang")),
    new DragonBreed("bolt-dragon", "Bolt Dragon", DragonSubType.Eastern, [Affinity.Lightning], PortraitFactory.uPortraits("bolt")),
    new DragonBreed("boreal-dragon", "Boreal Dragon", DragonSubType.Western, [Affinity.Ice], PortraitFactory.uPortraits("boreal")),
    new DragonBreed("bright-breasted-wyvern", "Bright-Breasted Wyvern", DragonSubType.Wyvern, [Affinity.Neutral], PortraitFactory.mfPortraits("bright-breasted")),
    new DragonBreed("brimstone-dragon", "Brimstone Dragon", DragonSubType.Western, [Affinity.Fire], PortraitFactory.uPortraits("brimstone")),
    new DragonBreed("brute-dragon", "Brute Dragon", DragonSubType.Western, [Affinity.Death], PortraitFactory.mfPortraits("brute")),
    new DragonBreed("candelabra-dragon", "Candelabra Dragon", DragonSubType.Western, [Affinity.Light], PortraitFactory.uPortraits("candelabra")),
    new DragonBreed("canopy-dragon", "Canopy Dragon", DragonSubType.Western, [Affinity.Life], PortraitFactory.mfPortraits("canopy")),
    new DragonBreed("carmine-wyvern", "Carmine Wyvern", DragonSubType.Wyvern, [Affinity.Neutral], PortraitFactory.uPortraits("carmine")),
    new DragonBreed("cassare-dragon", "Cassare Dragon", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.uPortraits("cassare")),
    new DragonBreed("celestial-dragon", "Celestial Dragon", DragonSubType.Western, [Affinity.Magi], PortraitFactory.mfPortraits("celestial")),
    new DragonBreed("cloudplume-dragon", "Cloudplume Dragon", DragonSubType.Eastern, [Affinity.Air], PortraitFactory.uPortraits("cloudplume")),
    new DragonBreed("coastal-waverunner", "Coastal Waverunner", DragonSubType.Wyvern, [Affinity.Water], PortraitFactory.uPortraits("coastal-waverunner")),
    new DragonBreed("copper-dragon", "Copper Dragon", DragonSubType.Wyvern, [Affinity.Earth], [
        PortraitFactory.customPortrait('copper-b-f', "Brown ♀", true, ConditionFactory.checkGender(Gender.Female,"Brown ♀")),
        PortraitFactory.customPortrait('copper-b-m', "Brown ♂", true, ConditionFactory.checkGender(Gender.Male,"Brown ♂")),
        PortraitFactory.customPortrait('copper-g-f', "Green ♀", true, ConditionFactory.checkGender(Gender.Female,"Green ♀")),
        PortraitFactory.customPortrait('copper-g-m', "Green ♂", true, ConditionFactory.checkGender(Gender.Male,"Green ♂")),
        PortraitFactory.customPortrait('copper-r-f', "Red ♀", true, ConditionFactory.checkGender(Gender.Female,"Red ♀")),
        PortraitFactory.customPortrait('copper-r-m', "Red ♂", true, ConditionFactory.checkGender(Gender.Male,"Red ♂"))
    ]),
    new DragonBreed("crystalline-dragon", "Crystalline Dragon", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.mfPortraits("crystalline")),
    new DragonBreed("dark-green-dragon", "Dark Green Dragon", DragonSubType.Wingless, [Affinity.Dark, Affinity.Life], PortraitFactory.uAltPortraits("dark-green")),
    new DragonBreed("dark-lumina-dragon", "Dark Lumina Dragon", DragonSubType.Western, [Affinity.Dark], PortraitFactory.mfPortraits("dark-lumina")),
    new DragonBreed("daydream-dragon", "Daydream Dragon", DragonSubType.Western, [Affinity.Air], PortraitFactory.mfPortraits("daydream")),
    new DragonBreed("deep-sea-dragon", "Deep Sea Dragon", DragonSubType.SeaSerpent, [Affinity.Water], PortraitFactory.uPortraits("deep-sea")),
    new DragonBreed("diamondwing-dragon", "Diamondwing Dragon", DragonSubType.Western, [Affinity.Earth], PortraitFactory.uPortraits("diamondwing")),
    new DragonBreed("dorsal-dragon", "Dorsal Dragon", DragonSubType.Wingless, [Affinity.Neutral], [
        PortraitFactory.customPortrait('dorsal-p-u', "Purple", true),
        PortraitFactory.customPortrait('dorsal-r-u', "Red", false),
    ]),
    new DragonBreed("electric-dragon", "Electric Dragon", DragonSubType.Western, [Affinity.Lightning], PortraitFactory.mfPortraits("electric")),
    new DragonBreed("ember-dragon", "Ember Dragon", DragonSubType.Western, [Affinity.Fire], PortraitFactory.mfPortraits("ember")),
    new DragonBreed("falconiform-wyvern", "Falconiform Wyvern", DragonSubType.Wyvern, [Affinity.Fire], PortraitFactory.mfPortraits("falconiform")),
    new DragonBreed("fell-dragon", "Fell Dragon", DragonSubType.Wingless, [Affinity.Death], PortraitFactory.mfPortraits("fell")),
    new DragonBreed("fever-wyvern", "Fever Wyvern", DragonSubType.Wyvern, [Affinity.Death], PortraitFactory.uPortraits("fever")),
    new DragonBreed("fire-gen-dragon", "Fire Gem Dragon", DragonSubType.Western, [Affinity.Fire], [
        PortraitFactory.customPortrait('fire-gem-b-f', "Blue ♀", true, ConditionFactory.checkGender(Gender.Female,"Blue ♀")),
        PortraitFactory.customPortrait('fire-gem-b-m', "Blue ♂", true, ConditionFactory.checkGender(Gender.Male,"Blue ♂")),
        PortraitFactory.customPortrait('fire-gem-g-f', "Green ♀", true, ConditionFactory.checkGender(Gender.Female,"Green ♀")),
        PortraitFactory.customPortrait('fire-gem-g-m', "Green ♂", true, ConditionFactory.checkGender(Gender.Male,"Green ♂")),
        PortraitFactory.customPortrait('fire-gem-r-f', "Red ♀", true, ConditionFactory.checkGender(Gender.Female,"Red ♀")),
        PortraitFactory.customPortrait('fire-gem-r-m', "Red ♂", true, ConditionFactory.checkGender(Gender.Male,"Red ♂")),
    ]),
    new DragonBreed("flamingo-wyvern", "Flamingo Wyvern", DragonSubType.Wyvern, [Affinity.Earth], PortraitFactory.mfPortraits("flamingo")),
    new DragonBreed("floret-wyvern", "Floret Wyvern", DragonSubType.Wyvern,  [Affinity.Life], [
        PortraitFactory.customPortrait('floret-p-f', "Purple ♀", true, ConditionFactory.checkGender(Gender.Female,"Purple ♀")),
        PortraitFactory.customPortrait('floret-p-m', "Purple ♂", true, ConditionFactory.checkGender(Gender.Male,"Purple ♂")),
        PortraitFactory.customPortrait('floret-g-f', "Gold ♀", true, ConditionFactory.checkGender(Gender.Female,"Gold ♀")),
        PortraitFactory.customPortrait('floret-g-m', "Gold ♂", true, ConditionFactory.checkGender(Gender.Male,"Gold ♂")),
    ]),
    new DragonBreed("freckled-dragon", "Freckled Dragon", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.uPortraits("freckled")),
    new DragonBreed("frilled-dragon", "Frilled Dragon", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.mfPortraits("frilled")),
    new DragonBreed("frostbite-dragon", "Frostbite Dragon", DragonSubType.Western, [Affinity.Ice], PortraitFactory.uPortraits("frostbite")),
    new DragonBreed("galvanic-wyvern", "Galvanic Wyvern", DragonSubType.Wyvern, [Affinity.Dark, Affinity.Lightning], PortraitFactory.uPortraits("galvanic")),
    new DragonBreed("gemshard-dragon", "Gemshard Dragon", DragonSubType.Eastern, [Affinity.Air], [
        PortraitFactory.customPortrait('gemshard-b-f', "Blue ♀", true, ConditionFactory.checkGender(Gender.Female,"Blue ♀")),
        PortraitFactory.customPortrait('gemshard-b-m', "Blue ♂", true, ConditionFactory.checkGender(Gender.Male,"Blue ♂")),
        PortraitFactory.customPortrait('gemshard-g-f', "Green ♀", true, ConditionFactory.checkGender(Gender.Female,"Green ♀")),
        PortraitFactory.customPortrait('gemshard-g-m', "Green ♂", true, ConditionFactory.checkGender(Gender.Male,"Green ♂")),
        PortraitFactory.customPortrait('gemshard-r-f', "Red ♀", true, ConditionFactory.checkGender(Gender.Female,"Red ♀")),
        PortraitFactory.customPortrait('gemshard-r-m', "Red ♂", true, ConditionFactory.checkGender(Gender.Male,"Red ♂")),
    ]),
    new DragonBreed("gold-dragon", "Gold Dragon", DragonSubType.Western, [Affinity.Earth], PortraitFactory.mfPortraits("gold")),
    new DragonBreed("gold-horned-tangar", "Gold-horned Tangar", DragonSubType.Western, [Affinity.Life], PortraitFactory.mfPortraits("gold-horned")),
    new DragonBreed("golden-wyvern", "Golden Wyvern", DragonSubType.Wyvern, [Affinity.Magi], PortraitFactory.mfPortraits("golden")),
    new DragonBreed("green-dragon", "Green Dragon", DragonSubType.Western, [Affinity.Earth], PortraitFactory.uPortraits("green")),
    new DragonBreed("guardian-dragon", "Guardian Dragon", DragonSubType.Western, [Affinity.Light, Affinity.Neutral], PortraitFactory.uPortraits("guardian")),
    new DragonBreed("guardian-of-nature", "Guardian of Nature", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.uPortraits("guardian-of-nature"), 
        ConditionFactory.checkFirstGeneration('Guardian of Nature')
    ),
    new DragonBreed("harvest-dragon", "Harvest Dragon", DragonSubType.Western, [Affinity.Earth], PortraitFactory.mfPortraits("harvest")),
    new DragonBreed("hellfire-wyvern", "Hellfire Wyvern", DragonSubType.Wyvern, [Affinity.Fire], PortraitFactory.mfPortraits("hellfire")),
    new DragonBreed("horse-dragon", "Horse Dragon", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.mfPortraits("horse")),
    new DragonBreed("ice-dragon", "Ice Dragon", DragonSubType.Western, [Affinity.Ice], PortraitFactory.uPortraits("ice")),
    new DragonBreed("imperial-fleshcrowne-dragon", "Imperial Fleshcrowne", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.mfPortraits("imperial-fleshcrowne")),
    new DragonBreed("khusa-dragon", "Khusa Dragon", DragonSubType.Western, [Affinity.Earth], PortraitFactory.uPortraits("khusa")),
    new DragonBreed("kingcrowne-dragon", "Kingcrowne Dragon", DragonSubType.Western, [Affinity.Light, Affinity.Magi], PortraitFactory.uPortraits("kingcrowne")),
    new DragonBreed("labradorite-dragon", "Labradorite Dragon", DragonSubType.Eastern, [Affinity.Dark, Affinity.Earth], PortraitFactory.mfPortraits("labradorite")),
    new DragonBreed("lacula-dragon", "Lacula Dragon", DragonSubType.Amphiptere, [Affinity.Water], PortraitFactory.uPortraits("lacula")),
    new DragonBreed("leodon-dragon", "Leodon Dragon", DragonSubType.Wingless, [Affinity.Fire], PortraitFactory.uPortraits("leodon")),
    new DragonBreed("lihnseyre-dragon", "Lihnseyre Dragon", DragonSubType.Eastern, [Affinity.Life, Affinity.Magi], PortraitFactory.uPortraits("lihnseyre")),
    new DragonBreed("lumina-dragon", "Lumina Dragon", DragonSubType.Western, [Affinity.Light], PortraitFactory.mfPortraits("lumina")),
    new DragonBreed("luminox-dragon", "Luminox Wyvern", DragonSubType.Wyvern, [Affinity.Time], PortraitFactory.mfPortraits("luminox")),
    new DragonBreed("lunar-herald-dragon", "Lunar Herald", DragonSubType.Western, [Affinity.Light], [
        PortraitFactory.customPortrait('lunar-herald-b-u', "Bronze", true),
        PortraitFactory.customPortrait('lunar-herald-g-u', "Gold", true),
        PortraitFactory.customPortrait('lunar-herald-p-u', "Purple", true),
        PortraitFactory.customPortrait('lunar-herald-s-u', "Silver", true),
    ]),
    new DragonBreed("magi-dragon", "Magi Dragon", DragonSubType.Western, [Affinity.Magi], PortraitFactory.uPortraits("magi")),
    new DragonBreed("magma-dragon", "Magma Dragon", DragonSubType.Wingless, [Affinity.Fire], PortraitFactory.uPortraits("magma")),
    new DragonBreed("melismor-dragon", "Melismor Dragon", DragonSubType.Eastern, [Affinity.Earth], PortraitFactory.mfPortraits("melismor")),
    new DragonBreed("mint-dragon", "Mint Dragon", DragonSubType.Wingless, [Affinity.Neutral], PortraitFactory.uPortraits("mint")),
    new DragonBreed("monarch-dragon", "Monarch Dragon", DragonSubType.Western, [Affinity.Earth], PortraitFactory.mfPortraits("monarch")),
    new DragonBreed("moonstone-dragon", "Moonstone Dragon", DragonSubType.Western, [Affinity.Magi], PortraitFactory.mfPortraits("moonstone")),
    new DragonBreed("nebula-dragon", "Nebula Dragon", DragonSubType.Wyvern, [Affinity.Light], [
        PortraitFactory.customPortrait('nebula-1-f', "Blue", true, ConditionFactory.checkGender(Gender.Female,"Blue")),
        PortraitFactory.customPortrait('nebula-1-m', "Green", true, ConditionFactory.checkGender(Gender.Male,"Green")),
        PortraitFactory.customPortrait('nebula-2-f', "Red", true, ConditionFactory.checkGender(Gender.Female,"Red")),
        PortraitFactory.customPortrait('nebula-2-m', "Purple", true, ConditionFactory.checkGender(Gender.Male,"Purple")),
    ]),
    new DragonBreed("neotropical-dragon", "Neotropical Dragon", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.mfPortraits("neotropical")),
    new DragonBreed("nhiostrife-wyvern", "Nhiostrife Wyvern", DragonSubType.Wyvern, [Affinity.Air], PortraitFactory.uPortraits("nhiostrife")),
    new DragonBreed("nocturne-dragon", "Nocturne Dragon", DragonSubType.Western, [Affinity.Time], [
        PortraitFactory.customPortrait('nocturne-u', "Standard", true, ConditionFactory.alwaysTrue("Standard"), [
            {range: new TimeRange('18:00:00','05:59:00'), 
            portraits: [
                PortraitFactory.customPortrait('nocturne-t1-f', "Night ♀", true, ConditionFactory.checkGender(Gender.Female,"Night ♀")),
                PortraitFactory.customPortrait('nocturne-t1-m', "Night ♂", true, ConditionFactory.checkGender(Gender.Male,"Night ♂")),
            ]}
        ])
    ]),
    new DragonBreed("olive-dragon", "Olive Dragon", DragonSubType.Western, [Affinity.Dark], PortraitFactory.mfPortraits("olive")),
    new DragonBreed("pillow-dragon", "Pillow Dragon", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.mfPortraits("pillow")),
    new DragonBreed("pink-dragon", "Pink Dragon", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.mfPortraits("pink")),
    new DragonBreed("plated-colossus-dragon", "Plated Colossus Dragon", DragonSubType.Western, [Affinity.Earth], PortraitFactory.mfPortraits("plated-colossus")),
    new DragonBreed("purple-dragon", "Purple Dragon", DragonSubType.Western, [Affinity.Life], PortraitFactory.mfPortraits("purple")),
    new DragonBreed("pyralspite-dragon", "Pyralspite Dragon", DragonSubType.Western, [Affinity.Earth], [
        PortraitFactory.customPortrait('pyralspite-a-u', "Almandine", true),
        PortraitFactory.customPortrait('pyralspite-p-u', "Pyrope", true),
        PortraitFactory.customPortrait('pyralspite-s-u', "Spessartine", true),
    ]),
    new DragonBreed("pyrovar-dragon", "Pyrovar Dragon", DragonSubType.Western, [Affinity.Fire], PortraitFactory.uPortraits("pyrovar")),
    new DragonBreed("razorcrest-wyvern", "Razorcrest Wyvern", DragonSubType.Wyvern, [Affinity.Air], PortraitFactory.uPortraits("razorcrest")),
    new DragonBreed("red-dragon", "Red Dragon", DragonSubType.Western, [Affinity.Fire], PortraitFactory.uPortraits("red")),
    new DragonBreed("red-finned-tidal-dragon", "Red-finned Tidal Dragon", DragonSubType.Lindwyrm, [Affinity.Water], PortraitFactory.mfPortraits("red-finned-tidal")),
    new DragonBreed("ridgewing-dragon", "Ridgewing Dragon", DragonSubType.Western, [Affinity.Air], PortraitFactory.mfAltPortraits("ridgewing")),
    new DragonBreed("rift-wyrm", "Rift Wyrm", DragonSubType.Wyrm, [Affinity.Magi, Affinity.Water], PortraitFactory.mfPortraits("rift")),
    new DragonBreed("royal-blue-dragon", "Royal Blue Dragon", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.mfPortraits("royal-blue")),
    new DragonBreed("royal-crimson-dragon", "Royal Crimson Dragon", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.uPortraits("royal-crimson")),
    new DragonBreed("sandwaste-dragon", "Sandwaste Dragon", DragonSubType.Western, [Affinity.Earth], PortraitFactory.mfPortraits("sandwaste")),
    new DragonBreed("sapo-dragon", "Sapo Dragon", DragonSubType.SeaSerpent, [Affinity.Water], PortraitFactory.uPortraits("sapo")),
    new DragonBreed("sapphire-dragon", "Sapphire Dragon", DragonSubType.Western, [Affinity.Light], PortraitFactory.uPortraits("sapphire")),
    new DragonBreed("scimitar-wing-wyvern", "Scimitar-wing Wyvern", DragonSubType.Wyvern, [Affinity.Neutral], PortraitFactory.mfPortraits("scimitar-wing")),
    new DragonBreed("script-dragon", "Script Dragon", DragonSubType.Lindwyrm, [Affinity.Magi], PortraitFactory.uPortraits("script")),
    new DragonBreed("seasonal-dragon", "Seasonal Dragon", DragonSubType.Western, [Affinity.Time], [
        PortraitFactory.customPortrait('seasonal-w-f', "Winter ♀", true, ConditionFactory.checkGender(Gender.Female,"Winter ♀")),
        PortraitFactory.customPortrait('seasonal-w-m', "Winter ♂", true, ConditionFactory.checkGender(Gender.Male,"Winter ♂")),
        PortraitFactory.customPortrait('seasonal-sp-f', "Spring ♀", true, ConditionFactory.checkGender(Gender.Female,"Spring ♀")),
        PortraitFactory.customPortrait('seasonal-sp-m', "Spring ♂", true, ConditionFactory.checkGender(Gender.Male,"Spring ♂")),
        PortraitFactory.customPortrait('seasonal-su-f', "Summer ♀", true, ConditionFactory.checkGender(Gender.Female,"Summer ♀")),
        PortraitFactory.customPortrait('seasonal-su-m', "Summer ♂", true, ConditionFactory.checkGender(Gender.Male,"Summer ♂")),
        PortraitFactory.customPortrait('seasonal-f-f', "Fall ♀", true, ConditionFactory.checkGender(Gender.Female,"Fall ♀")),
        PortraitFactory.customPortrait('seasonal-f-m', "Fall ♂", true, ConditionFactory.checkGender(Gender.Male,"Fall ♂")),
    ]),
    new DragonBreed("seragamma-wyvern", "Seragamma Wyvern", DragonSubType.Wyvern, [Affinity.Death], PortraitFactory.mfPortraits("seragamma")),
    new DragonBreed("silver-dragon", "Silver Dragon", DragonSubType.Eastern, [Affinity.Light], PortraitFactory.mfPortraits("silver")),
    new DragonBreed("sinomorph-dragon", "Sinomorph", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.uPortraits("sinomorph")),
    new DragonBreed("sinii-krai-dragon", "Sinii Krai Dragon", DragonSubType.Western, [Affinity.None], PortraitFactory.mfPortraits("sinni-krai")),
    new DragonBreed("siyat-dragon", "Siyat Dragon", DragonSubType.Western, [Affinity.Air], [
        PortraitFactory.customPortrait('siyat-b-u', "Blue", true),
        PortraitFactory.customPortrait('siyat-g-u', "Green", true),
        PortraitFactory.customPortrait('siyat-p-u', "Purple", true),
    ]),
    new DragonBreed("skysilk-dragon", "Skysilk Dragon", DragonSubType.Western, [Affinity.Air], PortraitFactory.uPortraits("skysilk")),
    new DragonBreed("skywing-dragon", "Skywing Dragon", DragonSubType.Amphiptere, [Affinity.Air], PortraitFactory.uPortraits("skywing")),
    new DragonBreed("speckle-throated-dragon", "Speckle-Throated Dragon", DragonSubType.Western, [Affinity.Air], PortraitFactory.mfPortraits("speckle-throated")),
    new DragonBreed("spinel-wyvern", "Spinel Wyvern", DragonSubType.Wyvern, [Affinity.Earth], PortraitFactory.mfAltPortraits("spinel")),
    new DragonBreed("spirit-ward-dragon", "Spirit Ward Dragon", DragonSubType.Wyvern, [Affinity.Light], generateSpiritWardSwaps()),
    new DragonBreed("spitfire-dragon", "Spitfire Dragon", DragonSubType.Western, [Affinity.Fire], PortraitFactory.uPortraits("spitfire")),
    new DragonBreed("spotted-greenwing-dragon", "Spotted Greenwing", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.uPortraits("spotted-greenwing")),
    new DragonBreed("stone-dragon", "Stone Dragon", DragonSubType.Western, [Affinity.Earth], PortraitFactory.uPortraits("stone")),
    new DragonBreed("storm-dragon", "Storm Dragon", DragonSubType.Western, [Affinity.Air], PortraitFactory.mfPortraits("storm")),
    new DragonBreed("stratos-dragon", "Stratos Dragon", DragonSubType.SeaSerpent, [Affinity.Air, Affinity.Light], [
        PortraitFactory.customPortrait('stratos-u', "Standard", true, ConditionFactory.alwaysTrue("Standard"), [
            {range: new TimeRange('03:00:00','08:59:00'), 
            portraits: [PortraitFactory.customPortrait('stratos-t1-u', "Dawn", true, ConditionFactory.alwaysTrue("Dawn")),]},
            {range: new TimeRange('15:00:00','20:59:00'), 
            portraits: [PortraitFactory.customPortrait('stratos-t2-u', "Dusk", true, ConditionFactory.alwaysTrue("Dusk")),]},
            {range: new TimeRange('21:00:00','02:59:00'), 
            portraits: [PortraitFactory.customPortrait('stratos-t3-u', "Night", true, ConditionFactory.alwaysTrue("Night")),]}
        ])
    ]),
    new DragonBreed("striped-dragon", "Striped Dragon", DragonSubType.Western, [Affinity.Neutral], [
        PortraitFactory.customPortrait('striped-w-f', "White ♀", true, ConditionFactory.checkGender(Gender.Female,"White ♀")),
        PortraitFactory.customPortrait('striped-w-m', "White ♂", true, ConditionFactory.checkGender(Gender.Male,"White ♂")),
        PortraitFactory.customPortrait('striped-b-f', "Black ♀", false, ConditionFactory.checkGender(Gender.Female,"Black ♀")),
        PortraitFactory.customPortrait('striped-b-m', "Black ♂", false, ConditionFactory.checkGender(Gender.Male,"Black ♂")),
        PortraitFactory.customPortrait('striped-g-f', "Green ♀", false, ConditionFactory.checkGender(Gender.Female,"Green ♀")),
        PortraitFactory.customPortrait('striped-g-m', "Green ♂", false, ConditionFactory.checkGender(Gender.Male,"Green ♂")),
        PortraitFactory.customPortrait('striped-r-f', "Red ♀", false, ConditionFactory.checkGender(Gender.Female,"Red ♀")),
        PortraitFactory.customPortrait('striped-r-m', "Red ♂", false, ConditionFactory.checkGender(Gender.Male,"Red ♂")),
        PortraitFactory.customPortrait('striped-u-f', "Blue ♀", false, ConditionFactory.checkGender(Gender.Female,"Blue ♀")),
        PortraitFactory.customPortrait('striped-u-m', "Blue ♂", false, ConditionFactory.checkGender(Gender.Male,"Blue ♂")),
    ]),
    new DragonBreed("striped-river-dragon", "Striped River Dragon", DragonSubType.Eastern, [Affinity.Water], PortraitFactory.uPortraits("striped-river")),
    new DragonBreed("sunrise-dragon", "Sunrise Dragon", DragonSubType.Western, [Affinity.Light], PortraitFactory.mfPortraits("sunrise")),
    new DragonBreed("sunset-dragon", "Sunset Dragon", DragonSubType.Western, [Affinity.Light], PortraitFactory.mfPortraits("sunset")),
    new DragonBreed("sunsong-amphiptere", "Sunsong Amphiptere", DragonSubType.Amphiptere, [Affinity.Light], PortraitFactory.mfPortraits("sunsong")),
    new DragonBreed("sunstone-dragon", "Sunstone Dragon", DragonSubType.Western, [Affinity.Fire], PortraitFactory.uPortraits("sunstone")),
    new DragonBreed("swallowtail-dragon", "Swallowtail Dragon", DragonSubType.Western, [Affinity.Air], PortraitFactory.mfPortraits("swallowtail")),
    new DragonBreed("tercorn-dragon", "Tercorn Dragon", DragonSubType.Western, [Affinity.Water, Affinity.Life], PortraitFactory.uPortraits("tercorn")),
    new DragonBreed("terrae-dragon", "Terrae Dragon", DragonSubType.Wingless, [Affinity.Earth], PortraitFactory.mfPortraits("terrae")),
    new DragonBreed("tetra-dragon", "Tetra Dragon", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.uPortraits("tetra")),
    new DragonBreed("thunder-dragon", "Thunder Dragon", DragonSubType.Western, [Affinity.Lightning], PortraitFactory.uPortraits("thunder")),
    new DragonBreed("tri-horn-wyvern", "Tri-Horn Wyvern", DragonSubType.Wyvern, [Affinity.Ice], PortraitFactory.mfPortraits("tri-horn")),
    new DragonBreed("tsunami-wyvern", "Tsunami Wyvern", DragonSubType.Wyvern, [Affinity.Water], PortraitFactory.mfPortraits("tsunami")),
    new DragonBreed("turpentine-dragon", "Turpentine Dragon", DragonSubType.Western, [Affinity.Dark], PortraitFactory.uPortraits("turpentine")),
    new DragonBreed("undine-dragon", "Undine Dragon", DragonSubType.Western, [Affinity.Water], PortraitFactory.mfAltPortraits("undine")),
    new DragonBreed("venturis-dragon", "Venturis Dragon", DragonSubType.Eastern, [Affinity.Time], PortraitFactory.mfPortraits("venturis")),
    new DragonBreed("water-dragon", "Water Dragon", DragonSubType.SeaSerpent, [Affinity.Water], PortraitFactory.mfPortraits("water")),
    new DragonBreed("water-walker-dragon", "Water Walker Dragon", DragonSubType.Wingless, [Affinity.Water], PortraitFactory.uPortraits("water-walker")),
    new DragonBreed("waterhorse-dragon", "Waterhorse Dragon", DragonSubType.Wingless, [Affinity.Water], PortraitFactory.mfPortraits("waterhorse")),
    new DragonBreed("whiptail-dragon", "Whiptail Dragon", DragonSubType.Western, [Affinity.Neutral], PortraitFactory.uPortraits("whiptail")),
    new DragonBreed("white-dragon", "White Dragon", DragonSubType.Western, [Affinity.Life, Affinity.Light], PortraitFactory.uPortraits("white")),
    new DragonBreed("xenowyrm-astrapi", "Astrapi Xenowyrm", DragonSubType.Wyrm, [Affinity.Lightning], PortraitFactory.uPortraits("xenowyrm-astrapi")),
    new DragonBreed("xenowyrm-chrono", "Chrono Xenowyrm", DragonSubType.Wyrm, [Affinity.Time], PortraitFactory.uPortraits("xenowyrm-chrono")),
    new DragonBreed("xenowyrm-gaia", "Gaia Xenowyrm", DragonSubType.Wyrm, [Affinity.Life], PortraitFactory.uPortraits("xenowyrm-gaia")),
    new DragonBreed("xenowyrm-mageia", "Mageia Xenowyrm", DragonSubType.Wyrm, [Affinity.Magi], PortraitFactory.uPortraits("xenowyrm-mageia")),
    new DragonBreed("xenowyrm-pyro", "Pyro Xenowyrm", DragonSubType.Wyrm, [Affinity.Fire], PortraitFactory.uPortraits("xenowyrm-pyro")),
    new DragonBreed("xenowyrm-thalassa", "Thalassa Xenowyrm", DragonSubType.Wyrm, [Affinity.Water], PortraitFactory.uPortraits("xenowyrm-thalassa")),
    new DragonBreed("xol-dragon", "Xol Dragon", DragonSubType.Wingless, [Affinity.Fire, Affinity.Water], [
        PortraitFactory.customPortrait('xol-b-f', "Brown ♀", true, ConditionFactory.checkGender(Gender.Female,"Brown ♀",)),
        PortraitFactory.customPortrait('xol-b-m', "Brown ♂", true, ConditionFactory.checkGender(Gender.Male,"Brown ♂")),
        PortraitFactory.customPortrait('xol-p-f', "Purple ♀", true, ConditionFactory.checkGender(Gender.Female,"Purple ♀")),
        PortraitFactory.customPortrait('xol-p-m', "Purple ♂", true, ConditionFactory.checkGender(Gender.Male,"Purple ♂")),
    ]),
    new DragonBreed("yellow-crowned-dragon", "Yellow-Crowned Dragon", DragonSubType.Western, [Affinity.Light], PortraitFactory.mfPortraits("yellow-crowned")),
    new DragonBreed("zyumorph-dragon", "Zyumorph", DragonSubType.Western, [Affinity.Neutral], [
        PortraitFactory.customPortrait('zyumorph-alpine-u', "Alpine", true),
        PortraitFactory.customPortrait('zyumorph-coast-u', "Coast", true),
        PortraitFactory.customPortrait('zyumorph-desert-u', "Desert", true),
        PortraitFactory.customPortrait('zyumorph-forest-u', "Forest", true),
        PortraitFactory.customPortrait('zyumorph-jungle-u', "Jungle", true),
        PortraitFactory.customPortrait('zyumorph-volcano-u', "Volcano", true),
    ]),
]

function generateSpiritWardSwaps() {
    let t0f = PortraitFactory.customPortrait('spirit-ward-f', "Standard ♀", true, ConditionFactory.checkGender(Gender.Female,"Standard ♀"))
    let t0m = PortraitFactory.customPortrait('spirit-ward-m', "Standard ♂", true, ConditionFactory.checkGender(Gender.Male,"Standard ♂"))
    let t1f = PortraitFactory.customPortrait('spirit-ward-t1-f', "Afternoon/Morning ♀", true, ConditionFactory.checkGender(Gender.Female,"Afternoon/Morning ♀"))
    let t1m = PortraitFactory.customPortrait('spirit-ward-t1-m', "Afternoon/Morning ♂", true, ConditionFactory.checkGender(Gender.Male,"Afternoon/Morning ♂"))
    let t2f = PortraitFactory.customPortrait('spirit-ward-t2-f', "Dusk/Dawn ♀", true, ConditionFactory.checkGender(Gender.Female,"Dusk/Dawn ♀"))
    let t2m = PortraitFactory.customPortrait('spirit-ward-t2-m', "Dusk/Dawn ♂", true, ConditionFactory.checkGender(Gender.Male,"Dusk/Dawn ♂"))
    let t3f = PortraitFactory.customPortrait('spirit-ward-t3-f', "Night ♀", true, ConditionFactory.checkGender(Gender.Female,"Night ♀"))
    let t3m = PortraitFactory.customPortrait('spirit-ward-t3-m', "Night ♂", true, ConditionFactory.checkGender(Gender.Male,"Night ♂"))
    let t4f = PortraitFactory.customPortrait('spirit-ward-t4-f', "Midnight ♀", true, ConditionFactory.checkGender(Gender.Female,"Midnight ♀"))
    let t4m = PortraitFactory.customPortrait('spirit-ward-t4-m', "Midnight ♂", true, ConditionFactory.checkGender(Gender.Male,"Midnight ♂"))

    t0f.timeSwaps.set(new TimeRange('18:00:00', '19:59:00'), [t1f])
    t0f.timeSwaps.set(new TimeRange('04:00:00', '06:59:00'), [t1f])
    t0f.timeSwaps.set(new TimeRange('20:00:00', '21:59:00'), [t2f])
    t0f.timeSwaps.set(new TimeRange('02:00:00', '03:59:00'), [t2f])
    t0f.timeSwaps.set(new TimeRange('22:00:00', '22:59:00'), [t3f])
    t0f.timeSwaps.set(new TimeRange('01:00:00', '01:59:00'), [t3f])
    t0f.timeSwaps.set(new TimeRange('23:00:00', '00:59:00'), [t4f])

    t0m.timeSwaps.set(new TimeRange('18:00:00', '19:59:00'), [t1m])
    t0m.timeSwaps.set(new TimeRange('04:00:00', '06:59:00'), [t1m])
    t0m.timeSwaps.set(new TimeRange('20:00:00', '21:59:00'), [t2m])
    t0m.timeSwaps.set(new TimeRange('02:00:00', '03:59:00'), [t2m])
    t0m.timeSwaps.set(new TimeRange('22:00:00', '22:59:00'), [t3m])
    t0m.timeSwaps.set(new TimeRange('01:00:00', '01:59:00'), [t3m])
    t0m.timeSwaps.set(new TimeRange('23:00:00', '00:59:00'), [t4m])
    return [t0f, t0m]
}

export default DragonBreeds;