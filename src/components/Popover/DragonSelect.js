import React from 'react';
import Select from 'react-select';
import DragonData from '../../data/DragonData';

const dragonData = DragonData();
const options = Object.entries(dragonData).map((item)=>{ 
    return { value: item[0], label: item[1].name }
});

export default class DragonSelect extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        value: {
          value: (props.breed !== undefined) ? props.breed.breed.breed : "",
          label: (props.breed !== undefined) ? props.breed.breed.name : "Select Breed"
        }
      }   
    }
  
  handleChange(selectedOption) {
    this.setState({value: selectedOption});
    this.props.onChange({breed: dragonData[selectedOption.value]});
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