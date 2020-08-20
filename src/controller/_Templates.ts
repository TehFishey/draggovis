import Generator from '../library/controller/Generator';
import TemplateGenerators from "./defines/TemplateGenerators";

export default class Templates {
    readonly dict: Map<string, Generator>;
    readonly arr: Array<Generator>;

    constructor() {
        this.arr = TemplateGenerators;
        this.dict = new Map<string, Generator>();
        this.arr.forEach((gen: Generator) => {this.dict.set(gen.id, gen)});

        console.log(`Controller: Defining template preset generators...`);
    };
};

