import React from 'react';
import DVSelect, { menuOption } from '../../../general/select/Select'
import { NumProperty } from '../../../../library/controller/GeneratorProperty';

interface Props {
    property: NumProperty
    setArg: Function
}

interface State {
    numberOptions: Array<menuOption>,
    selectedNumber: number,
}

function numberOption(number: number) : menuOption {
    return {value: number.toString(), label: number.toString()}
}

export default class TemplatePanelNumber extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            numberOptions: [],
            selectedNumber: this.props.property.options[0],
        }
    }

    setNumberOptions() {
        let options: Array<menuOption> = [];
        this.props.property.options.forEach((option: number) => {
            options.push(numberOption(option));
        })
        this.setState({numberOptions : options});
    }

    updateArg() {
        let arg: number = this.state.selectedNumber;
        this.props.setArg(arg);
    }

    selectNumber = (selectedOption: any) => {
        this.setState({selectedNumber : Number.parseInt(selectedOption.value)},
            () => { this.updateArg(); }
        );
    }

    componentDidMount() {
        this.setNumberOptions();
    }


    render () {
        return (
            <div className='tpi-box-small'>
                <div className='tpi-label'>{this.props.property.label}</div>
                <div className='tpi-number-select'>
                    <DVSelect
                        value = { numberOption(this.state.selectedNumber) }
                        options = { this.state.numberOptions }
                        onChange = { this.selectNumber }
                    />
                </div>
            </div>
        );
    }
}