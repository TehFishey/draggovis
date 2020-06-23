import React from 'react';
import Select from 'react-select';

import Breed from '../../../../library/defines/Breed';
import Portrait from '../../../../library/defines/Portrait';
import DragonNode from '../../../../library/controller/DragonNode';

const targetHeight = 24;

export const styles = {
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

type menuOption = {value : string, label: string}

interface Props {
    selectionPool: Map<string,Breed> | Map<string,Portrait>,
    currentSelection?: Breed | Portrait,
    defaultLabel: string,
    validationNode?: DragonNode,
    validationFactors: Array<any>,
    onChange: Function
}
  
interface State {
    validOptions: Array<menuOption>,
}

export default class EditPanelPulldown extends React.Component<Props, State> {
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
     * Filters through Breeds/Portraits in a dictionary (selectionPool prop), determining which are valid
     * choices for the current DragonNode (validationNode prop). If no validationNode exists, all Breeds/Portraits 
     * are considered valid. Populates menuOption array (validOptions state) with validated items.
     */
    setValidOptions() {
        let selectionPool : Array<Breed | Portrait> = [...this.props.selectionPool.values()];
        
        // If a DragonNode was input, filter selection pool by validating each Breed/Portrait against it
        if(this.props.validationNode !== undefined) {
            selectionPool = selectionPool.filter((item : Breed | Portrait)=>{
                return item.condition.validate(this.props.validationNode!);
            });

            // If currently selected Breed/Portrait is NOT in filtered pool, add it
            if(this.props.currentSelection !== undefined &&
                !selectionPool.some((item : Breed | Portrait)=>{
                   return item.id === this.props.currentSelection!.id
                })) {
                selectionPool.push(this.props.currentSelection);
            }
        }

        // Map selection pool to form used by react-select library
        let options : Array<menuOption> = selectionPool.map((item : Breed | Portrait)=>{ 
            return { value: item.id, label: item.label }
        });

        // Set new selection pool to options
        this.setState({validOptions : options});
    }

    componentDidMount() {
        this.setValidOptions();
    }
    
    componentDidUpdate(prevProps: Props) {
        // Re-validating the options list can get very expensive.
        // We want to avoid doing so on each re-render; only do it if key variables have changed.
        if(this.props.validationFactors.some((object, index) => {
            return object !== prevProps.validationFactors[index];
        })) {
            this.setValidOptions();
        }
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