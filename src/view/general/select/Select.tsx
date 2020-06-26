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
    className? : string;
    value : menuOption,
    options : Array<menuOption>,
    isSearchable?: boolean,
    isDisabled? : boolean,
    onChange : (selectedOption: any) => any
}

interface State {}

export default class DVSelect extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {}
    }

    render () {
        return (
            <Select
                name = "react-select-menu"
                maxMenuHeight = {220}
                menuPortalTarget = {overlay}
                className = {'react-select-menu '+this.props.className}
                styles={ styles }
                value = { this.props.value }
                options = { this.props.options }
                isDisabled = { this.props.isDisabled }
                isSearchable = { this.props.isSearchable }
                onChange = { this.props.onChange }
            />
        );
    }
}