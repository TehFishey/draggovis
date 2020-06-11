import React from 'react';
import Popover from './popover/Popover';
import Tooltip from './tooltip/Tooltip';
import EditWindow from './popover/PopoverEditWindow';
import {debounce} from '../../utilities/Limiters';
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
        this.setState({showPopover : show});
    }

    /*
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
    */

    updatePosition = debounce((e: Event) => { 
        if(this.img.current) {
            let rect = this.img.current.getBoundingClientRect();
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

    /*
    calcTooltipLoc() {
        let px = this.state.imgRect.x + this.state.imgRect.width;
        let py = this.state.imgRect.y;
        return {x : px, y : py}
    }
    */
    
    

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

    render () {
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
                <div className='tree-unit-display'>
                    <img 
                        className={'tree-unit-display-portrait'}
                        onClick={()=>{this.displayPopover(true)}} 
                        ref={this.img}
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