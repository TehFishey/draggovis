import React from 'react';
<<<<<<< Updated upstream:src/components/treeview/TreeElement.tsx
import Popover from './popover/Popover';
import Tooltip from './tooltip/Tooltip';
import EditWindow from './popover/PopoverEditWindow';
import {debounce} from '../../utilities/Limiters';
import DragonNode from '../../engine/library/DragonNode';
=======
import Popover from '../general/popover/PopoverModal';
import Tooltip from '../general/tooltip/Tooltip';
import EditWindow from './edit-panel/EditPanel';
import Draggable, { DropEffect } from '../general/drag-drop/Draggable';
import Droppable from '../general/drag-drop/Droppable';
import { SettingsConsumer, DragDrop } from '../../Settings';

import DragonNode from '../../engine/library/DragonNode';
import Tree from '../../engine/library/Tree';
import Controller from '../../engine/controller/Controller';
import Portrait from '../../engine/library/Portrait';
>>>>>>> Stashed changes:src/components/tree/TreeElement.tsx

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
    imgRect: {x: number, y: number, width: number, height: number},
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

    internalDataUpdate(updatedData: DragonNode) {
        let newData = updatedData;
        newData.meta.updated = true;
        this.props.onChange(newData);
    }
<<<<<<< Updated upstream:src/components/treeview/TreeElement.tsx

    recursiveDataUpdate(sourceParent: parent, parentData: DragonNode) {
        let newData = this.props.data;
        newData[sourceParent] = parentData;
        this.props.onChange(newData);
=======
    
    updateTree(newData: Tree) {
        this.props.setData(newData);
>>>>>>> Stashed changes:src/components/tree/TreeElement.tsx
    }

    executeDrop(type : DragDrop, index : string) {
        let dragI: number = +index;
        let dropI: number = this.props.node.index;

        if(type === DragDrop.CopyOne) this.updateTree(Controller.dragDrop.copyOne(dragI, dropI));
        else if(type === DragDrop.CopySet) this.updateTree(Controller.dragDrop.copySet(dragI, dropI));
        else if(type === DragDrop.SwapOne) this.updateTree(Controller.dragDrop.swapOne(dragI, dropI));
        else if(type === DragDrop.SwapSet) this.updateTree(Controller.dragDrop.swapSet(dragI, dropI));
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
        console.log('in tree node mount: ');
        console.log(this.canvas);
        console.log(this.canvas.current);
        window.addEventListener("resize", this.updatePosition);
        this.canvasRef.current!.addEventListener("scroll", this.update2);
    }

    componentWillUnmount() {
<<<<<<< Updated upstream:src/components/treeview/TreeElement.tsx
        window.removeEventListener("resize", this.update2);
        this.canvasRef.current!.removeEventListener("scroll", this.update2);
=======
        console.log('in tree node unmount: ');
        console.log(this.canvas);
        console.log(this.canvas.current);
        window.removeEventListener("resize", this.updatePosition);
        this.canvas.current!.removeEventListener("scroll", this.updatePosition);
>>>>>>> Stashed changes:src/components/tree/TreeElement.tsx
    }

    render () {
        return ( 
            <li className='tree-unit'>
                <Popover 
                    show={this.state.showPopover} 
                    loc={this.calcPopoverLoc()}
<<<<<<< Updated upstream:src/components/treeview/TreeElement.tsx
                    content={ <EditWindow data={this.props.data} update={(popoverData: DragonNode) => this.internalDataUpdate(popoverData)}/> } 
=======
                    content={ <EditWindow 
                        tree={this.props.tree} 
                        node={this.props.node} 
                        updateTree={(newTree: Tree) => this.updateTree(newTree)}/> 
                    } 
>>>>>>> Stashed changes:src/components/tree/TreeElement.tsx
                    handleClose={()=>{this.displayPopover(false)}} 
                />
                <Tooltip
                    show={this.state.showTooltip} 
                    loc={this.calcTooltipLoc()}
                    content={this.writeTooltip()} 
                />
<<<<<<< Updated upstream:src/components/treeview/TreeElement.tsx
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
=======
                <SettingsConsumer>
                {value => { return (
                    <div className='tree-unit-display'>
                        <Droppable onDrop={(index : string)=>{this.executeDrop(value.dragDrop, index)}} dropEffect={DropEffect.Move}>
                            <Draggable dragData={this.props.node.index.toString()} dropEffect={DropEffect.Move}>
                                <div 
                                    className={(this.props.node.meta.invalidData && value.enableWarn) ? 'tree-unit-display-portrait highlight-warning' : 'tree-unit-display-portrait'}
                                    onClick={e=>{this.displayPopover(true)}} 
                                    ref={this.img}
                                    onMouseEnter={e=>{this.displayTooltip(value.enableWarn)}}
                                    onMouseOut={e=>{this.displayTooltip(false)}}
                                    style={{
                                        backgroundImage : `url(${Portrait.getThumbImg(this.props.node.portrait)})`,
                                        backgroundRepeat : 'no-repeat', 
                                        backgroundPosition : '50% 50%'
                                    }}
                                />      
                            </Draggable> 
                            <label className='tree-unit-display-label'>{(this.props.node.name !== "") ? this.props.node.name : "(code)"}</label>
                        </Droppable>
                    </div> 
                )}}
                </SettingsConsumer>
>>>>>>> Stashed changes:src/components/tree/TreeElement.tsx
                {this.buildParentComponents()}
            </li>
        );
    }
}