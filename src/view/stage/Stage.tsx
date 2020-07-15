import React from 'react';
import TreeElement from './tree/TreeElement';
import Menu from './menu/Menu';
import Sidebar from './sidebar/Sidebar';
import './tree/tree.css';
import './stage.css';

import Tree from '../../library/model/Tree';
import Model from '../../model/Model'
import GenCounter from './gens/GenCounter';
import { executionOutput } from '../../model/Model';
import ErrorModal from './error-window/ErrorWindow';
import { DataProvider } from '../context/DataManager';
import Controller from '../../controller/Controller';

interface Props {}

interface State {
    tree: Tree;
    error : boolean;
    errorMessage : string;
}

export default class Stage extends React.Component<Props, State> {
    readonly PrimaryModel : Model;
    readonly PrimaryController : Controller;

    constructor(props: Props) {
        super(props);

        this.state = {
            tree: Model.getDefaultTree(),
            error : false,
            errorMessage : ''
        }

        this.PrimaryModel = new Model();
        this.PrimaryController = new Controller(this.PrimaryModel);
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
                <ErrorModal 
                    show={this.state.error}
                    message={this.state.errorMessage}
                    handleClose={()=>{this.setState({error : false})}}
                />
                <DataProvider model={this.PrimaryModel} controller={this.PrimaryController}>
                    <Menu
                        tree={this.state.tree}
                        setData={this.setData}
                    />
                    <Sidebar
                        tree={this.state.tree}
                    />
                    <div className='stage-canvas'>
                        <GenCounter gens={this.state.tree.genLength()}/>
                        <div className="lineage-tree">
                            <ul id ="tree-root">
                                <TreeElement
                                node={this.state.tree[0]!}
                                setData={this.setData}
                                />
                            </ul>
                        </div>
                    </div>
                </DataProvider>
            </div>
        );
    }
}
