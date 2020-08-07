import React from 'react';
import { SettingsConsumer } from '../../../context/Settings';
import Image from '../../../general/image/Image'
import DVSelect, { menuOption } from '../../../general/select/Select'
import EditPanelPulldown from "./EditPanelSelect";
import './edit-panel.css';

import DragonNode from '../../../../library/model/DragonNode';

import {Breeds, Swaps} from '../../../../defines/Defines';
import { DragonState } from '../../../../library/defines/Dragon';
import EditPanelCheckbox from './EditPanelCheckbox';
import Condition from '../../../../library/defines/Condition';
import MenuOptions from '../../../_utilities/MenuOptions';
import { executionOutput } from '../../../../model/Model';
import TextField from '../../../general/text-field/TextField';
import { DataManager } from '../../../context/DataManager';

import EditPanelOperator from '../../../../controller/operators/EditPanelOperator';

const breedData = Breeds.dict;

interface Props {
    node: DragonNode,
    setData: (data: Promise<executionOutput>) => void,
    handleClose: Function
}
  
interface State {
    name: string,
    genderOptions: Array<menuOption>,

}

export default class EditPanel extends React.Component<Props, State> {
    static contextType = DataManager;
    private operator? : EditPanelOperator | null;

    constructor(props: Props){
        super(props);
  
        this.state = {
            name : this.props.node.name,
            genderOptions: MenuOptions.nodeGenderOptions(this.props.node)
        }
    }

    getNameLabel() : string {
        return (this.props.node.name !== "") ? this.props.node.name : "Unnamed Dragon";
    }

    handleNameUpdate = (name : string, validate? : boolean) => {
        if(this.operator != null)
            this.props.setData(
                this.operator.updateName(this.props.node.index, name, validate)
            );
    }

    handleBreedUpdate = (breedId: string, validate? : boolean) => {
        if(this.operator != null)
            this.props.setData(
                this.operator.updateBreed(this.props.node.index, breedId, validate)
            );
    }

    handleSpriteUpdate = (spriteId: string, validate : boolean) => {
        if(this.operator != null)
            this.props.setData(
                this.operator.updateSprite(this.props.node.index, spriteId, validate)
            );
    }

    handleParentsUpdate = (validate? : boolean) => {
        if(this.props.node.hasParents())
            this.removeParents(validate);
        else
            this.createParents(validate);
    }

    handleChildUpdate = (validate? : boolean) => {
        if(this.props.node.index === 0)
            this.createChild(validate);
        else
            this.removeChild(validate);
        // Close the popover so user can re-open correct one...
        this.props.handleClose();
    }

    handleParentsMirror = (validate? : boolean) => {
        if(this.operator != null)
            this.props.setData(
                this.operator.invertParents(this.props.node.index, validate)
            );
    }

    createParents(validate? : boolean) {
        if(this.operator != null)
            this.props.setData(
                this.operator.createParents(this.props.node.index, validate)
            );
    }

    removeParents(validate? : boolean) {
        if(this.operator != null)
            this.props.setData(
                this.operator.removeParents(this.props.node.index, validate)
            );
    }

    createChild(validate? : boolean) {
        if(this.operator != null)
            this.props.setData(
                this.operator.createChild(this.props.node.index, validate)
            );
    }

    removeChild(validate? : boolean) {
        if(this.operator != null)
            this.props.setData(
                this.operator.removeChild(this.props.node.index, validate)
            );
    }

    setDragonState(state: DragonState, validate? : boolean) {
        if(this.operator != null) {
            let s: DragonState = (this.props.node.state === state) ? DragonState.Healthy : state;
            this.props.setData(
                this.operator.setDragonState(this.props.node.index, s, validate)
            );
        }
    }

    setGender = (selectedOption: any, validate? : boolean) => {
        if(this.operator != null) {
            let gender = selectedOption.value;
            this.props.setData(
                this.operator.updateGender(this.props.node.index, gender, validate)
            );
        }
    }

    componentDidMount() {
        this.operator = this.context.controller.editPanel;
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
                            <TextField
                                label={'Name'}
                                value={this.props.node.name}
                                onUpdate={this.handleNameUpdate}
                                maxLength={32}
                                invalidChars={/[^a-zA-Z0-9 \-+']/g}
                            />
                        </div>
                        <div className='ep-props-label' style={{gridArea: 'g-label'}}>Gender</div>
                        <div className='ep-props-control' style={{gridArea: 'g-set'}}>
                            <DVSelect
                                isDisabled = { (this.props.node.index === 0) ? false : true }
                                value = { {value: this.props.node.gender, label: this.props.node.gender} }
                                options = { MenuOptions.nodeGenderOptions(this.props.node) }
                                onChange = { this.setGender }
                            />
                        </div>
                        <div className='ep-props-label' style={{gridArea: 'b-label'}}>Breed</div>
                        <div className='ep-props-control' style={{gridArea: 'b-set'}}>
                            <EditPanelPulldown 
                                selectionPool={breedData}
                                currentSelection={this.props.node.breed}
                                orderOptions={true}
                                defaultLabel = {'Select Breed'}
                                validationNode = {(value.disableValid) ? undefined : this.props.node}
                                validationFactors = {[
                                    this.props.node.gender,
                                    ((this.props.node.father() !== undefined) ? this.props.node.father()!.breed : null),
                                    ((this.props.node.mother() !== undefined) ? this.props.node.mother()!.breed : null)
                                ]}
                                onChange={this.handleBreedUpdate}
                            />
                        </div>
                        <div className='ep-props-label' style={{gridArea: 'p-label'}}>Sprite</div>
                        <div className='ep-props-control' style={{gridArea: 'p-set'}}>
                            <EditPanelPulldown 
                                selectionPool={this.props.node.breed.sprites}
                                currentSelection={this.props.node.sprite}
                                orderOptions={false}
                                defaultLabel = {'Select Sprite'}
                                validationNode = {(value.disableValid) ? undefined : this.props.node}
                                validationFactors = {[
                                    this.props.node.breed,
                                    this.props.node.gender,
                                    ((this.props.node.father() !== undefined) ? this.props.node.father()!.sprite : null),
                                    ((this.props.node.mother() !== undefined) ? this.props.node.mother()!.sprite : null)
                                ]}
                                onChange={this.handleSpriteUpdate}
                            />
                        </div>
                    </div>
                    <div className='ep-toggles'>
                            <EditPanelCheckbox
                                label='Kill'
                                checked={this.props.node.state === DragonState.Dead}
                                node={this.props.node}
                                onClick={()=>{this.setDragonState(DragonState.Dead,!value.disableValid)}}
                                condition={(value.disableValid || this.props.node.state === DragonState.Dead)? new Condition() : Swaps.conds.get(DragonState.Dead)}
                            />
                            <EditPanelCheckbox
                                label='Zombify'
                                checked={this.props.node.state === DragonState.Undead}
                                node={this.props.node}
                                onClick={()=>{this.setDragonState(DragonState.Undead,!value.disableValid)}}
                                condition={(value.disableValid || this.props.node.state === DragonState.Undead)? new Condition() : Swaps.conds.get(DragonState.Undead)}
                            />
                            <EditPanelCheckbox
                                label='Bite'
                                checked={this.props.node.state === DragonState.Vampire}
                                node={this.props.node}
                                onClick={()=>{this.setDragonState(DragonState.Vampire,!value.disableValid)}}
                                condition={(value.disableValid || this.props.node.state === DragonState.Vampire)? new Condition() : Swaps.conds.get(DragonState.Vampire)}
                            />
                            <EditPanelCheckbox
                                label='Neglect'
                                checked={this.props.node.state === DragonState.Neglected}
                                node={this.props.node}
                                onClick={()=>{this.setDragonState(DragonState.Neglected,!value.disableValid)}}
                                condition={(value.disableValid || this.props.node.state === DragonState.Neglected)? new Condition() : Swaps.conds.get(DragonState.Neglected)}
                            />
                        </div>
                    <div className='ep-controls'>
                            <div className='ep-cont-label'>Relatives:</div>
                            <button 
                                className='stage-button-small ep-cont-button'
                                style={{gridArea: 'addp'}}
                                onClick={() => {this.handleParentsUpdate(!value.disableValid)}}>
                                Add/Remove Parents
                            </button>
                            <button 
                                className='stage-button-small ep-cont-button'
                                style={{gridArea: 'remp'}}
                                onClick={() => {this.handleChildUpdate(!value.disableValid)}}>
                                Add/Remove Child
                            </button>
                            <button 
                                className='stage-button-small ep-cont-button'
                                onClick={() => {this.handleParentsMirror(!value.disableValid)}}>
                                Mirror Ancestors
                            </button>
                        </div>
                </div>
                )}}
            </SettingsConsumer>
            </div>
        );
    }
}