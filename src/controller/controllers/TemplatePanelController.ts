import DataManager from "../_DataManager";

import Tree from "../../library/controller/Tree";
import DragonNode from "../../library/controller/DragonNode";

export default class TemplatePanelController {
    readonly parent: DataManager;

    constructor(parent: DataManager) {
        this.parent = parent;
    }

    implementTemplate(templateTree: Tree, validate: boolean=true) : Tree {
        return this.parent.updateTree((tree: Tree) => {
            tree.replaceTree(templateTree);

            let indicies: Array<number> = [];
            templateTree.forEach((n: DragonNode | null)=> {
                if(n != null) indicies.push(n.index);
            });
            return indicies;
        });
    }
}