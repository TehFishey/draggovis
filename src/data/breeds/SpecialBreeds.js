import BreedModel from './BreedModel';
import PortraitModel from '../portraits/PortraitModel';
import PortraitFactory from '../portraits/PortraitFactory';
import ConditionFactory from '../portraits/PortraitConditionFactory';

let SpecialBreeds = [
    new BreedModel("shimmer-scale-dragon", "Shimmer-scale Dragon", "dragon", "mf-mf", {
        'shimmer-b-u' : new PortraitModel('shimmer-b-u', "Bronze", true),
        'shimmer-s-u' : new PortraitModel('shimmer-s-u', "Silver", true),
        'shimmer-g-u' : new PortraitModel('shimmer-g-u', "Gold", true),
        'shimmer-salt-u' : new PortraitModel('shimmer-salt-u', "Salt", false)
    }),
    new BreedModel("valentine-dragon", "Valentine Dragon", "dragon", "f-f", {
        'valentine-f' : new PortraitModel('valentine-f', "Normal", true),
        'valentine-salt1-f' : new PortraitModel('valentine-salt1-f', "Purple Salt", false),
        'valentine-salt2-f' : new PortraitModel('valentine-salt2-f', "White Salt", false),
    }),
    new BreedModel("sweetling-dragon", "Sweetling Dragon", "dragon", "m-m", {
        'sweetling-m' : new PortraitModel('sweetling-m', "Normal", true),
        'sweetling-alt-m' : new PortraitModel('sweetling-alt-m', "Alt", false),
        'sweetling-salt1-m' : new PortraitModel('sweetling-salt1-m', "Chocolate Salt", false),
        'sweetling-salt2-m' : new PortraitModel('sweetling-salt2-m', "Pink Salt", false),
    }),
    new BreedModel("rosebud-dragon", "Rosebud Dragon", "dragon", "f-f", {
        'rosebud-f' : new PortraitModel('rosebud-f', "Normal", true),
        'rosebud-salt1-f' : new PortraitModel('rosebud-salt1-f', "White Salt", false),
        'rosebud-salt2-f' : new PortraitModel('rosebud-salt2-f', "Pink Salt", false),
    }),
    new BreedModel("heartseeker-dragon", "Heartseeker Dragon", "dragon", "m-m", {
        'heartseeker-m' : new PortraitModel('heartseeker-m', "Normal", true),
        'heartseeker-salt-m' : new PortraitModel('heartseeker-salt-m', "Salt", false),
    }),
    new BreedModel("arsani-dragon", "Arsani Dragon", "dragon", "f-f", {
        'arsani-f' : new PortraitModel('arsani-f', "Normal", true),
        'arsani-salt1-f' : new PortraitModel('arsani-salt1-f', "Grey Salt", false),
        'arsani-salt2-f' : new PortraitModel('arsani-salt2-f', "Blue Salt", false),
    }),
    new BreedModel("radiant-angel-dragon", "Radiant Angel Dragon", "dragon", "m-m", {
        'radiant-angel-m' : new PortraitModel('radiant-angel-m', "Normal", true),
        'radiant-angel-salt1-m' : new PortraitModel('radiant-angel-salt1-m', "White Salt", false),
        'radiant-angel-salt2-m' : new PortraitModel('radiant-angel-salt2-m', "Black Salt", false),
    }),
    new BreedModel("heartstealing-dragon", "Heartstealing Dragon", "dragon", "f-f", {
        'heartstealing-f' : new PortraitModel('heartstealing-f', "Normal", true),
        'heartstealing-salt-f' : new PortraitModel('heartstealing-salt1-f', "Salt", false),
    }),
    new BreedModel("mutamore-dragon", "Mutamore Dragon", "dragon", "m-m", {
        'mutamore-m' : new PortraitModel('mutamore-m', "Normal", true),
        'mutamore-salt1-m' : new PortraitModel('mutamore-salt1-m', "Black Salt", false),
        'mutamore-salt2-m' : new PortraitModel('mutamore-salt2-m', "Red Salt", false),
    }),
    new BreedModel("soulstone-dragon", "Soulstone Dragon", "dragon", "f-f", {
        'soulstone-f' : new PortraitModel('soulstone-f', "Normal", true),
    }),
    new BreedModel("floral-crowned-dragon", "Floral-Crowned Dragon", "dragon", "m-m", {
        'floral-crowned-m' : new PortraitModel('mutamore-m', "Normal", true),
        'floral-crowned-salt-m' : new PortraitModel('mutamore-salt1-m', "Salt", false),
    }),
    new BreedModel("sakuhana-wyvern", "Sakuhana Wyvern", "dragon", "f-f", {
        'sakuhana-f' : new PortraitModel('sakuhana-f', "Normal", true),
        'sakuhana-salt-f' : new PortraitModel('sakuhana-salt-f', "Salt", false),
    }),
    new BreedModel("erador-lindwyrm", "Erador Lindwyrm", "dragon", "m-m", {
        'erador-m' : new PortraitModel('erador-m', "Normal", true),
        'erador-salt1-m' : new PortraitModel('erador-salt1-m', "Blue Salt", false),
        'erador-salt2-m' : new PortraitModel('erador-salt2-m', "Green Salt", false),
    }),
    
    new BreedModel("holly-dragon", "Holly Dragon", "dragon", "m-mf", {
        'holly-u' : new PortraitModel('holly-u', "Normal", true),
    }),
    new BreedModel("yulebuck-dragon", "Yulebuck Dragon", "dragon", "m-m", {
        'yulebuck-m' : new PortraitModel('yulebuck-m', "Normal", true),
        'yulebuck-salt-m' : new PortraitModel('yulebuck-salt-m', "Salt", false)
    }),
    new BreedModel("snow-angel-dragon", "Snow Angel Dragon", "dragon", "f-f", {
        'snow-angel-1-f' : new PortraitModel('snow-angel-1-f', "Gold Wings", true),
        'snow-angel-2-f' : new PortraitModel('snow-angel-2-f', "White Wings", false),
        'snow-angel-3-f' : new PortraitModel('snow-angel-3-f', "Pinstripe Wings", false),
        'snow-angel-salt-f' : new PortraitModel('snow-angel-salt-f', "Salt", false),
    }),
    new BreedModel("ribbon-dancer-dragon", "Ribbon Dancer Dragon", "dragon", "f-f", {
        'ribbon-dancer-f' : new PortraitModel('ribbon-dancer-f', "Normal", true),
        'ribbon-dancer-salt-f' : new PortraitModel('ribbon-dancer-salt-f', "Salt", false),
    }),
    new BreedModel("winter-magi-dragon", "Winter Magi Dragon", "dragon", "m-m", {
        'winter-magi-m' : new PortraitModel('winter-magi-m', "Normal", true),
        'winter-magi-salt-m' : new PortraitModel('winter-magi-salt-m', "Salt", false)
    }),
    new BreedModel("wrapping-wing-dragon", "Wrapping-Wing Dragon", "dragon", "m-m", {
        'wrapping-wing-m' : new PortraitModel('wrapping-wing-m', "Normal", true),
        'wrapping-wing-salt-m' : new PortraitModel('wrapping-wing-salt-m', "Salt", false)
    }),
    new BreedModel("solstice-dragon", "Solstice Dragon", "dragon", "f-f", {
        'solstice-f' : new PortraitModel('solstice-f', "Normal", true),
        'solstice-salt-f' : new PortraitModel('solstice-salt-f', "Salt", false),
    }),
    new BreedModel("mistletoe-dragon", "Mistletoe Dragon", "dragon", "f-mf", {
        'mistletoe-f' : new PortraitModel('mistletoe-f', "Normal", true),
        'mistletoe-salt1-f' : new PortraitModel('mistletoe-salt1-f', "Blue Salt", false),
        'mistletoe-salt2-f' : new PortraitModel('mistletoe-salt2-f', "Gold Salt", false),
    }),
    new BreedModel("aegis-dragon", "Aegis Dragon", "dragon", "m-m", {
        'aegis-m' : new PortraitModel('aegis-m', "Normal", true),
        'aegis-rage-m' : new PortraitModel('aegis-m', "Enraged", false),
        'aegis-salt1-m' : new PortraitModel('aegis-salt1-m', "Black Salt", false),
        'aegis-salt1-rage-m' : new PortraitModel('aegis-salt1-rage-m', "Black Enraged", false),
        'aegis-salt2-m' : new PortraitModel('aegis-salt2-m', "Red Salt", false),
        'aegis-salt2-rage-m' : new PortraitModel('aegis-salt2-rage-m', "Red Enraged", false),
    }),
    new BreedModel("snow-dragon", "Snow Dragon", "dragon", "m-m", {
        'snow-m' : new PortraitModel('snow-m', "Normal", true),
        'snow-salt1-m' : new PortraitModel('snow-salt1-m', "Gold Salt", false),
        'snow-salt2-m' : new PortraitModel('snow-salt2-m', "Green Salt", false)
    }),
    new BreedModel("garland-dragon", "Garland Dragon", "dragon", "f-f", {
        'garland-f' : new PortraitModel('garland-f', "Normal", true),
        'garland-salt1-f' : new PortraitModel('garland-salt1-f', "Pink Salt", false),
        'garland-salt2-f' : new PortraitModel('garland-salt2-f', "Blue Salt", false)
    }),
    new BreedModel("starsinger-dragon", "Starsinger Dragon", "dragon", "f-f", {
        'starsinger-f' : new PortraitModel('starsinger-f', "Normal", true),
        'starsinger-salt1-f' : new PortraitModel('starsinger-salt1-f', "Ochre Salt", false),
        'starsinger-salt2-f' : new PortraitModel('starsinger-salt2-f', "Blue Salt", false)
    }),
    new BreedModel("wintertide-dragon", "Wintertide Dragon", "dragon", "m-m", {
        'wintertide-m' : new PortraitModel('wintertide-m', "Normal", true),
        'wintertide-salt-m' : new PortraitModel('wintertide-salt-m', "Salt", false)
    }),

    new BreedModel("vampire-dragon", "Vampire Dragon", "dragon", "mf-mf", PortraitFactory.mfPortraits("vampire")),
    new BreedModel("pumpkin-dragon", "Pumpkin Dragon", "pygmy", "mf-mf", {
        'pumpkin-u' : new PortraitModel('pumpkin-u', "Normal", true),
        'pumpkin-salt-u' : new PortraitModel('pumpkin-salt-u', "Salt", false)
    }),
    new BreedModel("black-marrow-dragon", "Black Marrow Dragon", "dragon", "mf-mf", PortraitFactory.mfPortraits("black-marrow")),
    new BreedModel("shadow-walker-dragon", "Shadow Walker Dragon", "dragon", "mf-mf", {
        'shadow-walker-u' : new PortraitModel('shadow-walker-u', "Normal", true),
        'shadow-walker-salt1-u' : new PortraitModel('shadow-walker-salt1-u', "Tan Salt", false),
        'shadow-walker-salt2-u' : new PortraitModel('shadow-walker-salt2-u', "Purple Salt", false)
    }),
    new BreedModel("cavern-lurker-dragon", "Cavern Lurker Dragon", "dragon", "mf-mf", {
        'cavern-lurker-f' : new PortraitModel('cavern-lurker-f', "Normal", true, ConditionFactory.genderCheck("Female")),
        'cavern-lurker-m' : new PortraitModel('cavern-lurker-m', "Normal", true, ConditionFactory.genderCheck("Male")),
        'cavern-lurker-salt-f' : new PortraitModel('cavern-lurker-salt-f', "Salt", false, ConditionFactory.genderCheck("Female")),
        'cavern-lurker-salt-m' : new PortraitModel('cavern-lurker-salt-m', "Salt", false, ConditionFactory.genderCheck("Male"))
    }),
    new BreedModel("grave-dragon", "Grave Dragon", "dragon", "mf-mf", {
        'grave-f' : new PortraitModel('grave-f', "Normal", true, ConditionFactory.genderCheck("Female")),
        'grave-m' : new PortraitModel('grave-m', "Normal", true, ConditionFactory.genderCheck("Male")),
        'grave-salt-f' : new PortraitModel('grave-salt-f', "Salt", false, ConditionFactory.genderCheck("Female")),
        'grave-salt-m' : new PortraitModel('grave-salt-m', "Salt", false, ConditionFactory.genderCheck("Male"))
    }),
    new BreedModel("desipis-dragon", "Desipis Dragon", "dragon", "mf-mf", {
        'desipis-f' : new PortraitModel('desipis-f', "Normal", true, ConditionFactory.genderCheck("Female")),
        'desipis-m' : new PortraitModel('desipis-m', "Normal", true, ConditionFactory.genderCheck("Male")),
        'desipis-salt1-f' : new PortraitModel('desipis-salt1-f', "Turquoise Salt", false, ConditionFactory.genderCheck("Female")),
        'desipis-salt1-m' : new PortraitModel('desipis-salt1-m', "Turquoise Salt", false, ConditionFactory.genderCheck("Male")),
        'desipis-salt2-f' : new PortraitModel('desipis-salt2-f', "Green Salt", false, ConditionFactory.genderCheck("Female")),
        'desipis-salt2-m' : new PortraitModel('desipis-salt2-m', "Green Salt", false, ConditionFactory.genderCheck("Male")),
    }),
    new BreedModel("caligene-dragon", "Caligene Dragon", "dragon", "mf-mf", {
        'caligene-f' : new PortraitModel('caligene-f', "Normal", true, ConditionFactory.genderCheck("Female")),
        'caligene-m' : new PortraitModel('caligene-m', "Normal", true, ConditionFactory.genderCheck("Male")),
        'caligene-salt-f' : new PortraitModel('caligene-salt-f', "Salt", false, ConditionFactory.genderCheck("Female")),
        'caligene-salt-m' : new PortraitModel('caligene-salt-m', "Salt", false, ConditionFactory.genderCheck("Male"))
    }),
    new BreedModel("witchlight-dragon", "Witchlight Dragon", "dragon", "mf-mf", {
        'witchlight-f' : new PortraitModel('witchlight-f', "Normal", true, ConditionFactory.genderCheck("Female")),
        'witchlight-m' : new PortraitModel('witchlight-m', "Normal", true, ConditionFactory.genderCheck("Male")),
        'witchlight-salt-f' : new PortraitModel('witchlight-salt-f', "Salt", false, ConditionFactory.genderCheck("Female")),
        'witchlight-salt-m' : new PortraitModel('witchlight-salt-m', "Salt", false, ConditionFactory.genderCheck("Male"))
    }),
    new BreedModel("omen-wyrm", "Omen Wyrm", "dragon", "mf-mf", {
        'omen-f' : new PortraitModel('omen-f', "Normal", true, ConditionFactory.genderCheck("Female")),
        'omen-m' : new PortraitModel('omen-m', "Normal", true, ConditionFactory.genderCheck("Male")),
        'omen-salt1-f' : new PortraitModel('omen-salt1-f', "Blue Salt", false, ConditionFactory.genderCheck("Female")),
        'omen-salt1-m' : new PortraitModel('omen-salt1-m', "Blue Salt", false, ConditionFactory.genderCheck("Male")),
        'omen-salt2-f' : new PortraitModel('omen-salt2-f', "Red Salt", false, ConditionFactory.genderCheck("Female")),
        'omen-salt2-m' : new PortraitModel('omen-salt2-m', "Red Salt", false, ConditionFactory.genderCheck("Male")),
    }),
    new BreedModel("arcana-dragon", "Arcana Dragon", "dragon", "mf-mf", {
        'arcana-f' : new PortraitModel('arcana-f', "Normal", true, ConditionFactory.genderCheck("Female")),
        'arcana-m' : new PortraitModel('arcana-m', "Normal", true, ConditionFactory.genderCheck("Male")),
        'arcana-salt1-f' : new PortraitModel('arcana-salt1-f', "Blue Salt", false, ConditionFactory.genderCheck("Female")),
        'arcana-salt1-m' : new PortraitModel('arcana-salt1-m', "Blue Salt", false, ConditionFactory.genderCheck("Male")),
        'arcana-salt2-f' : new PortraitModel('arcana-salt2-f', "Green Salt", false, ConditionFactory.genderCheck("Female")),
        'arcana-salt2-m' : new PortraitModel('arcana-salt2-m', "Green Salt", false, ConditionFactory.genderCheck("Male")),
    }),
    new BreedModel("kohraki-dragon", "Kohraki Dragon", "dragon", "mf-mf", {
        'kohraki-f' : new PortraitModel('kohraki-f', "Normal", true, ConditionFactory.genderCheck("Female")),
        'kohraki-m' : new PortraitModel('kohraki-m', "Normal", true, ConditionFactory.genderCheck("Male")),
        'kohraki-salt1-f' : new PortraitModel('kohraki-salt1-f', "Blue Salt", false, ConditionFactory.genderCheck("Female")),
        'kohraki-salt1-m' : new PortraitModel('kohraki-salt1-m', "Blue Salt", false, ConditionFactory.genderCheck("Male")),
        'kohraki-salt2-f' : new PortraitModel('kohraki-salt2-f', "White Salt", false, ConditionFactory.genderCheck("Female")),
        'kohraki-salt2-m' : new PortraitModel('kohraki-salt2-m', "White Salt", false, ConditionFactory.genderCheck("Male")),
    }),
]

export default SpecialBreeds;