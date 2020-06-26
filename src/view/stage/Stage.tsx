import React from 'react';
import TreeElement from './tree/TreeElement';
import Menu from './menu/Menu';
import Sidebar from './sidebar/Sidebar';
import './tree/tree.css';
import './stage.css';

import Tree from '../../library/controller/Tree';
import Controller from '../../controller/Controller'
import GenerationCounter from './gen-counter/gen-counter';
import { SettingsConsumer } from '../Settings';

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
       //Controller.IOManager.generateLookups();
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
                    tree={this.state.tree}
                />
                <div className='stage-canvas'>
                    <GenerationCounter gens={this.state.tree.genLength()}/>
                    <div className="lineage-tree">
                        <ul id ="tree-root">
                            <TreeElement
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
