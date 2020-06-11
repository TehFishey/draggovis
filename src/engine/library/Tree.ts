import DragonNode from './DragonNode';
import Breed from './Breed';
import Portrait from './Portrait';

export default class Tree extends Array<DragonNode | null> {
    
    createNode(index: number, gender: string, breed: Breed, portrait:Portrait) : DragonNode {
        this[index] = new DragonNode(this, index, gender, breed, portrait);
        return this[index]!;
    }

    removeNode(index: number) {
        if (this[index]==null) return;
        
        function getBranch(branch: Array<DragonNode>, node : DragonNode | null) {
            if(node!=null) {
                branch.push(node);
                if(node.hasParents()) {
                    getBranch(branch, node.mother());
                    getBranch(branch, node.father());
                }
            }
        }

        let branch: Array<DragonNode> = []
        getBranch(branch, this[index]);

        branch.forEach((node: DragonNode) => (this[node.index] = null));
    }
    
    cloneTree() : Tree {
        let clone = new Tree();
        let n : DragonNode;
        this.forEach((node : DragonNode | null, index: number) => {
            if(node!=null) {
                n = clone.createNode(index, node.gender, node.breed, node.portrait);
                n.name = node.name;
                n.meta = node.meta;
            }
        });
        return clone;
    }

    replaceTree(newData : Tree) {
        this.slice(0,0);
        let n : DragonNode;
        newData.forEach((node : DragonNode | null, index: number) => {
            if(node!=null)
            if(node!=null) {
                n = this.createNode(index, node.gender, node.breed, node.portrait);
                n.name = node.name;
                n.meta = node.meta;
            }
        });
    }
};