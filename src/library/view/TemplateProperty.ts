import Dragon, { Gender, DragonState } from "../defines/Dragon";
import DragonBreeds from "../../defines/breeds/DragonBreeds";

export enum propType {
    Number = 'number',
    Dragon = 'dragon',
    Gender = 'gender'
}

// Dragon template props will always default to Guardian, for *reasons*...
const defaultDragon = new Dragon(Gender.Undefined, DragonBreeds[59], DragonBreeds[59].portraits.get('guardian-u'),DragonState.Healthy);

export abstract class TemplateProperty {
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

export class NumProperty extends TemplateProperty {
    options: Array<number>;
    default: number;
    
    constructor(id: string, label: string, options: Array<number>) {
        super(id, label, propType.Number);
        this.options = options;
        this.default = options[0];
    }
}

export class DragProperty extends TemplateProperty {
    validGender?: Gender;
    default: Dragon;
    
    constructor(id: string, label: string, gender?: Gender) {
        super(id, label, propType.Dragon);
        this.validGender = gender;
        this.default = defaultDragon
    }
}

export class GenderProperty extends TemplateProperty {
    default: Gender;

    constructor(id: string, label: string) {
        super(id, label, propType.Gender);
        this.default = Gender.Female;
    }
}