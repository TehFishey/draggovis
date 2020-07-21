import Condition from '../../library/defines/Condition';
import Sprite from '../../library/defines/Sprite';
import Breed, { DragonType, DragonSubType, Affinity } from '../../library/defines/Breed';

import SpriteFactory from '../_utilities/SpriteFactory';
import ConditionFactory from '../_utilities/ConditionFactory';

class DrakeBreed extends Breed {
    constructor(id: string, label: string, affinity: Array<Affinity>, sprites: Array<Sprite>, condition?: Condition) {
        super(id, label, DragonType.Drake, DragonSubType.Western, affinity, "mf-mf", sprites, condition)
    }
}

let DrakeBreeds: Array<Breed> = [
    new DrakeBreed("day-glory-drake", "Day Glory Drake", [Affinity.None], SpriteFactory.uSprites("day-glory"),
        ConditionFactory.trueBredBreed("Day Glory Drake", [
            {id: 'day-glory-drake', label : 'Day Glory Drake'},
            {id: 'night-glory-drake', label : 'Night Glory Drake'}
        ])
    ),
    new DrakeBreed("glaucus-drake", "Glaucus Drake", [Affinity.None], SpriteFactory.mfSprites("glaucus")),
    new DrakeBreed("greater-spotted-drake", "Greater Spotted Drake", [Affinity.None], SpriteFactory.uSprites("greater-spotted")),
    new DrakeBreed("honey-drake", "Honey Drake", [Affinity.Life], SpriteFactory.mfSprites("honey")),
    new DrakeBreed("howler-drake", "Howler Drake", [Affinity.None], SpriteFactory.mfSprites("howler")),
    new DrakeBreed("morphodrake", "Morphodrake", [Affinity.Light], SpriteFactory.uSprites("morphodrake")),
    new DrakeBreed("night-glory-drake", "Night Glory Drake", [Affinity.None], SpriteFactory.uSprites("night-glory"),
        ConditionFactory.trueBredBreed("Night Glory Drake", [
            {id: 'night-glory-drake', label : 'Night Glory Drake'},
            {id: 'day-glory-drake', label : 'Day Glory Drake'}
        ])
    ),
    new DrakeBreed("ochredrake", "Ochredrake", [Affinity.Neutral], SpriteFactory.uSprites("ochredrake")),
    new DrakeBreed("tarantula-hawk-drake", "Tarantula Hawk Drake", [Affinity.Earth], SpriteFactory.uSprites("tarantula-hawk")),
    new DrakeBreed("tatterdrake", "Tatterdrake", [Affinity.Dark], SpriteFactory.uSprites("tatterdrake")),
    new DrakeBreed("vremya-drake", "Vremya Drake", [Affinity.Time], SpriteFactory.uSprites("vremya"))
]

export default DrakeBreeds;