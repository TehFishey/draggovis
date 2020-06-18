import Portrait from './Portrait';
import Condition from './Condition';
import { Gender } from './Dragon';

import DragonNode from '../controller/DragonNode';

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

export default class Breed {
    id: string;                         // String Id for backend reference & dictionary lookups
    label: string;                      // String Label for frontend display
    type: DragonType;                   // Type of dragon. Used for breeding logic.
    subType: DragonSubType;
    genders: string;                    // String representing possble dragon genders. Format: "{Genders possible for gen1}-{Genders possible for later gens}"
    portraits: Map<string, Portrait>;   // Dictionary of Portraits associated with this breed, keyed by Portrait.id
    condition: Condition;               // Condition to be used for validation checks

    constructor(id: string, label: string, type?: DragonType, subType?: DragonSubType, genders?: string, portraits?: Array<Portrait>, condition?: Condition) {
        this.id = id;                                           
        this.label = label;                                     
        this.type = type || DragonType.Dragon;
        this.subType = subType || DragonSubType.Western;                           
        this.genders = genders || "mf-mf";                      
        this.portraits = new Map<string, Portrait>();
        if(portraits !== undefined)
            portraits.forEach((portrait: Portrait)=>this.portraits.set(portrait.id, portrait));
            
        this.condition = condition || Breed.defaultCondition(this.id, this.genders, this.label)
    }

    static defaultCondition(id: string, genders: string, label: string) {
        let warning = `Invalid gender or parent breeds for ${label}.`;
        let validate = (dragon: DragonNode) => {
            let breedCheck = true;
            let genderCheck = true;
            let isFirstGen = !(dragon.hasParents());

            if(!isFirstGen) {
                breedCheck = (dragon.mother()?.breed.id === id || dragon.father()?.breed.id === id)
            }

            if(genders !== "mf-mf") {
                if(isFirstGen) {
                    let genderString = dragon.breed.genders.split("-")[0];
                    genderCheck = (
                        (genderString.includes('m') && dragon.gender === Gender.Male) || 
                        (genderString.includes('f') && dragon.gender === Gender.Female)
                    );
                } else {
                    let genderString = dragon.breed.genders.split("-")[1];
                    genderCheck = (
                        (genderString.includes('m') && dragon.gender === Gender.Male) || 
                        (genderString.includes('f') && dragon.gender === Gender.Female)
                    );
                }
            }
            return (breedCheck && genderCheck);
        };

        return new Condition(validate, warning);
    }
}