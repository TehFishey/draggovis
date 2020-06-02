import React from 'react';
import Select from 'react-select';
import BreedData from '../../../engine/data/BreedData';

const breedData = BreedData();
const options = Object.entries(breedData).map((item)=>{ 
    return { value: item[0], label: item[1].label }
});

export default class DragonSelect extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        value: {
          value: (props.breedObject !== undefined) ? props.breedObject.id : "",
          label: (props.breedObject !== undefined) ? props.breedObject.label : "Select Breed"
        }
      }   
    }
  
  handleChange(selectedOption) {
    this.setState({value: selectedOption});
    this.props.onChange(breedData[selectedOption.value]);
  }

  render() {
     return (
      <Select
        name = "dragonTypeSelect"
        value = { this.state.value }
        options = { options }
        isSearchable = { true }
        onChange = { this.handleChange.bind(this) }
      />
    );
  }
}