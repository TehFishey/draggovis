import React from 'react';
import {createPortal} from "react-dom";
import './tooltip.css';

const overlay = document.getElementById("overlay");

export default class Popover extends React.Component {

    render () {
        if (!this.props.show) {return null;}
        return ( 
            <>
            {createPortal((
                <div 
                    className='tooltip'
                    ref={(elementRef) => {this.elementRef = elementRef}}
                    style={{ transform : `translate(${this.props.loc.x}px, ${this.props.loc.y}px)` }}
                >
                    <div className='tooltip-content'>{this.props.content}</div>
                </div>), overlay)}
            </>
        );
    }
}