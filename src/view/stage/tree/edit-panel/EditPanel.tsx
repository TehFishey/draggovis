import React from 'react';
import Image from '../../../general/image/Image'
import Select from "./EditPanelSelect";
import DropDownButton from '../../../general/dropdown/DropDownButton';
import { SettingsConsumer } from '../../../Settings';
import './edit-panel.css';

import Tree from '../../../../library/controller/Tree';
import DragonNode from '../../../../library/controller/DragonNode';

import {Breeds} from '../../../../defines/Defines';
import Controller from '../../../../controller/Controller'
import { DragonState } from '../../../../library/defines/Dragon';

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

    addRemoveChild = () => {
        if(this.props.node.index === 0)
            this.createChild();
        else
            this.removeChild();
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

    createChild() {
        console.log(`creating child for ${this.props.node.index}`);
        this.props.updateTree(
            Controller.editWindow.createChild(this.props.node.index)
        );
    }

    removeChild() {
        this.props.updateTree(
            Controller.editWindow.removeChild(this.props.node.index)
        );
    }

    swapParents() {
        this.props.updateTree(
            Controller.editWindow.invertParents(this.props.node.index)
        );
    }

    setDragonState(state: DragonState) {
        let s: DragonState = (this.props.node.state === state) ? DragonState.Healthy : state;
        this.props.updateTree(
            Controller.editWindow.setDragonState(this.props.node.index, s)
        );
    }

    render() {
        return (
            <div className='edit-panel'>
            <SettingsConsumer> 
                {value => { return (
                <div className='edit-panel-body'>
                    <div className='ep-image'>
                        <Image node={this.props.node} time={value.caveTime}/>
                    </div>
                    <div className='ep-label'>{this.getNameLabel()}</div>
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
                    <div className='ep-toggles'>
                            <div onClick={e=>{this.setDragonState(DragonState.Dead)}} style={{cursor: 'default'}}>
                                <input type='checkbox'
                                    checked={this.props.node.state === DragonState.Dead}
                                    readOnly
                                />
                                Kill
                            </div>
                            <div onClick={e=>{this.setDragonState(DragonState.Undead)}} style={{cursor: 'default'}}>
                                <input type='checkbox'
                                    checked={this.props.node.state === DragonState.Undead}
                                    readOnly
                                />
                                Zombify
                            </div>
                            <div onClick={e=>{this.setDragonState(DragonState.Vampire)}} style={{cursor: 'default'}}>
                                <input type='checkbox'
                                    checked={this.props.node.state === DragonState.Vampire}
                                    readOnly
                                />
                                Bite
                            </div>
                            <div onClick={e=>{this.setDragonState(DragonState.Neglected)}} style={{cursor: 'default'}}>
                                <input type='checkbox'
                                    checked={this.props.node.state === DragonState.Neglected}
                                    readOnly
                                />
                                Neglect
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
                                onClick={this.addRemoveChild}>
                                Add/Remove Child
                            </button>
                            <DropDownButton
                                label='Ancestors...'
                                data={[
                                    {label: 'Copy', onClick: new Function()},
                                    {label: 'Paste', onClick: new Function()},
                                    {label: 'Invert', onClick: ()=>{this.swapParents()}}
                                    ]}
                                />
                        </div>
                </div>
                )}}
            </SettingsConsumer>
            </div>
        );
    }
}