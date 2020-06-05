import Breed from '../../library/Breed';
import PortraitFactory from '../../utilities/PortraitFactory';
import ConditionFactory from '../../utilities/PortraitConditionFactory';

let SpecialBreeds = [
    new Breed("shimmer-scale-dragon", "Shimmer-scale Dragon", "dragon", "mf-mf", {
        ...PortraitFactory.genericPortrait('shimmer-b-u', "Bronze", true),
        ...PortraitFactory.genericPortrait('shimmer-s-u', "Silver", true),
        ...PortraitFactory.genericPortrait('shimmer-g-u', "Gold", true),
        ...PortraitFactory.genericPortrait('shimmer-salt-u', "Salt", false, ConditionFactory.checkFirstGeneration("Salt"))
    }),
    new Breed("valentine-dragon", "Valentine Dragon", "dragon", "f-f", {
        ...PortraitFactory.genericPortrait('valentine-f', "Standard", true),
        ...PortraitFactory.genericPortrait('valentine-salt1-f', "Purple Salt", false),
        ...PortraitFactory.genericPortrait('valentine-salt2-f', "White Salt", false),
    }),
    new Breed("sweetling-dragon", "Sweetling Dragon", "dragon", "m-m", {
        ...PortraitFactory.genericPortrait('sweetling-m', "Standard", true),
        ...PortraitFactory.genericPortrait('sweetling-alt-m', "Alt", false),
        ...PortraitFactory.genericPortrait('sweetling-salt1-m', "Chocolate Salt", false),
        ...PortraitFactory.genericPortrait('sweetling-salt2-m', "Pink Salt", false),
    }),
    new Breed("rosebud-dragon", "Rosebud Dragon", "dragon", "f-f", {
        ...PortraitFactory.genericPortrait('rosebud-f', "Standard", true),
        ...PortraitFactory.genericPortrait('rosebud-salt1-f', "White Salt", false),
        ...PortraitFactory.genericPortrait('rosebud-salt2-f', "Pink Salt", false),
    }),
    new Breed("heartseeker-dragon", "Heartseeker Dragon", "dragon", "m-m", {
        ...PortraitFactory.genericPortrait('heartseeker-m', "Standard", true),
        ...PortraitFactory.genericPortrait('heartseeker-salt-m', "Salt", false),
    }),
    new Breed("arsani-dragon", "Arsani Dragon", "dragon", "f-f", {
        ...PortraitFactory.genericPortrait('arsani-f', "Standard", true),
        ...PortraitFactory.genericPortrait('arsani-salt1-f', "Grey Salt", false),
        ...PortraitFactory.genericPortrait('arsani-salt2-f', "Blue Salt", false),
    }),
    new Breed("radiant-angel-dragon", "Radiant Angel Dragon", "dragon", "m-m", {
        ...PortraitFactory.genericPortrait('radiant-angel-m', "Standard", true),
        ...PortraitFactory.genericPortrait('radiant-angel-salt1-m', "White Salt", false),
        ...PortraitFactory.genericPortrait('radiant-angel-salt2-m', "Black Salt", false),
    }),
    new Breed("heartstealing-dragon", "Heartstealing Dragon", "dragon", "f-f", {
        ...PortraitFactory.genericPortrait('heartstealing-f', "Standard", true),
        ...PortraitFactory.genericPortrait('heartstealing-salt1-f', "Salt", false),
    }),
    new Breed("mutamore-dragon", "Mutamore Dragon", "dragon", "m-m", {
        ...PortraitFactory.genericPortrait('mutamore-m', "Standard", true),
        ...PortraitFactory.genericPortrait('mutamore-salt1-m', "Black Salt", false),
        ...PortraitFactory.genericPortrait('mutamore-salt2-m', "Red Salt", false),
    }),
    new Breed("soulstone-dragon", "Soulstone Dragon", "dragon", "f-f", {
        ...PortraitFactory.genericPortrait('soulstone-f', "Standard", true),
    }),
    new Breed("floral-crowned-dragon", "Floral-Crowned Dragon", "dragon", "m-m", {
        ...PortraitFactory.genericPortrait('floral-crowned-m', "Standard", true),
        ...PortraitFactory.genericPortrait('floral-crowned-salt-m', "Salt", false),
    }),
    new Breed("sakuhana-wyvern", "Sakuhana Wyvern", "dragon", "f-f", {
        ...PortraitFactory.genericPortrait('sakuhana-f', "Standard", true),
        ...PortraitFactory.genericPortrait('sakuhana-salt-f', "Salt", false),
    }),
    new Breed("erador-lindwyrm", "Erador Lindwyrm", "dragon", "m-m", {
        ...PortraitFactory.genericPortrait('erador-m', "Standard", true),
        ...PortraitFactory.genericPortrait('erador-salt1-m', "Blue Salt", false),
        ...PortraitFactory.genericPortrait('erador-salt2-m', "Green Salt", false),
    }),
    
    new Breed("holly-dragon", "Holly Dragon", "dragon", "m-mf", {
        ...PortraitFactory.genericPortrait('holly-u', "Standard", true),
    }),
    new Breed("yulebuck-dragon", "Yulebuck Dragon", "dragon", "m-m", {
        ...PortraitFactory.genericPortrait('yulebuck-m', "Standard", true),
        ...PortraitFactory.genericPortrait('yulebuck-salt-m', "Salt", false)
    }),
    new Breed("snow-angel-dragon", "Snow Angel Dragon", "dragon", "f-f", {
        ...PortraitFactory.genericPortrait('snow-angel-1-f', "Gold Wings", true),
        ...PortraitFactory.genericPortrait('snow-angel-2-f', "White Wings", false),
        ...PortraitFactory.genericPortrait('snow-angel-3-f', "Pinstripe Wings", false),
        ...PortraitFactory.genericPortrait('snow-angel-salt-f', "Salt", false),
    }),
    new Breed("ribbon-dancer-dragon", "Ribbon Dancer Dragon", "dragon", "f-f", {
        ...PortraitFactory.genericPortrait('ribbon-dancer-f', "Standard", true),
        ...PortraitFactory.genericPortrait('ribbon-dancer-salt-f', "Salt", false),
    }),
    new Breed("winter-magi-dragon", "Winter Magi Dragon", "dragon", "m-m", {
        ...PortraitFactory.genericPortrait('winter-magi-m', "Standard", true),
        ...PortraitFactory.genericPortrait('winter-magi-salt-m', "Salt", false)
    }),
    new Breed("wrapping-wing-dragon", "Wrapping-Wing Dragon", "dragon", "m-m", {
        ...PortraitFactory.genericPortrait('wrapping-wing-m', "Standard", true),
        ...PortraitFactory.genericPortrait('wrapping-wing-salt-m', "Salt", false)
    }),
    new Breed("solstice-dragon", "Solstice Dragon", "dragon", "f-f", {
        ...PortraitFactory.genericPortrait('solstice-f', "Standard", true),
        ...PortraitFactory.genericPortrait('solstice-salt-f', "Salt", false),
    }),
    new Breed("mistletoe-dragon", "Mistletoe Dragon", "dragon", "f-mf", {
        ...PortraitFactory.genericPortrait('mistletoe-f', "Standard", true),
        ...PortraitFactory.genericPortrait('mistletoe-salt1-f', "Blue Salt", false),
        ...PortraitFactory.genericPortrait('mistletoe-salt2-f', "Gold Salt", false),
    }),
    new Breed("aegis-dragon", "Aegis Dragon", "dragon", "m-m", {
        ...PortraitFactory.genericPortrait('aegis-m', "Standard", true),
        ...PortraitFactory.genericPortrait('aegis-m', "Enraged", false),
        ...PortraitFactory.genericPortrait('aegis-salt1-m', "Black Salt", false),
        ...PortraitFactory.genericPortrait('aegis-salt1-rage-m', "Black Enraged", false),
        ...PortraitFactory.genericPortrait('aegis-salt2-m', "Red Salt", false),
        ...PortraitFactory.genericPortrait('aegis-salt2-rage-m', "Red Enraged", false),
    }),
    new Breed("snow-dragon", "Snow Dragon", "dragon", "m-m", {
        ...PortraitFactory.genericPortrait('snow-m', "Standard", true),
        ...PortraitFactory.genericPortrait('snow-salt1-m', "Gold Salt", false),
        ...PortraitFactory.genericPortrait('snow-salt2-m', "Green Salt", false)
    }),
    new Breed("garland-dragon", "Garland Dragon", "dragon", "f-f", {
        ...PortraitFactory.genericPortrait('garland-f', "Standard", true),
        ...PortraitFactory.genericPortrait('garland-salt1-f', "Pink Salt", false),
        ...PortraitFactory.genericPortrait('garland-salt2-f', "Blue Salt", false)
    }),
    new Breed("starsinger-dragon", "Starsinger Dragon", "dragon", "f-f", {
        ...PortraitFactory.genericPortrait('starsinger-f', "Standard", true),
        ...PortraitFactory.genericPortrait('starsinger-salt1-f', "Ochre Salt", false),
        ...PortraitFactory.genericPortrait('starsinger-salt2-f', "Blue Salt", false)
    }),
    new Breed("wintertide-dragon", "Wintertide Dragon", "dragon", "m-m", {
        ...PortraitFactory.genericPortrait('wintertide-m', "Standard", true),
        ...PortraitFactory.genericPortrait('wintertide-salt-m', "Salt", false)
    }),

    new Breed("vampire-dragon", "Vampire Dragon", "dragon", "mf-mf", PortraitFactory.mfPortraits("vampire")),
    new Breed("pumpkin-dragon", "Pumpkin Dragon", "pygmy", "mf-mf", {
        ...PortraitFactory.genericPortrait('pumpkin-u', "Standard", true),
        ...PortraitFactory.genericPortrait('pumpkin-salt-u', "Salt", false)
    }),
    new Breed("black-marrow-dragon", "Black Marrow Dragon", "dragon", "mf-mf", PortraitFactory.mfPortraits("black-marrow")),
    new Breed("shadow-walker-dragon", "Shadow Walker Dragon", "dragon", "mf-mf", {
        ...PortraitFactory.genericPortrait('shadow-walker-u', "Standard", true),
        ...PortraitFactory.genericPortrait('shadow-walker-salt1-u', "Tan Salt", false),
        ...PortraitFactory.genericPortrait('shadow-walker-salt2-u', "Purple Salt", false)
    }),
    new Breed("cavern-lurker-dragon", "Cavern Lurker Dragon", "dragon", "mf-mf", {
        ...PortraitFactory.genericPortrait('cavern-lurker-f', "Standard ♀", true, ConditionFactory.checkGender("Female","Standard ♀")),
        ...PortraitFactory.genericPortrait('cavern-lurker-m', "Standard ♂", true, ConditionFactory.checkGender("Male","Standard ♂")),
        ...PortraitFactory.genericPortrait('cavern-lurker-salt-f', "Salt ♀", false, ConditionFactory.checkGender("Female")),
        ...PortraitFactory.genericPortrait('cavern-lurker-salt-m', "Salt ♂", false, ConditionFactory.checkGender("Male"))
    }),
    new Breed("grave-dragon", "Grave Dragon", "dragon", "mf-mf", {
        ...PortraitFactory.genericPortrait('grave-f', "Standard ♀", true, ConditionFactory.checkGender("Female","Standard ♀")),
        ...PortraitFactory.genericPortrait('grave-m', "Standard ♂", true, ConditionFactory.checkGender("Male","Standard ♂")),
        ...PortraitFactory.genericPortrait('grave-salt-f', "Salt ♀", false, ConditionFactory.checkGender("Female")),
        ...PortraitFactory.genericPortrait('grave-salt-m', "Salt ♂", false, ConditionFactory.checkGender("Male"))
    }),
    new Breed("desipis-dragon", "Desipis Dragon", "dragon", "mf-mf", {
        ...PortraitFactory.genericPortrait('desipis-f', "Standard ♀", true, ConditionFactory.checkGender("Female","Standard ♀")),
        ...PortraitFactory.genericPortrait('desipis-m', "Standard ♂", true, ConditionFactory.checkGender("Male","Standard ♂")),
        ...PortraitFactory.genericPortrait('desipis-salt1-f', "Turquoise Salt ♀", false, ConditionFactory.checkGender("Female","Turquoise Salt ♀")),
        ...PortraitFactory.genericPortrait('desipis-salt1-m', "Turquoise Salt ♂", false, ConditionFactory.checkGender("Male","Turquoise Salt ♂")),
        ...PortraitFactory.genericPortrait('desipis-salt2-f', "Green Salt ♀", false, ConditionFactory.checkGender("Female","Green Salt ♀")),
        ...PortraitFactory.genericPortrait('desipis-salt2-m', "Green Salt ♂", false, ConditionFactory.checkGender("Male","Green Salt ♂")),
    }),
    new Breed("caligene-dragon", "Caligene Dragon", "dragon", "mf-mf", {
        ...PortraitFactory.genericPortrait('caligene-f', "Standard ♀", true, ConditionFactory.checkGender("Female","Standard ♀")),
        ...PortraitFactory.genericPortrait('caligene-m', "Standard ♂", true, ConditionFactory.checkGender("Male","Standard ♂")),
        ...PortraitFactory.genericPortrait('caligene-salt-f', "Salt ♀", false, ConditionFactory.checkGender("Female","Salt ♀")),
        ...PortraitFactory.genericPortrait('caligene-salt-m', "Salt ♂", false, ConditionFactory.checkGender("Male","Salt ♂"))
    }),
    new Breed("witchlight-dragon", "Witchlight Dragon", "dragon", "mf-mf", {
        ...PortraitFactory.genericPortrait('witchlight-f', "Standard ♀", true, ConditionFactory.checkGender("Female","Standard ♀")),
        ...PortraitFactory.genericPortrait('witchlight-m', "Standard ♂", true, ConditionFactory.checkGender("Male","Standard ♂")),
        ...PortraitFactory.genericPortrait('witchlight-salt-f', "Salt ♀", false, ConditionFactory.checkGender("Female","Salt ♀")),
        ...PortraitFactory.genericPortrait('witchlight-salt-m', "Salt ♂", false, ConditionFactory.checkGender("Male","Salt ♂"))
    }),
    new Breed("omen-wyrm", "Omen Wyrm", "dragon", "mf-mf", {
        ...PortraitFactory.genericPortrait('omen-f', "Standard ♀", true, ConditionFactory.checkGender("Female","Standard ♀")),
        ...PortraitFactory.genericPortrait('omen-m', "Standard ♂", true, ConditionFactory.checkGender("Male","Standard ♂")),
        ...PortraitFactory.genericPortrait('omen-salt1-f', "Blue Salt ♀", false, ConditionFactory.checkGender("Female","Blue Salt ♀")),
        ...PortraitFactory.genericPortrait('omen-salt1-m', "Blue Salt ♂", false, ConditionFactory.checkGender("Male","Blue Salt ♂")),
        ...PortraitFactory.genericPortrait('omen-salt2-f', "Red Salt ♀", false, ConditionFactory.checkGender("Female","Red Salt ♀")),
        ...PortraitFactory.genericPortrait('omen-salt2-m', "Red Salt ♂", false, ConditionFactory.checkGender("Male","Red Salt ♂")),
    }),
    new Breed("arcana-dragon", "Arcana Dragon", "dragon", "mf-mf", {
        ...PortraitFactory.genericPortrait('arcana-f', "Standard ♀", true, ConditionFactory.checkGender("Female","Standard ♀")),
        ...PortraitFactory.genericPortrait('arcana-m', "Standard ♂", true, ConditionFactory.checkGender("Male","Standard ♂")),
        ...PortraitFactory.genericPortrait('arcana-salt1-f', "Blue Salt ♀", false, ConditionFactory.checkGender("Female","Blue Salt ♀")),
        ...PortraitFactory.genericPortrait('arcana-salt1-m', "Blue Salt ♂", false, ConditionFactory.checkGender("Male","Blue Salt ♂")),
        ...PortraitFactory.genericPortrait('arcana-salt2-f', "Green Salt ♀", false, ConditionFactory.checkGender("Female","Green Salt ♀")),
        ...PortraitFactory.genericPortrait('arcana-salt2-m', "Green Salt ♂", false, ConditionFactory.checkGender("Male","Green Salt ♂")),
    }),
    new Breed("kohraki-dragon", "Kohraki Dragon", "dragon", "mf-mf", {
        ...PortraitFactory.genericPortrait('kohraki-f', "Standard ♀", true, ConditionFactory.checkGender("Female","Standard ♀")),
        ...PortraitFactory.genericPortrait('kohraki-m', "Standard ♂", true, ConditionFactory.checkGender("Male","Standard ♂")),
        ...PortraitFactory.genericPortrait('kohraki-salt1-f', "Blue Salt ♀", false, ConditionFactory.checkGender("Female","Blue Salt ♀")),
        ...PortraitFactory.genericPortrait('kohraki-salt1-m', "Blue Salt ♂", false, ConditionFactory.checkGender("Male","Blue Salt ♂")),
        ...PortraitFactory.genericPortrait('kohraki-salt2-f', "White Salt ♀", false, ConditionFactory.checkGender("Female","White Salt ♀")),
        ...PortraitFactory.genericPortrait('kohraki-salt2-m', "White Salt ♂", false, ConditionFactory.checkGender("Male","White Salt ♂")),
    }),
]

export default SpecialBreeds;