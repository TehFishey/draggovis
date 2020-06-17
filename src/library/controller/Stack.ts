import Tree from "./Tree";

export default class Stack extends Array<Tree> {

    put(tree: Tree) {
        if(this.length >= 20)
            this.shift();
        this.push(tree);
    }

    pull() : Tree | undefined {
        return this.pop();
    }

    clear() {
        this.length = 0;
    }
}