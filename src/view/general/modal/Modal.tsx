import React from 'react';
import {createPortal} from "react-dom";
import './modal.css';

const overlay = document.getElementById("overlay-A");

interface Props {
    show: boolean,
    handleClose: Function
}
  
interface State {}

export default class Modal extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {}
    }
    
    closeModal = (e: Event | React.MouseEvent) => {
        this.props.handleClose();
    }

    clickWithin = (e: Event | React.MouseEvent) => {
        e.stopPropagation();
    }

    render () {
        if (!this.props.show) {return null;}
        return ( 
            <>
            {createPortal((
                <div className='modal-overlay' onClick={this.closeModal}>
                    <div className='modal-window' onClick={this.clickWithin}>
                        <div className='modal-content'>{this.props.children}</div>
                    </div>
                </div>), overlay!)}
            </>
        );
    }
}