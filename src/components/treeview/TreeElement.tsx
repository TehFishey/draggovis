import React from 'react';
import Popover from './popover/Popover';
import Tooltip from './tooltip/Tooltip';
import EditWindow from './popover/PopoverEditWindow';
import {debounce} from '../../utilities/Limiters';
import DragonNode from '../../engine/library/DragonNode';

type windowCoordinates = {x: number, y: number}

enum parent {
    father = 'father',
    mother = 'mother'
}

interface Props {
    data: DragonNode,
    getCanvasRef: Function,
    onChange: Function
}
  
interface State {
    imgRect: any,
    showPopover: boolean,
    showTooltip: boolean
}

export default class TreeNode extends React.Component<Props, State> {

    canvasRef: React.RefObject<HTMLDivElement>;
    imgRef: React.RefObject<HTMLImageElement>;
    
    constructor(props: Props) {
        super(props);

        this.state = {
            imgRect : {x : 0, y : 0, width : 0, height : 0},
            showPopover : false,
            showTooltip : false,
        }
        
        this.imgRef = React.createRef();
        this.canvasRef = this.props.getCanvasRef();

        this.updatePosition = this.updatePosition.bind(this);
    }

    displayPopover(show: boolean) {
        this.setState({showPopover : show});
    }

    displayTooltip(show: boolean) {
        if(this.props.data.meta.failedValidation)
            this.setState({showTooltip : show});
    }

    writeTooltip() {
        if(this.props.data.meta.validationWarning !== undefined) {
            let warnings: Array<JSX.Element> = []
            this.props.data.meta.validationWarning.forEach((tooltip: string)=>{
                warnings.push(<div>{tooltip}</div>)
            })
            return (<div>{warnings}</div>);
        }
        return (<div></div>);
    }

    update2(e?: Event) {
        if(this.imgRef.current) {
            let rect = this.imgRef.current.getBoundingClientRect();
            this.setState(
                {imgRect : {
                    x : rect.x,
                    y : rect.y,
                    width : rect.width,
                    height : rect.height
                }}
            )
        }
    }

    updatePosition = debounce((e: Event) => { 
        if(this.imgRef.current) {
            let rect = this.imgRef.current.getBoundingClientRect();
            this.setState(
                {imgRect : {
                    x : rect.x,
                    y : rect.y,
                    width : rect.width,
                    height : rect.height
                }}
            )
        }
    }, 500);

    calcPopoverLoc() {
        let coords : windowCoordinates = {x : 0, y : 0};

        coords.x = this.state.imgRect.x + (this.state.imgRect.width * 0.5);
        coords.y = this.state.imgRect.y + (this.state.imgRect.height * 0.5);

        return coords;
    }

    calcTooltipLoc() {
        let px = this.state.imgRect.x + this.state.imgRect.width;
        let py = this.state.imgRect.y;
        return {x : px, y : py}
    }

    internalDataUpdate(updatedData: any) {
        let newData = updatedData;
        newData.meta.updated = true;
        this.props.onChange(newData);
    }

    recursiveDataUpdate(sourceParent: parent, parentData: DragonNode) {
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
                    onChange={(parentData: DragonNode) => this.recursiveDataUpdate(parent.father, parentData)}
                />),
                (<TreeNode 
                    data={this.props.data.mother} 
                    getCanvasRef={this.props.getCanvasRef}
                    onChange={(parentData: DragonNode) => this.recursiveDataUpdate(parent.mother, parentData)}
                />)
            ];
            return (<ul className='tree-unit-parents'>{parents}</ul>);
        }
        return null;
    }

    componentDidMount() {
        this.updatePosition();
        window.addEventListener("resize", this.updatePosition);
        this.canvasRef.current!.addEventListener("scroll", this.update2);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.update2);
        this.canvasRef.current!.removeEventListener("scroll", this.update2);
    }

    render () {
        return ( 
            <li className='tree-unit'>
                <Popover 
                    show={this.state.showPopover} 
                    loc={this.calcPopoverLoc()}
                    content={ <EditWindow data={this.props.data} update={(popoverData: DragonNode) => this.internalDataUpdate(popoverData)}/> } 
                    handleClose={()=>{this.displayPopover(false)}} 
                />
                <Tooltip
                    show={this.state.showTooltip} 
                    loc={this.calcTooltipLoc()}
                    content={this.writeTooltip()} 
                />
                <div className='tree-unit-display'>
                    <img 
                        className={(this.props.data.meta.failedValidation) ? 'tree-unit-display-portrait invalid-portrait' : 'tree-unit-display-portrait'}
                        onClick={()=>{this.displayPopover(true)}} 
                        onMouseOver={()=>{this.displayTooltip(true)}}
                        onMouseOut={()=>{this.displayTooltip(false)}}
                        ref={this.imgRef}
                        src={process.env.PUBLIC_URL + 'portraits/' + ((this.props.data.portrait !== undefined) ? 
                                                                     this.props.data.portrait.thumbPath : 
                                                                     "testDrag.png")} 
                        alt={this.props.data.name + "'s portrait"} 
                    />
                    <label className='tree-unit-display-label'>{(this.props.data.name) ? this.props.data.name : "(code)"}</label>
                </div>
                {this.buildParentComponents()}
            </li>
        );
    }
}