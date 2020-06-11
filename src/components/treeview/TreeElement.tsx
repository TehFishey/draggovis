import React from 'react';
import Popover from './popover/Popover';
import Tooltip from './tooltip/Tooltip';
import EditWindow from './popover/PopoverEditWindow';
import DragonNode from '../../engine/library/DragonNode';
import Tree from '../../engine/library/Tree';

type windowCoordinates = {x: number, y: number}

interface Props {
    tree: Tree,
    node: DragonNode,
    setData: Function,
    getCanvas: Function,
}
  
interface State {
    imgRect: {x: number, y: number, width: number, height: number},
    showPopover: boolean,
    showTooltip: boolean
}

export default class TreeElement extends React.Component<Props, State> {

    canvas: React.RefObject<HTMLDivElement>;
    img: React.RefObject<HTMLImageElement>;
    
    constructor(props: Props) {
        super(props);

        this.state = {
            imgRect : {x : 0, y : 0, width : 0, height : 0},
            showPopover : false,
            showTooltip : false,
        }
        
        this.img = React.createRef();
        this.canvas = this.props.getCanvas();

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
    }

    writeTooltip() {
        if(this.props.node.meta.warnings != null && 
           this.props.node.meta.warnings.size > 0) {
            let warnings: Array<JSX.Element> = []
            this.props.node.meta.warnings.forEach((tooltip: string)=>{
                warnings.push(<div>{tooltip}</div>)
            })
            return (<div>{warnings}</div>);
        }
        return (<div></div>);
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
    
    updateTree(newData: Array<DragonNode>) {
        this.props.setData(newData);
    }

    buildParentComponents() {
        if(this.props.node.hasParents()) {
            let parents = [
                (<TreeElement 
                    tree={this.props.tree}
                    node={this.props.node.father()!} 
                    getCanvas={this.props.getCanvas}
                    setData={(treeData: Array<DragonNode>) => {this.props.setData(treeData)}}
                />),
                (<TreeElement 
                    tree={this.props.tree}
                    node={this.props.node.mother()!} 
                    getCanvas={this.props.getCanvas}
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
        this.canvas.current!.addEventListener("scroll", this.updatePosition);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePosition);
        this.canvas.current!.removeEventListener("scroll", this.updatePosition);
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
                        updateTree={(newTree: Array<DragonNode>) => this.updateTree(newTree)}/> 
                    } 
                    handleClose={()=>{this.displayPopover(false)}} 
                />
                <Tooltip 
                    show={this.state.showTooltip} 
                    loc={this.calcTooltipLoc()}
                    content={this.writeTooltip()} 
                />
                <div className='tree-unit-display'>
                    <img 
                        className={(this.props.node.meta.invalidData) ? 'tree-unit-display-portrait highlight-warning' : 'tree-unit-display-portrait'}
                        onClick={()=>{this.displayPopover(true)}} 
                        ref={this.img}
                        onMouseEnter={()=>{this.displayTooltip(true)}}
                        onMouseOut={()=>{this.displayTooltip(false)}}
                        src={process.env.PUBLIC_URL + 'portraits/' + ((this.props.node.portrait !== undefined) ? 
                                                                    this.props.node.portrait.thumbPath : 
                                                                     "testDrag.png")} 
                        alt={this.props.node.name + "'s portrait"} 
                    />
                    <label className='tree-unit-display-label'>{(this.props.node.name !== "") ? this.props.node.name : "(code)"}</label>
                </div>
                {this.buildParentComponents()}
            </li>
        );
    }
}