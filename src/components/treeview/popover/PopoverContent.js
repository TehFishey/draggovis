import React from 'react';
import DragonSelect from "./SelectDragonPulldown";
import Dragon from '../../../engine/library/Dragon';
import './tree-element-popover.css';

export default class PopoverContent extends React.Component {
    constructor(props){
        super(props);
  
        this.state = {
            name: props.data.name,
            breedObject: props.data.breedObject,
        }
      }
  
    updateField(fieldName, fieldValue) {
        let newData = this.props.data;
        newData[fieldName] = fieldValue;
      
        this.props.update(newData);
    }
  
    updateAll(callback) {
        let newData = callback(this.props.data);
        this.props.update(newData);
    }
  
    onBreedChange(breedObject) {
        let portraits = Object.entries(breedObject.portraits);
        let validPortraits = portraits.filter((item) => {
            return item[1].condition(this.props.data) && item[1].isDefault
        });
  
        this.updateField('breedObject',breedObject);
        this.updateField('portraitObject', validPortraits[0][1]);
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
                                src={process.env.PUBLIC_URL + 'portraits/' + ((this.props.data.portraitObject !== undefined) ? this.props.data.portraitObject.imagePath : "testDrag.png")} 
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
                                    Breed: <DragonSelect 
                                        breedObject={this.state.breedObject}
                                        onChange={(breedObject)=>{ this.onBreedChange(breedObject)}}
                                    />
                                </div>
                                <div>Portrait: ART SELECTOR HERE</div>
                            </div>
                            <div className="box c"></div>
                            <div className="box d">
                                <button 
                                    type="button" 
                                    text=""
                                    className="newParents"
                                    onClick={e => this.updateAll( (data) => {
                                        if (data.father === undefined && data.mother === undefined) {
                                            data.father = new Dragon("Male");
                                            data.mother = new Dragon("Female")
                                            return data;
                                        }
                                })}>
                                    Add Parents
                                </button>
                                <button 
                                    type="button" 
                                    className="removeParents"
                                    onClick={e => this.updateAll( (data) => {
                                        data.mother = undefined;
                                        data.father = undefined;
                                        return data;
                                })}>
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