import React from 'react';
import './io-panel.css';

import Controller from '../../../../controller/Controller';

interface Props {
    setData : Function
    handleClose : Function
}

interface State {
    content : string
    contentVersion : number
    contentSize : number
}

export default class ImportPanel extends React.Component<Props, State> {
    fileInput : React.RefObject<HTMLInputElement>

    constructor(props: Props) {
        super(props);

        this.state = {
            content : '',
            contentVersion : 0,
            contentSize : 0
        }

        this.fileInput = React.createRef();
    }

    updateContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let content: string = e.target.value;
        let contentSize: number = content.length;
        this.setState({
            content: content,
            contentSize: contentSize
        });
    }

    importContent = () => {
        this.props.setData(Controller.IOManager.import(this.state.content));
        this.props.handleClose();
    }

    selectFile = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(this.fileInput.current != null) {
            this.fileInput.current!.click();
        }
    }

    loadFile = () => {
        if(this.fileInput.current != null && this.fileInput.current.files != null && this.fileInput.current.files[0] != null) {
            let file: File = this.fileInput.current.files[0];
            if(file.type.includes('text')) {
                file.text().then(
                    (content: string) => {
                        this.setState({content : content});
                    }
                ).catch();
            }
        }
    }

    handleClose = () => {
        this.props.handleClose()
    }

    render () {
        return (
            <div className='IO-panel'>
                <input 
                    type="file" 
                    ref={this.fileInput} 
                    style={{display: "none"}}
                    accept=".txt"
                    onChange={this.loadFile}    
                />
                <div className='IO-feedback'>
                    <div>Lookup Version: {this.state.contentVersion}</div>
                    <div>Characters: {this.state.contentSize}</div>
                </div>
                <textarea 
                    className='IO-field'
                    value={this.state.content}
                    readOnly={false}
                    onChange={this.updateContent}
                />
                <div className='IO-interface'>
                <button className='IO-interface-button' onClick={this.importContent}>Submit</button>
                    <button className='IO-interface-button' onClick={this.selectFile}>Load from File...</button>
                </div>
                <div className='IO-interface-button IO-close-button' onClick={this.handleClose}>Close</div>
            </div>
        );
    }
}