import Sprite from './Sprite';
import Condition, { CompoundCondition, Operator } from './Condition';
import { Gender } from './Dragon';

import DragonNode, { nodeReference } from '../model/DragonNode';

export enum DragonType {
    Dragon = 'Dragon',
    Drake = 'Drake',
    Pygmy = 'Pygmy',
    TwoHeaded = 'Two-Headed'
}

export enum DragonSubType {
    Western = 'Western',
    Eastern = 'Eastern',
    Lindwyrm = 'Lindwyrm',
    SeaSerpent = 'Sea Serpent',
    Wyvern = 'Wyvern',
    Wyrm = 'Wyrm',
    Wingless = 'Wingless',
    Amphiptere = 'Amphiptere'
}

export enum Affinity {
    None = 'None',
    Neutral = 'Neutral',
    Magi = 'Magi',
    Air = 'Air',
    Time = 'Time',
    Ice = 'Ice',
    Light = 'Light',
    Life = 'Life',
    Earth = 'Earth',
    Water = 'Water',
    Dark = 'Dark',
    Lightning = 'Lightning',
    Death = 'Death',
    Fire = 'Fire'
}

export default class Breed {
    id: string;                         // String Id for backend reference & dictionary lookups
    label: string;                      // String Label for frontend display
    type: DragonType;                   // Type of dragon. Used for breeding logic.
    subType: DragonSubType;
    affinity: Array<Affinity>;
    genders: string;                    // String representing possble dragon genders. Format: "{Genders possible for gen1}-{Genders possible for later gens}"
    sprites: Map<string, Sprite>;   // Dictionary of Sprites associated with this breed, keyed by Sprite.id
    condition: Condition;               // Condition to be used for validation checks

    constructor(id: string, label: string, type=DragonType.Dragon, subType=DragonSubType.Western, affinity=[Affinity.Neutral], genders="mf-mf", sprites?: Array<Sprite>, condition?: Condition) {
        this.id = id;                                           
        this.label = label;                                     
        this.type = type;
        this.subType = subType;
        this.affinity = affinity                     
        this.genders = genders;                      
        this.sprites = new Map<string, Sprite>();
        if(sprites !== undefined)
            sprites.forEach((sprite: Sprite)=>this.sprites.set(sprite.id, sprite));
            
        this.condition = Breed.setBreedCondition(this.id, this.genders, this.label, condition);
    }

    static setBreedCondition(id: string, genders: string, label: string, condition?: Condition) : Condition {
        let subConditions: Array<Condition>;
        subConditions = (genders !== "mf-mf") ? Breed.breedGenderConditions(genders, label) : [];
        subConditions.push((condition != null) ? condition : Breed.defaultBreedCondition(id, label));

        if(subConditions.length < 2) return subConditions[0]
        else return new CompoundCondition(subConditions, Operator.AND, label);
    }

    static defaultBreedCondition(id: string, label: string) : Condition {
        let validate = (node: DragonNode) => { 
            if(node.hasParents()) return (node.mother()?.breed.id === id || node.father()?.breed.id === id)
            else return true;
        }
        let description = `a parent with breed '${label}' if not first generation.`;
        
        return new Condition(validate, description, label);
    }

    static breedGenderConditions(genders: string, label: string) : Array<Condition> {
        let conditions = new Array<Condition>();
        let genderDef: Array<String> = genders.split('-');
        let description: string;
        let validate: nodeReference;


        if((genderDef[0]!=='mf') && (genderDef[0] === genderDef[1])) {
            let g : Gender = (genderDef[0].includes('m')) ? Gender.Male : Gender.Female;
            validate = (node: DragonNode) => { return (node.gender === g) }
            description = `requires ${g} gender.`
            conditions.push(new Condition(validate,description,label));
        }
        else if(genderDef[0]!=='mf') {
            let g : Gender = (genderDef[0].includes('m')) ? Gender.Male : Gender.Female;
            validate = (node: DragonNode) => { return !(!node.hasParents() && node.gender !== g) }
            description = `requires ${g} gender if first generation.`
            conditions.push(new Condition(validate,description,label));
        }
        else if(genderDef[1]!=='mf') {
            let g : Gender = (genderDef[1].includes('m')) ? Gender.Male : Gender.Female;
            validate = (node: DragonNode) => { return !(node.hasParents() && node.gender !== g) }
            description = `requires ${g} gender if not first generation.`
            conditions.push(new Condition(validate,description,label));
        }
        return conditions;
    }
}