import React from 'react';
import Select from 'react-select';

interface Props {
    selectionPool: any,
    currentSelection: any,
    defaultLabel: any,
    validationObject: any,
    validationFactors: Array<any>,
    onChange: Function
}
  
interface State {
    validOptions: any,
}

export default class DVSelect extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            validOptions : null
        }
        this.handleChange = this.handleChange.bind(this)
    }
  
    getCurrentValue() {
        if(this.props.currentSelection !== undefined)
            return {value : this.props.currentSelection.id, label : this.props.currentSelection.label};
        return {value : "", label : this.props.defaultLabel};
    }

    setValidOptions() {
        // Convert selection pool dict to array of form [[key,value], [key,value] ... ] for iteration
        let selectionPool : Array<Array<any>> = Object.entries(this.props.selectionPool);
        
        // If a validation object was input, filter selection pool by validating each object against it
        if(this.props.validationObject) {
            selectionPool = selectionPool.filter((keyValue)=>{
                return keyValue[1].condition.validate(this.props.validationObject);
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
        this.setState({validOptions : options});
    }

    componentDidMount() {
        this.setValidOptions();
    }
    
    componentDidUpdate(prevProps: Props) {
        // Re-validating the options list can be computationally expensive.
        // We want to avoid doing so on each re-render; only do it if key variables have changed.
        if(this.props.validationFactors.some((object, index) => {
            return object !== prevProps.validationFactors[index];
        })) {
            this.setValidOptions();
        }
        
        /*
        (
            this.props.selectionPool !== prevProps.selectionPool || 
            this.props.validationObject !== prevProps.validationObject || 
            this.props.currentSelection !== prevProps.currentSelection))
            */ 
    }
    
    handleChange(selectedOption: any) {
        this.props.onChange(this.props.selectionPool[selectedOption.value]);
    }

    render() {
        return (
            <Select
                name = "dragonTypeSelect"
                value = { this.getCurrentValue() }
                options = { this.state.validOptions }
                isSearchable = { true }
                onChange = { this.handleChange }
            />
        );
    }
}