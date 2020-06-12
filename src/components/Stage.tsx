import React from 'react';
<<<<<<< Updated upstream
import DragonElement from './treeview/TreeElement';
import './treeview/tree-root.css';
import './stage.css';

import DragonNode from '../engine/library/DragonNode';
import {Rules} from '../engine/data/Model';

import testData from '../TestData';
import Rule from '../engine/library/Rule';
=======
import TreeElement from './tree/TreeElement';
import Menu from './menu/Menu';
import Sidebar from './sidebar/Sidebar';
import './tree/tree.css';
import './stage.css';

import Tree from '../engine/library/Tree';

import Controller from '../engine/controller/Controller'
>>>>>>> Stashed changes

interface Props {}

interface State {
    data: DragonNode;
    renderCanvas: boolean;
}

export default class Stage extends React.Component<Props, State> {

    canvasRef: React.RefObject<HTMLDivElement>;
    
    constructor(props: Props) {
        super(props);

        this.state = {
            data: testData,
            renderCanvas : false
        }

        this.canvasRef = React.createRef();
<<<<<<< Updated upstream
        this.getCanvasRef = this.getCanvasRef.bind(this);
    }

    getCanvasRef() { return this.canvasRef; }

    validateDataTree(data: DragonNode) {
        let node: DragonNode = data;
        function hasParents(n: DragonNode) { return (n.father !== undefined && n.mother !== undefined) };

        /*  Check if the CURRENT node has updated MetaData
            Note: This should ONLY ever happen at the root node, and ONLY if it has been updated
            In all other cases, node.meta.updated will have already been checked by the time this
            function runs for node. */
        if(node.meta.updated) {
            node = this.validateNode(node);
            if(hasParents(node)) {
                node.mother = this.validateNode(node.mother!);
                node.father = this.validateNode(node.father!);
            }
            node.meta.updated = false;
        }

        /*  Check if PARENT nodes have updated MetaData
            If so, validate self, that parent, and that parent's parents. Afterwards, continue valiating
            data tree.  */
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
    }

    validateNode(data: DragonNode) {
        let node = data;

        node.meta.failedValidation = false;
        node.meta.validationWarning = [];

        Rules.arr.forEach((rule : Rule)=>{
            if(!rule.validate(node)) {
                node.meta.failedValidation = true;
                node.meta.validationWarning.push(rule.tooltip(node));
            }}
        );

        return node;
    }
=======
    }

    getCanvas = () => { return this.canvasRef; }
    getData = () => { return this.state.tree; }
    setData = (tree: Tree) => { this.setState({tree: tree})}
>>>>>>> Stashed changes

    componentDidMount() {
        if(!this.state.renderCanvas) {
            this.setState({renderCanvas : true});
            console.log(this.canvasRef.current);
        }
    
    }

    render () {
        return ( 
            <div className='app-stage'>
                <Menu
                    tree={this.state.tree}
                    setTree={this.setData}
                />
                <Sidebar
                    mouseOver={this.state.tree[0]!}
                />
                <div className='stage-canvas' ref={this.canvasRef}>
                    {(this.state.renderCanvas) ? (
                        <div className="lineage-tree">
                            <ul id ="tree-root">
<<<<<<< Updated upstream
                                <DragonElement 
                                data={this.state.data}
                                getCanvasRef={this.getCanvasRef}
                                onChange={(treeData: DragonNode) => {
                                    console.log('Detecting data update and validating data tree...')
                                    this.setState({data : this.validateDataTree(treeData)})
                                    console.log(this.state.data);
                                }}
=======
                                <TreeElement 
                                tree={this.state.tree}
                                node={this.state.tree[0]!}
                                getCanvas={this.getCanvas}
                                setData={this.setData}
>>>>>>> Stashed changes
                                />
                            </ul>
                        </div> ) : null}
                </div>    
            </div>
        );
    }
}