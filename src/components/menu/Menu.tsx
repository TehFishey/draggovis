import React from 'react';
import Tooltip from '../general/tooltip/Tooltip';
import Popover from '../general/popover/PopoverModal';
import './menu.css';

import Controller from '../../engine/controller/Controller';
import Tree from '../../engine/library/Tree';
import MenuButton from './MenuButton';

const pathRoot=`${process.env.PUBLIC_URL}icons/`

interface Props {
    tree: Tree,
    setTree: Function,
}

interface State {}

export default class Menu extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    importTree = () => {
    }

    exportTree = () => {
    }

    undo = () => {
        this.props.setTree(Controller.undo());
    }

    redo = () => {
        this.props.setTree(Controller.redo());
    }

    openTemplates = () => {
    }

    closeTemplates = () => {
    }

    resetTree = () => {
    }

    render () {
        return (
            <div className='stage-menu'>
                <div className='menu-buttons'>
                    <MenuButton
                        label={'Import'}
                        imgSrc={`${pathRoot}/import.png`}
                        onClick={this.importTree}
                    />
                    <MenuButton
                        label={'Export'}
                        imgSrc={`${pathRoot}/export.png`}
                        onClick={this.exportTree}
                    />
                    <div className='menu-spacer'/>
                    <MenuButton
                        label={'Undo'}
                        imgSrc={`${pathRoot}/undo.png`}
                        onClick={this.undo}
                    />
                    <MenuButton
                        label={'Redo'}
                        imgSrc={`${pathRoot}/redo.png`}
                        onClick={this.redo}
                    />
                    <div className='menu-spacer'/>
                    <MenuButton
                        label={'New'}
                        imgSrc={`${pathRoot}/templates.png`}
                        onClick={this.openTemplates}
                    />
                    <MenuButton
                        label={'Close'}
                        imgSrc={`${pathRoot}/reset.png`}
                        onClick={this.resetTree}
                    />
                </div>
            </div>
        );
    }
}