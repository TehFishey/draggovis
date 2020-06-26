import React from 'react';
import {createPortal} from "react-dom";
import './popover-modal.css';

const overlay = document.getElementById("overlay-A");

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
    
    closeModal = (e: Event | React.MouseEvent) => {
        this.props.handleClose();
    }

    clickWithin = (e: Event | React.MouseEvent) => {
        e.stopPropagation();
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
                <div className='popover-overlay' onClick={this.closeModal}>
                    <div className='popover-modal'
                        ref={this.componentRef}
                        style={{ transform : `translate(${this.state.pos.x}px, ${this.state.pos.y}px)`}}
                        onClick={this.clickWithin}>
                        <div className='popover-content'>{this.props.content}</div>
                    </div>
                </div>), overlay!)}
            </>
        );
    }
}