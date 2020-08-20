import Dragon, { Gender, DragonState } from "../defines/Dragon";
import { Sprites, Breeds } from "../../defines/Defines";

export enum propType {
    Number = 'number',
    Dragon = 'dragon',
    Gender = 'gender'
}

export abstract class Property {
    id: string;
    label: string;
    type: propType;
    default: any;

    constructor(id: string, label: string, type: propType) {
        this.id = id;
        this.label = label;
        this.type = type;
    }
};

export class NumProperty extends Property {
    options: Array<number>;
    default: number;
    
    constructor(id: string, label: string, options: Array<number>, def?: number) {
        super(id, label, propType.Number);
        this.options = options;
        this.default = (def != null) ? def : options[0];
    }
}

export class DragProperty extends Property {
    validGender?: Gender;
    default: Dragon;
    
    constructor(id: string, label: string, gender?: Gender, def?: Dragon) {
        super(id, label, propType.Dragon);
        this.validGender = gender;
        this.default = (def != null) ? def 
            : new Dragon(Gender.Undefined, Breeds.dict.get('guardian-dragon')!, Sprites.dict.get('guardian-u')!, DragonState.Healthy);
    }
}
export class GenderProperty extends Property {
    default: Gender;

    constructor(id: string, label: string, def?: Gender) {
        super(id, label, propType.Gender);
        this.default = (def != null) ? def : Gender.Female;
    }
}