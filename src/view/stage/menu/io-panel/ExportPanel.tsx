import React from 'react';
import './io-panel.css';

import Model from '../../../../controller/Model';

interface Props {
    handleClose : Function
}

interface State {
    content : string
    contentVersion : number
    contentSize : number
}

export default class ExportPanel extends React.Component<Props, State> {
    fileLink : React.RefObject<HTMLAnchorElement>

    constructor(props: Props) {
        super(props);

        this.state = {
            content : '',
            contentVersion : 0,
            contentSize : 0
        }

        this.fileLink = React.createRef();
    }

    updateContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let content: string = e.target.value;
        let contentSize: number = content.length;
        this.setState({
            content: content,
            contentSize: contentSize
        });
    }

    exportContent() {
        let content: string = Model.IOManager.export(Model.lineageSnapshot);
        let contentSize: number = content.length;
        this.setState({
            content: content,
            contentSize: contentSize
        });
    }

    saveContent = () => {
        if(this.fileLink.current != null && this.state.content !== '') {
            let file = new Blob([this.state.content], {type: 'text/plain'});
            this.fileLink.current.href = URL.createObjectURL(file);
            this.fileLink.current.download = 'draggovis_tree.txt';
            this.fileLink.current.click();
        }
    }

    handleClose = () => {
        this.props.handleClose()
    }

    componentDidMount() {
        this.exportContent();
    }

    render () {
        return (
            <div className='IO-panel'>
                <a ref={this.fileLink} style={{display: "none"}} />
                <div className='IO-feedback'>
                    <div>Lookup Version: {this.state.contentVersion}</div>
                    <div>Characters: {this.state.contentSize}</div>
                </div>
                <textarea 
                    className='IO-field'
                    value={this.state.content}
                    readOnly={true}
                />
                <div className='IO-interface'>
                    <button className='stage-button-large' onClick={this.saveContent}>Save to File...</button>
                </div>
                <button className='stage-button-small IO-close-button' onClick={this.handleClose}>Close</button>
            </div>
        );
    }
}