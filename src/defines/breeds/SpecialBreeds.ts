import Breed, { DragonType, DragonSubType, Affinity } from '../../library/defines/Breed';
import { Gender } from '../../library/defines/Dragon';

import PortraitFactory from '../_utilities/PortraitFactory';
import ConditionFactory from '../_utilities/ConditionFactory';

let SpecialBreeds: Array<Breed> = [
    new Breed("tinsel-dragon", "Tinsel Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Neutral], "mf-mf", [
        PortraitFactory.customPortrait('tinsel-b-u', "Bronze", true, 
            ConditionFactory.or("Bronze", [
                ConditionFactory.checkFirstGeneration(),
                ConditionFactory.checkParentPortraitIds([{id: 'tinsel-b-u', label : 'Bronze'}])
            ])
        ),
        PortraitFactory.customPortrait('tinsel-s-u', "Silver", true, 
            ConditionFactory.or("Silver", [
                ConditionFactory.checkFirstGeneration(),
                ConditionFactory.checkParentPortraitIds([
                    {id: 'tinsel-s-u', label : 'Silver'}, 
                    {id: 'tinsel-salt-u', label : 'Salt'}
                ])
            ])
        ),
        PortraitFactory.customPortrait('tinsel-g-u', "Gold", true, 
            ConditionFactory.or("Gold", [
                ConditionFactory.checkFirstGeneration(),
                ConditionFactory.checkParentPortraitIds([{id: 'tinsel-g-u', label : 'Gold'}])
            ])
        ),
        PortraitFactory.customPortrait('tinsel-salt-u', "Salt", false, 
            ConditionFactory.and("Salt", [
                ConditionFactory.checkFirstGeneration(),
                ConditionFactory.checkGender(Gender.Female)
            ])
        )
    ]),

    new Breed("shimmer-scale-dragon", "Shimmer-scale Dragon", DragonType.Dragon, DragonSubType.Eastern, [Affinity.Water], "mf-mf", [
        PortraitFactory.customPortrait('shimmer-b-u', "Bronze", true, 
            ConditionFactory.or("Bronze", [
                ConditionFactory.checkFirstGeneration(),
                ConditionFactory.checkParentPortraitIds([{id: 'shimmer-b-u', label : 'Bronze'}])
            ])
        ),
        PortraitFactory.customPortrait('shimmer-s-u', "Silver", true, 
            ConditionFactory.or("Silver", [
                ConditionFactory.checkFirstGeneration(),
                ConditionFactory.checkParentPortraitIds([
                    {id: 'shimmer-s-u', label : 'Silver'}, 
                    {id: 'shimmer-salt-u', label : 'Salt'}
                ])
            ])
        ),
        PortraitFactory.customPortrait('shimmer-g-u', "Gold", true, 
            ConditionFactory.or("Gold", [
                ConditionFactory.checkFirstGeneration(),
                ConditionFactory.checkParentPortraitIds([{id: 'shimmer-g-u', label : 'Gold'}])
            ])
        ),
        PortraitFactory.customPortrait('shimmer-salt-u', "Salt", false, 
            ConditionFactory.and("Salt", [
                ConditionFactory.checkFirstGeneration(),
                ConditionFactory.checkGender(Gender.Female)
            ])
        )
    ]),

    new Breed("valentine-dragon", "Valentine Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Magi], "f-f", [
        PortraitFactory.customPortrait('valentine-f', "Standard", true),
        PortraitFactory.customPortrait('valentine-salt1-f', "Purple Salt", false, ConditionFactory.checkFirstGeneration("Purple Salt")),
        PortraitFactory.customPortrait('valentine-salt2-f', "White Salt", false, ConditionFactory.checkFirstGeneration("White Salt")),
    ]),
    new Breed("sweetling-dragon", "Sweetling", DragonType.Dragon, DragonSubType.Wingless, [Affinity.Neutral], "m-m", [
        PortraitFactory.customPortrait('sweetling-m', "Standard", true),
        PortraitFactory.customPortrait('sweetling-alt-m', "Alt", false),
        PortraitFactory.customPortrait('sweetling-salt1-m', "Chocolate Salt", false, ConditionFactory.checkFirstGeneration("Chocolate Salt")),
        PortraitFactory.customPortrait('sweetling-salt2-m', "Pink Salt", false, ConditionFactory.checkFirstGeneration("Pink Salt")),
    ]),
    new Breed("rosebud-dragon", "Rosebud Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Air], "f-f", [
        PortraitFactory.customPortrait('rosebud-f', "Standard", true),
        PortraitFactory.customPortrait('rosebud-salt1-f', "White Salt", false, ConditionFactory.checkFirstGeneration("White Salt")),
        PortraitFactory.customPortrait('rosebud-salt2-f', "Pink Salt", false, ConditionFactory.checkFirstGeneration("Pink Salt")),
    ]),
    new Breed("heartseeker-dragon", "Heartseeker Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Neutral], "m-m", [
        PortraitFactory.customPortrait('heartseeker-m', "Standard", true),
        PortraitFactory.customPortrait('heartseeker-salt-m', "Salt", false, ConditionFactory.checkFirstGeneration("Salt")),
    ]),
    new Breed("arsani-dragon", "Arsani Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Magi], "f-f", [
        PortraitFactory.customPortrait('arsani-f', "Standard", true),
        PortraitFactory.customPortrait('arsani-salt1-f', "Grey Salt", false, ConditionFactory.checkFirstGeneration("Grey Salt")),
        PortraitFactory.customPortrait('arsani-salt2-f', "Blue Salt", false, ConditionFactory.checkFirstGeneration("Blue Salt")),
    ]),
    new Breed("radiant-angel-dragon", "Radiant Angel Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Magi], "m-m", [
        PortraitFactory.customPortrait('radiant-angel-m', "Standard", true),
        PortraitFactory.customPortrait('radiant-angel-salt1-m', "White Salt", false, ConditionFactory.checkFirstGeneration("White Salt")),
        PortraitFactory.customPortrait('radiant-angel-salt2-m', "Black Salt", false, ConditionFactory.checkFirstGeneration("Black Salt")),
    ]),
    new Breed("heartstealing-dragon", "Heartstealing Dragon", DragonType.Dragon, DragonSubType.Eastern, [Affinity.Neutral], "f-f", [
        PortraitFactory.customPortrait('heartstealing-f', "Standard", true),
        PortraitFactory.customPortrait('heartstealing-salt1-f', "Salt", false, ConditionFactory.checkFirstGeneration("Salt")),
    ]),
    new Breed("mutamore-dragon", "Mutamore Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Earth, Affinity.Water], "m-m", [
        PortraitFactory.customPortrait('mutamore-m', "Standard", true),
        PortraitFactory.customPortrait('mutamore-salt1-m', "Black Salt", false, ConditionFactory.checkFirstGeneration("Black Salt")),
        PortraitFactory.customPortrait('mutamore-salt2-m', "Red Salt", false, ConditionFactory.checkFirstGeneration("Red Salt")),
    ]),
    new Breed("soulstone-dragon", "Soulstone Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Light], "f-f", [
        PortraitFactory.customPortrait('soulstone-f', "Standard", true),
    ]),
    new Breed("floral-crowned-dragon", "Floral-Crowned Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Life], "m-m", [
        PortraitFactory.customPortrait('floral-crowned-m', "Standard", true),
        PortraitFactory.customPortrait('floral-crowned-salt-m', "Salt", false, ConditionFactory.checkFirstGeneration("Salt")),
    ]),
    new Breed("sakuhana-wyvern", "Sakuhana Wyvern", DragonType.Dragon, DragonSubType.Wyvern, [Affinity.Life], "f-f", [
        PortraitFactory.customPortrait('sakuhana-f', "Standard", true),
        PortraitFactory.customPortrait('sakuhana-salt-f', "Salt", false, ConditionFactory.checkFirstGeneration("Salt")),
    ]),
    new Breed("erador-lindwyrm", "Erador Lindwyrm", DragonType.Dragon, DragonSubType.Lindwyrm, [Affinity.Magi, Affinity.Life], "m-m", [
        PortraitFactory.customPortrait('erador-m', "Standard", true),
        PortraitFactory.customPortrait('erador-salt1-m', "Blue Salt", false, ConditionFactory.checkFirstGeneration("Blue Salt")),
        PortraitFactory.customPortrait('erador-salt2-m', "Green Salt", false, ConditionFactory.checkFirstGeneration("Green Salt")),
    ]),
    
    new Breed("holly-dragon", "Holly Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Life], "m-mf", [
        PortraitFactory.customPortrait('holly-u', "Standard", true),
    ]),
    new Breed("yulebuck-dragon", "Yulebuck Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Light], "m-m", [
        PortraitFactory.customPortrait('yulebuck-m', "Standard", true),
        PortraitFactory.customPortrait('yulebuck-salt-m', "Salt", false)
    ]),
    new Breed("snow-angel-dragon", "Snow Angel", DragonType.Dragon, DragonSubType.Western, [Affinity.Ice], "f-f", [
        PortraitFactory.customPortrait('snow-angel-1-f', "Gold Wings", true),
        PortraitFactory.customPortrait('snow-angel-2-f', "White Wings", false),
        PortraitFactory.customPortrait('snow-angel-3-f', "Pinstripe Wings", false),
        PortraitFactory.customPortrait('snow-angel-salt-f', "Salt", false),
    ]),
    new Breed("ribbon-dancer-dragon", "Ribbon Dancer", DragonType.Dragon, DragonSubType.Western, [Affinity.Light], "f-f", [
        PortraitFactory.customPortrait('ribbon-dancer-f', "Standard", true),
        PortraitFactory.customPortrait('ribbon-dancer-salt-f', "Salt", false),
    ]),
    new Breed("winter-magi-dragon", "Winter Magi Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Magi], "m-m", [
        PortraitFactory.customPortrait('winter-magi-m', "Standard", true),
        PortraitFactory.customPortrait('winter-magi-salt-m', "Salt", false)
    ]),
    new Breed("wrapping-wing-dragon", "Wrapping-Wing", DragonType.Dragon, DragonSubType.Western, [Affinity.Life], "m-m", [
        PortraitFactory.customPortrait('wrapping-wing-m', "Standard", true),
        PortraitFactory.customPortrait('wrapping-wing-salt-m', "Salt", false)
    ]),
    new Breed("solstice-dragon", "Solstice Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Time], "f-f", [
        PortraitFactory.customPortrait('solstice-f', "Standard", true),
        PortraitFactory.customPortrait('solstice-salt-f', "Salt", false),
    ]),
    new Breed("mistletoe-dragon", "Mistletoe Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Life], "f-mf", [
        PortraitFactory.customPortrait('mistletoe-f', "Standard", true),
        PortraitFactory.customPortrait('mistletoe-salt1-f', "Blue Salt", false),
        PortraitFactory.customPortrait('mistletoe-salt2-f', "Gold Salt", false),
    ]),
    new Breed("aegis-dragon", "Aegis Dragon", DragonType.Dragon, DragonSubType.Wingless, [Affinity.Life, Affinity.Ice], "m-m", [
        PortraitFactory.customPortrait('aegis-m', "Standard", true),
        PortraitFactory.customPortrait('aegis-m', "Enraged", false),
        PortraitFactory.customPortrait('aegis-salt1-m', "Black Salt", false),
        PortraitFactory.customPortrait('aegis-salt1-rage-m', "Black Enraged", false),
        PortraitFactory.customPortrait('aegis-salt2-m', "Red Salt", false),
        PortraitFactory.customPortrait('aegis-salt2-rage-m', "Red Enraged", false),
    ]),
    new Breed("snow-dragon", "Snow Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Ice], "m-m", [
        PortraitFactory.customPortrait('snow-m', "Standard", true),
        PortraitFactory.customPortrait('snow-salt1-m', "Gold Salt", false),
        PortraitFactory.customPortrait('snow-salt2-m', "Green Salt", false)
    ]),
    new Breed("garland-dragon", "Garland Dragon", DragonType.Dragon, DragonSubType.Amphiptere, [Affinity.Fire], "f-f", [
        PortraitFactory.customPortrait('garland-f', "Standard", true),
        PortraitFactory.customPortrait('garland-salt1-f', "Pink Salt", false),
        PortraitFactory.customPortrait('garland-salt2-f', "Blue Salt", false)
    ]),
    new Breed("starsinger-dragon", "Starsinger Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Light], "f-f", [
        PortraitFactory.customPortrait('starsinger-f', "Standard", true),
        PortraitFactory.customPortrait('starsinger-salt1-f', "Ochre Salt", false),
        PortraitFactory.customPortrait('starsinger-salt2-f', "Blue Salt", false)
    ]),
    new Breed("wintertide-dragon", "Wintertide Dragon", DragonType.Dragon, DragonSubType.Amphiptere, [Affinity.Life, Affinity.Fire], "m-m", [
        PortraitFactory.customPortrait('wintertide-m', "Standard", true),
        PortraitFactory.customPortrait('wintertide-salt-m', "Salt", false)
    ]),
    //new Breed("vampire-dragon", "Vampire Dragon", "dragon", "mf-mf", PortraitFactory.mfPortraits("vampire")),
    new Breed("pumpkin-dragon", "Pumpkin Dragon", DragonType.Pygmy, DragonSubType.Western, [Affinity.None], "mf-mf", [
        PortraitFactory.customPortrait('pumpkin-u', "Standard", true),
        PortraitFactory.customPortrait('pumpkin-salt-u', "Salt", false)
    ]),
    new Breed("black-marrow-dragon", "Black Marrow Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Death], "mf-mf", PortraitFactory.mfPortraits("black-marrow")),
    new Breed("shadow-walker-dragon", "Shadow Walker Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Magi], "mf-mf", [
        PortraitFactory.customPortrait('shadow-walker-u', "Standard", true),
        PortraitFactory.customPortrait('shadow-walker-salt1-u', "Tan Salt", false),
        PortraitFactory.customPortrait('shadow-walker-salt2-u', "Purple Salt", false)
    ]),
    new Breed("cavern-lurker-dragon", "Cavern Lurker Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Dark], "mf-mf", [
        PortraitFactory.customPortrait('cavern-lurker-f', "Standard ♀", true, ConditionFactory.checkGender(Gender.Female,"Standard ♀")),
        PortraitFactory.customPortrait('cavern-lurker-m', "Standard ♂", true, ConditionFactory.checkGender(Gender.Male,"Standard ♂")),
        PortraitFactory.customPortrait('cavern-lurker-salt-f', "Salt ♀", false, ConditionFactory.checkGender(Gender.Female,"Salt ♀")),
        PortraitFactory.customPortrait('cavern-lurker-salt-m', "Salt ♂", false, ConditionFactory.checkGender(Gender.Male,"Salt ♂"))
    ]),
    new Breed("grave-dragon", "Grave Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Fire], "mf-mf", [
        PortraitFactory.customPortrait('grave-f', "Standard ♀", true, ConditionFactory.checkGender(Gender.Female,"Standard ♀")),
        PortraitFactory.customPortrait('grave-m', "Standard ♂", true, ConditionFactory.checkGender(Gender.Male,"Standard ♂")),
        PortraitFactory.customPortrait('grave-salt-f', "Salt ♀", false, ConditionFactory.checkGender(Gender.Female,"Salt ♀")),
        PortraitFactory.customPortrait('grave-salt-m', "Salt ♂", false, ConditionFactory.checkGender(Gender.Male,"Salt ♂"))
    ]),
    new Breed("desipis-dragon", "Desipis Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Dark, Affinity.Magi], "mf-mf", [
        PortraitFactory.customPortrait('desipis-f', "Standard ♀", true, ConditionFactory.checkGender(Gender.Female,"Standard ♀")),
        PortraitFactory.customPortrait('desipis-m', "Standard ♂", true, ConditionFactory.checkGender(Gender.Male,"Standard ♂")),
        PortraitFactory.customPortrait('desipis-salt1-f', "Turquoise Salt ♀", false, ConditionFactory.checkGender(Gender.Female,"Turquoise Salt ♀")),
        PortraitFactory.customPortrait('desipis-salt1-m', "Turquoise Salt ♂", false, ConditionFactory.checkGender(Gender.Male,"Turquoise Salt ♂")),
        PortraitFactory.customPortrait('desipis-salt2-f', "Green Salt ♀", false, ConditionFactory.checkGender(Gender.Female,"Green Salt ♀")),
        PortraitFactory.customPortrait('desipis-salt2-m', "Green Salt ♂", false, ConditionFactory.checkGender(Gender.Male,"Green Salt ♂")),
    ]),
    new Breed("caligene-dragon", "Caligene Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Death], "mf-mf", [
        PortraitFactory.customPortrait('caligene-f', "Standard ♀", true, ConditionFactory.checkGender(Gender.Female,"Standard ♀")),
        PortraitFactory.customPortrait('caligene-m', "Standard ♂", true, ConditionFactory.checkGender(Gender.Male,"Standard ♂")),
        PortraitFactory.customPortrait('caligene-salt-f', "Salt ♀", false, ConditionFactory.checkGender(Gender.Female,"Salt ♀")),
        PortraitFactory.customPortrait('caligene-salt-m', "Salt ♂", false, ConditionFactory.checkGender(Gender.Male,"Salt ♂"))
    ]),
    new Breed("witchlight-dragon", "Witchlight Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Dark, Affinity.Magi], "mf-mf", [
        PortraitFactory.customPortrait('witchlight-f', "Standard ♀", true, ConditionFactory.checkGender(Gender.Female,"Standard ♀")),
        PortraitFactory.customPortrait('witchlight-m', "Standard ♂", true, ConditionFactory.checkGender(Gender.Male,"Standard ♂")),
        PortraitFactory.customPortrait('witchlight-salt-f', "Salt ♀", false, ConditionFactory.checkGender(Gender.Female,"Salt ♀")),
        PortraitFactory.customPortrait('witchlight-salt-m', "Salt ♂", false, ConditionFactory.checkGender(Gender.Male,"Salt ♂"))
    ]),
    new Breed("omen-wyrm", "Omen Wyrm", DragonType.Dragon, DragonSubType.Wyrm, [Affinity.Fire, Affinity.Dark], "mf-mf", [
        PortraitFactory.customPortrait('omen-f', "Standard ♀", true, ConditionFactory.checkGender(Gender.Female,"Standard ♀")),
        PortraitFactory.customPortrait('omen-m', "Standard ♂", true, ConditionFactory.checkGender(Gender.Male,"Standard ♂")),
        PortraitFactory.customPortrait('omen-salt1-f', "Blue Salt ♀", false, ConditionFactory.checkGender(Gender.Female,"Blue Salt ♀")),
        PortraitFactory.customPortrait('omen-salt1-m', "Blue Salt ♂", false, ConditionFactory.checkGender(Gender.Male,"Blue Salt ♂")),
        PortraitFactory.customPortrait('omen-salt2-f', "Red Salt ♀", false, ConditionFactory.checkGender(Gender.Female,"Red Salt ♀")),
        PortraitFactory.customPortrait('omen-salt2-m', "Red Salt ♂", false, ConditionFactory.checkGender(Gender.Male,"Red Salt ♂")),
    ]),
    new Breed("arcana-dragon", "Arcana Dragon", DragonType.Dragon, DragonSubType.Western, [Affinity.Magi], "mf-mf", [
        PortraitFactory.customPortrait('arcana-f', "Standard ♀", true, ConditionFactory.checkGender(Gender.Female,"Standard ♀")),
        PortraitFactory.customPortrait('arcana-m', "Standard ♂", true, ConditionFactory.checkGender(Gender.Male,"Standard ♂")),
        PortraitFactory.customPortrait('arcana-salt1-f', "Blue Salt ♀", false, ConditionFactory.checkGender(Gender.Female,"Blue Salt ♀")),
        PortraitFactory.customPortrait('arcana-salt1-m', "Blue Salt ♂", false, ConditionFactory.checkGender(Gender.Male,"Blue Salt ♂")),
        PortraitFactory.customPortrait('arcana-salt2-f', "Green Salt ♀", false, ConditionFactory.checkGender(Gender.Female,"Green Salt ♀")),
        PortraitFactory.customPortrait('arcana-salt2-m', "Green Salt ♂", false, ConditionFactory.checkGender(Gender.Male,"Green Salt ♂")),
    ]),
    new Breed("kohraki-dragon", "Kohraki Dragon", DragonType.Dragon, DragonSubType.Wyvern, [Affinity.Air, Affinity.Dark], "mf-mf", [
        PortraitFactory.customPortrait('kohraki-f', "Standard ♀", true, ConditionFactory.checkGender(Gender.Female,"Standard ♀")),
        PortraitFactory.customPortrait('kohraki-m', "Standard ♂", true, ConditionFactory.checkGender(Gender.Male,"Standard ♂")),
        PortraitFactory.customPortrait('kohraki-salt1-f', "Blue Salt ♀", false, ConditionFactory.checkGender(Gender.Female,"Blue Salt ♀")),
        PortraitFactory.customPortrait('kohraki-salt1-m', "Blue Salt ♂", false, ConditionFactory.checkGender(Gender.Male,"Blue Salt ♂")),
        PortraitFactory.customPortrait('kohraki-salt2-f', "White Salt ♀", false, ConditionFactory.checkGender(Gender.Female,"White Salt ♀")),
        PortraitFactory.customPortrait('kohraki-salt2-m', "White Salt ♂", false, ConditionFactory.checkGender(Gender.Male,"White Salt ♂")),
    ]),
]

export default SpecialBreeds;