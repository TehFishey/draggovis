import React from 'react';
import Select from 'react-select';

import Breed from '../../../../library/defines/Breed';
import Portrait from '../../../../library/defines/Portrait';
import DragonNode from '../../../../library/controller/DragonNode';

type menuOption = {value : string, label: string}

interface Props {
    selectionPool: Map<string,Breed> | Map<string,Portrait>,
    currentSelection?: Breed | Portrait,
    defaultLabel: string,
    validationObject?: DragonNode,
    validationFactors: Array<any>,
    onChange: Function
}
  
interface State {
    validOptions: Array<menuOption>,
}

const targetHeight = 24;

const styles = {
  control: (base: any) => ({
    ...base,
    minHeight: 'initial',
    borderColor: 'hsl(0,0%,80%)',
    borderRadius: '2px',
    borderWidth: '0px',
    borderBottom: 'solid 1px #101010'
  }),
  valueContainer: (base: any)  => ({
    ...base,
    height: `${targetHeight - 1 - 1}px`,
    padding: '0 8px',
  }),
  clearIndicator: (base: any)  => ({
    ...base,
    padding: `${(targetHeight - 20 - 1 - 1) / 2}px`,
  }),
  dropdownIndicator: (base: any)  => ({
    ...base,
    padding: `${(targetHeight - 20 - 1 - 1) / 2}px`,
  }),
};

export default class DVSelect extends React.Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            validOptions : []
        }
        this.handleChange = this.handleChange.bind(this)
    }
  
    getCurrentValue(): menuOption {
        if(this.props.currentSelection !== undefined)
            return {value : this.props.currentSelection.id, label : this.props.currentSelection.label};
        return {value : "", label : this.props.defaultLabel};
    }
    
    /**
     * Iterates through Breeds/Portraits in a dictionary (selectionPool prop), determining which are valid
     * for the current DragonNode (validationObject prop, optional). If no DragonNode was input, all Breeds/Portraits 
     * are considered valid. Populates menuOption array (validOptions state) for each valid option found.
     */
    setValidOptions() {
        // Convert selection pool dict to array of form [[key,value], [key,value] ... ] for iteration
        let selectionPool : Array<Breed | Portrait> = [...this.props.selectionPool.values()];
        
        // If a validation object was input, filter selection pool by validating each object against it
        if(this.props.validationObject !== undefined) {
            selectionPool = selectionPool.filter((item : Breed | Portrait)=>{
                return item.condition.validate(this.props.validationObject!);
            });

            // If currently selected object is NOT in filtered pool, add it
            if(this.props.currentSelection !== undefined &&
                !selectionPool.some((item : Breed | Portrait)=>{
                   return item.id === this.props.currentSelection!.id
                })) {
                selectionPool.push(this.props.currentSelection);
            }
        }

        // Map selection pool to form used by react-select
        let options : Array<menuOption> = selectionPool.map((item : Breed | Portrait)=>{ 
            return { value: item.id, label: item.label }
        });
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
        this.props.onChange(selectedOption.value);
    }

    render() {
        return (
            <Select
                name = "react-select-menu"
                styles={styles}
                value = { this.getCurrentValue() }
                options = { this.state.validOptions }
                isSearchable = { true }
                onChange = { this.handleChange }
            />
        );
    }
}