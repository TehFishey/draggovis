import React from 'react';
import TreeElement from './tree/TreeElement';
import Menu from './menu/Menu';
import Sidebar from './sidebar/Sidebar';
import './tree/tree.css';
import './stage.css';

import Tree from '../../library/controller/Tree';
import Controller from '../../controller/Controller'

interface Props {}

interface State {
    tree: Tree;
}

export default class Stage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            tree: Controller.getSnapshot()
        }
    }

    getData = () => { return this.state.tree; }
    setData = (tree: Tree) => { this.setState({tree: tree})}

    componentDidMount() {
       //let io = Controller.IOManager.generateLookups();
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
                <div className='stage-canvas'>
                    <div className="lineage-tree">
                        <ul id ="tree-root">
                            <TreeElement
                            tree={this.state.tree}
                            node={this.state.tree[0]!}
                            setData={this.setData}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
