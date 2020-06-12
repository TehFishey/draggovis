import React from 'react';
import Select from "./EditPanelSelect";
import { SettingsConsumer } from '../../../Settings';
import './edit-panel.css';

import Tree from '../../../engine/library/Tree';
import Portrait from '../../../engine/library/Portrait';
import DragonNode from '../../../engine/library/DragonNode';

import {Breeds} from '../../../engine/data/Model';
import Controller from '../../../engine/controller/Controller'
import DropDownButton from '../../general/dropdown/DropDownButton';

const breedData = Breeds.dict;

interface Props {
    tree: Tree,
    node: DragonNode,
    updateTree: Function
}
  
interface State {
    name: string,
}

export default class EditPanel extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
  
        this.state = {
            name : this.props.node.name,
        }

    }

    getNameLabel() : string {
        return (this.props.node.name !== "") ? this.props.node.name : "Unnamed Dragon";
    }

    onImgError = (e:any)=> {
        e.target.onerror = null; 
        e.target.src="image_path_here"
    }

    
    typeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        let name: string = e.target.value;
        if(name.length>22) name = name.slice(0,22);
        this.setState({name: name});
    }

    updateBreed = (breedId: string) => {
        this.props.updateTree(
            Controller.editWindow.updateBreed(this.props.node.index, breedId)
        );
    }

    updateName = () => {
        this.props.updateTree(
            Controller.editWindow.updateName(this.props.node.index, this.state.name)
        );
    }

    updatePortrait = (portraitId: string) => {
        this.props.updateTree(
            Controller.editWindow.updatePortrait(this.props.node.index, portraitId)
        );
    }

    addRemoveParents = () => {
        if(this.props.node.hasParents())
            this.removeParents();
        else
            this.createParents();
    }

    createParents() {
        this.props.updateTree(
            Controller.editWindow.createParents(this.props.node.index)
        );
    }

    removeParents() {
        this.props.updateTree(
            Controller.editWindow.removeParents(this.props.node.index)
        );
    }

    render() {
        return (
            <div className='edit-panel'>
                <div className='edit-panel-body'>
                    <div className='ep-image'
                        style={{
                            backgroundImage : `url(${Portrait.getLargeImg(this.props.node.portrait)})`,
                            backgroundRepeat : 'no-repeat', 
                            backgroundPosition : '50% 50%'}}/>
                    <div className='ep-label'>{this.getNameLabel()}</div>
                    <SettingsConsumer> 
                    {value => { return (
                        <div className='ep-properties'>
                            <div className='ep-props-label' style={{gridArea: 'n-label'}}>Name</div>
                            <div className='ep-props-control' style={{gridArea: 'n-set'}}>
                                <input
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.typeName}
                                    onBlur={this.updateName}
                                />
                            </div>
                            <div className='ep-props-label' style={{gridArea: 'g-label'}}>Gender</div>
                            <div className='ep-props-control' style={{gridArea: 'g-set'}}>
                                {this.props.node.gender}
                            </div>
                            <div className='ep-props-label' style={{gridArea: 'b-label'}}>Breed</div>
                            <div className='ep-props-control' style={{gridArea: 'b-set'}}>
                                <Select 
                                    selectionPool={breedData}
                                    currentSelection={this.props.node.breed}
                                    defaultLabel = {'Select Breed'}
                                    validationObject = {(value.disableValid) ? undefined : this.props.node}
                                    validationFactors = {[
                                        this.props.node.gender,
                                        ((this.props.node.father() !== undefined) ? this.props.node.father()!.breed : null),
                                        ((this.props.node.mother() !== undefined) ? this.props.node.mother()!.breed : null)
                                    ]}
                                    onChange={this.updateBreed}
                                />
                            </div>
                            <div className='ep-props-label' style={{gridArea: 'p-label'}}>Art</div>
                            <div className='ep-props-control' style={{gridArea: 'p-set'}}>
                                <Select 
                                    selectionPool={this.props.node.breed.portraits}
                                    currentSelection={this.props.node.portrait}
                                    defaultLabel = {'Select Portrait'}
                                    validationObject = {(value.disableValid) ? undefined : this.props.node}
                                    validationFactors = {[
                                        this.props.node.breed,
                                        this.props.node.gender,
                                        ((this.props.node.father() !== undefined) ? this.props.node.father()!.portrait : null),
                                        ((this.props.node.mother() !== undefined) ? this.props.node.mother()!.portrait : null)
                                    ]}
                                    onChange={this.updatePortrait}
                                />
                            </div>
                        </div>
                    )}}
                    </SettingsConsumer>
                    <div className='ep-toggles'>
                        <div>
                            <input type='checkbox'/>Zombify
                        </div>
                        <div>
                            <input type='checkbox'/>Bite
                        </div>
                        <div>
                            <input type='checkbox'/>Neglect
                        </div>
                    </div>
                    <div className='ep-controls'>
                        <div className='ep-cont-label'>Actions:</div>
                        <button 
                            style={{gridArea: 'addp'}}
                            onClick={this.addRemoveParents}>
                            Add/Remove Parents
                        </button>
                        <button 
                            style={{gridArea: 'remp'}}
                            >
                            Add/Remove Child
                        </button>
                        <DropDownButton
                            label='Ancestors...'
                            data={[
                                {label: 'Copy', onClick: new Function()},
                                {label: 'Paste', onClick: new Function()},
                                {label: 'Invert', onClick: new Function()}
                                ]}
                            />
                    </div>
                </div>
            </div>
        );
    }
}