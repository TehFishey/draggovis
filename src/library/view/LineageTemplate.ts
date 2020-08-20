import Tree from "../model/Tree";

import {TemplateProperty} from './TemplateProperty';

type templatePattern = (...args: any[]) => Tree

export default class LineageTemplate {
    id: string;
    label: string;
    description: string;
    props: Array<TemplateProperty>;
    pattern: templatePattern;

    constructor(id: string, label: string, description: string, props: Array<TemplateProperty>, pattern: templatePattern) {
        this.id = id;
        this.label = label;
        this.description = description;
        this.props = props;
        this.pattern = pattern;
    }

    execute(...args: any[]) : Tree {
        return this.pattern(...args);
    }

};