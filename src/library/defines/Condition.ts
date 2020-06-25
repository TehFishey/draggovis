import DragonNode from "../controller/DragonNode";

type validationFunc = (node: DragonNode)=>boolean;

export enum Operator {
    AND = 'all of the following:',
    OR  = 'one of the following:'
}

export default class Condition {
    readonly statement: validationFunc;
    readonly description :string;
    readonly prefix :string;

    constructor(statement?: validationFunc, description?: string, label: string='Unknown') {
        this.statement = statement          || ((node: DragonNode) => {return true});
        this.description = description      || 'unlabeled condition.';
        this.prefix = `'${label}' requires `;
    }

    validate(node: DragonNode) : boolean {
        return this.statement(node);
    }

    validateVerbose(node: DragonNode, subCondition?: boolean) : [boolean, string] {
        let result = this.validate(node);
        return (subCondition) ? 
            [result, (result)? `✓ ${this.description}` : `✖ ${this.description}`] :
            [result, (result)? `✓ ${this.prefix}${this.description}` : `✖ ${this.prefix}${this.description}`]
    }
};

export class CompoundCondition extends Condition {
    readonly conditions: Array<Condition>
    readonly operand: Operator;

    constructor(conditions: Array<Condition>, operand: Operator, label: string='Unknown') {
        super(((node: DragonNode) => {return true}), operand, label)

        this.conditions = conditions;
        this.operand = operand;
    }

    validate(node : DragonNode) : boolean {
        if(this.operand === Operator.AND) {
            return this.conditions.every((c: Condition)=>{return c.validate(node);});
        } else {    //Case 'OR'
            return this.conditions.some((c: Condition)=>{return c.validate(node);});
        }
    }

    validateVerbose(node: DragonNode, subCondition?: boolean) : [boolean, string] {
        let result : boolean;
        let out: string;
        let subOuts : Array<string> = [];
        let r: boolean;
        let o: string;
        
        if(this.operand === Operator.AND) {
            result = true;
            this.conditions.forEach((c: Condition)=>{
                [r,o] = c.validateVerbose(node, true);
                (r)? result=result : result=false ;
                subOuts.push(o);
            });
        } else {    //Case 'OR'
            result = false;
            this.conditions.forEach((c: Condition)=>{
                [r,o] = c.validateVerbose(node, true);
                (r)? result=true : result=result ;
                subOuts.push(o);
            });
        }
        
        out = (subCondition) ? 
              (result)? `✓ ${this.description}` : `✖ ${this.description}` : 
              (result)? `✓ ${this.prefix}${this.description}` : `✖ ${this.prefix}${this.description}` ;

        out += `<ul>`
        subOuts.forEach((o: string)=>{
            out+=`<li>${o}</li>`
        })
        out += `</ul>`

        
        return [result, out];
    }
}