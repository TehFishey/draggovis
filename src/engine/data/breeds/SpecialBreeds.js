import Breed from '../../library/Breed';
import Portrait from '../../library/Portrait';
import PortraitFactory from '../../utilities/PortraitFactory';
import ConditionFactory from '../../utilities/PortraitConditionFactory';

let SpecialBreeds = [
    new Breed("shimmer-scale-dragon", "Shimmer-scale Dragon", "dragon", "mf-mf", {
        'shimmer-b-u' : new Portrait('shimmer-b-u', "Bronze", true),
        'shimmer-s-u' : new Portrait('shimmer-s-u', "Silver", true),
        'shimmer-g-u' : new Portrait('shimmer-g-u', "Gold", true),
        'shimmer-salt-u' : new Portrait('shimmer-salt-u', "Salt", false)
    }),
    new Breed("valentine-dragon", "Valentine Dragon", "dragon", "f-f", {
        'valentine-f' : new Portrait('valentine-f', "Standard", true),
        'valentine-salt1-f' : new Portrait('valentine-salt1-f', "Purple Salt", false),
        'valentine-salt2-f' : new Portrait('valentine-salt2-f', "White Salt", false),
    }),
    new Breed("sweetling-dragon", "Sweetling Dragon", "dragon", "m-m", {
        'sweetling-m' : new Portrait('sweetling-m', "Standard", true),
        'sweetling-alt-m' : new Portrait('sweetling-alt-m', "Alt", false),
        'sweetling-salt1-m' : new Portrait('sweetling-salt1-m', "Chocolate Salt", false),
        'sweetling-salt2-m' : new Portrait('sweetling-salt2-m', "Pink Salt", false),
    }),
    new Breed("rosebud-dragon", "Rosebud Dragon", "dragon", "f-f", {
        'rosebud-f' : new Portrait('rosebud-f', "Standard", true),
        'rosebud-salt1-f' : new Portrait('rosebud-salt1-f', "White Salt", false),
        'rosebud-salt2-f' : new Portrait('rosebud-salt2-f', "Pink Salt", false),
    }),
    new Breed("heartseeker-dragon", "Heartseeker Dragon", "dragon", "m-m", {
        'heartseeker-m' : new Portrait('heartseeker-m', "Standard", true),
        'heartseeker-salt-m' : new Portrait('heartseeker-salt-m', "Salt", false),
    }),
    new Breed("arsani-dragon", "Arsani Dragon", "dragon", "f-f", {
        'arsani-f' : new Portrait('arsani-f', "Standard", true),
        'arsani-salt1-f' : new Portrait('arsani-salt1-f', "Grey Salt", false),
        'arsani-salt2-f' : new Portrait('arsani-salt2-f', "Blue Salt", false),
    }),
    new Breed("radiant-angel-dragon", "Radiant Angel Dragon", "dragon", "m-m", {
        'radiant-angel-m' : new Portrait('radiant-angel-m', "Standard", true),
        'radiant-angel-salt1-m' : new Portrait('radiant-angel-salt1-m', "White Salt", false),
        'radiant-angel-salt2-m' : new Portrait('radiant-angel-salt2-m', "Black Salt", false),
    }),
    new Breed("heartstealing-dragon", "Heartstealing Dragon", "dragon", "f-f", {
        'heartstealing-f' : new Portrait('heartstealing-f', "Standard", true),
        'heartstealing-salt-f' : new Portrait('heartstealing-salt1-f', "Salt", false),
    }),
    new Breed("mutamore-dragon", "Mutamore Dragon", "dragon", "m-m", {
        'mutamore-m' : new Portrait('mutamore-m', "Standard", true),
        'mutamore-salt1-m' : new Portrait('mutamore-salt1-m', "Black Salt", false),
        'mutamore-salt2-m' : new Portrait('mutamore-salt2-m', "Red Salt", false),
    }),
    new Breed("soulstone-dragon", "Soulstone Dragon", "dragon", "f-f", {
        'soulstone-f' : new Portrait('soulstone-f', "Standard", true),
    }),
    new Breed("floral-crowned-dragon", "Floral-Crowned Dragon", "dragon", "m-m", {
        'floral-crowned-m' : new Portrait('floral-crowned-m', "Standard", true),
        'floral-crowned-salt-m' : new Portrait('floral-crowned-salt-m', "Salt", false),
    }),
    new Breed("sakuhana-wyvern", "Sakuhana Wyvern", "dragon", "f-f", {
        'sakuhana-f' : new Portrait('sakuhana-f', "Standard", true),
        'sakuhana-salt-f' : new Portrait('sakuhana-salt-f', "Salt", false),
    }),
    new Breed("erador-lindwyrm", "Erador Lindwyrm", "dragon", "m-m", {
        'erador-m' : new Portrait('erador-m', "Standard", true),
        'erador-salt1-m' : new Portrait('erador-salt1-m', "Blue Salt", false),
        'erador-salt2-m' : new Portrait('erador-salt2-m', "Green Salt", false),
    }),
    
    new Breed("holly-dragon", "Holly Dragon", "dragon", "m-mf", {
        'holly-u' : new Portrait('holly-u', "Standard", true),
    }),
    new Breed("yulebuck-dragon", "Yulebuck Dragon", "dragon", "m-m", {
        'yulebuck-m' : new Portrait('yulebuck-m', "Standard", true),
        'yulebuck-salt-m' : new Portrait('yulebuck-salt-m', "Salt", false)
    }),
    new Breed("snow-angel-dragon", "Snow Angel Dragon", "dragon", "f-f", {
        'snow-angel-1-f' : new Portrait('snow-angel-1-f', "Gold Wings", true),
        'snow-angel-2-f' : new Portrait('snow-angel-2-f', "White Wings", false),
        'snow-angel-3-f' : new Portrait('snow-angel-3-f', "Pinstripe Wings", false),
        'snow-angel-salt-f' : new Portrait('snow-angel-salt-f', "Salt", false),
    }),
    new Breed("ribbon-dancer-dragon", "Ribbon Dancer Dragon", "dragon", "f-f", {
        'ribbon-dancer-f' : new Portrait('ribbon-dancer-f', "Standard", true),
        'ribbon-dancer-salt-f' : new Portrait('ribbon-dancer-salt-f', "Salt", false),
    }),
    new Breed("winter-magi-dragon", "Winter Magi Dragon", "dragon", "m-m", {
        'winter-magi-m' : new Portrait('winter-magi-m', "Standard", true),
        'winter-magi-salt-m' : new Portrait('winter-magi-salt-m', "Salt", false)
    }),
    new Breed("wrapping-wing-dragon", "Wrapping-Wing Dragon", "dragon", "m-m", {
        'wrapping-wing-m' : new Portrait('wrapping-wing-m', "Standard", true),
        'wrapping-wing-salt-m' : new Portrait('wrapping-wing-salt-m', "Salt", false)
    }),
    new Breed("solstice-dragon", "Solstice Dragon", "dragon", "f-f", {
        'solstice-f' : new Portrait('solstice-f', "Standard", true),
        'solstice-salt-f' : new Portrait('solstice-salt-f', "Salt", false),
    }),
    new Breed("mistletoe-dragon", "Mistletoe Dragon", "dragon", "f-mf", {
        'mistletoe-f' : new Portrait('mistletoe-f', "Standard", true),
        'mistletoe-salt1-f' : new Portrait('mistletoe-salt1-f', "Blue Salt", false),
        'mistletoe-salt2-f' : new Portrait('mistletoe-salt2-f', "Gold Salt", false),
    }),
    new Breed("aegis-dragon", "Aegis Dragon", "dragon", "m-m", {
        'aegis-m' : new Portrait('aegis-m', "Standard", true),
        'aegis-rage-m' : new Portrait('aegis-m', "Enraged", false),
        'aegis-salt1-m' : new Portrait('aegis-salt1-m', "Black Salt", false),
        'aegis-salt1-rage-m' : new Portrait('aegis-salt1-rage-m', "Black Enraged", false),
        'aegis-salt2-m' : new Portrait('aegis-salt2-m', "Red Salt", false),
        'aegis-salt2-rage-m' : new Portrait('aegis-salt2-rage-m', "Red Enraged", false),
    }),
    new Breed("snow-dragon", "Snow Dragon", "dragon", "m-m", {
        'snow-m' : new Portrait('snow-m', "Standard", true),
        'snow-salt1-m' : new Portrait('snow-salt1-m', "Gold Salt", false),
        'snow-salt2-m' : new Portrait('snow-salt2-m', "Green Salt", false)
    }),
    new Breed("garland-dragon", "Garland Dragon", "dragon", "f-f", {
        'garland-f' : new Portrait('garland-f', "Standard", true),
        'garland-salt1-f' : new Portrait('garland-salt1-f', "Pink Salt", false),
        'garland-salt2-f' : new Portrait('garland-salt2-f', "Blue Salt", false)
    }),
    new Breed("starsinger-dragon", "Starsinger Dragon", "dragon", "f-f", {
        'starsinger-f' : new Portrait('starsinger-f', "Standard", true),
        'starsinger-salt1-f' : new Portrait('starsinger-salt1-f', "Ochre Salt", false),
        'starsinger-salt2-f' : new Portrait('starsinger-salt2-f', "Blue Salt", false)
    }),
    new Breed("wintertide-dragon", "Wintertide Dragon", "dragon", "m-m", {
        'wintertide-m' : new Portrait('wintertide-m', "Standard", true),
        'wintertide-salt-m' : new Portrait('wintertide-salt-m', "Salt", false)
    }),

    new Breed("vampire-dragon", "Vampire Dragon", "dragon", "mf-mf", PortraitFactory.mfPortraits("vampire")),
    new Breed("pumpkin-dragon", "Pumpkin Dragon", "pygmy", "mf-mf", {
        'pumpkin-u' : new Portrait('pumpkin-u', "Standard", true),
        'pumpkin-salt-u' : new Portrait('pumpkin-salt-u', "Salt", false)
    }),
    new Breed("black-marrow-dragon", "Black Marrow Dragon", "dragon", "mf-mf", PortraitFactory.mfPortraits("black-marrow")),
    new Breed("shadow-walker-dragon", "Shadow Walker Dragon", "dragon", "mf-mf", {
        'shadow-walker-u' : new Portrait('shadow-walker-u', "Standard", true),
        'shadow-walker-salt1-u' : new Portrait('shadow-walker-salt1-u', "Tan Salt", false),
        'shadow-walker-salt2-u' : new Portrait('shadow-walker-salt2-u', "Purple Salt", false)
    }),
    new Breed("cavern-lurker-dragon", "Cavern Lurker Dragon", "dragon", "mf-mf", {
        'cavern-lurker-f' : new Portrait('cavern-lurker-f', "Standard ♀", true, ConditionFactory.checkGender("Female")),
        'cavern-lurker-m' : new Portrait('cavern-lurker-m', "Standard ♂", true, ConditionFactory.checkGender("Male")),
        'cavern-lurker-salt-f' : new Portrait('cavern-lurker-salt-f', "Salt ♀", false, ConditionFactory.checkGender("Female")),
        'cavern-lurker-salt-m' : new Portrait('cavern-lurker-salt-m', "Salt ♂", false, ConditionFactory.checkGender("Male"))
    }),
    new Breed("grave-dragon", "Grave Dragon", "dragon", "mf-mf", {
        'grave-f' : new Portrait('grave-f', "Standard ♀", true, ConditionFactory.checkGender("Female")),
        'grave-m' : new Portrait('grave-m', "Standard ♂", true, ConditionFactory.checkGender("Male")),
        'grave-salt-f' : new Portrait('grave-salt-f', "Salt ♀", false, ConditionFactory.checkGender("Female")),
        'grave-salt-m' : new Portrait('grave-salt-m', "Salt ♂", false, ConditionFactory.checkGender("Male"))
    }),
    new Breed("desipis-dragon", "Desipis Dragon", "dragon", "mf-mf", {
        'desipis-f' : new Portrait('desipis-f', "Standard ♀", true, ConditionFactory.checkGender("Female")),
        'desipis-m' : new Portrait('desipis-m', "Standard ♂", true, ConditionFactory.checkGender("Male")),
        'desipis-salt1-f' : new Portrait('desipis-salt1-f', "Turquoise Salt ♀", false, ConditionFactory.checkGender("Female")),
        'desipis-salt1-m' : new Portrait('desipis-salt1-m', "Turquoise Salt ♂", false, ConditionFactory.checkGender("Male")),
        'desipis-salt2-f' : new Portrait('desipis-salt2-f', "Green Salt ♀", false, ConditionFactory.checkGender("Female")),
        'desipis-salt2-m' : new Portrait('desipis-salt2-m', "Green Salt ♂", false, ConditionFactory.checkGender("Male")),
    }),
    new Breed("caligene-dragon", "Caligene Dragon", "dragon", "mf-mf", {
        'caligene-f' : new Portrait('caligene-f', "Standard ♀", true, ConditionFactory.checkGender("Female")),
        'caligene-m' : new Portrait('caligene-m', "Standard ♂", true, ConditionFactory.checkGender("Male")),
        'caligene-salt-f' : new Portrait('caligene-salt-f', "Salt ♀", false, ConditionFactory.checkGender("Female")),
        'caligene-salt-m' : new Portrait('caligene-salt-m', "Salt ♂", false, ConditionFactory.checkGender("Male"))
    }),
    new Breed("witchlight-dragon", "Witchlight Dragon", "dragon", "mf-mf", {
        'witchlight-f' : new Portrait('witchlight-f', "Standard ♀", true, ConditionFactory.checkGender("Female")),
        'witchlight-m' : new Portrait('witchlight-m', "Standard ♂", true, ConditionFactory.checkGender("Male")),
        'witchlight-salt-f' : new Portrait('witchlight-salt-f', "Salt ♀", false, ConditionFactory.checkGender("Female")),
        'witchlight-salt-m' : new Portrait('witchlight-salt-m', "Salt ♂", false, ConditionFactory.checkGender("Male"))
    }),
    new Breed("omen-wyrm", "Omen Wyrm", "dragon", "mf-mf", {
        'omen-f' : new Portrait('omen-f', "Normal", true, ConditionFactory.checkGender("Female")),
        'omen-m' : new Portrait('omen-m', "Normal", true, ConditionFactory.checkGender("Male")),
        'omen-salt1-f' : new Portrait('omen-salt1-f', "Blue Salt ♀", false, ConditionFactory.checkGender("Female")),
        'omen-salt1-m' : new Portrait('omen-salt1-m', "Blue Salt ♂", false, ConditionFactory.checkGender("Male")),
        'omen-salt2-f' : new Portrait('omen-salt2-f', "Red Salt ♀", false, ConditionFactory.checkGender("Female")),
        'omen-salt2-m' : new Portrait('omen-salt2-m', "Red Salt ♂", false, ConditionFactory.checkGender("Male")),
    }),
    new Breed("arcana-dragon", "Arcana Dragon", "dragon", "mf-mf", {
        'arcana-f' : new Portrait('arcana-f', "Normal", true, ConditionFactory.checkGender("Female")),
        'arcana-m' : new Portrait('arcana-m', "Normal", true, ConditionFactory.checkGender("Male")),
        'arcana-salt1-f' : new Portrait('arcana-salt1-f', "Blue Salt", false, ConditionFactory.checkGender("Female")),
        'arcana-salt1-m' : new Portrait('arcana-salt1-m', "Blue Salt ♂", false, ConditionFactory.checkGender("Male")),
        'arcana-salt2-f' : new Portrait('arcana-salt2-f', "Green Salt", false, ConditionFactory.checkGender("Female")),
        'arcana-salt2-m' : new Portrait('arcana-salt2-m', "Green Salt ♂", false, ConditionFactory.checkGender("Male")),
    }),
    new Breed("kohraki-dragon", "Kohraki Dragon", "dragon", "mf-mf", {
        'kohraki-f' : new Portrait('kohraki-f', "Normal", true, ConditionFactory.checkGender("Female")),
        'kohraki-m' : new Portrait('kohraki-m', "Normal", true, ConditionFactory.checkGender("Male")),
        'kohraki-salt1-f' : new Portrait('kohraki-salt1-f', "Blue Salt ♀", false, ConditionFactory.checkGender("Female")),
        'kohraki-salt1-m' : new Portrait('kohraki-salt1-m', "Blue Salt ♂", false, ConditionFactory.checkGender("Male")),
        'kohraki-salt2-f' : new Portrait('kohraki-salt2-f', "White Salt ♀", false, ConditionFactory.checkGender("Female")),
        'kohraki-salt2-m' : new Portrait('kohraki-salt2-m', "White Salt ♂", false, ConditionFactory.checkGender("Male")),
    }),
]

export default SpecialBreeds;