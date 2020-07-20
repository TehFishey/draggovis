import React from 'react';
import Select from 'react-select'

export type menuOption = {value : string, label: string}

const overlay = document.getElementById("overlay-B");
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

interface Props {
    className? : string,
    options : Array<menuOption>,
    value : menuOption,
    orderOptions? : boolean,
    isSearchable?: boolean,
    isDisabled? : boolean,
    onChange : (selectedOption: any) => any
}

interface State {
    options : Array<menuOption>
    value : menuOption
}

export default class DVSelect extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
          options : this.props.options,
          value : this.props.value
        }
    }

    getValue(options : Array<menuOption>) : menuOption {
        let value : menuOption = this.props.value;

        options.some((option: menuOption, index: number) => {
            if(option.value === value.value && option.label === value.label) {
                value = options[index];
                return true;
            }
            return false;
        })

        return value;
    }

    updateOptions() {
        let options : Array<menuOption> = this.props.options.slice();
        let value : menuOption = this.getValue(options);

        if(this.props.orderOptions) {
            options.sort((a, b) => {
                if(a.label < b.label) { return -1; }
                if(a.label > b.label) { return 1; }
                return 0
            });
        }
        this.setState({
            options : options,
            value : value
        });
    }

    componentDidMount() {
        this.updateOptions()
    }

    componentDidUpdate(prevProps : Props, prevState : State) {
        if(this.props.options !== prevProps.options) 
            this.updateOptions();
        else if(this.props.value !== prevProps.value)
            this.setState({value : this.getValue(this.state.options)});
    }

    render () {
        return (
            <Select
                name = "react-select-menu"
                maxMenuHeight = {220}
                menuPortalTarget = { overlay }
                className = {'react-select-menu '+this.props.className}
                styles={ styles }
                value = { this.state.value }
                options = { this.state.options }
                isDisabled = { this.props.isDisabled }
                isSearchable = { this.props.isSearchable }
                onChange = { this.props.onChange }
            />
        );
    }
}