import React from 'react';
import Popover from './popover/Popover';
import PopoverContent from './popover/PopoverContent';
import {debounce} from '../../utilities/Limiters';

export default class TreeNode extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showPopover: false,
            loc: {x : 0, y : 0}
        }
        
        this.imgRef = React.createRef();
        this.canvasRef = this.props.getCanvasRef();

        this.updatePosition = this.updatePosition.bind(this);
    }

    displayPopover(show) {
        this.setState({showPopover : show});
    }

    updatePosition = debounce(() => { 
        if(this.imgRef.current) {
            let rect = this.imgRef.current.getBoundingClientRect();
            this.setState(
                {loc : {
                    x : (rect.x + (rect.width * 0.5)),
                    y : (rect.y + (rect.height * 0.5))
                }}
            )
        }
    }, 500);

    internalDataUpdate(updatedData) {
        this.props.onChange(updatedData);
    }

    recursiveDataUpdate(sourceParent, parentData) {
        let newData = this.props.data;
        newData[sourceParent] = parentData;
        this.props.onChange(newData);
    }

    buildParentComponents() {
        if(this.props.data.father !== undefined && this.props.data.mother !== undefined) {
            let parents = [
                (<TreeNode 
                    data={this.props.data.father} 
                    getCanvasRef={this.props.getCanvasRef}
                    onChange={(parentData) => this.recursiveDataUpdate(this.props.data.father, parentData)}
                />),
                (<TreeNode 
                    data={this.props.data.mother} 
                    getCanvasRef={this.props.getCanvasRef}
                    onChange={(parentData) => this.recursiveDataUpdate(this.props.data.mother, parentData)}
                />)
            ];
            return (<ul className='tree-unit-parents'>{parents}</ul>);
        }
        return null;
    }

    componentDidMount() {
        this.updatePosition();
        window.addEventListener("resize", this.updatePosition);
        this.canvasRef.current.addEventListener("scroll", this.updatePosition);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePosition);
        this.canvasRef.current.removeEventListener("scroll", this.updatePosition);
    }

    render () {
        

        return ( 
            <li className='tree-unit'>
                <Popover 
                    show={this.state.showPopover} 
                    children={
                        <PopoverContent 
                            data={this.props.data} 
                            update={(popoverData) => this.internalDataUpdate(popoverData)}
                        /> 
                    } 
                    loc={this.state.loc}
                    handleClose={()=>{this.displayPopover(false)}} 
                />
                <div className='tree-unit-display'>
                    <img 
                        className='tree-unit-display-portrait'
                        onClick={()=>{this.displayPopover(true)}} 
                        ref={this.imgRef}
                        src={process.env.PUBLIC_URL + 'portraits/' + ((this.props.data.portraitObject !== undefined) ? 
                                                                     this.props.data.portraitObject.thumbPath : 
                                                                     "testDrag.png")} 
                        alt={this.props.data.name + "'s portrait"} 
                    />
                    <label className='tree-unit-display-label'>{this.props.data.name}</label>
                </div>
                {this.buildParentComponents()}
            </li>
        );
    }
}