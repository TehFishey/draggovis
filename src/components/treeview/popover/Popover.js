import React from 'react';
import {createPortal} from "react-dom";
import './popover.css';

const overlay = document.getElementById("overlay");

export default class Popover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pos : {
                x : 0,
                y : 0
            }
        }

    }
    
    handleClose(e) {
        e.stopPropagation();
        this.props.handleClose();
    }

    adjustPosition() {
        let newX = this.props.loc.x - (this.elementRef.clientWidth * 0.5);
        let newY = this.props.loc.y - (this.elementRef.clientHeight * 0.5);
        if(this.state.pos.x !== newX || this.state.pos.y !== newY) {
            this.setState({
                pos : {
                    x : newX,
                    y : newY
                }
            });
        }
    }

    componentDidMount() {
        if(this.props.show)
            this.adjustPosition();
    }

    componentDidUpdate() {
        if(this.props.show)
            this.adjustPosition();
    }

    render () {
        if (!this.props.show) {return null;}
        return ( 
            <>
            {createPortal((
                <div 
                    className='popover-window'
                    ref={(elementRef) => {this.elementRef = elementRef}}
                    style={{ transform : `translate(${this.state.pos.x}px, ${this.state.pos.y}px)` }}
                >
                    <div className='popover-content'>{this.props.children}</div>
                    <button 
                        className='popover-close'
                        onClick={(e)=>{this.handleClose(e)}}>
                            Close
                    </button>
                </div>), overlay)}
            </>
        );
    }
}