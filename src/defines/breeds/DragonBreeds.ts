import Condition from '../../library/defines/Condition';
import Portrait from '../../library/defines/Portrait';
import Breed, { DragonType, DragonSubType } from '../../library/defines/Breed';
import { Gender } from '../../library/defines/Dragon';

import PortraitFactory from '../_utilities/PortraitFactory';
import ConditionFactory from '../_utilities/ConditionFactory';

class DragonBreed extends Breed {
    constructor(id: string, label: string, subType: DragonSubType, Portraits: Array<Portrait>, condition?: Condition) {
        super(id, label, DragonType.Dragon, subType, "mf-mf", Portraits, condition)
    }
}

let DragonBreeds: Array<Breed> = [
    new DragonBreed("aeon-wyvern", "Aeon Wyvern", DragonSubType.Wyvern, PortraitFactory.mfPortraits("aeon")),
    new DragonBreed("aeria-gloris-dragon", "Aeria Gloris Dragon", DragonSubType.Amphiptere, PortraitFactory.uPortraits("aeria-gloris")),
    new DragonBreed("aether-wyvern", "Aether Wyvern", DragonSubType.Wyvern, PortraitFactory.uPortraits("aether")),
    new DragonBreed("albino-dragon", "Albino Dragon", DragonSubType.Western, PortraitFactory.uPortraits("albino")),
    new DragonBreed("almerald-dragon", "Almerald Dragon", DragonSubType.Eastern, PortraitFactory.uPortraits("almerald")),
    new DragonBreed("anagallis-wyvern", "Anagallis Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("anagallis")),
    new DragonBreed("antarean-dragon", "Antarean Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("antarean")),
    new DragonBreed("aqualis-dragon", "Aqualis Dragon", DragonSubType.Eastern, PortraitFactory.mfPortraits("aqualis")),
    new DragonBreed("aranoa-dragon", "Aranoa Dragon", DragonSubType.Wingless, PortraitFactory.uPortraits("aranoa")),
    new DragonBreed("aria-dragon", "Aria Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("aria")),
    new DragonBreed("ash-dragon", "Ash Dragon", DragonSubType.Wingless, PortraitFactory.uPortraits("ash")),
    new DragonBreed("azure-glacewing-dragon", "Azure Glacewing Dragon", DragonSubType.Western, PortraitFactory.uPortraits("azure-glacewing")),
    new DragonBreed("baloon-dragon", "Balloon Dragon", DragonSubType.Western, PortraitFactory.uPortraits("baloon")),
    new DragonBreed("black-dragon", "Black Dragon", DragonSubType.Western, PortraitFactory.mfAltPortraits("black")),
    new DragonBreed("black-capped-teimarr-dragon", "Black Capped Teimarr Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("black-capped-teimarr")),
    new DragonBreed("black-tea-dragon", "Black Tea Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("black-tea")),
    new DragonBreed("black-truffle-dragon", "Black Truffle Dragon", DragonSubType.Western, PortraitFactory.uPortraits("black-truffle")),
    new DragonBreed("blacktip-dragon", "Blacktip Dragon", DragonSubType.Western, PortraitFactory.uPortraits("blacktip")),
    new DragonBreed("bleeding-moon-dragon", "Bleeding Moon Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("bleeding-moon")),
    new DragonBreed("blue-banded-dragon", "Blue-Banded Dragon", DragonSubType.Western, PortraitFactory.uPortraits("blue-banded")),
    new DragonBreed("blusang-lindwyrm", "Blusang Lindwyrm", DragonSubType.Lindwyrm, PortraitFactory.mfPortraits("blusang")),
    new DragonBreed("bolt-dragon", "Bolt Dragon", DragonSubType.Eastern, PortraitFactory.uPortraits("bolt")),
    new DragonBreed("boreal-dragon", "Boreal Dragon", DragonSubType.Western, PortraitFactory.uPortraits("boreal")),
    new DragonBreed("bright-breasted-wyvern", "Bright-Breasted Wyvern", DragonSubType.Wyvern, PortraitFactory.mfPortraits("bright-breasted")),
    new DragonBreed("brimstone-dragon", "Brimstone Dragon", DragonSubType.Western, PortraitFactory.uPortraits("brimstone")),
    new DragonBreed("brute-dragon", "Brute Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("brute")),
    new DragonBreed("candelabra-dragon", "Candelabra Dragon", DragonSubType.Western, PortraitFactory.uPortraits("candelabra")),
    new DragonBreed("canopy-dragon", "Canopy Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("canopy")),
    new DragonBreed("carmine-wyvern", "Carmine Wyvern", DragonSubType.Wyvern, PortraitFactory.uPortraits("carmine")),
    new DragonBreed("cassare-dragon", "Cassare Dragon", DragonSubType.Western, PortraitFactory.uPortraits("cassare")),
    new DragonBreed("celestial-dragon", "Celestial Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("celestial")),
    new DragonBreed("coastal-waverunner", "Costal Waverunner", DragonSubType.Wyvern, PortraitFactory.uPortraits("coastal-waverunner")),
    new DragonBreed("copper-dragon", "Copper Dragon", DragonSubType.Western, [
        PortraitFactory.customPortrait('copper-b-f', "Brown ♀", true, ConditionFactory.checkGender(Gender.Female,"Brown ♀")),
        PortraitFactory.customPortrait('copper-b-m', "Brown ♂", true, ConditionFactory.checkGender(Gender.Male,"Brown ♂")),
        PortraitFactory.customPortrait('copper-g-f', "Green ♀", true, ConditionFactory.checkGender(Gender.Female,"Green ♀")),
        PortraitFactory.customPortrait('copper-g-m', "Green ♂", true, ConditionFactory.checkGender(Gender.Male,"Green ♂")),
        PortraitFactory.customPortrait('copper-r-f', "Red ♀", true, ConditionFactory.checkGender(Gender.Female,"Red ♀")),
        PortraitFactory.customPortrait('copper-r-m', "Red ♂", true, ConditionFactory.checkGender(Gender.Male,"Red ♂"))
    ]),
    new DragonBreed("crystalline-dragon", "Crystalline Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("crystalline")),
    new DragonBreed("dark-green-dragon", "Dark Green Dragon", DragonSubType.Wingless, PortraitFactory.uAltPortraits("dark-green")),
    new DragonBreed("dark-lumina-dragon", "Dark Lumina Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("dark-lumina")),
    new DragonBreed("daydream-dragon", "Daydream Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("daydream")),
    new DragonBreed("deep-sea-dragon", "Deep Sea Dragon", DragonSubType.SeaSerpent, PortraitFactory.uPortraits("deep-sea")),
    new DragonBreed("diamondwing-dragon", "Diamondwing Dragon", DragonSubType.Western, PortraitFactory.uPortraits("diamondwing")),
    new DragonBreed("dorsal-dragon", "Dorsal Dragon", DragonSubType.Wingless, [
        PortraitFactory.customPortrait('dorsal-p-u', "Purple", true),
        PortraitFactory.customPortrait('dorsal-r-u', "Red", false),
    ]),
    new DragonBreed("electric-dragon", "Electric Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("electric")),
    new DragonBreed("ember-dragon", "Ember Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("ember")),
    new DragonBreed("falconiform-wyvern", "Falconiform Wyvern", DragonSubType.Wyvern, PortraitFactory.mfPortraits("falconiform")),
    new DragonBreed("fell-dragon", "Fell Dragon", DragonSubType.Wingless, PortraitFactory.mfPortraits("fell")),
    new DragonBreed("fever-wyvern", "Fever Wyvern", DragonSubType.Wyvern, PortraitFactory.uPortraits("fever")),
    new DragonBreed("fire-gen-dragon", "Fire Gem Dragon", DragonSubType.Western, [
        PortraitFactory.customPortrait('fire-gem-b-f', "Blue ♀", true, ConditionFactory.checkGender(Gender.Female,"Blue ♀")),
        PortraitFactory.customPortrait('fire-gem-b-m', "Blue ♂", true, ConditionFactory.checkGender(Gender.Male,"Blue ♂")),
        PortraitFactory.customPortrait('fire-gem-g-f', "Green ♀", true, ConditionFactory.checkGender(Gender.Female,"Green ♀")),
        PortraitFactory.customPortrait('fire-gem-g-m', "Green ♂", true, ConditionFactory.checkGender(Gender.Male,"Green ♂")),
        PortraitFactory.customPortrait('fire-gem-r-f', "Red ♀", true, ConditionFactory.checkGender(Gender.Female,"Red ♀")),
        PortraitFactory.customPortrait('fire-gem-r-m', "Red ♂", true, ConditionFactory.checkGender(Gender.Male,"Red ♂")),
    ]),
    new DragonBreed("flamingo-wyvern", "Flamingo Wyvern", DragonSubType.Wyvern, PortraitFactory.mfPortraits("flamingo")),
    new DragonBreed("freckled-dragon", "Freckled Dragon", DragonSubType.Western, PortraitFactory.uPortraits("freckled")),
    new DragonBreed("frilled-dragon", "Frilled Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("frilled")),
    new DragonBreed("frostbite-dragon", "Frostbite Dragon", DragonSubType.Western, PortraitFactory.uPortraits("frostbite")),
    new DragonBreed("galvanic-wyvern", "Galvanic Wyvern", DragonSubType.Wyvern, PortraitFactory.uPortraits("galvanic")),
    new DragonBreed("gemshard-dragon", "Gemshard Dragon", DragonSubType.Eastern, [
        PortraitFactory.customPortrait('gemshard-b-f', "Blue ♀", true, ConditionFactory.checkGender(Gender.Female,"Blue ♀")),
        PortraitFactory.customPortrait('gemshard-b-m', "Blue ♂", true, ConditionFactory.checkGender(Gender.Male,"Blue ♂")),
        PortraitFactory.customPortrait('gemshard-g-f', "Green ♀", true, ConditionFactory.checkGender(Gender.Female,"Green ♀")),
        PortraitFactory.customPortrait('gemshard-g-m', "Green ♂", true, ConditionFactory.checkGender(Gender.Male,"Green ♂")),
        PortraitFactory.customPortrait('gemshard-r-f', "Red ♀", true, ConditionFactory.checkGender(Gender.Female,"Red ♀")),
        PortraitFactory.customPortrait('gemshard-r-m', "Red ♂", true, ConditionFactory.checkGender(Gender.Male,"Red ♂")),
    ]),
    new DragonBreed("gold-dragon", "Gold Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("gold")),
    new DragonBreed("gold-horned-tangar", "Gold-horned Tangar", DragonSubType.Western, PortraitFactory.mfPortraits("gold-horned")),
    new DragonBreed("golden-wyvern", "Golden Wyvern", DragonSubType.Wyvern, PortraitFactory.mfPortraits("golden")),
    new DragonBreed("green-dragon", "Green Dragon", DragonSubType.Western, PortraitFactory.uPortraits("green")),
    new DragonBreed("guardian-dragon", "Guardian Dragon", DragonSubType.Western, PortraitFactory.uPortraits("guardian")),
    new DragonBreed("guardian-of-nature", "Guardian of Nature", DragonSubType.Western, PortraitFactory.uPortraits("guardian-of-nature")),
    new DragonBreed("harvest-dragon", "Harvest Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("harvest")),
    new DragonBreed("hellfire-wyvern", "Hellfire Wyvern", DragonSubType.Wyvern, PortraitFactory.mfPortraits("hellfire")),
    new DragonBreed("horse-dragon", "Horse Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("horse")),
    new DragonBreed("ice-dragon", "Ice Dragon", DragonSubType.Western, PortraitFactory.uPortraits("ice")),
    new DragonBreed("imperial-fleshcrowne-dragon", "Imperial Fleshcrowne", DragonSubType.Western, PortraitFactory.mfPortraits("imperial-fleshcrowne")),
    new DragonBreed("khusa-dragon", "Khusa Dragon", DragonSubType.Western, PortraitFactory.uPortraits("khusa")),
    new DragonBreed("kingcrowne-dragon", "Kingcrowne Dragon", DragonSubType.Western, PortraitFactory.uPortraits("kingcrowne")),
    new DragonBreed("lacula-dragon", "Lacula Dragon", DragonSubType.Amphiptere, PortraitFactory.uPortraits("lacula")),
    new DragonBreed("leodon-dragon", "Leodon Dragon", DragonSubType.Wingless, PortraitFactory.uPortraits("leodon")),
    new DragonBreed("lihnseyre-dragon", "Lihnseyre Dragon", DragonSubType.Eastern, PortraitFactory.uPortraits("lihnseyre")),
    new DragonBreed("lumina-dragon", "Lumina Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("lumina")),
    new DragonBreed("luminox-dragon", "Luminox Wyvern", DragonSubType.Wyvern, PortraitFactory.mfPortraits("luminox")),
    new DragonBreed("lunar-herald-dragon", "Lunar Herald", DragonSubType.Western, [
        PortraitFactory.customPortrait('lunar-herald-b-u', "Bronze", true),
        PortraitFactory.customPortrait('lunar-herald-g-u', "Gold", true),
        PortraitFactory.customPortrait('lunar-herald-p-u', "Purple", true),
        PortraitFactory.customPortrait('lunar-herald-s-u', "Silver", true),
    ]),
    new DragonBreed("magi-dragon", "Magi Dragon", DragonSubType.Western, PortraitFactory.uPortraits("magi")),
    new DragonBreed("magma-dragon", "Magma Dragon", DragonSubType.Wingless, PortraitFactory.uPortraits("magma")),
    new DragonBreed("melismor-dragon", "Melismor Dragon", DragonSubType.Eastern, PortraitFactory.mfPortraits("melismor")),
    new DragonBreed("mint-dragon", "Mint Dragon", DragonSubType.Wingless, PortraitFactory.uPortraits("mint")),
    new DragonBreed("monarch-dragon", "Monarch Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("monarch")),
    new DragonBreed("moonstone-dragon", "Moonstone Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("moonstone")),
    new DragonBreed("nebula-dragon", "Nebula Dragon", DragonSubType.Western, [
        PortraitFactory.customPortrait('nebula-1-f', "Blue", true, ConditionFactory.checkGender(Gender.Female,"Blue")),
        PortraitFactory.customPortrait('nebula-1-m', "Green", true, ConditionFactory.checkGender(Gender.Male,"Green")),
        PortraitFactory.customPortrait('nebula-2-f', "Red", true, ConditionFactory.checkGender(Gender.Female,"Red")),
        PortraitFactory.customPortrait('nebula-2-m', "Purple", true, ConditionFactory.checkGender(Gender.Male,"Purple")),
    ]),
    new DragonBreed("neotropical-dragon", "Neotropical Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("neotropical")),
    new DragonBreed("nhiostrife-wyvern", "Nhiostrife Wyvern", DragonSubType.Wyvern, PortraitFactory.uPortraits("nhiostrife")),
    new DragonBreed("nocturne-dragon", "Nocturne Dragon", DragonSubType.Western, PortraitFactory.uPortraits("nocturne")),
    new DragonBreed("olive-dragon", "Olive Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("olive")),
    new DragonBreed("pillow-dragon", "Pillow Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("pillow")),
    new DragonBreed("pink-dragon", "Pink Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("pink")),
    new DragonBreed("plated-colossus-dragon", "Plated Colossus Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("plated-colossus")),
    new DragonBreed("purple-dragon", "Purple Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("purple")),
    new DragonBreed("pyralspite-dragon", "Pyralspite Dragon", DragonSubType.Western, [
        PortraitFactory.customPortrait('pyralspite-a-u', "Almandine", true),
        PortraitFactory.customPortrait('pyralspite-p-u', "Pyrope", true),
        PortraitFactory.customPortrait('pyralspite-s-u', "Spessartine", true),
    ]),
    new DragonBreed("pyrovar-dragon", "Pyrovar Dragon", DragonSubType.Western, PortraitFactory.uPortraits("pyrovar")),
    new DragonBreed("razorcrest-wyvern", "Razorcrest Wyvern", DragonSubType.Wyvern, PortraitFactory.uPortraits("razorcrest")),
    new DragonBreed("red-dragon", "Red Dragon", DragonSubType.Western, PortraitFactory.uPortraits("red")),
    new DragonBreed("red-finned-tidal-dragon", "Red-finned Tidal Dragon", DragonSubType.Lindwyrm, PortraitFactory.mfPortraits("red-finned-tidal")),
    new DragonBreed("ridgewing-dragon", "Ridgewing Dragon", DragonSubType.Western, PortraitFactory.mfAltPortraits("ridgewing")),
    new DragonBreed("rift-wyrm", "Rift Wyrm", DragonSubType.Wyrm, PortraitFactory.mfPortraits("rift")),
    new DragonBreed("royal-blue-dragon", "Royal Blue Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("royal-blue")),
    new DragonBreed("royal-crimson-dragon", "Royal Crimson Dragon", DragonSubType.Western, PortraitFactory.uPortraits("royal-crimson")),
    new DragonBreed("sandwaste-dragon", "Sandwaste Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("sandwaste")),
    new DragonBreed("sapphire-dragon", "Sapphire Dragon", DragonSubType.Western, PortraitFactory.uPortraits("sapphire")),
    new DragonBreed("scimitar-wing-wyvern", "Scimitar-wing Wyvern", DragonSubType.Wyvern, PortraitFactory.mfPortraits("scimitar-wing")),
    new DragonBreed("script-dragon", "Script Dragon", DragonSubType.Lindwyrm, PortraitFactory.uPortraits("script")),
    new DragonBreed("seasonal-dragon", "Seasonal Dragon", DragonSubType.Western, [
        PortraitFactory.customPortrait('seasonal-w-f', "Winter ♀", true, ConditionFactory.checkGender(Gender.Female,"Winter ♀")),
        PortraitFactory.customPortrait('seasonal-w-m', "Winter ♂", true, ConditionFactory.checkGender(Gender.Male,"Winter ♂")),
        PortraitFactory.customPortrait('seasonal-sp-f', "Spring ♀", true, ConditionFactory.checkGender(Gender.Female,"Spring ♀")),
        PortraitFactory.customPortrait('seasonal-sp-m', "Spring ♂", true, ConditionFactory.checkGender(Gender.Male,"Spring ♂")),
        PortraitFactory.customPortrait('seasonal-su-f', "Summer ♀", true, ConditionFactory.checkGender(Gender.Female,"Summer ♀")),
        PortraitFactory.customPortrait('seasonal-su-m', "Summer ♂", true, ConditionFactory.checkGender(Gender.Male,"Summer ♂")),
        PortraitFactory.customPortrait('seasonal-f-f', "Fall ♀", true, ConditionFactory.checkGender(Gender.Female,"Fall ♀")),
        PortraitFactory.customPortrait('seasonal-f-m', "Fall ♂", true, ConditionFactory.checkGender(Gender.Male,"Fall ♂")),
    ]),
    new DragonBreed("seragamma-wyvern", "Seragamma Wyvern", DragonSubType.Wyvern, PortraitFactory.mfPortraits("seragamma")),
    new DragonBreed("silver-dragon", "Silver Dragon", DragonSubType.Eastern, PortraitFactory.mfPortraits("silver")),
    new DragonBreed("sinomorph-dragon", "Sinomorph Dragon", DragonSubType.Western, PortraitFactory.uPortraits("sinomorph")),
    new DragonBreed("sinii-krai-dragon", "Sinii Krai Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("sinni-krai")),
    new DragonBreed("siyat-dragon", "Siyat Dragon", DragonSubType.Western, [
        PortraitFactory.customPortrait('siyat-b-u', "Blue", true),
        PortraitFactory.customPortrait('siyat-g-u', "Green", true),
        PortraitFactory.customPortrait('siyat-p-u', "Purple", true),
    ]),
    new DragonBreed("skysilk-dragon", "Skysilk Dragon", DragonSubType.Western, PortraitFactory.uPortraits("skysilk")),
    new DragonBreed("skywing-dragon", "Skywing Dragon", DragonSubType.Amphiptere, PortraitFactory.uPortraits("skywing")),
    new DragonBreed("speckle-throated-dragon", "Speckle-Throated Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("speckle-throated")),
    new DragonBreed("spinel-wyvern", "Spinel Wyvern", DragonSubType.Wyvern, PortraitFactory.mfAltPortraits("spinel")),
    new DragonBreed("spirit-ward-dragon", "Spirit Ward Dragon", DragonSubType.Wyvern, PortraitFactory.mfPortraits("spirit-ward")),
    new DragonBreed("spitfire-dragon", "Spitfire Dragon", DragonSubType.Western, PortraitFactory.uPortraits("spitfire")),
    new DragonBreed("spotted-greenwing-dragon", "Spotted Greenwing", DragonSubType.Western, PortraitFactory.uPortraits("spotted-greenwing")),
    new DragonBreed("stone-dragon", "Stone Dragon", DragonSubType.Western, PortraitFactory.uPortraits("stone")),
    new DragonBreed("storm-dragon", "Storm Dragon", DragonSubType.Western, PortraitFactory.uPortraits("storm")),
    new DragonBreed("striped-dragon", "Striped Dragon", DragonSubType.Western, [
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
    new DragonBreed("striped-river-dragon", "Striped River Dragon", DragonSubType.Eastern, PortraitFactory.uPortraits("striped-river")),
    new DragonBreed("sunrise-dragon", "Sunrise Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("sunrise")),
    new DragonBreed("sunset-dragon", "Sunset Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("sunset")),
    new DragonBreed("sunsong-amphiptere", "Sunsong Amphiptere", DragonSubType.Western, PortraitFactory.mfPortraits("sunsong")),
    new DragonBreed("sunstone-dragon", "Sunstone Dragon", DragonSubType.Western, PortraitFactory.uPortraits("sunstone")),
    new DragonBreed("swallowtail-dragon", "Swallowtail Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("swallowtail")),
    new DragonBreed("tercorn-dragon", "Tercorn Dragon", DragonSubType.Western, PortraitFactory.uPortraits("tercorn")),
    new DragonBreed("terrae-dragon", "Terrae Dragon", DragonSubType.Wingless, PortraitFactory.mfPortraits("terrae")),
    new DragonBreed("tetra-dragon", "Tetra Dragon", DragonSubType.Western, PortraitFactory.uPortraits("tetra")),
    new DragonBreed("thunder-dragon", "Thunder Dragon", DragonSubType.Western, PortraitFactory.uPortraits("thunder")),
    new DragonBreed("tri-horn-wyvern", "Tri-Horn Wyvern", DragonSubType.Wyvern, PortraitFactory.mfPortraits("tri-horn")),
    new DragonBreed("tsunami-wyvern", "Tsunami Wyvern", DragonSubType.Wyvern, PortraitFactory.mfPortraits("tsunami")),
    new DragonBreed("turpentine-dragon", "Turpentine Dragon", DragonSubType.Western, PortraitFactory.uPortraits("turpentine")),
    new DragonBreed("undine-dragon", "Undine Dragon", DragonSubType.Western, PortraitFactory.mfAltPortraits("undine")),
    new DragonBreed("water-dragon", "Water Dragon", DragonSubType.SeaSerpent, PortraitFactory.mfPortraits("water")),
    new DragonBreed("water-walker-dragon", "Water Walker Dragon", DragonSubType.Wingless, PortraitFactory.uPortraits("water-walker")),
    new DragonBreed("waterhorse-dragon", "Waterhorse Dragon", DragonSubType.Wingless, PortraitFactory.mfPortraits("waterhorse")),
    new DragonBreed("whiptail-dragon", "Whiptail Dragon", DragonSubType.Western, PortraitFactory.uPortraits("whiptail")),
    new DragonBreed("white-dragon", "White Dragon", DragonSubType.Western, PortraitFactory.uPortraits("white")),
    new DragonBreed("xenowyrm-astrapi", "Astrapi Xenowyrm", DragonSubType.Wyrm, PortraitFactory.uPortraits("xenowyrm-astrapi")),
    new DragonBreed("xenowyrm-chrono", "Chrono Xenowyrm", DragonSubType.Wyrm, PortraitFactory.uPortraits("xenowyrm-chrono")),
    new DragonBreed("xenowyrm-gaia", "Gaia Xenowyrm", DragonSubType.Wyrm, PortraitFactory.uPortraits("xenowyrm-gaia")),
    new DragonBreed("xenowyrm-mageia", "Mageia Xenowyrm", DragonSubType.Wyrm, PortraitFactory.uPortraits("xenowyrm-mageia")),
    new DragonBreed("xenowyrm-pyro", "Pyro Xenowyrm", DragonSubType.Wyrm, PortraitFactory.uPortraits("xenowyrm-pyro")),
    new DragonBreed("xenowyrm-thalassa", "Thalassa Xenowyrm", DragonSubType.Wyrm, PortraitFactory.uPortraits("xenowyrm-thalassa")),
    new DragonBreed("xol-dragon", "Xol Dragon", DragonSubType.Wingless, [
        PortraitFactory.customPortrait('xol-b-f', "Brown ♀", true, ConditionFactory.checkGender(Gender.Female,"Brown ♀",)),
        PortraitFactory.customPortrait('xol-b-m', "Brown ♂", true, ConditionFactory.checkGender(Gender.Male,"Brown ♂")),
        PortraitFactory.customPortrait('xol-p-f', "Purple ♀", true, ConditionFactory.checkGender(Gender.Female,"Purple ♀")),
        PortraitFactory.customPortrait('xol-p-m', "Purple ♂", true, ConditionFactory.checkGender(Gender.Male,"Purple ♂")),
    ]),
    new DragonBreed("yellow-crowned-dragon", "Yellow-Crowned Dragon", DragonSubType.Western, PortraitFactory.mfPortraits("yellow-crowned-dragon")),
    new DragonBreed("zyumorph-dragon", "Zyumorph Dragon", DragonSubType.Western, [
        PortraitFactory.customPortrait('zyumorph-alpine-u', "Alpine", true),
        PortraitFactory.customPortrait('zyumorph-coast-u', "Brown", true),
        PortraitFactory.customPortrait('zyumorph-desert-u', "Desert", true),
        PortraitFactory.customPortrait('zyumorph-forest-u', "Forest", true),
        PortraitFactory.customPortrait('zyumorph-jungle-u', "Jungle", true),
        PortraitFactory.customPortrait('zyumorph-volcano-u', "Volcano", true),
    ]),
]

export default DragonBreeds;