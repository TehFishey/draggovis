import React from 'react';
import { Settings, SettingsConsumer } from '../../../Settings';
import Image from '../../../general/image/Image'
import DVSelect, { menuOption } from '../../../general/select/Select'
import EditPanelPulldown from "./EditPanelPulldown";
import DropDownButton from '../../../general/dropdown/DropDownButton';
import './edit-panel.css';

import Tree from '../../../../library/controller/Tree';
import DragonNode from '../../../../library/controller/DragonNode';

import {Breeds, Swaps} from '../../../../defines/Defines';
import Controller from '../../../../controller/Controller'
import { DragonState, Gender } from '../../../../library/defines/Dragon';
import EditPanelCheckbox from './EditPanelCheckbox';
import Condition from '../../../../library/defines/Condition';
import MenuOptions from '../../../_utilities/MenuOptions';

const breedData = Breeds.dict;

interface Props {
    tree: Tree,
    node: DragonNode,
    updateTree: Function
    handleClose: Function
}
  
interface State {
    name: string,
    validate: boolean,
    genderOptions: Array<menuOption>,

}

export default class EditPanel extends React.Component<Props, State> {
    static contextType = Settings;

    constructor(props: Props){
        super(props);
  
        this.state = {
            name : this.props.node.name,
            validate: true,
            genderOptions: MenuOptions.nodeGenderOptions(this.props.node)
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

    updateName = () => {
        this.props.updateTree(
            Controller.editWindow.updateName(this.props.node.index, this.state.name, this.state.validate)
        );
    }

    updateBreed = (breedId: string) => {
        this.props.updateTree(
            Controller.editWindow.updateBreed(this.props.node.index, breedId, this.state.validate)
        );
    }

    updatePortrait = (portraitId: string) => {
        this.props.updateTree(
            Controller.editWindow.updatePortrait(this.props.node.index, portraitId, this.state.validate)
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
        // Close the popover so user can re-open correct one...
        this.props.handleClose();
    }

    createParents() {
        this.props.updateTree(
            Controller.editWindow.createParents(this.props.node.index, this.state.validate)
        );
    }

    removeParents() {
        this.props.updateTree(
            Controller.editWindow.removeParents(this.props.node.index, this.state.validate)
        );
    }

    createChild() {
        this.props.updateTree(
            Controller.editWindow.createChild(this.props.node.index, this.state.validate)
        );
    }

    removeChild() {
        this.props.updateTree(
            Controller.editWindow.removeChild(this.props.node.index, this.state.validate)
        );
    }

    swapParents() {
        this.props.updateTree(
            Controller.editWindow.invertParents(this.props.node.index, this.state.validate)
        );
    }

    setDragonState(state: DragonState) {
        let s: DragonState = (this.props.node.state === state) ? DragonState.Healthy : state;
        this.props.updateTree(
            Controller.editWindow.setDragonState(this.props.node.index, s, this.state.validate)
        );
    }

    setGender = (selectedOption: any) => {
        let gender = selectedOption.value;
        this.props.updateTree(
            Controller.editWindow.updateGender(this.props.node.index, gender, this.state.validate)
        );
    }

    componentDidUpdate() {
        if (this.state.validate !== (!this.context.disableValid))
            this.setState({validate: !this.context.disableValid});
    }

    componentDidMount() {
        this.setState({validate: !this.context.disableValid});
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
                                defaultLabel = {'Select Breed'}
                                validationNode = {(value.disableValid) ? undefined : this.props.node}
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
                            <EditPanelPulldown 
                                selectionPool={this.props.node.breed.portraits}
                                currentSelection={this.props.node.portrait}
                                defaultLabel = {'Select Portrait'}
                                validationNode = {(value.disableValid) ? undefined : this.props.node}
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
                            <EditPanelCheckbox
                                label='Kill'
                                checked={this.props.node.state === DragonState.Dead}
                                node={this.props.node}
                                onClick={()=>{this.setDragonState(DragonState.Dead)}}
                                condition={(value.disableValid || this.props.node.state === DragonState.Dead)? new Condition() : Swaps.conds.get(DragonState.Dead)}
                            />
                            <EditPanelCheckbox
                                label='Zombify'
                                checked={this.props.node.state === DragonState.Undead}
                                node={this.props.node}
                                onClick={()=>{this.setDragonState(DragonState.Undead)}}
                                condition={(value.disableValid || this.props.node.state === DragonState.Undead)? new Condition() : Swaps.conds.get(DragonState.Undead)}
                            />
                            <EditPanelCheckbox
                                label='Bite'
                                checked={this.props.node.state === DragonState.Vampire}
                                node={this.props.node}
                                onClick={()=>{this.setDragonState(DragonState.Vampire)}}
                                condition={(value.disableValid || this.props.node.state === DragonState.Vampire)? new Condition() : Swaps.conds.get(DragonState.Vampire)}
                            />
                            <EditPanelCheckbox
                                label='Neglect'
                                checked={this.props.node.state === DragonState.Neglected}
                                node={this.props.node}
                                onClick={()=>{this.setDragonState(DragonState.Neglected)}}
                                condition={(value.disableValid || this.props.node.state === DragonState.Neglected)? new Condition() : Swaps.conds.get(DragonState.Neglected)}
                            />
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