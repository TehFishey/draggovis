import React from 'react';
import {createPortal} from "react-dom";
import './tooltip.css';

const overlay = document.getElementById("overlay");

type windowCoordinates = {x: number, y: number}

interface Props {
    show: boolean,
    loc: windowCoordinates,
    content: JSX.Element,
}
  
interface State {}

export default class Tooltip extends React.Component<Props,State> {
    
    componentRef: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.componentRef = React.createRef();
    }

    render () {
        if (!this.props.show) {return null;}
        return ( 
            <>
            {createPortal((
                <div 
                    className='tooltip'
                    ref={this.componentRef}
                    style={{ transform : `translate(${this.props.loc.x}px, ${this.props.loc.y}px)` }}
                >
                    <div className='tooltip-content'>{this.props.content}</div>
                </div>), overlay!)}
            </>
        );
    }
}