import React from 'react';
import DragonElement from './treeview/TreeElement';
import './treeview/tree-root.css';
import './stage.css';

import testData from '../TestData';

export default class Stage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: testData,
        }
    }

    render () {
        return ( 
            <div className='app-stage'>
                <div className='stage-top-menu'></div>
                <div className='stage-side-menu'></div>
                <div className='stage-canvas'>
                    <div className="lineage-tree">
                        <ul id ="tree-root">
                            <DragonElement 
                            data={this.state.data} 
                            onChange={(data) => this.setState({data})}
                            />
                        </ul>
                    </div>
                </div>    
            </div>
        );
    }
}