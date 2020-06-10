import React from 'react';
import DVSelect from "./PopoverSelectMenu";
import './popover-edit-window.css';

import {Breeds} from '../../../engine/data/Model';
import DragonNode from '../../../engine/library/DragonNode';
import Breed from '../../../engine/library/Breed';
import Portrait from '../../../engine/library/Portrait';

const breedData = Breeds;

enum fieldName {
    name = 'name',
    gender = 'gender',
    breed = 'breed',
    portrait = 'portrait',
    father = 'father',
    mother = 'mother',
    meta = 'meta'
}

interface Props {
    data: DragonNode,
    update: Function
}
  
interface State {
    name: string,
    validateBreeds: boolean,
    validatePortraits: boolean
}

export default class EditWindow extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
  
        this.state = {
            name : this.props.data.name,
            validateBreeds : true,
            validatePortraits : true
        }

    }
  
    updateField(fieldName: fieldName, fieldValue: any) {
        let newData = this.props.data;
        newData[fieldName] = fieldValue;
      
        this.props.update(newData);
    }

    createParents() {
        if (this.props.data.father === undefined && 
            this.props.data.mother === undefined) {
                let newData = this.props.data;
                newData.father = new DragonNode("Male", this.props.data.breed);
                newData.father.portrait = this.getDefaultPortrait(newData.father);
                newData.mother = new DragonNode("Female", this.props.data.breed);
                newData.mother.portrait = this.getDefaultPortrait(newData.mother);
                this.props.update(newData);
        }
    }

    removeParents() {
        let newData = this.props.data;
        newData.father = undefined;
        newData.mother = undefined;
        this.props.update(newData);
    }
  
    onBreedChange(breed: Breed) {
        let newData = this.props.data;
        newData.breed = breed;
        newData.portrait = this.getDefaultPortrait(newData);
        this.props.update(newData);
    }

    getDefaultPortrait(dragonData: DragonNode) {
        // Convert portraits dict to array of form [[key,value], [key,value] ... ] for iteration
        let portraits = Object.entries(dragonData.breed.portraits);

        let validPortraits = portraits.filter((keyValue) => {
            return keyValue[1].condition.validate(dragonData) && keyValue[1].isDefault
        });
        return validPortraits[0][1];
    }

    render() {
        return (
            <div>
                <div className='popover-title'>
                    <h3>{(this.props.data.name !== "") ? this.props.data.name : "Unnamed Dragon"}</h3>
                </div>
                <div className='popover-body'>
                    <div className="grid-wrapper">
                        <div className="box a">
                            <img 
                                src={process.env.PUBLIC_URL + 'portraits/' + ((this.props.data.portrait !== undefined) ? this.props.data.portrait.imagePath : "testDrag.png")} 
                                alt={this.props.data.name + "'s portrait"} 
                            />
                        </div>
                        <div className="box b">
                            <div>
                                Name: <input
                                    type="text"
                                    value={this.state.name}
                                    onChange={e => {this.setState({name: e.target.value})}}
                                    onBlur={() => this.updateField(fieldName.name, this.state.name)}
                                />
                                <div>Gender: {this.props.data.gender}</div>
                                <div>
                                    <DVSelect 
                                        selectionPool={breedData.dict}
                                        currentSelection={this.props.data.breed}
                                        defaultLabel = {'Select Breed'}
                                        validationObject = {(this.state.validateBreeds) ? this.props.data : undefined}
                                        validationFactors = {[
                                            this.props.data.gender,
                                            ((this.props.data.father !== undefined) ? this.props.data.father.breed : null),
                                            ((this.props.data.mother !== undefined) ? this.props.data.mother.breed : null)
                                        ]}
                                        onChange={(breed: Breed)=>{ this.onBreedChange(breed)}}
                                    />
                                </div>
                                <div>
                                    <DVSelect 
                                        selectionPool={this.props.data.breed.portraits}
                                        currentSelection={this.props.data.portrait}
                                        defaultLabel = {'Select Portrait'}
                                        validationObject = {(this.state.validatePortraits) ? this.props.data : undefined}
                                        validationFactors = {[
                                            this.props.data.breed,
                                            this.props.data.gender,
                                            ((this.props.data.father !== undefined) ? this.props.data.father.portrait : null),
                                            ((this.props.data.mother !== undefined) ? this.props.data.mother.portrait : null)
                                        ]}
                                        onChange={(portrait: Portrait)=>{ this.updateField(fieldName.portrait, portrait)}}
                                    />
                                </div>
                            </div>
                            <div className="box c"></div>
                            <div className="box d">
                                <button 
                                    className="newParents"
                                    onClick={() => {this.createParents()}}>
                                    Add Parents
                                </button>
                                <button 
                                    className="removeParents"
                                    onClick={() => {this.removeParents()}}>
                                    Remove Parents
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}