import React from 'react';
import TemplatePanel from './template-panel/TemplatePanel';
import IOPanel, {IOState} from './io-panel/IOPanel';
import Modal from '../general/modal/Modal';
import MenuButton from './MenuButton';
import './menu.css';

import Controller from '../../engine/controller/Controller';
import Tree from '../../engine/library/Tree';

const iconRoot=`${process.env.PUBLIC_URL}icons/`

interface Props {
    tree: Tree,
    setTree: Function,
}

interface State {
    showTemplates : boolean,
    showIO : boolean,
    IOState : IOState,
}

export default class Menu extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            showTemplates : false,
            showIO : false,
            IOState : IOState.Import
        }
    }

    importTree = () => {
        this.setState({
            IOState: IOState.Import,
            showIO : true
        });
    }

    exportTree = () => {
        this.setState({
            IOState: IOState.Export,
            showIO : true
        });
    }

    closeIO = () => {
        this.setState({
            showIO : false
        });
    }

    undo = () => {
        this.props.setTree(Controller.undo());
    }

    redo = () => {
        this.props.setTree(Controller.redo());
    }

    openTemplates = () => {
        this.setState({
            showTemplates : true
        });
    }

    closeTemplates = () => {
        this.setState({
            showTemplates : false
        });
    }

    resetTree = () => {
    }

    render () {
        return (
            <div className='stage-menu'>
                <Modal 
                    show = {this.state.showIO}
                    handleClose = {this.closeIO}
                    children = {(
                        <IOPanel 
                            IOState = {this.state.IOState}
                            setData = {this.props.setTree}
                        />
                    )}
                />
                <Modal 
                    show = {this.state.showTemplates}
                    handleClose = {this.closeTemplates}
                    children = {(
                        <TemplatePanel />
                    )}
                />
                <div className='menu-buttons'>
                    <MenuButton
                        label={'Import'}
                        imgSrc={`${iconRoot}/import.png`}
                        onClick={this.importTree}
                    />
                    <MenuButton
                        label={'Export'}
                        imgSrc={`${iconRoot}/export.png`}
                        onClick={this.exportTree}
                    />
                    <div className='menu-spacer'/>
                    <MenuButton
                        label={'Undo'}
                        imgSrc={`${iconRoot}/undo.png`}
                        onClick={this.undo}
                    />
                    <MenuButton
                        label={'Redo'}
                        imgSrc={`${iconRoot}/redo.png`}
                        onClick={this.redo}
                    />
                    <div className='menu-spacer'/>
                    <MenuButton
                        label={'New'}
                        imgSrc={`${iconRoot}/templates.png`}
                        onClick={this.openTemplates}
                    />
                    <MenuButton
                        label={'Close'}
                        imgSrc={`${iconRoot}/reset.png`}
                        onClick={this.resetTree}
                    />
                </div>
            </div>
        );
    }
}