import Condition from '../../library/defines/Condition';
import Sprite from '../../library/defines/Sprite';
import Breed, { DragonType, DragonSubType, Affinity } from '../../library/defines/Breed';
import { Gender } from '../../library/defines/Dragon';

import SpriteFactory from '../_utilities/SpriteFactory';
import ConditionBuilder from '../_utilities/ConditionBuilder';
import ConditionFactory from '../_utilities/ConditionFactory';
import TimeRange from '../../library/defines/TimeRange';
import DragonNode from '../../library/model/DragonNode';

class DragonBreed extends Breed {
    constructor(id: string, label: string, subType: DragonSubType, affinity: Array<Affinity>, Sprites: Array<Sprite>, condition?: Condition) {
        super(id, label, DragonType.Dragon, subType, affinity, "mf-mf", Sprites, condition)
    }
}

let DragonBreeds: Array<Breed> = [
    new DragonBreed("aeon-wyvern", "Aeon Wyvern", DragonSubType.Wyvern, [Affinity.Time], SpriteFactory.mfSprites("aeon")),
    new DragonBreed("aeria-gloris-dragon", "Aeria Gloris Dragon", DragonSubType.Amphiptere, [Affinity.Magi, Affinity.Lightning], SpriteFactory.uSprites("aeria-gloris")),
    new DragonBreed("aether-wyvern", "Aether Wyvern", DragonSubType.Wyvern, [Affinity.Air], SpriteFactory.uSprites("aether")),
    new DragonBreed("albino-dragon", "Albino Dragon", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.uSprites("albino")),
    new DragonBreed("alcedine-wyvern", "Alcedine Wyvern", DragonSubType.Wyvern, [Affinity.Air], [
        SpriteFactory.customSprite('alcedine-b-u', "Blue", true),
        SpriteFactory.customSprite('alcedine-r-u', "Red", true),
    ]),
    new DragonBreed("almerald-dragon", "Almerald Dragon", DragonSubType.Eastern, [Affinity.Light], SpriteFactory.uSprites("almerald")),
    new DragonBreed("anagallis-wyvern", "Anagallis Dragon", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.mfSprites("anagallis")),
    new DragonBreed("antarean-dragon", "Antarean Dragon", DragonSubType.Western, [Affinity.Light, Affinity.Fire], SpriteFactory.mfSprites("antarean")),
    new DragonBreed("aqualis-dragon", "Aqualis Dragon", DragonSubType.Eastern, [Affinity.Water], SpriteFactory.mfSprites("aqualis")),
    new DragonBreed("aranoa-dragon", "Aranoa Dragon", DragonSubType.Wingless, [Affinity.Water], SpriteFactory.uSprites("aranoa")),
    new DragonBreed("aria-dragon", "Aria Dragon", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.mfSprites("aria")),
    new DragonBreed("ash-dragon", "Ash Dragon", DragonSubType.Wingless, [Affinity.Earth], SpriteFactory.uSprites("ash")),
    new DragonBreed("azure-glacewing-dragon", "Azure Glacewing Dragon", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.uSprites("azure-glacewing")),
    new DragonBreed("balloon-dragon", "Balloon Dragon", DragonSubType.Western, [Affinity.Air], SpriteFactory.uSprites("balloon")),
    new DragonBreed("black-dragon", "Black Dragon", DragonSubType.Western, [Affinity.Dark], SpriteFactory.mfAltSprites("black", false)),
    new DragonBreed("black-capped-teimarr-dragon", "Black Capped Teimarr Dragon", DragonSubType.Western, [Affinity.Water], SpriteFactory.mfSprites("black-capped-teimarr")),
    new DragonBreed("black-tea-dragon", "Black Tea Dragon", DragonSubType.Western, [Affinity.Life], SpriteFactory.mfSprites("black-tea")),
    new DragonBreed("black-truffle-dragon", "Black Truffle Dragon", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.uSprites("black-truffle")),
    new DragonBreed("blacktip-dragon", "Blacktip Dragon", DragonSubType.Western, [Affinity.Air], SpriteFactory.uSprites("blacktip")),
    new DragonBreed("bleeding-moon-dragon", "Bleeding Moon Dragon", DragonSubType.Western, [Affinity.Dark], SpriteFactory.mfSprites("bleeding-moon")),
    new DragonBreed("blue-banded-dragon", "Blue-Banded Dragon", DragonSubType.Western, [Affinity.Water], SpriteFactory.uSprites("blue-banded")),
    new DragonBreed("blusang-lindwyrm", "Blusang Lindwyrm", DragonSubType.Lindwyrm, [Affinity.Water], SpriteFactory.mfSprites("blusang")),
    new DragonBreed("bolt-dragon", "Bolt Dragon", DragonSubType.Eastern, [Affinity.Lightning], SpriteFactory.uSprites("bolt")),
    new DragonBreed("boreal-dragon", "Boreal Dragon", DragonSubType.Western, [Affinity.Ice], SpriteFactory.uSprites("boreal")),
    new DragonBreed("bright-breasted-wyvern", "Bright-Breasted Wyvern", DragonSubType.Wyvern, [Affinity.Neutral], SpriteFactory.mfSprites("bright-breasted")),
    new DragonBreed("brimstone-dragon", "Brimstone Dragon", DragonSubType.Western, [Affinity.Fire], SpriteFactory.uSprites("brimstone")),
    new DragonBreed("brute-dragon", "Brute Dragon", DragonSubType.Western, [Affinity.Death], SpriteFactory.mfSprites("brute")),
    new DragonBreed("candelabra-dragon", "Candelabra Dragon", DragonSubType.Western, [Affinity.Light], SpriteFactory.uSprites("candelabra")),
    new DragonBreed("canopy-dragon", "Canopy Dragon", DragonSubType.Western, [Affinity.Life], SpriteFactory.mfSprites("canopy")),
    new DragonBreed("carmine-wyvern", "Carmine Wyvern", DragonSubType.Wyvern, [Affinity.Neutral], SpriteFactory.uSprites("carmine")),
    new DragonBreed("cassare-dragon", "Cassare Dragon", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.uSprites("cassare")),
    new DragonBreed("celestial-dragon", "Celestial Dragon", DragonSubType.Western, [Affinity.Magi], SpriteFactory.mfSprites("celestial")),
    new DragonBreed("cloudplume-dragon", "Cloudplume Dragon", DragonSubType.Eastern, [Affinity.Air], SpriteFactory.uSprites("cloudplume")),
    new DragonBreed("coastal-waverunner", "Coastal Waverunner", DragonSubType.Wyvern, [Affinity.Water], SpriteFactory.uSprites("coastal-waverunner")),
    new DragonBreed("copper-dragon", "Copper Dragon", DragonSubType.Wyvern, [Affinity.Earth], [
        SpriteFactory.customSprite('copper-b-f', "Brown ♀", true, ConditionFactory.copperSpriteCondition(Gender.Female,"Brown ♀",'copper-b-f')),
        SpriteFactory.customSprite('copper-b-m', "Brown ♂", true, ConditionFactory.copperSpriteCondition(Gender.Male,"Brown ♂",'copper-b-m')),
        SpriteFactory.customSprite('copper-g-f', "Green ♀", true, ConditionFactory.copperSpriteCondition(Gender.Female,"Green ♀",'copper-g-f')),
        SpriteFactory.customSprite('copper-g-m', "Green ♂", true, ConditionFactory.copperSpriteCondition(Gender.Male,"Green ♂",'copper-g-m')),
        SpriteFactory.customSprite('copper-r-f', "Red ♀", true, ConditionFactory.copperSpriteCondition(Gender.Female,"Red ♀",'copper-r-f')),
        SpriteFactory.customSprite('copper-r-m', "Red ♂", true, ConditionFactory.copperSpriteCondition(Gender.Male,"Red ♂",'copper-r-m'))
    ]),
    new DragonBreed("crystalline-dragon", "Crystalline Dragon", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.mfSprites("crystalline")),
    new DragonBreed("dark-green-dragon", "Dark Green Dragon", DragonSubType.Wingless, [Affinity.Dark, Affinity.Life], SpriteFactory.uAltSprites("dark-green", false)),
    new DragonBreed("dark-lumina-dragon", "Dark Lumina Dragon", DragonSubType.Western, [Affinity.Dark], SpriteFactory.mfSprites("dark-lumina"),
        ConditionFactory.trueBredBreed("Dark Lumina Dragon", [
            {id: 'dark-lumina-dragon', label : 'Dark Lumina Dragon'},
            {id: 'lumina-dragon', label : 'Lumina Dragon'}
        ])
    ),
    new DragonBreed("daydream-dragon", "Daydream Dragon", DragonSubType.Western, [Affinity.Air], SpriteFactory.mfSprites("daydream")),
    new DragonBreed("deep-sea-dragon", "Deep Sea Dragon", DragonSubType.SeaSerpent, [Affinity.Water], SpriteFactory.uSprites("deep-sea")),
    new DragonBreed("diamondwing-dragon", "Diamondwing Dragon", DragonSubType.Western, [Affinity.Earth], SpriteFactory.uSprites("diamondwing")),
    new DragonBreed("dorsal-dragon", "Dorsal Dragon", DragonSubType.Wingless, [Affinity.Neutral], SpriteFactory.mfAltSprites("ridgewing", true)),
    new DragonBreed("electric-dragon", "Electric Dragon", DragonSubType.Western, [Affinity.Lightning], SpriteFactory.mfSprites("electric")),
    new DragonBreed("ember-dragon", "Ember Dragon", DragonSubType.Western, [Affinity.Fire], SpriteFactory.mfSprites("ember")),
    new DragonBreed("falconiform-wyvern", "Falconiform Wyvern", DragonSubType.Wyvern, [Affinity.Fire], SpriteFactory.mfSprites("falconiform")),
    new DragonBreed("fell-dragon", "Fell Dragon", DragonSubType.Wingless, [Affinity.Death], SpriteFactory.mfSprites("fell")),
    new DragonBreed("fever-wyvern", "Fever Wyvern", DragonSubType.Wyvern, [Affinity.Death], SpriteFactory.uSprites("fever")),
    new DragonBreed("fire-gen-dragon", "Fire Gem Dragon", DragonSubType.Western, [Affinity.Fire], [
        SpriteFactory.customSprite('fire-gem-b-f', "Blue ♀", true, ConditionBuilder.checkGender(Gender.Female,"Blue ♀")),
        SpriteFactory.customSprite('fire-gem-b-m', "Blue ♂", true, ConditionBuilder.checkGender(Gender.Male,"Blue ♂")),
        SpriteFactory.customSprite('fire-gem-g-f', "Green ♀", true, ConditionBuilder.checkGender(Gender.Female,"Green ♀")),
        SpriteFactory.customSprite('fire-gem-g-m', "Green ♂", true, ConditionBuilder.checkGender(Gender.Male,"Green ♂")),
        SpriteFactory.customSprite('fire-gem-r-f', "Red ♀", true, ConditionBuilder.checkGender(Gender.Female,"Red ♀")),
        SpriteFactory.customSprite('fire-gem-r-m', "Red ♂", true, ConditionBuilder.checkGender(Gender.Male,"Red ♂")),
    ]),
    new DragonBreed("flamingo-wyvern", "Flamingo Wyvern", DragonSubType.Wyvern, [Affinity.Earth], SpriteFactory.mfSprites("flamingo")),
    new DragonBreed("floret-wyvern", "Floret Wyvern", DragonSubType.Wyvern,  [Affinity.Life], [
        SpriteFactory.customSprite('floret-p-f', "Purple ♀", true, ConditionBuilder.checkGender(Gender.Female,"Purple ♀")),
        SpriteFactory.customSprite('floret-p-m', "Purple ♂", true, ConditionBuilder.checkGender(Gender.Male,"Purple ♂")),
        SpriteFactory.customSprite('floret-g-f', "Gold ♀", true, ConditionBuilder.checkGender(Gender.Female,"Gold ♀")),
        SpriteFactory.customSprite('floret-g-m', "Gold ♂", true, ConditionBuilder.checkGender(Gender.Male,"Gold ♂")),
    ]),
    new DragonBreed("freckled-dragon", "Freckled Dragon", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.uSprites("freckled")),
    new DragonBreed("frilled-dragon", "Frilled Dragon", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.mfSprites("frilled")),
    new DragonBreed("frostbite-dragon", "Frostbite Dragon", DragonSubType.Western, [Affinity.Ice], SpriteFactory.uSprites("frostbite")),
    new DragonBreed("galvanic-wyvern", "Galvanic Wyvern", DragonSubType.Wyvern, [Affinity.Dark, Affinity.Lightning], SpriteFactory.uSprites("galvanic")),
    new DragonBreed("gemshard-dragon", "Gemshard Dragon", DragonSubType.Eastern, [Affinity.Air], [
        SpriteFactory.customSprite('gemshard-b-f', "Blue ♀", true, ConditionBuilder.checkGender(Gender.Female,"Blue ♀")),
        SpriteFactory.customSprite('gemshard-b-m', "Blue ♂", true, ConditionBuilder.checkGender(Gender.Male,"Blue ♂")),
        SpriteFactory.customSprite('gemshard-g-f', "Green ♀", true, ConditionBuilder.checkGender(Gender.Female,"Green ♀")),
        SpriteFactory.customSprite('gemshard-g-m', "Green ♂", true, ConditionBuilder.checkGender(Gender.Male,"Green ♂")),
        SpriteFactory.customSprite('gemshard-r-f', "Red ♀", true, ConditionBuilder.checkGender(Gender.Female,"Red ♀")),
        SpriteFactory.customSprite('gemshard-r-m', "Red ♂", true, ConditionBuilder.checkGender(Gender.Male,"Red ♂")),
    ]),
    new DragonBreed("gold-dragon", "Gold Dragon", DragonSubType.Western, [Affinity.Earth], SpriteFactory.mfSprites("gold")),
    new DragonBreed("gold-horned-tangar", "Gold-horned Tangar", DragonSubType.Western, [Affinity.Life], SpriteFactory.mfSprites("gold-horned")),
    new DragonBreed("golden-wyvern", "Golden Wyvern", DragonSubType.Wyvern, [Affinity.Magi], SpriteFactory.mfSprites("golden")),
    new DragonBreed("green-dragon", "Green Dragon", DragonSubType.Western, [Affinity.Earth], SpriteFactory.uSprites("green")),
    new DragonBreed("guardian-dragon", "Guardian Dragon", DragonSubType.Western, [Affinity.Light, Affinity.Neutral], SpriteFactory.uSprites("guardian")),
    new DragonBreed("guardian-of-nature", "Guardian of Nature", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.uSprites("guardian-of-nature"), 
        ConditionBuilder.checkFirstGeneration('Guardian of Nature')
    ),
    new DragonBreed("harvest-dragon", "Harvest Dragon", DragonSubType.Western, [Affinity.Earth], SpriteFactory.mfSprites("harvest")),
    new DragonBreed("hellfire-wyvern", "Hellfire Wyvern", DragonSubType.Wyvern, [Affinity.Fire], SpriteFactory.mfSprites("hellfire")),
    new DragonBreed("horse-dragon", "Horse Dragon", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.mfSprites("horse")),
    new DragonBreed("ice-dragon", "Ice Dragon", DragonSubType.Western, [Affinity.Ice], SpriteFactory.uSprites("ice")),
    new DragonBreed("imperial-fleshcrowne-dragon", "Imperial Fleshcrowne", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.mfSprites("imperial-fleshcrowne")),
    new DragonBreed("khusa-dragon", "Khusa Dragon", DragonSubType.Western, [Affinity.Earth], SpriteFactory.uSprites("khusa")),
    new DragonBreed("kingcrowne-dragon", "Kingcrowne Dragon", DragonSubType.Western, [Affinity.Light, Affinity.Magi], SpriteFactory.uSprites("kingcrowne")),
    new DragonBreed("labradorite-dragon", "Labradorite Dragon", DragonSubType.Eastern, [Affinity.Dark, Affinity.Earth], SpriteFactory.mfSprites("labradorite")),
    new DragonBreed("lacula-dragon", "Lacula Dragon", DragonSubType.Amphiptere, [Affinity.Water], SpriteFactory.uSprites("lacula")),
    new DragonBreed("leodon-dragon", "Leodon Dragon", DragonSubType.Wingless, [Affinity.Fire], SpriteFactory.uSprites("leodon")),
    new DragonBreed("lihnseyre-dragon", "Lihnseyre Dragon", DragonSubType.Eastern, [Affinity.Life, Affinity.Magi], SpriteFactory.uSprites("lihnseyre")),
    new DragonBreed("lumina-dragon", "Lumina Dragon", DragonSubType.Western, [Affinity.Light], SpriteFactory.mfSprites("lumina"),
        ConditionFactory.trueBredBreed("Dark Lumina Dragon", [
            {id: 'lumina-dragon', label : 'Lumina Dragon'},
            {id: 'dark-lumina-dragon', label : 'Dark Lumina Dragon'}
        ])
    ),
    new DragonBreed("luminox-dragon", "Luminox Wyvern", DragonSubType.Wyvern, [Affinity.Time], SpriteFactory.mfSprites("luminox")),
    new DragonBreed("lunar-herald-dragon", "Lunar Herald", DragonSubType.Western, [Affinity.Light], [
        SpriteFactory.customSprite('lunar-herald-b-u', "Bronze", true),
        SpriteFactory.customSprite('lunar-herald-g-u', "Gold", true),
        SpriteFactory.customSprite('lunar-herald-p-u', "Purple", true),
        SpriteFactory.customSprite('lunar-herald-s-u', "Silver", true),
    ]),
    new DragonBreed("magi-dragon", "Magi Dragon", DragonSubType.Western, [Affinity.Magi], SpriteFactory.uSprites("magi")),
    new DragonBreed("magma-dragon", "Magma Dragon", DragonSubType.Wingless, [Affinity.Fire], SpriteFactory.uSprites("magma")),
    new DragonBreed("melismor-dragon", "Melismor Dragon", DragonSubType.Eastern, [Affinity.Earth], SpriteFactory.mfSprites("melismor")),
    new DragonBreed("mint-dragon", "Mint Dragon", DragonSubType.Wingless, [Affinity.Neutral], SpriteFactory.uSprites("mint")),
    new DragonBreed("monarch-dragon", "Monarch Dragon", DragonSubType.Western, [Affinity.Earth], SpriteFactory.mfSprites("monarch")),
    new DragonBreed("moonstone-dragon", "Moonstone Dragon", DragonSubType.Western, [Affinity.Magi], SpriteFactory.mfSprites("moonstone")),
    new DragonBreed("nebula-dragon", "Nebula Dragon", DragonSubType.Wyvern, [Affinity.Light], [
        SpriteFactory.customSprite('nebula-1-f', "Blue", true, ConditionBuilder.checkGender(Gender.Female,"Blue")),
        SpriteFactory.customSprite('nebula-1-m', "Green", true, ConditionBuilder.checkGender(Gender.Male,"Green")),
        SpriteFactory.customSprite('nebula-2-f', "Red", true, ConditionBuilder.checkGender(Gender.Female,"Red")),
        SpriteFactory.customSprite('nebula-2-m', "Purple", true, ConditionBuilder.checkGender(Gender.Male,"Purple")),
    ]),
    new DragonBreed("neotropical-dragon", "Neotropical Dragon", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.mfSprites("neotropical")),
    new DragonBreed("nhiostrife-wyvern", "Nhiostrife Wyvern", DragonSubType.Wyvern, [Affinity.Air], SpriteFactory.uSprites("nhiostrife")),
    new DragonBreed("nocturne-dragon", "Nocturne Dragon", DragonSubType.Western, [Affinity.Time], [
        SpriteFactory.customSprite('nocturne-u', "Standard", true, ConditionBuilder.alwaysTrue("Standard"), [
            {range: new TimeRange('18:00:00','05:59:00'), 
            sprites: [
                SpriteFactory.customSprite('nocturne-t1-f', "Night ♀", true, ConditionBuilder.checkGender(Gender.Female,"Night ♀")),
                SpriteFactory.customSprite('nocturne-t1-m', "Night ♂", true, ConditionBuilder.checkGender(Gender.Male,"Night ♂")),
            ]}
        ])
    ]),
    new DragonBreed("olive-dragon", "Olive Dragon", DragonSubType.Western, [Affinity.Dark], SpriteFactory.mfSprites("olive")),
    new DragonBreed("pillow-dragon", "Pillow Dragon", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.mfSprites("pillow")),
    new DragonBreed("pink-dragon", "Pink Dragon", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.mfSprites("pink"), 
        ConditionFactory.trueBredBreed("Pink Dragon", [
            {id: 'pink-dragon', label : 'Pink Dragon'},
            {id: 'aria-dragon', label : 'Aria Dragon'}
        ])),
    new DragonBreed("plated-colossus-dragon", "Plated Colossus Dragon", DragonSubType.Western, [Affinity.Earth], SpriteFactory.mfSprites("plated-colossus")),
    new DragonBreed("purple-dragon", "Purple Dragon", DragonSubType.Western, [Affinity.Life], SpriteFactory.mfSprites("purple")),
    new DragonBreed("pyralspite-dragon", "Pyralspite Dragon", DragonSubType.Western, [Affinity.Earth], [
        SpriteFactory.customSprite('pyralspite-a-u', "Almandine", true, ConditionFactory.trueBredSprite("Almandine", [{id: 'pyralspite-a-u', label : 'Almandine'}])),
        SpriteFactory.customSprite('pyralspite-p-u', "Pyrope", true, ConditionFactory.trueBredSprite("Pyrope", [{id: 'pyralspite-p-u', label : 'Pyrope'}])),
        SpriteFactory.customSprite('pyralspite-s-u', "Spessartine", true, ConditionFactory.trueBredSprite("Spessartine", [{id: 'pyralspite-s-u', label : 'Spessartine'}])),
    ]),
    new DragonBreed("pyrovar-dragon", "Pyrovar Dragon", DragonSubType.Western, [Affinity.Fire], SpriteFactory.uSprites("pyrovar")),
    new DragonBreed("razorcrest-wyvern", "Razorcrest Wyvern", DragonSubType.Wyvern, [Affinity.Air], SpriteFactory.uSprites("razorcrest")),
    new DragonBreed("red-dragon", "Red Dragon", DragonSubType.Western, [Affinity.Fire], SpriteFactory.uSprites("red")),
    new DragonBreed("red-finned-tidal-dragon", "Red-finned Tidal Dragon", DragonSubType.Lindwyrm, [Affinity.Water], SpriteFactory.mfSprites("red-finned-tidal")),
    new DragonBreed("ridgewing-dragon", "Ridgewing Dragon", DragonSubType.Western, [Affinity.Air], SpriteFactory.mfAltSprites("ridgewing", true)),
    new DragonBreed("rift-wyrm", "Rift Wyrm", DragonSubType.Wyrm, [Affinity.Magi, Affinity.Water], SpriteFactory.mfSprites("rift")),
    new DragonBreed("royal-blue-dragon", "Royal Blue Dragon", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.mfSprites("royal-blue")),
    new DragonBreed("royal-crimson-dragon", "Royal Crimson Dragon", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.uSprites("royal-crimson")),
    new DragonBreed("sandwaste-dragon", "Sandwaste Dragon", DragonSubType.Western, [Affinity.Earth], SpriteFactory.mfSprites("sandwaste")),
    new DragonBreed("sapo-dragon", "Sapo Dragon", DragonSubType.SeaSerpent, [Affinity.Water], SpriteFactory.uSprites("sapo")),
    new DragonBreed("sapphire-dragon", "Sapphire Dragon", DragonSubType.Western, [Affinity.Light], SpriteFactory.uSprites("sapphire")),
    new DragonBreed("scimitar-wing-wyvern", "Scimitar-wing Wyvern", DragonSubType.Wyvern, [Affinity.Neutral], SpriteFactory.mfSprites("scimitar-wing")),
    new DragonBreed("script-dragon", "Script Dragon", DragonSubType.Lindwyrm, [Affinity.Magi], SpriteFactory.uSprites("script")),
    new DragonBreed("seasonal-dragon", "Seasonal Dragon", DragonSubType.Western, [Affinity.Time], [
        SpriteFactory.customSprite('seasonal-w-f', "Winter ♀", true, ConditionBuilder.checkGender(Gender.Female,"Winter ♀")),
        SpriteFactory.customSprite('seasonal-w-m', "Winter ♂", true, ConditionBuilder.checkGender(Gender.Male,"Winter ♂")),
        SpriteFactory.customSprite('seasonal-sp-f', "Spring ♀", true, ConditionBuilder.checkGender(Gender.Female,"Spring ♀")),
        SpriteFactory.customSprite('seasonal-sp-m', "Spring ♂", true, ConditionBuilder.checkGender(Gender.Male,"Spring ♂")),
        SpriteFactory.customSprite('seasonal-su-f', "Summer ♀", true, ConditionBuilder.checkGender(Gender.Female,"Summer ♀")),
        SpriteFactory.customSprite('seasonal-su-m', "Summer ♂", true, ConditionBuilder.checkGender(Gender.Male,"Summer ♂")),
        SpriteFactory.customSprite('seasonal-f-f', "Fall ♀", true, ConditionBuilder.checkGender(Gender.Female,"Fall ♀")),
        SpriteFactory.customSprite('seasonal-f-m', "Fall ♂", true, ConditionBuilder.checkGender(Gender.Male,"Fall ♂")),
    ]),
    new DragonBreed("seragamma-wyvern", "Seragamma Wyvern", DragonSubType.Wyvern, [Affinity.Death], SpriteFactory.mfSprites("seragamma")),
    new DragonBreed("silver-dragon", "Silver Dragon", DragonSubType.Eastern, [Affinity.Light], SpriteFactory.mfSprites("silver")),
    new DragonBreed("sinomorph-dragon", "Sinomorph", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.uSprites("sinomorph"), 
        ConditionBuilder.checkFirstGeneration('Sinomorph')
    ),
    new DragonBreed("sinii-krai-dragon", "Sinii Krai Dragon", DragonSubType.Western, [Affinity.None], SpriteFactory.mfSprites("sinni-krai")),
    new DragonBreed("siyat-dragon", "Siyat Dragon", DragonSubType.Western, [Affinity.Air], [
        SpriteFactory.customSprite('siyat-b-u', "Blue", true),
        SpriteFactory.customSprite('siyat-g-u', "Green", true),
        SpriteFactory.customSprite('siyat-p-u', "Purple", true),
    ]),
    new DragonBreed("skysilk-dragon", "Skysilk Dragon", DragonSubType.Western, [Affinity.Air], SpriteFactory.uSprites("skysilk")),
    new DragonBreed("skywing-dragon", "Skywing Dragon", DragonSubType.Amphiptere, [Affinity.Air], SpriteFactory.uSprites("skywing")),
    new DragonBreed("speckle-throated-dragon", "Speckle-Throated Dragon", DragonSubType.Western, [Affinity.Air], SpriteFactory.mfSprites("speckle-throated")),
    new DragonBreed("spinel-wyvern", "Spinel Wyvern", DragonSubType.Wyvern, [Affinity.Earth], [
        SpriteFactory.customSprite('spinel-f', "Standard ♀", true, ConditionBuilder.checkGender(Gender.Female,"Standard ♀")),
        SpriteFactory.customSprite('spinel-m', "Standard ♂", true, ConditionBuilder.checkGender(Gender.Male,"Standard ♂")),
        SpriteFactory.customSprite('spinel-alt-f', "Alt ♀", false, 
            ConditionBuilder.and("Alt ♀", [
                ConditionBuilder.checkGender(Gender.Female),
                ConditionBuilder.checkFirstGeneration('Alt', true),
                new Condition(
                    (dragon: DragonNode) => {
                        if(dragon.hasParents()) {
                            if(dragon.father()!.breed.affinity[0] === 'Earth' && dragon.mother()!.breed.affinity[0] === 'Earth')
                                return true;
                        } 
                        return false;
                    },
                    'two Earth-element parents.'
                )
            ])
        ),
        SpriteFactory.customSprite('spinel-alt-m', "Alt ♂", false, 
            ConditionBuilder.and("Alt ♂", [
                ConditionBuilder.checkGender(Gender.Male),
                ConditionBuilder.checkFirstGeneration('Alt', true),
                new Condition(
                    (dragon: DragonNode) => {
                        if(dragon.hasParents()) {
                            if(dragon.father()!.breed.affinity[0] === 'Earth' && dragon.mother()!.breed.affinity[0] === 'Earth')
                                return true;
                        } 
                        return false;
                    },
                    'two Earth-element parents.'
                )
            ])
        ),
    ]),
    new DragonBreed("spirit-ward-dragon", "Spirit Ward Dragon", DragonSubType.Wyvern, [Affinity.Light], generateSpiritWardSwaps()),
    new DragonBreed("spitfire-dragon", "Spitfire Dragon", DragonSubType.Western, [Affinity.Fire], SpriteFactory.uSprites("spitfire"),
        ConditionFactory.trueBredBreed("Spitfire Dragon", [
            {id: 'spitfire-dragon', label : 'Spitfire Dragon'},
            {id: 'ultraviolet-dragon', label : 'Ultraviolet Dragon'}
        ])
    ),
    new DragonBreed("spotted-greenwing-dragon", "Spotted Greenwing", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.uSprites("spotted-greenwing")),
    new DragonBreed("stone-dragon", "Stone Dragon", DragonSubType.Western, [Affinity.Earth], SpriteFactory.uSprites("stone")),
    new DragonBreed("storm-dragon", "Storm Dragon", DragonSubType.Western, [Affinity.Air], SpriteFactory.mfSprites("storm")),
    new DragonBreed("stratos-dragon", "Stratos Dragon", DragonSubType.SeaSerpent, [Affinity.Air, Affinity.Light], [
        SpriteFactory.customSprite('stratos-u', "Standard", true, ConditionBuilder.alwaysTrue("Standard"), [
            {range: new TimeRange('03:00:00','08:59:00'), 
            sprites: [SpriteFactory.customSprite('stratos-t1-u', "Dawn", true, ConditionBuilder.alwaysTrue("Dawn")),]},
            {range: new TimeRange('15:00:00','20:59:00'), 
            sprites: [SpriteFactory.customSprite('stratos-t2-u', "Dusk", true, ConditionBuilder.alwaysTrue("Dusk")),]},
            {range: new TimeRange('21:00:00','02:59:00'), 
            sprites: [SpriteFactory.customSprite('stratos-t3-u', "Night", true, ConditionBuilder.alwaysTrue("Night")),]}
        ])
    ]),
    new DragonBreed("striped-dragon", "Striped Dragon", DragonSubType.Western, [Affinity.Neutral], [
        SpriteFactory.customSprite('striped-w-f', "White ♀", true, ConditionBuilder.checkGender(Gender.Female,"White ♀")),
        SpriteFactory.customSprite('striped-w-m', "White ♂", true, ConditionBuilder.checkGender(Gender.Male,"White ♂")),
        SpriteFactory.customSprite('striped-b-f', "Black ♀", false, ConditionBuilder.checkGender(Gender.Female,"Black ♀")),
        SpriteFactory.customSprite('striped-b-m', "Black ♂", false, ConditionBuilder.checkGender(Gender.Male,"Black ♂")),
        SpriteFactory.customSprite('striped-g-f', "Green ♀", false, ConditionBuilder.checkGender(Gender.Female,"Green ♀")),
        SpriteFactory.customSprite('striped-g-m', "Green ♂", false, ConditionBuilder.checkGender(Gender.Male,"Green ♂")),
        SpriteFactory.customSprite('striped-r-f', "Red ♀", false, ConditionBuilder.checkGender(Gender.Female,"Red ♀")),
        SpriteFactory.customSprite('striped-r-m', "Red ♂", false, ConditionBuilder.checkGender(Gender.Male,"Red ♂")),
        SpriteFactory.customSprite('striped-u-f', "Blue ♀", false, ConditionBuilder.checkGender(Gender.Female,"Blue ♀")),
        SpriteFactory.customSprite('striped-u-m', "Blue ♂", false, ConditionBuilder.checkGender(Gender.Male,"Blue ♂")),
    ]),
    new DragonBreed("striped-river-dragon", "Striped River Dragon", DragonSubType.Eastern, [Affinity.Water], SpriteFactory.uSprites("striped-river")),
    new DragonBreed("sunrise-dragon", "Sunrise Dragon", DragonSubType.Western, [Affinity.Light], SpriteFactory.mfSprites("sunrise"),
        ConditionFactory.trueBredBreed("Sunrise Dragon", [
            {id: 'sunrise-dragon', label : 'Sunrise Dragon'},
            {id: 'sunset-dragon', label : 'Sunset Dragon'}
        ])
    ),
    new DragonBreed("sunset-dragon", "Sunset Dragon", DragonSubType.Western, [Affinity.Light], SpriteFactory.mfSprites("sunset"),
        ConditionFactory.trueBredBreed("Sunrise Dragon", [
            {id: 'sunset-dragon', label : 'Sunset Dragon'},
            {id: 'sunrise-dragon', label : 'Sunrise Dragon'}
        ])
    ),
    new DragonBreed("sunsong-amphiptere", "Sunsong Amphiptere", DragonSubType.Amphiptere, [Affinity.Light], SpriteFactory.mfSprites("sunsong")),
    new DragonBreed("sunstone-dragon", "Sunstone Dragon", DragonSubType.Western, [Affinity.Fire], SpriteFactory.uSprites("sunstone")),
    new DragonBreed("swallowtail-dragon", "Swallowtail Dragon", DragonSubType.Western, [Affinity.Air], SpriteFactory.mfSprites("swallowtail")),
    new DragonBreed("tercorn-dragon", "Tercorn Dragon", DragonSubType.Western, [Affinity.Water, Affinity.Life], SpriteFactory.uSprites("tercorn")),
    new DragonBreed("terrae-dragon", "Terrae Dragon", DragonSubType.Wingless, [Affinity.Earth], SpriteFactory.mfSprites("terrae")),
    new DragonBreed("tetra-dragon", "Tetra Dragon", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.uSprites("tetra")),
    new DragonBreed("thunder-dragon", "Thunder Dragon", DragonSubType.Western, [Affinity.Lightning], SpriteFactory.uSprites("thunder")),
    new DragonBreed("tri-horn-wyvern", "Tri-Horn Wyvern", DragonSubType.Wyvern, [Affinity.Ice], SpriteFactory.mfSprites("tri-horn")),
    new DragonBreed("tsunami-wyvern", "Tsunami Wyvern", DragonSubType.Wyvern, [Affinity.Water], SpriteFactory.mfSprites("tsunami")),
    new DragonBreed("turpentine-dragon", "Turpentine Dragon", DragonSubType.Western, [Affinity.Dark], SpriteFactory.uSprites("turpentine")),
    new DragonBreed("undine-dragon", "Undine Dragon", DragonSubType.Western, [Affinity.Water], SpriteFactory.mfAltSprites("undine", false)),
    new DragonBreed("venturis-dragon", "Venturis Dragon", DragonSubType.Eastern, [Affinity.Time], SpriteFactory.mfSprites("venturis")),
    new DragonBreed("water-dragon", "Water Dragon", DragonSubType.SeaSerpent, [Affinity.Water], SpriteFactory.mfSprites("water")),
    new DragonBreed("water-walker-dragon", "Water Walker Dragon", DragonSubType.Wingless, [Affinity.Water], SpriteFactory.uSprites("water-walker")),
    new DragonBreed("waterhorse-dragon", "Waterhorse Dragon", DragonSubType.Wingless, [Affinity.Water], SpriteFactory.mfSprites("waterhorse")),
    new DragonBreed("whiptail-dragon", "Whiptail Dragon", DragonSubType.Western, [Affinity.Neutral], SpriteFactory.uSprites("whiptail")),
    new DragonBreed("white-dragon", "White Dragon", DragonSubType.Western, [Affinity.Life, Affinity.Light], SpriteFactory.uSprites("white")),
    new DragonBreed("xenowyrm-aquilo", "Xenowyrm (Aquilo)", DragonSubType.Wyrm, [Affinity.Air], SpriteFactory.uSprites("xenowyrm-aquilo"), ConditionFactory.xenoBreedCondition('Aquilo Xenowyrm')),
    new DragonBreed("xenowyrm-aso", "Xenowyrm (Aso)", DragonSubType.Wyrm, [Affinity.Ice], SpriteFactory.uSprites("xenowyrm-aso"), ConditionFactory.xenoBreedCondition('Aso Xenowyrm')),
    new DragonBreed("xenowyrm-astrapi", "Xenowyrm (Astrapi)", DragonSubType.Wyrm, [Affinity.Lightning], SpriteFactory.uSprites("xenowyrm-astrapi"), ConditionFactory.xenoBreedCondition('Astrapi Xenowyrm')),
    new DragonBreed("xenowyrm-chrono", "Xenowyrm (Chrono)", DragonSubType.Wyrm, [Affinity.Time], SpriteFactory.uSprites("xenowyrm-chrono"), ConditionFactory.xenoBreedCondition('Chrono Xenowyrm')),
    new DragonBreed("xenowyrm-gaia", "Xenowyrm (Gaia)", DragonSubType.Wyrm, [Affinity.Life], SpriteFactory.uSprites("xenowyrm-gaia"), ConditionFactory.xenoBreedCondition('Gaia Xenowyrm')),
    new DragonBreed("xenowyrm-kemaro", "Xenowyrm (Ke'maro)", DragonSubType.Wyrm, [Affinity.Death], SpriteFactory.uSprites("xenowyrm-kemaro"), ConditionFactory.xenoBreedCondition("Ke'maro Xenowyrm")),
    new DragonBreed("xenowyrm-mageia", "Xenowyrm (Mageia)", DragonSubType.Wyrm, [Affinity.Magi], SpriteFactory.uSprites("xenowyrm-mageia"), ConditionFactory.xenoBreedCondition('Mageia Xenowyrm')),
    new DragonBreed("xenowyrm-obidar", "Xenowyrm (Obidar)", DragonSubType.Wyrm, [Affinity.Earth], SpriteFactory.uSprites("xenowyrm-obidar"), ConditionFactory.xenoBreedCondition('Obidar Xenowyrm')),
    new DragonBreed("xenowyrm-pharos", "Xenowyrm (Pharos)", DragonSubType.Wyrm, [Affinity.Light], SpriteFactory.uSprites("xenowyrm-pharos"), ConditionFactory.xenoBreedCondition('Pharos Xenowyrm')),
    new DragonBreed("xenowyrm-pyro", "Xenowyrm (Pyro)", DragonSubType.Wyrm, [Affinity.Fire], SpriteFactory.uSprites("xenowyrm-pyro"), ConditionFactory.xenoBreedCondition('Pyro Xenowyrm')),
    new DragonBreed("xenowyrm-staterae", "Xenowyrm (Staterae)", DragonSubType.Wyrm, [Affinity.Neutral], SpriteFactory.uSprites("xenowyrm-staterae"), ConditionFactory.xenoBreedCondition('Staterae Xenowyrm')),
    new DragonBreed("xenowyrm-thalassa", "Xenowyrm (Thalassa)", DragonSubType.Wyrm, [Affinity.Water], SpriteFactory.uSprites("xenowyrm-thalassa"), ConditionFactory.xenoBreedCondition('Thalassa Xenowyrm')),
    new DragonBreed("xenowyrm-umbra", "Xenowyrm (Umbra)", DragonSubType.Wyrm, [Affinity.Dark], SpriteFactory.uSprites("xenowyrm-umbra"), ConditionFactory.xenoBreedCondition('Umbra Xenowyrm')),
    new DragonBreed("xol-dragon", "Xol Dragon", DragonSubType.Wingless, [Affinity.Fire, Affinity.Water], [
        SpriteFactory.customSprite('xol-b-f', "Brown ♀", true, ConditionBuilder.checkGender(Gender.Female,"Brown ♀",)),
        SpriteFactory.customSprite('xol-b-m', "Brown ♂", true, ConditionBuilder.checkGender(Gender.Male,"Brown ♂")),
        SpriteFactory.customSprite('xol-p-f', "Purple ♀", true, ConditionBuilder.checkGender(Gender.Female,"Purple ♀")),
        SpriteFactory.customSprite('xol-p-m', "Purple ♂", true, ConditionBuilder.checkGender(Gender.Male,"Purple ♂")),
    ]),
    new DragonBreed("yellow-crowned-dragon", "Yellow-Crowned Dragon", DragonSubType.Western, [Affinity.Light], SpriteFactory.mfSprites("yellow-crowned")),
    new DragonBreed("zyumorph-dragon", "Zyumorph", DragonSubType.Western, [Affinity.Neutral], [
        SpriteFactory.customSprite('zyumorph-alpine-u', "Alpine", true, ConditionFactory.zyuSpriteCondition("Alpine", "zyumorph-alpine-u")),
        SpriteFactory.customSprite('zyumorph-coast-u', "Coast", true, ConditionFactory.zyuSpriteCondition("Coast", "zyumorph-coast-u")),
        SpriteFactory.customSprite('zyumorph-desert-u', "Desert", true, ConditionFactory.zyuSpriteCondition("Desert", "zyumorph-desert-u")),
        SpriteFactory.customSprite('zyumorph-forest-u', "Forest", true, ConditionFactory.zyuSpriteCondition("Forest", "zyumorph-forest-u")),
        SpriteFactory.customSprite('zyumorph-jungle-u', "Jungle", true, ConditionFactory.zyuSpriteCondition("Jungle", "zyumorph-jungle-u")),
        SpriteFactory.customSprite('zyumorph-volcano-u', "Volcano", true, ConditionFactory.zyuSpriteCondition("Volcano", "zyumorph-volcano-u")),
    ], ConditionFactory.trueBredBreed('Zyumorph', [{id: 'zyumorph-dragon', label : 'Zyumorph'}, {id: 'sinomorph-dragon', label : 'Sinomorph'}])),
]

function generateSpiritWardSwaps() {
    let t0f = SpriteFactory.customSprite('spirit-ward-f', "Standard ♀", true, ConditionBuilder.checkGender(Gender.Female,"Standard ♀"))
    let t0m = SpriteFactory.customSprite('spirit-ward-m', "Standard ♂", true, ConditionBuilder.checkGender(Gender.Male,"Standard ♂"))
    let t1f = SpriteFactory.customSprite('spirit-ward-t1-f', "Afternoon/Morning ♀", true, ConditionBuilder.checkGender(Gender.Female,"Afternoon/Morning ♀"))
    let t1m = SpriteFactory.customSprite('spirit-ward-t1-m', "Afternoon/Morning ♂", true, ConditionBuilder.checkGender(Gender.Male,"Afternoon/Morning ♂"))
    let t2f = SpriteFactory.customSprite('spirit-ward-t2-f', "Dusk/Dawn ♀", true, ConditionBuilder.checkGender(Gender.Female,"Dusk/Dawn ♀"))
    let t2m = SpriteFactory.customSprite('spirit-ward-t2-m', "Dusk/Dawn ♂", true, ConditionBuilder.checkGender(Gender.Male,"Dusk/Dawn ♂"))
    let t3f = SpriteFactory.customSprite('spirit-ward-t3-f', "Night ♀", true, ConditionBuilder.checkGender(Gender.Female,"Night ♀"))
    let t3m = SpriteFactory.customSprite('spirit-ward-t3-m', "Night ♂", true, ConditionBuilder.checkGender(Gender.Male,"Night ♂"))
    let t4f = SpriteFactory.customSprite('spirit-ward-t4-f', "Midnight ♀", true, ConditionBuilder.checkGender(Gender.Female,"Midnight ♀"))
    let t4m = SpriteFactory.customSprite('spirit-ward-t4-m', "Midnight ♂", true, ConditionBuilder.checkGender(Gender.Male,"Midnight ♂"))

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