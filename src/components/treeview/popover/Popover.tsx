import React from 'react';
import {createPortal} from "react-dom";
import './popover.css';

const overlay = document.getElementById("overlay");

type windowCoordinates = {x: number, y: number}

interface Props {
    show: boolean,
    loc: windowCoordinates,
    content: JSX.Element,
    handleClose: Function
}
  
interface State {
    pos: windowCoordinates,
}

export default class Popover extends React.Component<Props, State> {
    
    componentRef: React.RefObject<HTMLDivElement>;
    
    constructor(props: Props) {
        super(props);
        this.state = {
            pos : {
                x : 0,
                y : 0
            }
        }

        this.componentRef = React.createRef();
    }
    
    handleClose(e: Event | React.MouseEvent) {
        e.stopPropagation();
        this.props.handleClose();
    }

    adjustPosition() {
        let newX = this.props.loc.x - (this.componentRef.current!.clientWidth * 0.5);
        let newY = this.props.loc.y - (this.componentRef.current!.clientHeight * 0.5);
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
                    ref={this.componentRef}
                    style={{ transform : `translate(${this.state.pos.x}px, ${this.state.pos.y}px)` }}
                >
                    <div className='popover-content'>{this.props.content}</div>
                    <button 
                        className='popover-close'
                        onClick={(e)=>{this.handleClose(e)}}>
                            Close
                    </button>
                </div>), overlay!)}
            </>
        );
    }
}