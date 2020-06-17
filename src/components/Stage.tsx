import React from 'react';
import TreeElement from './tree/TreeElement';
import Menu from './menu/Menu';
import Sidebar from './sidebar/Sidebar';
import './tree/tree.css';
import './stage.css';

import Tree from '../engine/library/Tree';
import Controller from '../engine/controller/Controller'
import IOManager from '../engine/controller/IOManager';

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
            tree: Controller.getSnapshot()
        }

        this.canvasRef = React.createRef();
        this.getCanvas = this.getCanvas.bind(this);
    }

    getCanvas = () => { return this.canvasRef; }
    getData = () => { return this.state.tree; }
    setData = (tree: Tree) => { this.setState({tree: tree})}

    componentDidMount() {
        if(!this.state.renderCanvas) {
            this.setState({renderCanvas : true});
            console.log(this.canvasRef.current);
        }
       //let io = (new IOManager).generateLookups();
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
                                />
                            </ul>
                        </div> ) : null}
                </div>
            </div>
        );
    }
}
