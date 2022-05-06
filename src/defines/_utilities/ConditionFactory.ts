import ConditionBuilder from './ConditionBuilder';
import Condition from '../../library/defines/Condition';
import DragonNode from '../../library/model/DragonNode';
import { Gender } from '../../library/defines/Dragon';

// Sprite- or Breed- like object (containing data necessary for validation)
type pseudoObject = {id: String, label: String}

export default {   
    trueBredBreed(label : string, validBreeds : Array<pseudoObject>) : Condition {
        return ConditionBuilder.or(label, [
            ConditionBuilder.checkFirstGeneration(),
            ConditionBuilder.checkParentBreedIds(validBreeds)
        ])
    },

    trueBredSprite(label : string, validSprites : Array<pseudoObject>) : Condition {
        return ConditionBuilder.or(label, [
            ConditionBuilder.checkFirstGeneration(),
            ConditionBuilder.checkParentSpriteIds(validSprites)
        ])
    },

    xenoBreedCondition(label: string) {
        const xenoBreedIds = ['xenowyrm-aquilo','xenowyrm-aso','xenowyrm-astrapi','xenowyrm-chrono','xenowyrm-gaia',
                            'xenowyrm-kemaro','xenowyrm-mageia','xenowyrm-obidar','xenowyrm-pharos','xenowyrm-pyro',
                            'xenowyrm-staterae','xenowyrm-thalassa','xenowyrm-umbra']

        let validate = (dragon : DragonNode) => {
            if(dragon.hasParents()) {
                if(xenoBreedIds.includes(dragon.mother()!.breed.id) || xenoBreedIds.includes(dragon.father()!.breed.id))
                    return true;
            }
            else return true;
            return false;
        }
        let description = 'a Xenowyrm parent if not first generation.'
        
        return new Condition(validate, description, label);
    },

    zyuSpriteCondition(label: string, spriteId: string) {
        return ConditionBuilder.or(label, [
            ConditionBuilder.checkFirstGeneration(),
            ConditionBuilder.checkParentSpriteIds([{id: spriteId, label: label}]),
            ConditionBuilder.checkParentBreedIds([{id: 'sinomorph-dragon', label : 'Sinomorph'}])
        ])
    },
    
    copperSpriteCondition(gender : Gender, label: string, spriteId: string) {
        let validate = (dragon : DragonNode) => {
            if(!dragon.hasParents()) return true;
            else {
                if(dragon.mother()!.breed.id === 'copper-dragon')
                    return dragon.mother()!.sprite.id.slice(0,-1) === spriteId.slice(0,-1);
                else if(dragon.father()!.breed.id === 'copper-dragon')
                    //Note: this should also be true if the mother's biome matches that of another copper sprite.
                    //Current limitations prevent checking cb dragon biomes...
                    return dragon.father()!.sprite.id.slice(0,-1) === spriteId.slice(0,-1);
            }
            
            return false;
        }

        let description = `a mother with sprite '${label}', or a non-copper mother and a father with sprite '${label}'.`

        return ConditionBuilder.and(label, [
            ConditionBuilder.checkGender(gender),
            new Condition(validate, description)
        ])
    }
}