import React from 'react';
import './io-panel.css';

import Controller from '../../../engine/controller/Controller';

export enum IOState {
    Import = 'import',
    Export = 'export'
}

interface Props {
    IOState : IOState,
    setData : Function
}

interface State {
    content : string
    contentVersion : number
    contentSize : number
}

export default class IOPanel extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            content : '',
            contentVersion : 0,
            contentSize : 0
        }
    }

    updateContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let content: string = e.target.value;
        let contentSize: number = content.length;
        let contentVersion: number;
        this.setState({
            content: content,
            contentSize: contentSize
        });
    }

    exportContent() {
        let content: string = Controller.IOManager.export();
        let contentSize: number = content.length;
        this.setState({
            content: content,
            contentSize: contentSize
        });
    }

    importContent = () => {
        this.props.setData(Controller.IOManager.import(this.state.content));
    }

    componentDidMount() {
        if(this.props.IOState === 'export')
            this.exportContent();
    }

    render () {
        return (
            <div className='IO-panel'>
                <div className='IO-feedback'>
                    <div>Lookup Version: {this.state.contentVersion}</div>
                    <div>Characters: {this.state.contentSize}</div>
                </div>
                <div className='IO-interface'>
                    <textarea 
                        className='IO-field'
                        value={this.state.content}
                        readOnly={(this.props.IOState === 'import') ? false : true}
                        onChange={this.updateContent}/>
                    <button
                        style={(this.props.IOState === 'import') ? {} : {display : 'None'}}
                        onClick={this.importContent}
                    >
                        Import
                    </button>
                </div>
                
                
            </div>
        );
    }
}