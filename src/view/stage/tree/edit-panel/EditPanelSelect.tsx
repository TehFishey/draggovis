import React from 'react';
import DVSelect, {menuOption} from '../../../general/select/Select'

import Breed from '../../../../library/defines/Breed';
import Sprite from '../../../../library/defines/Sprite';
import DragonNode from '../../../../library/model/DragonNode';

interface Props {
    selectionPool: Map<string,Breed> | Map<string,Sprite>,
    currentSelection?: Breed | Sprite,
    defaultLabel: string,
    validationNode?: DragonNode,
    validationFactors: Array<any>,
    onChange: Function,
    orderOptions : boolean
}
  
interface State {
    validOptions: Array<menuOption>,
}

export default class EditPanelSelect extends React.Component<Props, State> {
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
     * Filters through Breeds/Sprites in a dictionary (selectionPool prop), determining which are valid
     * choices for the current DragonNode (validationNode prop). If no validationNode exists, all Breeds/Sprites 
     * are considered valid. Populates menuOption array (validOptions state) with validated items.
     */
    setValidOptions() {
        let selectionPool : Array<Breed | Sprite> = [...this.props.selectionPool.values()];
        
        // If a DragonNode was input, filter selection pool by validating each Breed/Sprite against it
        if(this.props.validationNode !== undefined) {
            selectionPool = selectionPool.filter((item : Breed | Sprite)=>{
                return item.condition.validate(this.props.validationNode!);
            });

            // If currently selected Breed/Sprite is NOT in filtered pool, add it
            if(this.props.currentSelection !== undefined &&
                !selectionPool.some((item : Breed | Sprite)=>{
                   return item.id === this.props.currentSelection!.id
                })) {
                selectionPool.push(this.props.currentSelection);
            }
        }

        // Map selection pool to form used by react-select library
        let options : Array<menuOption> = selectionPool.map((item : Breed | Sprite)=>{ 
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
            <DVSelect
                value = { this.getCurrentValue() }
                options = { this.state.validOptions }
                orderOptions = { this.props.orderOptions }
                isSearchable = { true }
                onChange = { this.handleChange }
            />
        );
    }
}