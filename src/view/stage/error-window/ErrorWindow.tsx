import React from 'react';
import Modal from '../../general/modal/Modal';
import './error-window.css';

interface Props {
    show: boolean,
    message: string,
    handleClose: Function
}

interface State {}

export default class ErrorModal extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {}
    }

    handleClose = () => {
        this.props.handleClose();
    }

    render () {
        return (
            <Modal
                show={this.props.show}
                handleClose={this.handleClose}
            >
                <div className='error-window-title'>Error</div>
                <div className='error-window-message'>{this.props.message}</div>
                <button className='stage-button-small' onClick={this.handleClose}>Close</button>
            </Modal>
        );
    }
}