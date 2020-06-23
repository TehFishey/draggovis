import React from 'react';

import Image from '../../general/image/Image'
import Popover from '../../general/popover/PopoverModal';
import Tooltip from '../../general/tooltip/Tooltip';
import EditWindow from './edit-panel/EditPanel';
import Draggable, { DropEffect } from '../../general/drag-drop/Draggable';
import Droppable from '../../general/drag-drop/Droppable';
import { SettingsConsumer, DragDrop, Settings } from '../../Settings';

import Tree from '../../../library/controller/Tree';
import DragonNode from '../../../library/controller/DragonNode';

import Controller from '../../../controller/Controller';

type windowCoordinates = {x: number, y: number}

interface Props {
    tree: Tree,
    node: DragonNode,
    setData: Function,
}

interface State {
    imgRect: {x: number, y: number, width: number, height: number},
    showPopover: boolean,
    showTooltip: boolean,
    imgError: boolean,
    validate: boolean
}

export default class TreeElement extends React.Component<Props, State> {
    static contextType = Settings;

    img: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);

        this.state = {
            imgRect : {x : 0, y : 0, width : 0, height : 0},
            showPopover : false,
            showTooltip : false,
            imgError : false,
            validate: true
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

    updateTree(newData: Tree) {
        this.props.setData(newData);
    }

    executeDrop(type : DragDrop, index : string) {
        let dragI: number = +index;
        let dropI: number = this.props.node.index;

        if(type === DragDrop.CopyOne) this.updateTree(Controller.dragDrop.copyOne(dragI, dropI, this.state.validate));
        else if(type === DragDrop.CopySet) this.updateTree(Controller.dragDrop.copySet(dragI, dropI, this.state.validate));
        else if(type === DragDrop.SwapOne) this.updateTree(Controller.dragDrop.swapOne(dragI, dropI, this.state.validate));
        else if(type === DragDrop.SwapSet) this.updateTree(Controller.dragDrop.swapSet(dragI, dropI, this.state.validate));
    }

    buildParentComponents() {
        if(this.props.node.hasParents()) {
            let parents = [
                (<TreeElement
                    tree={this.props.tree}
                    node={this.props.node.father()!}
                    setData={(treeData: Array<DragonNode>) => {this.props.setData(treeData)}}
                />),
                (<TreeElement
                    tree={this.props.tree}
                    node={this.props.node.mother()!}
                    setData={(treeData: Array<DragonNode>) => {this.props.setData(treeData)}}
                />)
            ];
            return (<ul className='tree-unit-parents'>{parents}</ul>);
        }
        return null;
    }

    componentDidMount() {
        this.updatePosition();
        window.addEventListener("resize", this.updatePosition);
    }

    componentDidUpdate() {
        if (this.state.validate !== (!this.context.disableValid))
            this.setState({validate: !this.context.disableValid});
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
                        tree={this.props.tree}
                        node={this.props.node}
                        updateTree={(newTree: Tree) => this.updateTree(newTree)}
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
                {value => { return (
                    <Droppable className={'tree-unit-display'} onDrop={(index : string)=>{this.executeDrop(value.dragDrop, index)}} dropEffect={DropEffect.Copy}>
                        <Draggable dragData={this.props.node.index.toString()} dropEffect={DropEffect.Copy}>
                            <div className={(this.props.node.meta.invalidData && value.enableWarn) ? 'tree-unit-display-button highlight-warning' : 'tree-unit-display-button'}
                                onClick={e=>{this.displayPopover(true)}}
                                ref={this.img}
                                onMouseEnter={e=>{this.displayTooltip(value.enableWarn)}}
                                onMouseLeave={e=>{this.displayTooltip(false)}}
                                onError={(e)=>{this.setState({imgError : true})}}
                            >
                                <Image node={this.props.node} time={value.caveTime} thumbnail={true}/>
                            </div>
                        </Draggable>
                        <label className='tree-unit-display-label'>{(this.props.node.name !== "") ? this.props.node.name : "(code)"}</label>
                    </Droppable>
                )}}
                </SettingsConsumer>
                {this.buildParentComponents()}
            </li>
        );
    }
}
