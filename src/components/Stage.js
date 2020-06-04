import React from 'react';
import DragonElement from './treeview/TreeElement';
import './treeview/tree-root.css';
import './stage.css';

import testData from '../TestData';

console.log(testData);

export default class Stage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: testData,
            renderCanvas : false
        }

        this.canvasRef = React.createRef();
        this.getCanvasRef = this.getCanvasRef.bind(this);
    }

    getCanvasRef() {
        return this.canvasRef;
    }

    componentDidMount() {
        if(!this.state.renderCanvas) this.setState({renderCanvas : true});
    }

    render () {
        return ( 
            <div className='app-stage'>
                <div className='stage-top-menu'></div>
                <div className='stage-side-menu'></div>
                <div className='stage-canvas' ref={this.canvasRef}>
                    {(this.state.renderCanvas) ? (
                        <div className="lineage-tree">
                            <ul id ="tree-root">
                                <DragonElement 
                                data={this.state.data}
                                getCanvasRef={this.getCanvasRef}
                                onChange={(data) => this.setState({data})}
                                />
                            </ul>
                        </div> ) : null}
                </div>    
            </div>
        );
    }
}