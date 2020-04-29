import React from 'react';
import Popover from 'react-bootstrap/Popover';
import DragonSelect from './DragonSelect';
import DragonObject from '../../data/DragonObject';
import './EditWindow.css';

export default class EditWindow extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        name: props.data.name,
        breed: props.data.breed,
      }

      console.log({props});
    }

    onFieldChange(fieldName, fieldValue) {
      let newData = this.props.data;
      newData[fieldName] = fieldValue;
    
      this.props.update(newData);
    }

    onButtonClick(callback) {
      let newData = callback(this.props.data);
      this.props.update(newData);
    }

    render() {
      return (
        <Popover id="6x" 
          placement={this.props.placement}
          style={this.props.style}
          arrowProps={this.props.arrowProps}
          className={this.props.className}
          outOfBoundaries={this.props.outOfBoundaries}
        >
          <Popover.Title>{(this.props.data.name !== "") ? this.props.data.name : "Unnamed Dragon"}</Popover.Title>
          <Popover.Content>
              <div className="grid-wrapper">
              <div className="box a">
                <img 
                  src={process.env.PUBLIC_URL + 'portraits/' + this.props.data.portraitObject.imagePath} 
                  alt={this.props.data.name + "'s portrait"} 
                />
              </div>
              <div className="box b">
                <div>Name: <input
                    type="text"
                    value={this.state.name}
                    onChange={e => {this.setState({name: e.target.value})}}
                    onBlur={() => this.onFieldChange('name', this.state.name)}
                  />
                </div>
                <div>Gender: {this.props.data.gender}</div>
                <div>Breed: <DragonSelect 
                  breedObject={this.state.breed}
                  onChange={(breedObject)=>{ this.onFieldChange('breed',breedObject)}
                  }
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
                  onClick={e => this.onButtonClick( (data) => {
                    if (data.father === undefined && data.mother === undefined) {
                      data.father = new DragonObject("Male");
                      data.mother = new DragonObject("Female")
                      return data;
                    }
                  })}>
                    Add Parents
                </button>
                <button 
                  type="button" 
                  className="removeParents"
                  onClick={e => this.onButtonClick( (data) => {
                    data.mother = undefined;
                    data.father = undefined;
                    return data;
                  })}>
                    Remove Parents
                </button>
              </div>
            </div>   
          </Popover.Content>
        </Popover>
      );
    }
}