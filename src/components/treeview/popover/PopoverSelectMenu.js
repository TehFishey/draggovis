import React from 'react';
import Select from 'react-select';

export default class DragonSelect extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: {
                value: (this.props.selectObject !== undefined) ? this.props.selectObject.id : "",
                label: (this.props.selectObject !== undefined) ? this.props.selectObject.label : this.props.defaultLabel
            }, 
        }

        this.handleChange = this.handleChange.bind(this)
    }
  
    getCurrentValue() {
        if(this.props.selectObject !== undefined)
            return {value : this.props.selectObject.id, label : this.props.selectObject.label};
        return {value : "", label : this.props.defaultLabel};
    }

    getOptionsList() {
        let options = Object.entries(this.props.selectData).map((item)=>{ 
            return { value: item[0], label: item[1].label }
        })
        return options;
    }

    handleChange(selectedOption) {
        this.setState({value: selectedOption});
        this.props.onChange(this.props.selectData[selectedOption.value]);
    }

    render() {
        return (
            <Select
                name = "dragonTypeSelect"
                value = { this.getCurrentValue() }
                options = { this.getOptionsList() }
                isSearchable = { true }
                onChange = { this.handleChange }
            />
        );
    }
}