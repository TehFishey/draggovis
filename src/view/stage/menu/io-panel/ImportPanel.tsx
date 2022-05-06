import React from 'react';
import './io-panel.css';

import { executionOutput } from '../../../../model/Model';
import ImportPanelOperator from '../../../../controller/operators/ImportPanelOperator';
import { DataManager } from '../../../context/DataManager';

interface Props {
    setData : (response: Promise<executionOutput>) => void
    handleClose : Function
}

interface State {
    content : string
}

export default class ImportPanel extends React.Component<Props, State> {
    static contextType = DataManager;
    private operator? : ImportPanelOperator | null;
    
    fileInput : React.RefObject<HTMLInputElement>

    constructor(props: Props) {
        super(props);

        this.state = {
            content : '',
        }

        this.fileInput = React.createRef();
    }

    updateContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let content: string = e.target.value;
        this.setState({
            content: content,
        });
    }

    importContent = () => {
        if(this.operator != null) {
            this.props.setData(this.operator.import(this.state.content));
            this.props.handleClose();
        }
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

    componentDidMount() {
        this.operator = this.context.controller.importPanel;
    }

    render () {
        return (
            <div className='IO-panel'>
                <div className='modal-title'>Import Lineage</div>
                <div className='modal-body'>
                    <p>To load a lineage, paste a valid lineage code into the text box below, or load a text file using the 'Load File' button.</p>
                    <p>Note: If your code doesn't load, try removing any spaces or returns that you may have accidently added (such as a space or return at the end of the code)</p>
                </div>
                <input 
                    type="file" 
                    ref={this.fileInput} 
                    style={{display: "none"}}
                    accept=".txt"
                    onChange={this.loadFile}    
                />
                <textarea 
                    className='IO-field'
                    value={this.state.content}
                    readOnly={false}
                    onChange={this.updateContent}
                />
                <div className='IO-interface'>
                    <button className='stage-button-large' onClick={this.importContent}>Submit</button>
                    <button className='stage-button-large' onClick={this.selectFile}>Load File</button>
                </div>
            </div>
        );
    }
}