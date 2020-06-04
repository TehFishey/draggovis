import React from 'react';
import Select from 'react-select';

export default class DragonSelect extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentValue : null,
            optionsList : null
        }
        this.handleChange = this.handleChange.bind(this)
    }
  
    getCurrentValue() {
        if(this.props.currentSelection !== undefined)
            return {value : this.props.currentSelection.id, label : this.props.currentSelection.label};
        return {value : "", label : this.props.defaultLabel};
    }

    getOptionsList() {
        // Convert selection pool dict to array of form [[key,value], [key,value] ... ] for iteration
        let selectionPool = Object.entries(this.props.selectionPool);
        

        // If a validation object was input, filter selection pool by validating each object against it
        if(this.props.validationObject) {
            selectionPool = selectionPool.filter((keyValue)=>{
                return keyValue[1].validate(this.props.validationObject);
            });

            // If currently selected object is NOT in filtered pool, add it
            if(this.props.currentSelection.id !== undefined &&
                !selectionPool.some((keyValue)=>{
                   return keyValue[0] === this.props.currentSelection.id
                })) {
                selectionPool.push([this.props.currentSelection.id, this.props.currentSelection]);
            }
        }

        // Map selection pool to form used by react-select
        let options = selectionPool.map((item)=>{ 
            return { value: item[0], label: item[1].label }});
        return options;
    }

    componentDidMount() {
        this.setState({
            currentValue : this.getCurrentValue(),
            optionsList : this.getOptionsList()
        })
    }
    
    componentDidUpdate(prevProps) {
        // Re-validating the options list can be computationally expensive.
        // We want to avoid doing so on each re-render; only do it if key variables have changed.
        if (this.props.selectionPool !== prevProps.selectionPool || 
            this.props.validationObject !== prevProps.validationObject || 
            this.props.currentSelection !== prevProps.currentSelection) {
            this.setState({
                currentValue : this.getCurrentValue(),
                optionsList : this.getOptionsList()
            })
        }
    }
    
    handleChange(selectedOption) {
        this.props.onChange(this.props.selectionPool[selectedOption.value]);
    }

    render() {
        return (
            <Select
                name = "dragonTypeSelect"
                value = { this.state.currentValue }
                options = { this.state.optionsList }
                isSearchable = { true }
                onChange = { this.handleChange }
            />
        );
    }
}