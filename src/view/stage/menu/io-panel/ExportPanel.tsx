import React from 'react';
import './io-panel.css';

import Model from '../../../../model/Model';
import { DataManager } from '../../../context/DataManager';

interface Props {
    handleClose : Function
}

interface State {
    content : string,
    contentVersion : number
}

export default class ExportPanel extends React.Component<Props, State> {
    static contextType = DataManager;
    private model? : Model | null;

    fileLink : React.RefObject<HTMLAnchorElement>

    constructor(props: Props) {
        super(props);

        this.state = {
            content : '',
            contentVersion : 0,
        }

        this.fileLink = React.createRef();
    }

    updateContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let content: string = e.target.value;
        this.setState({
            content: content,
        });
    }

    exportContent() {
        let content: string = this.model!.IOManager.export();
        this.setState({
            content: content,
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
        this.model = this.context.model;
        this.setState({contentVersion : this.model!.IOVersion});
        this.exportContent();
    }

    render () {
        return (
            <div className='IO-panel'>
                <div className='modal-title'>Export Lineage</div>
                <div className='modal-body'>
                    <p>To save your lineage, select the lineage code below (ctrl+a) and copy it to a safe location. You may save the code to a text file using the "Save File" button.</p>
                    <p>Note: Lineage codes are case and whitespace sensitive. Be sure not to add any additional spaces or line breaks to your code by accident!</p>
                </div>
                <div className='IO-feedback'>
                    <div>IO Key Version: {this.state.contentVersion}</div>
                </div>
                <textarea 
                    className='IO-field'
                    value={this.state.content}
                    readOnly={true}
                />
                <div className='IO-interface'>
                    <button className='stage-button-large' onClick={this.saveContent}>Save File</button>
                </div>
                <a ref={this.fileLink} style={{display: "none"}} />
            </div>
        );
    }
}