import React from 'react';
import DragonElement from './treeview/TreeElement';
import ValidationRules from '../engine/data/ValidationRules';
import './treeview/tree-root.css';
import './stage.css';

import testData from '../TestData';
import DragonNode from '../engine/library/DragonNode';

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

        ValidationRules.forEach((rule)=>{
            if(!rule.check(node)) {
                node.meta.failedValidation = true;
                node.meta.validationWarning.push(rule.tooltip(node));
            }}
        );

        return node;
    }

    componentDidMount() {
        if(!this.state.renderCanvas) this.setState({renderCanvas : true});
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
                                <DragonElement 
                                data={this.state.data}
                                getCanvasRef={this.getCanvasRef}
                                onChange={(treeData: DragonNode) => {
                                    console.log('Detecting data update and validating data tree...')
                                    this.setState({data : this.validateDataTree(treeData)})
                                    console.log(this.state.data);
                                }}
                                />
                            </ul>
                        </div> ) : null}
                </div>    
            </div>
        );
    }
}