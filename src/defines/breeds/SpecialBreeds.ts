import Breed, { DragonType, DragonSubType, Affinity } from '../../library/defines/Breed';
import { Gender } from '../../library/defines/Dragon';

import SpriteFactory from '../_utilities/SpriteFactory';
import ConditionBuilder from '../_utilities/ConditionBuilder';
import ConditionFactory from '../_utilities/ConditionFactory';

let SpecialBreeds: Array<Breed> = [
    new Breed("tinsel-dragon", "Tinsel Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Neutral], "mf-mf", [
        SpriteFactory.customSprite('tinsel-b-u', "Bronze", true, 
            ConditionFactory.trueBredSprite("Bronze", [{id: 'tinsel-b-u', label : 'Bronze'}])
        ),
        SpriteFactory.customSprite('tinsel-s-u', "Silver", true, 
            ConditionFactory.trueBredSprite("Silver", [{id: 'tinsel-s-u', label : 'Silver'}, {id: 'tinsel-salt-u', label : 'Salt'}])    
        ),
        SpriteFactory.customSprite('tinsel-g-u', "Gold", true, 
            ConditionFactory.trueBredSprite("Gold", [{id: 'tinsel-g-u', label : 'Gold'}])  
        ),
        SpriteFactory.customSprite('tinsel-salt-u', "Salt", false, 
            ConditionBuilder.and("Salt", [
                ConditionBuilder.checkFirstGeneration(),
                ConditionBuilder.checkGender(Gender.Female)
            ])
        )
    ]),

    new Breed("shimmer-scale-dragon", "Shimmer-scale Dragon", DragonType.Dragon, DragonSubType.Eastern, [Affinity.Water], "mf-mf", [
        SpriteFactory.customSprite('shimmer-b-u', "Bronze", true, 
            ConditionFactory.trueBredSprite("Bronze", [{id: 'shimmer-b-u', label : 'Bronze'}])
        ),
        SpriteFactory.customSprite('shimmer-s-u', "Silver", true, 
            ConditionFactory.trueBredSprite("Silver", [{id: 'shimmer-s-u', label : 'Silver'}, {id: 'shimmer-salt-u', label : 'Salt'}])    
        ),
        SpriteFactory.customSprite('shimmer-g-u', "Gold", true, 
            ConditionFactory.trueBredSprite("Gold", [{id: 'shimmer-g-u', label : 'Gold'}])  
        ),
        SpriteFactory.customSprite('shimmer-salt-u', "Salt", false, 
            ConditionBuilder.and("Salt", [
                ConditionBuilder.checkFirstGeneration(),
                ConditionBuilder.checkGender(Gender.Female)
            ])
        )
    ]),

    new Breed("valentine-dragon", "Valentine Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Magi], "f-f", [
        SpriteFactory.customSprite('valentine-f', "Standard", true),
        SpriteFactory.customSprite('valentine-salt1-f', "White Salt", false, ConditionBuilder.checkFirstGeneration("Purple Salt")),
        SpriteFactory.customSprite('valentine-salt2-f', "Purple Salt", false, ConditionBuilder.checkFirstGeneration("White Salt")),
    ]),
    new Breed("sweetling-dragon", "Sweetling", DragonType.Dragon, DragonSubType.Wingless, [Affinity.Neutral], "m-m", [
        SpriteFactory.customSprite('sweetling-m', "Standard", true),
        SpriteFactory.customSprite('sweetling-alt-m', "Alt", false),
        SpriteFactory.customSprite('sweetling-salt1-m', "Chocolate Salt", false, ConditionBuilder.checkFirstGeneration("Chocolate Salt")),
        SpriteFactory.customSprite('sweetling-salt2-m', "Pink Salt", false, ConditionBuilder.checkFirstGeneration("Pink Salt")),
    ]),
    new Breed("rosebud-dragon", "Rosebud Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Air], "f-f", [
        SpriteFactory.customSprite('rosebud-f', "Standard", true),
        SpriteFactory.customSprite('rosebud-salt1-f', "White Salt", false, ConditionBuilder.checkFirstGeneration("White Salt")),
        SpriteFactory.customSprite('rosebud-salt2-f', "Pink Salt", false, ConditionBuilder.checkFirstGeneration("Pink Salt")),
    ]),
    new Breed("heartseeker-dragon", "Heartseeker Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Neutral], "m-m", [
        SpriteFactory.customSprite('heartseeker-m', "Standard", true),
        SpriteFactory.customSprite('heartseeker-salt-m', "Salt", false, ConditionBuilder.checkFirstGeneration("Salt")),
    ]),
    new Breed("arsani-dragon", "Arsani Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Magi], "f-f", [
        SpriteFactory.customSprite('arsani-f', "Standard", true),
        SpriteFactory.customSprite('arsani-salt1-f', "Grey Salt", false, ConditionBuilder.checkFirstGeneration("Grey Salt")),
        SpriteFactory.customSprite('arsani-salt2-f', "Blue Salt", false, ConditionBuilder.checkFirstGeneration("Blue Salt")),
    ]),
    new Breed("radiant-angel-dragon", "Radiant Angel Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Magi], "m-m", [
        SpriteFactory.customSprite('radiant-angel-m', "Standard", true),
        SpriteFactory.customSprite('radiant-angel-salt1-m', "White Salt", false, ConditionBuilder.checkFirstGeneration("White Salt")),
        SpriteFactory.customSprite('radiant-angel-salt2-m', "Black Salt", false, ConditionBuilder.checkFirstGeneration("Black Salt")),
    ]),
    new Breed("heartstealing-dragon", "Heartstealing Dragon", DragonType.Dragon, DragonSubType.Eastern, [Affinity.Neutral], "f-f", [
        SpriteFactory.customSprite('heartstealing-f', "Standard", true),
        SpriteFactory.customSprite('heartstealing-salt-f', "Salt", false, ConditionBuilder.checkFirstGeneration("Salt")),
    ]),
    new Breed("mutamore-dragon", "Mutamore Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Earth, Affinity.Water], "m-m", [
        SpriteFactory.customSprite('mutamore-m', "Standard", true),
        SpriteFactory.customSprite('mutamore-salt1-m', "Black Salt", false, ConditionBuilder.checkFirstGeneration("Black Salt")),
        SpriteFactory.customSprite('mutamore-salt2-m', "Red Salt", false, ConditionBuilder.checkFirstGeneration("Red Salt")),
    ]),
    new Breed("soulstone-dragon", "Soulstone Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Light], "f-f", [
        SpriteFactory.customSprite('soulstone-f', "Standard", true),
    ]),
    new Breed("floral-crowned-dragon", "Floral-Crowned Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Life], "m-m", [
        SpriteFactory.customSprite('floral-crowned-m', "Standard", true),
        SpriteFactory.customSprite('floral-crowned-salt-m', "Salt", false, ConditionBuilder.checkFirstGeneration("Salt")),
    ]),
    new Breed("sakuhana-wyvern", "Sakuhana Wyvern", DragonType.Dragon, DragonSubType.Wyvern, [Affinity.Life], "f-f", [
        SpriteFactory.customSprite('sakuhana-f', "Standard", true),
        SpriteFactory.customSprite('sakuhana-salt-f', "Salt", false, ConditionBuilder.checkFirstGeneration("Salt")),
    ]),
    new Breed("erador-lindwyrm", "Erador Lindwyrm", DragonType.Dragon, DragonSubType.Lindwyrm, [Affinity.Magi, Affinity.Life], "m-m", [
        SpriteFactory.customSprite('erador-m', "Standard", true),
        SpriteFactory.customSprite('erador-salt1-m', "Green Salt", false, ConditionBuilder.checkFirstGeneration("Blue Salt")),
        SpriteFactory.customSprite('erador-salt2-m', "Blue Salt", false, ConditionBuilder.checkFirstGeneration("Green Salt")),
    ]),
    
    new Breed("holly-dragon", "Holly Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Life], "m-mf", [
        SpriteFactory.customSprite('holly-u', "Standard", true),
    ]),
    new Breed("yulebuck-dragon", "Yulebuck Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Light], "m-m", [
        SpriteFactory.customSprite('yulebuck-m', "Standard", true),
        SpriteFactory.customSprite('yulebuck-salt-m', "Salt", false)
    ]),
    new Breed("snow-angel-dragon", "Snow Angel", DragonType.Dragon, DragonSubType.Western, [Affinity.Ice], "f-f", [
        SpriteFactory.customSprite('snow-angel-1-f', "Gold Wings", true),
        SpriteFactory.customSprite('snow-angel-2-f', "White Wings", false),
        SpriteFactory.customSprite('snow-angel-3-f', "Pinstripe Wings", false),
        SpriteFactory.customSprite('snow-angel-salt-f', "Salt", false),
    ]),
    new Breed("ribbon-dancer-dragon", "Ribbon Dancer", DragonType.Dragon, DragonSubType.Western, [Affinity.Light], "f-f", [
        SpriteFactory.customSprite('ribbon-dancer-f', "Standard", true),
        SpriteFactory.customSprite('ribbon-dancer-salt-f', "Salt", false),
    ]),
    new Breed("winter-magi-dragon", "Winter Magi Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Magi], "m-m", [
        SpriteFactory.customSprite('winter-magi-m', "Standard", true),
        SpriteFactory.customSprite('winter-magi-salt-m', "Salt", false)
    ]),
    new Breed("wrapping-wing-dragon", "Wrapping-Wing", DragonType.Dragon, DragonSubType.Western, [Affinity.Life], "m-m", [
        SpriteFactory.customSprite('wrapping-wing-m', "Standard", true),
        SpriteFactory.customSprite('wrapping-wing-salt-m', "Salt", false)
    ]),
    new Breed("solstice-dragon", "Solstice Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Time], "f-f", [
        SpriteFactory.customSprite('solstice-b-f', "Blue", true),
        SpriteFactory.customSprite('solstice-p-f', "Rosy", true),
        SpriteFactory.customSprite('solstice-salt-f', "Salt", false),
    ]),
    new Breed("mistletoe-dragon", "Mistletoe Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Life], "f-mf", [
        SpriteFactory.customSprite('mistletoe-f', "Standard", true),
        SpriteFactory.customSprite('mistletoe-salt1-f', "Blue Salt", false),
        SpriteFactory.customSprite('mistletoe-salt2-f', "Gold Salt", false),
    ]),
    new Breed("aegis-dragon", "Aegis Dragon", DragonType.Dragon, DragonSubType.Wingless, [Affinity.Life, Affinity.Ice], "m-m", [
        SpriteFactory.customSprite('aegis-m', "Standard", true),
        SpriteFactory.customSprite('aegis-rage-m', "Enraged", false),
        SpriteFactory.customSprite('aegis-salt1-m', "Black Salt", false),
        SpriteFactory.customSprite('aegis-salt1-rage-m', "Black Enraged", false),
        SpriteFactory.customSprite('aegis-salt2-m', "Red Salt", false),
        SpriteFactory.customSprite('aegis-salt2-rage-m', "Red Enraged", false),
    ]),
    new Breed("snow-dragon", "Snow Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Ice], "m-m", [
        SpriteFactory.customSprite('snow-m', "Standard", true),
        SpriteFactory.customSprite('snow-salt1-m', "Gold Salt", false),
        SpriteFactory.customSprite('snow-salt2-m', "Green Salt", false)
    ]),
    new Breed("garland-dragon", "Garland Dragon", DragonType.Dragon, DragonSubType.Amphiptere, [Affinity.Fire], "f-f", [
        SpriteFactory.customSprite('garland-f', "Standard", true),
        SpriteFactory.customSprite('garland-salt1-f', "Pink Salt", false),
        SpriteFactory.customSprite('garland-salt2-f', "Blue Salt", false)
    ]),
    new Breed("starsinger-dragon", "Starsinger Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Light], "f-f", [
        SpriteFactory.customSprite('starsinger-f', "Standard", true),
        SpriteFactory.customSprite('starsinger-salt1-f', "Ochre Salt", false),
        SpriteFactory.customSprite('starsinger-salt2-f', "Blue Salt", false)
    ]),
    new Breed("wintertide-dragon", "Wintertide Dragon", DragonType.Dragon, DragonSubType.Amphiptere, [Affinity.Life, Affinity.Fire], "m-m", [
        SpriteFactory.customSprite('wintertide-m', "Standard", true),
        SpriteFactory.customSprite('wintertide-salt-m', "Salt", false)
    ]),
    //new Breed("vampire-dragon", "Vampire Dragon", "dragon", "mf-mf", SpriteFactory.mfSprites("vampire")),
    new Breed("pumpkin-dragon", "Pumpkin Dragon", DragonType.Pygmy, DragonSubType.Western, [Affinity.None], "mf-mf", [
        SpriteFactory.customSprite('pumpkin-u', "Standard", true),
        SpriteFactory.customSprite('pumpkin-salt-u', "Salt", false)
    ]),
    new Breed("black-marrow-dragon", "Black Marrow Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Death], "mf-mf", SpriteFactory.mfSprites("black-marrow")),
    new Breed("shadow-walker-dragon", "Shadow Walker Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Magi], "mf-mf", [
        SpriteFactory.customSprite('shadow-walker-u', "Standard", true),
        SpriteFactory.customSprite('shadow-walker-salt1-u', "Tan Salt", false),
        SpriteFactory.customSprite('shadow-walker-salt2-u', "Purple Salt", false)
    ]),
    new Breed("cavern-lurker-dragon", "Cavern Lurker Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Dark], "mf-mf", [
        SpriteFactory.customSprite('cavern-lurker-f', "Standard ♀", true, ConditionBuilder.checkGender(Gender.Female,"Standard ♀")),
        SpriteFactory.customSprite('cavern-lurker-m', "Standard ♂", true, ConditionBuilder.checkGender(Gender.Male,"Standard ♂")),
        SpriteFactory.customSprite('cavern-lurker-salt-f', "Salt ♀", false, ConditionBuilder.checkGender(Gender.Female,"Salt ♀")),
        SpriteFactory.customSprite('cavern-lurker-salt-m', "Salt ♂", false, ConditionBuilder.checkGender(Gender.Male,"Salt ♂"))
    ]),
    new Breed("grave-dragon", "Grave Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Fire], "mf-mf", [
        SpriteFactory.customSprite('grave-f', "Standard ♀", true, ConditionBuilder.checkGender(Gender.Female,"Standard ♀")),
        SpriteFactory.customSprite('grave-m', "Standard ♂", true, ConditionBuilder.checkGender(Gender.Male,"Standard ♂")),
        SpriteFactory.customSprite('grave-salt-f', "Salt ♀", false, ConditionBuilder.checkGender(Gender.Female,"Salt ♀")),
        SpriteFactory.customSprite('grave-salt-m', "Salt ♂", false, ConditionBuilder.checkGender(Gender.Male,"Salt ♂"))
    ]),
    new Breed("desipis-dragon", "Desipis Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Dark, Affinity.Magi], "mf-mf", [
        SpriteFactory.customSprite('desipis-f', "Standard ♀", true, ConditionBuilder.checkGender(Gender.Female,"Standard ♀")),
        SpriteFactory.customSprite('desipis-m', "Standard ♂", true, ConditionBuilder.checkGender(Gender.Male,"Standard ♂")),
        SpriteFactory.customSprite('desipis-salt1-f', "Turquoise Salt ♀", false, ConditionBuilder.checkGender(Gender.Female,"Turquoise Salt ♀")),
        SpriteFactory.customSprite('desipis-salt1-m', "Turquoise Salt ♂", false, ConditionBuilder.checkGender(Gender.Male,"Turquoise Salt ♂")),
        SpriteFactory.customSprite('desipis-salt2-f', "Green Salt ♀", false, ConditionBuilder.checkGender(Gender.Female,"Green Salt ♀")),
        SpriteFactory.customSprite('desipis-salt2-m', "Green Salt ♂", false, ConditionBuilder.checkGender(Gender.Male,"Green Salt ♂")),
    ]),
    new Breed("caligene-dragon", "Caligene Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Death], "mf-mf", [
        SpriteFactory.customSprite('caligene-f', "Standard ♀", true, ConditionBuilder.checkGender(Gender.Female,"Standard ♀")),
        SpriteFactory.customSprite('caligene-m', "Standard ♂", true, ConditionBuilder.checkGender(Gender.Male,"Standard ♂")),
        SpriteFactory.customSprite('caligene-salt-f', "Salt ♀", false, ConditionBuilder.checkGender(Gender.Female,"Salt ♀")),
        SpriteFactory.customSprite('caligene-salt-m', "Salt ♂", false, ConditionBuilder.checkGender(Gender.Male,"Salt ♂"))
    ]),
    new Breed("witchlight-dragon", "Witchlight Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Dark, Affinity.Magi], "mf-mf", [
        SpriteFactory.customSprite('witchlight-f', "Standard ♀", true, ConditionBuilder.checkGender(Gender.Female,"Standard ♀")),
        SpriteFactory.customSprite('witchlight-m', "Standard ♂", true, ConditionBuilder.checkGender(Gender.Male,"Standard ♂")),
        SpriteFactory.customSprite('witchlight-salt-f', "Salt ♀", false, ConditionBuilder.checkGender(Gender.Female,"Salt ♀")),
        SpriteFactory.customSprite('witchlight-salt-m', "Salt ♂", false, ConditionBuilder.checkGender(Gender.Male,"Salt ♂"))
    ]),
    new Breed("omen-wyrm", "Omen Wyrm", DragonType.Dragon, DragonSubType.Wyrm, [Affinity.Fire, Affinity.Dark], "mf-mf", [
        SpriteFactory.customSprite('omen-f', "Standard ♀", true, ConditionBuilder.checkGender(Gender.Female,"Standard ♀")),
        SpriteFactory.customSprite('omen-m', "Standard ♂", true, ConditionBuilder.checkGender(Gender.Male,"Standard ♂")),
        SpriteFactory.customSprite('omen-salt1-f', "Blue Salt ♀", false, ConditionBuilder.checkGender(Gender.Female,"Blue Salt ♀")),
        SpriteFactory.customSprite('omen-salt1-m', "Blue Salt ♂", false, ConditionBuilder.checkGender(Gender.Male,"Blue Salt ♂")),
        SpriteFactory.customSprite('omen-salt2-f', "Red Salt ♀", false, ConditionBuilder.checkGender(Gender.Female,"Red Salt ♀")),
        SpriteFactory.customSprite('omen-salt2-m', "Red Salt ♂", false, ConditionBuilder.checkGender(Gender.Male,"Red Salt ♂")),
    ]),
    new Breed("arcana-dragon", "Arcana Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Magi], "mf-mf", [
        SpriteFactory.customSprite('arcana-f', "Standard ♀", true, ConditionBuilder.checkGender(Gender.Female,"Standard ♀")),
        SpriteFactory.customSprite('arcana-m', "Standard ♂", true, ConditionBuilder.checkGender(Gender.Male,"Standard ♂")),
        SpriteFactory.customSprite('arcana-salt1-f', "Blue Salt ♀", false, ConditionBuilder.checkGender(Gender.Female,"Blue Salt ♀")),
        SpriteFactory.customSprite('arcana-salt1-m', "Blue Salt ♂", false, ConditionBuilder.checkGender(Gender.Male,"Blue Salt ♂")),
        SpriteFactory.customSprite('arcana-salt2-f', "Green Salt ♀", false, ConditionBuilder.checkGender(Gender.Female,"Green Salt ♀")),
        SpriteFactory.customSprite('arcana-salt2-m', "Green Salt ♂", false, ConditionBuilder.checkGender(Gender.Male,"Green Salt ♂")),
    ]),
    new Breed("kohraki-dragon", "Kohraki Dragon", DragonType.Dragon, DragonSubType.Wyvern, [Affinity.Air, Affinity.Dark], "mf-mf", [
        SpriteFactory.customSprite('kohraki-f', "Standard ♀", true, ConditionBuilder.checkGender(Gender.Female,"Standard ♀")),
        SpriteFactory.customSprite('kohraki-m', "Standard ♂", true, ConditionBuilder.checkGender(Gender.Male,"Standard ♂")),
        SpriteFactory.customSprite('kohraki-salt1-f', "Blue Salt ♀", false, ConditionBuilder.checkGender(Gender.Female,"Blue Salt ♀")),
        SpriteFactory.customSprite('kohraki-salt1-m', "Blue Salt ♂", false, ConditionBuilder.checkGender(Gender.Male,"Blue Salt ♂")),
        SpriteFactory.customSprite('kohraki-salt2-f', "White Salt ♀", false, ConditionBuilder.checkGender(Gender.Female,"White Salt ♀")),
        SpriteFactory.customSprite('kohraki-salt2-m', "White Salt ♂", false, ConditionBuilder.checkGender(Gender.Male,"White Salt ♂")),
    ]),
]

export default SpecialBreeds;