import React from 'react';
import DVSelect, { menuOption } from '../../../general/select/Select'
import Breed from '../../../../library/defines/Breed';
import Sprite from '../../../../library/defines/Sprite';
import Dragon, { DragonState, Gender } from '../../../../library/defines/Dragon';

import Validation from '../../../_utilities/TemplateValidation';
import { Breeds, Sprites } from '../../../../defines/Defines';
import { Settings } from '../../../context/Settings';
import { DragProperty } from '../../../../library/controller/GeneratorProperty';

interface Props {
    property: DragProperty
    setArg: Function,
}

interface State {
    breedOptions: Array<menuOption>,
    spriteOptions: Array<menuOption>,
    selectedBreedOption: menuOption,
    selectedSpriteOption : menuOption,
    selectedBreed: Breed,
    selectedSprite: Sprite,
    selectedState: DragonState,
    validate: boolean
}

export default class TemplatePanelDragon extends React.Component<Props, State> {

    static contextType = Settings;

    constructor(props: Props) {
        super(props);

        this.state = {
            breedOptions : [],
            spriteOptions : [],
            selectedBreedOption : {value : this.props.property.default.breed.id, label: this.props.property.default.breed.label},
            selectedSpriteOption : {value: this.props.property.default.sprite.id, label: this.props.property.default.sprite.label},
            selectedBreed : this.props.property.default.breed,
            selectedSprite : this.props.property.default.sprite,
            selectedState : DragonState.Healthy,
            validate: true
        }
    }

    updateArg() {
        let arg = new Dragon(Gender.Undefined, this.state.selectedBreed, this.state.selectedSprite, this.state.selectedState)
        this.props.setArg(arg);
    }

    selectBreed = (selectedOption: any) => {
        let breed = Breeds.dict.get(selectedOption.value)!
        this.setState({
            selectedBreed : breed,
            selectedBreedOption : {value : breed.id, label: breed.label},
        }, () => {
            this.updateSpriteOptions(
                () => {this.updateArg();}
            );
        });
    }

    updateBreedOptions(callback?: () => void) {
        let options: Array<menuOption> = (this.state.validate) ? 
            Validation.setBreedOptions(this.props.property.validGender, this.state.validate) : 
            Validation.setBreedOptions(undefined, this.state.validate);
        
        this.setState({breedOptions : options}, callback)
    }

    updateSpriteOptions(callback?: () => void) {
        let options: Array<menuOption> = (this.state.validate) ? 
            Validation.setSpriteOptions(this.state.selectedBreed, this.props.property.validGender, this.state.validate) : 
            Validation.setSpriteOptions(this.state.selectedBreed, undefined, this.state.validate);
        
        this.setState({
                spriteOptions : options,
                selectedSpriteOption : options[0],
                selectedSprite : Sprites.dict.get(options[0].value)!
            }, callback
        )
    }

    selectSprite = (selectedOption: any) => {
        this.setState({
            selectedSprite : Sprites.dict.get(selectedOption.value)!,
            selectedSpriteOption : {value : selectedOption.value, label: selectedOption.label}
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
            this.updateSpriteOptions();
        });
    }

    render () {
        return (
            <div className='tpi-box-large'>
                <div className='tpi-label'>{this.props.property.label}</div>
                <div className='tpi-dragon-breed'>
                    Breed:<br/>
                    <DVSelect
                        value = { this.state.selectedBreedOption }
                        options = { this.state.breedOptions }
                        onChange = { this.selectBreed }
                        orderOptions={ true }
                    />
                </div>
                <div className='tpi-dragon-sprite'>
                    Sprite:<br/>
                    <DVSelect
                        value = { this.state.selectedSpriteOption }
                        options = { this.state.spriteOptions }
                        onChange = { this.selectSprite }
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