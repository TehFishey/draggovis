import React from 'react';
import TreeElement from './treeview/TreeElement';
import './treeview/tree-root.css';
import './stage.css';

import DragonNode from '../engine/library/DragonNode';
import Tree from '../engine/library/Tree';
import Controller from '../engine/controller/Controller'
>>>>>>> dev

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
            tree: Controller.pushTree()
        }

        this.canvasRef = React.createRef();
        this.getCanvas = this.getCanvas.bind(this);
    }

    getCanvas() { return this.canvasRef; }
    getData() { return this.state.tree; }
    setData(tree: Tree) { this.setState({tree: tree})}

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

    componentDidUpdate() {
        console.log('root updated ---');
        console.log(this.state.tree);
        console.log('---')
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
                                <TreeElement
                                tree={this.state.tree}
                                node={this.state.tree[0]!}
                                getCanvas={this.getCanvas}
                                setData={this.setData}
>>>>>>> dev
                                />
                            </ul>
                        </div> ) : null}
                </div>
            </div>
        );
    }
}
