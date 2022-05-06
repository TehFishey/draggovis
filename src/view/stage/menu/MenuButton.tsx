import React from 'react';

interface Props {
    label : string,
    imgSrc : string,
    onClick: Function
}

interface State {}

export default class MenuButton extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {}
    }

    onClick = () => { this.props.onClick() }

    render () {
        return (
            <div className="menu-button" 
                onClick={this.onClick} >
                <div className="menu-button-image"
                    style={{
                        backgroundImage : `url(${this.props.imgSrc})`,
                        backgroundRepeat : 'no-repeat', 
                        backgroundPosition : '50% 50%'
                    }}/>
                <div>
                    <label className="menu-button-label">{this.props.label}</label>
                </div>
            </div>
        );
    }
}