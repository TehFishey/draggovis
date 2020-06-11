import React from 'react';
import TreeElement from './treeview/TreeElement';
import './treeview/tree-root.css';
import './stage.css';

import DragonNode from '../engine/library/DragonNode';
import Tree from '../engine/library/Tree';
import Controller from '../engine/controller/Controller'

interface Props {}
  
interface State {
    tree: Tree;
    renderCanvas: boolean;
}

export default class Stage extends React.Component<Props, State> {

    canvasRef: React.RefObject<HTMLDivElement>;
    
    constructor(props: Props) {
        super(props);

        this.state = {
            renderCanvas : false,
            tree: Controller.getTree()
        }
        this.canvasRef = React.createRef();
        this.getCanvas = this.getCanvas.bind(this);
    }

    getCanvas() { return this.canvasRef; }
    getData() { return this.state.tree; }
    setData(tree: Tree) { this.setState({tree: tree})}
    

    /*validateDataTree(tree: Array<DragonNode>, data: DragonNode) {
        let node: DragonNode = data;

        //Check if the CURRENT node has updated MetaData
        //Note: This should ONLY ever happen at the root node, and ONLY if it has been updated
        //In all other cases, node.meta.updated will have already been checked by the time this
        //function runs for node.
        if(node.meta.updated) {
            node = this.validateNode(node);
            if(node.hasParents(tree)) {
                node.getMother() = this.validateNode(node.mother!);
                node.father = this.validateNode(node.father!);
            }
            node.meta.updated = false;
        }

        //Check if PARENT nodes have updated MetaData
        //If so, validate self, that parent, and that parent's parents. Afterwards, continue valiating
        //data tree.
        if(hasParents(node)) {
            [node.mother!,node.father!].forEach((parent)=> {
                if(parent.meta.updated) {
                    node = this.validateNode(node);
                    parent = this.validateNode(parent);
                        if(hasParents(parent)) {
                            parent.mother = this.validateNode(parent.mother!);
                            parent.father = this.validateNode(parent.father!);
                        }
                    parent.meta.updated = false;
                }
                parent = this.validateDataTree(parent)
            });
        }
        return node;
    }*/

    validateNode(data: DragonNode) {
        let node = data;
        /*
        node.meta.failedValidation = false;
        node.meta.validationWarning = [];

        Rules.arr.forEach((rule : Rule)=>{
            if(!rule.validate(node)) {
                node.meta.failedValidation = true;
                node.meta.validationWarning.push(rule.tooltip(node));
            }}
        );
        */
        return node;
    }

    componentDidMount() {
        if(!this.state.renderCanvas) this.setState({renderCanvas : true});
    }

    componentDidUpdate() {
        console.log('root updated ---');
        console.log(this.state.tree);
        console.log(this.state.tree[0]);
        console.log('---')
    }

    render () {
        return ( 
            <div className='app-stage'>
                <div className='stage-top-menu'></div>
                <div className='stage-side-menu'></div>
                <div className='stage-canvas' ref={this.canvasRef}>
                    {(this.state.renderCanvas) ? (
                        <div className="lineage-tree">
                            <ul id ="tree-root">
                                <TreeElement 
                                tree={this.state.tree}
                                node={this.state.tree[0]!}
                                getCanvas={this.getCanvas}
                                setData={(tree: Tree) => {this.setData(tree)}}
                                />
                            </ul>
                        </div> ) : null}
                </div>    
            </div>
        );
    }
}