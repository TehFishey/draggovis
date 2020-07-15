import React from 'react';
import DVSelect, { menuOption } from '../../../general/select/Select'
import Breed from '../../../../library/defines/Breed';
import Portrait from '../../../../library/defines/Portrait';
import Dragon, { DragonState, Gender } from '../../../../library/defines/Dragon';

import Validation from '../../../_utilities/TemplateValidation';
import { Breeds, Portraits } from '../../../../defines/Defines';
import { Settings } from '../../../context/Settings';

interface Props {
    id: string,
    label: string,
    gender?: Gender,
    setArg: Function,
}

interface State {
    breedOptions: Array<menuOption>,
    portraitOptions: Array<menuOption>,
    selectedBreedOption: menuOption,
    selectedPortraitOption : menuOption,
    selectedBreed: Breed,
    selectedPortrait: Portrait,
    selectedState: DragonState,
    validate: boolean
}

export default class TemplatePanelDragon extends React.Component<Props, State> {

    static contextType = Settings;

    constructor(props: Props) {
        super(props);

        this.state = {
            breedOptions : [],
            portraitOptions : [],
            selectedBreedOption : {value : 'guardian-dragon', label: 'Guardian Dragon'},
            selectedPortraitOption : {value: 'guardian-u', label: 'Standard'},
            selectedBreed : Breeds.dict.get('guardian-dragon')!,
            selectedPortrait : Portraits.dict.get('guardian-u')!,
            selectedState : DragonState.Healthy,
            validate: true
        }
    }

    updateArg() {
        let arg = new Dragon(Gender.Undefined, this.state.selectedBreed, this.state.selectedPortrait, this.state.selectedState)
        this.props.setArg(arg);
    }

    selectBreed = (selectedOption: any) => {
        let breed = Breeds.dict.get(selectedOption.value)!
        this.setState({
            selectedBreed : breed,
            selectedBreedOption : {value : breed.id, label: breed.label},
        }, () => {
            this.updatePortraitOptions(
                () => {this.updateArg();}
            );
        });
    }

    updateBreedOptions(callback?: () => void) {
        let options: Array<menuOption> = (this.state.validate) ? 
            Validation.setBreedOptions(this.props.gender, this.state.validate) : 
            Validation.setBreedOptions(undefined, this.state.validate);
        
        this.setState({breedOptions : options}, callback)
    }

    updatePortraitOptions(callback?: () => void) {
        let options: Array<menuOption> = (this.state.validate) ? 
            Validation.setPortraitOptions(this.state.selectedBreed, this.props.gender, this.state.validate) : 
            Validation.setPortraitOptions(this.state.selectedBreed, undefined, this.state.validate);
        
        this.setState({
                portraitOptions : options,
                selectedPortraitOption : options[0],
                selectedPortrait : Portraits.dict.get(options[0].value)!
            }, callback
        )
    }

    selectPortrait = (selectedOption: any) => {
        this.setState({
            selectedPortrait : Portraits.dict.get(selectedOption.value)!,
            selectedPortraitOption : {value : selectedOption.value, label: selectedOption.label}
        },() => { this.updateArg(); });
    }
    
    selectState(state: DragonState) {
        if(state === this.state.selectedState) 
            this.setState({selectedState : DragonState.Healthy},
                () => { this.updateArg(); }
            );
        else this.setState({selectedState : state},
            () => { this.updateArg(); }
        );
    }

    componentDidUpdate() {
        if (this.state.validate !== (!this.context.disableValid))
            this.setState({validate: !this.context.disableValid});
    }

    componentDidMount() {
        this.setState({validate: !this.context.disableValid}, ()=>{
            this.updateBreedOptions();
            this.updatePortraitOptions();
        });
    }

    render () {
        return (
            <div className='tpi-box-large'>
                <div className='tpi-label'>{this.props.label}</div>
                <div className='tpi-dragon-breed'>
                    Breed:<br/>
                    <DVSelect
                        value = { this.state.selectedBreedOption }
                        options = { this.state.breedOptions }
                        onChange = { this.selectBreed }
                    />
                </div>
                <div className='tpi-dragon-portrait'>
                    Portrait:<br/>
                    <DVSelect
                        value = { this.state.selectedPortraitOption }
                        options = { this.state.portraitOptions }
                        onChange = { this.selectPortrait }
                    />
                </div>
                <div className='tpi-dragon-state'>
                    <div className='tpi-dragon-checkbox'
                        onClick={ ()=>{this.selectState(DragonState.Dead)} }
                        style={{cursor: 'default'}}
                    >
                        <input 
                            type='checkbox'
                            checked={this.state.selectedState === DragonState.Dead}
                            readOnly
                        />
                        Kill
                    </div>
                    <div className='tpi-dragon-checkbox'
                        onClick={ ()=>{this.selectState(DragonState.Undead)} }
                        style={{cursor: 'default'}}
                    >
                        <input 
                            type='checkbox'
                            checked={this.state.selectedState === DragonState.Undead}
                            readOnly
                        />
                        Zombify
                    </div>
                </div>
            </div>
        );
    }
}