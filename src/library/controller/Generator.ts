import Tree from "../model/Tree";

import {Property} from './GeneratorProperty';

type generatorStrategy = (...args: any[]) => Tree

export default class Generator {
    id: string;
    label: string;
    description: string;
    props: Array<Property>;
    strategy: generatorStrategy;

    constructor(id: string, label: string, description: string, props: Array<Property>, strategy: generatorStrategy) {
        this.id = id;
        this.label = label;
        this.description = description;
        this.props = props;
        this.strategy = strategy;
    }

    execute(...args: any[]) : Tree {
        return this.strategy(...args);
    }
};