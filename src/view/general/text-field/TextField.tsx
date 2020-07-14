import React from 'react';
import './text-field.css';

interface Props {
    label : string,
    onUpdate : (value : string) => void,
    value? : string,
    maxLength? : number,
    invalidChars? : RegExp
}

interface State {
    active : boolean,
    value : string
}

export default class TextField extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            active : false,
            value : this.props.value || ''
        }
    }

    focus = () => {
        this.setState({ active: true })
    }

    blur = () => {
        this.setState({ active: false })
        this.props.onUpdate(this.state.value);
    }

    handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
        let text: string = e.target.value;

        if(this.props.maxLength != null && text.length > this.props.maxLength) 
            text = text.slice(0,this.props.maxLength);
        if(this.props.invalidChars != null)
            text = text.replace(this.props.invalidChars, '');

        this.setState({value : text});
    }

    render () {
        return (
            <div className={(this.state.active) ? 'text-field active' : 'text-field'}>
                <input
                    type="text"
                    value={this.state.value}
                    placeholder={this.props.label}
                    onChange={this.handleTyping}
                    onFocus={this.focus}
                    onBlur={this.blur}
                />
            </div>
        );
    }
}