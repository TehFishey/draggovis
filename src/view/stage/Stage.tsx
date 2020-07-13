import React from 'react';
import TreeElement from './tree/TreeElement';
import Menu from './menu/Menu';
import Sidebar from './sidebar/Sidebar';
import './tree/tree.css';
import './stage.css';

import Tree from '../../library/controller/Tree';
import Model from '../../controller/Model'
import GenerationCounter from './gen-counter/gen-counter';
import { executionOutput } from '../../controller/DataManager';
import Modal from '../general/modal/Modal';

interface Props {}

interface State {
    tree: Tree;
    error : boolean;
    errorMessage : string;
}

export default class Stage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            tree: Model.getSnapshot(),
            error : false,
            errorMessage : ''
        }
    }

    getData = () => { return this.state.tree; }
    setData = (response: Promise<executionOutput>) => { 
        response.then((data: executionOutput) => {
            if(data.error != null) {
                this.setState({
                    error : true,
                    errorMessage : data.error
                })
            }
            else this.setState({tree: data.data})
        })
    }

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
                <Modal
                    show={this.state.error}
                    handleClose={()=>{this.setState({error : false})}}
                >
                    <h2>Error!</h2>
                    <div>{this.state.errorMessage}</div>
                    <button onClick={()=>{this.setState({error : false})}}>Close</button>
                </Modal>
                <Menu
                    tree={this.state.tree}
                    setData={this.setData}
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
