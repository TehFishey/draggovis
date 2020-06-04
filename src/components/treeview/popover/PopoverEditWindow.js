import React from 'react';
import SelectMenu from "./PopoverSelectMenu";
import Dragon from '../../../engine/library/Dragon';
import './popover-edit-window.css';

import BreedData from '../../../engine/data/BreedData';

const breedData = BreedData();

export default class EditWindow extends React.Component {
    constructor(props){
        super(props);
  
        this.state = {
            name: this.props.data.name,
        }

    }
  
    updateField(fieldName, fieldValue) {
        let newData = this.props.data;
        newData[fieldName] = fieldValue;
      
        this.props.update(newData);
    }

    createParents() {
        if (this.props.data.father === undefined && 
            this.props.data.mother === undefined) {
                let newData = this.props.data;
                newData.father = new Dragon("Male", this.props.data.breed);
                newData.father.portrait = this.getDefaultPortrait(newData.father);
                newData.mother = new Dragon("Female", this.props.data.breed);
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
  
    onBreedChange(breed) {
        this.updateField('breed',breed);
        this.updateField('portrait', this.getDefaultPortrait(this.props.data));
    }

    getDefaultPortrait(dragonData) {
        let portraits = Object.entries(dragonData.breed.portraits);
        let validPortraits = portraits.filter((item) => {
            return item[1].condition(dragonData) && item[1].isDefault
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
                                    onBlur={() => this.updateField('name', this.state.name)}
                                />
                                <div>Gender: {this.props.data.gender}</div>
                                <div>
                                    <SelectMenu 
                                        selectData={breedData}
                                        defaultLabel = {'Select Breed'}
                                        selectObject={this.props.data.breed}
                                        onChange={(breed)=>{ this.onBreedChange(breed)}}
                                    />
                                </div>
                                <div>
                                    <SelectMenu 
                                        selectData={this.props.data.breed.portraits}
                                        defaultLabel = {'Select Portrait'}
                                        selectObject={this.props.data.portrait}
                                        onChange={(portrait)=>{ this.updateField('portrait', portrait)}}
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