import React from 'react';

import Image from '../../general/image/Image'
import Popover from '../../general/popover/PopoverModal';
import Tooltip from '../../general/tooltip/Tooltip';
import EditWindow from './edit-panel/EditPanel';
import Draggable, { DropEffect } from '../../general/drag-drop/Draggable';
import Droppable from '../../general/drag-drop/Droppable';
import { SettingsConsumer, DragDrop } from '../../context/Settings';

import DragonNode from '../../../library/controller/DragonNode';

import { executionOutput } from '../../../model/Model';
import { DataManager, DataConsumer } from '../../context/DataManager';
import Controller from '../../../controller/Controller';

type windowCoordinates = {x: number, y: number}

interface Props {
    node: DragonNode,
    setData: (data: Promise<executionOutput>) => void,
}

interface State {
    imgRect: {x: number, y: number, width: number, height: number},
    showPopover: boolean,
    showTooltip: boolean,
    imgError: boolean,
}

export default class TreeElement extends React.Component<Props, State> {
    static contextType = DataManager;
    private controller? : Controller | null;
    
    img: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);

        this.state = {
            imgRect : {x : 0, y : 0, width : 0, height : 0},
            showPopover : false,
            showTooltip : false,
            imgError : false,
        }

        this.img = React.createRef();
        this.updatePosition = this.updatePosition.bind(this);
    }

    displayPopover(show: boolean) {
        if(show) this.getImgRect();
        this.setState({showPopover : show});
    }

    displayTooltip(show: boolean) {
        if(this.props.node.meta.invalidData) {
            if(show) this.getImgRect();
            this.setState({showTooltip : show});
        }
        else this.setState({showTooltip : false});
    }

    getTooltipContent() : string | Array<string> {
        if(this.props.node.meta.warnings != null &&
           this.props.node.meta.warnings.size > 0) {
            return [...this.props.node.meta.warnings.values()]
        }
        return '';
    }

    getImgRect() {
        if(this.img.current != null) {
            let rect = this.img.current.getBoundingClientRect();
            this.setState(
                {imgRect : {
                    x : rect.x,
                    y : rect.y,
                    width : rect.width,
                    height : rect.height
                }
            });
        }
    }

    updatePosition() {
        if(this.state.showPopover || this.state.showTooltip) {
            this.getImgRect();
        }
    }

    calcPopoverLoc() {
        let coords : windowCoordinates = {x : 0, y : 0};

        coords.x = this.state.imgRect.x + (this.state.imgRect.width * 0.5);
        coords.y = this.state.imgRect.y + (this.state.imgRect.height * 0.5);

        return coords;
    }

    calcTooltipLoc() {
        let coords : windowCoordinates = {x : 0, y : 0};

        coords.x = this.state.imgRect.x + this.state.imgRect.width;
        coords.y = this.state.imgRect.y;

        return coords;
    }

    executeDrop(type : DragDrop, index : string, validate? : boolean) {
        let dragI: number = +index;
        let dropI: number = this.props.node.index;

        if(this.controller != null) {
            if(type === DragDrop.CopyOne) this.props.setData(this.controller.dragDrop.copyOne(dragI, dropI, validate));
            else if(type === DragDrop.CopySet) this.props.setData(this.controller.dragDrop.copySet(dragI, dropI, validate));
            else if(type === DragDrop.SwapOne) this.props.setData(this.controller.dragDrop.swapOne(dragI, dropI, validate));
            else if(type === DragDrop.SwapSet) this.props.setData(this.controller.dragDrop.swapSet(dragI, dropI, validate));
        }
        
    }

    buildParentComponents() {
        if(this.props.node.hasParents()) {
            let parents = [
                (<TreeElement
                    node={this.props.node.father()!}
                    setData={(data) => {this.props.setData(data)}}
                />),
                (<TreeElement
                    node={this.props.node.mother()!}
                    setData={(data) => {this.props.setData(data)}}
                />)
            ];
            return (<ul className='tree-unit-parents'>{parents}</ul>);
        }
        return null;
    }

    componentDidMount() {
        this.controller = this.context.controller;
        this.updatePosition();
        window.addEventListener("resize", this.updatePosition);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePosition);
    }

    render() {
        return (
            <li className='tree-unit'>
                <Popover
                    show={this.state.showPopover}
                    loc={this.calcPopoverLoc()}
                    content={ <EditWindow
                        node={this.props.node}
                        setData={this.props.setData}
                        handleClose={()=>{this.displayPopover(false)}} />
                    }
                    handleClose={()=>{this.displayPopover(false)}}
                />
                <Tooltip
                    show={this.state.showTooltip}
                    loc={this.calcTooltipLoc()}
                    content={this.getTooltipContent()}
                />
                <SettingsConsumer>
                {settings => { return (
                    <Droppable className={'tree-unit-display'} onDrop={(index : string)=>{this.executeDrop(settings.dragDrop, index, !settings.disableValid)}} dropEffect={DropEffect.Copy}>
                        <Draggable dragData={this.props.node.index.toString()} dropEffect={DropEffect.Copy}>
                            <DataConsumer>
                            {data => { return(
                                <div className={(this.props.node.meta.invalidData && settings.enableWarn) ? 'tree-unit-display-button highlight-warning' : 'tree-unit-display-button'}
                                    onClick={e=>{this.displayPopover(true)}}
                                    ref={this.img}
                                    onMouseOver={e=>{data!.update.mouseOverIndex(this.props.node.index)}}
                                    onMouseEnter={e=>{this.displayTooltip(settings.enableWarn)}}
                                    onMouseLeave={e=>{this.displayTooltip(false)}}
                                    onError={(e)=>{this.setState({imgError : true})}}
                                >
                                    <Image node={this.props.node} time={settings.caveTime} thumbnail={true}/>
                                </div>
                            )}}
                            </DataConsumer>
                        </Draggable>
                        <label className='tree-unit-display-label'>
                            {(settings.showName) ?
                                    (this.props.node.name !== "") ? this.props.node.name : "(code)" :
                                    null}
                        </label>
                    </Droppable>
                )}}
                </SettingsConsumer>
                {this.buildParentComponents()}
            </li>
        );
    }
}
