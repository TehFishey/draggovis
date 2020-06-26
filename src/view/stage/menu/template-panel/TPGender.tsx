import React from 'react';
import DVSelect, { menuOption } from '../../../general/select/Select'
import { Gender } from '../../../../library/defines/Dragon';


const genderOptions: Array<menuOption> = [
    {label: Gender.Male, value: Gender.Male},
    {label: Gender.Female, value: Gender.Female}
]

interface Props {
    id: string,
    label: string,
    setArg: Function
}

interface State {
    selectedGender: Gender
}

export default class TemplatePanelGender extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            selectedGender : Gender.Female
        }
    }

    updateArg() {
        let arg = this.state.selectedGender
        this.props.setArg(arg);
    }

    selectGender = (selectedOption: any) => {
        this.setState({selectedGender : selectedOption.value!},
            () => { this.updateArg(); }
        );    
        this.updateArg();
    }

    render () {
        return (
            <div className='tpi-box-small'>
                <div className='tpi-label'>{this.props.label}:</div>
                <div className='tpi-gender'>
                    <DVSelect
                        value = { {value: this.state.selectedGender, label: this.state.selectedGender} }
                        options = { genderOptions }
                        onChange = { this.selectGender }
                    />
                </div>
            </div>
        );
    }
}