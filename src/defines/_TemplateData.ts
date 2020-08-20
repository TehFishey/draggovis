import Template from "../library/view/LineageTemplate";
import lineageTemplates from "./templates/Templates";

export default class TemplateData {
    readonly dict: Map<string, Template>;
    readonly arr: Array<Template>;

    constructor() {
        this.arr = lineageTemplates;
        this.dict = new Map<string, Template>();
        this.arr.forEach((template: Template) => {this.dict.set(template.id, template)});

        console.log(`Model: Defining template preset generators...`);
    };
};

