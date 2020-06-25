import Tree from "../controller/Tree";

import {TemplateProperty} from './TemplateProperty';

type templatePattern = (...args: any[]) => Tree

export default class LineageTemplate {
    id: string;
    label: string;
    props: Array<TemplateProperty>;
    pattern: templatePattern;

    constructor(id: string, label: string, props: Array<TemplateProperty>, pattern: templatePattern) {
        this.id = id;
        this.label = label;
        this.props = props;
        this.pattern = pattern;
    }

    execute(...args: any[]) : Tree {
        return this.pattern(...args);
    }

};