import React from 'react';
import {createPortal} from "react-dom";
import './tooltip.css';

const overlay = document.getElementById("overlay-B");

type windowCoordinates = {x: number, y: number}

interface Props {
    show: boolean,
    loc: windowCoordinates,
    content: string | Array<string>,
}
  
interface State {
    pos: windowCoordinates,
}

export default class Tooltip extends React.Component<Props,State> {
    
    componentRef: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);

        this.state = {
            pos : {
                x : 0,
                y : 0
            }
        }

        this.componentRef = React.createRef();
    }

    buildContent() : JSX.Element {
        let out: Array<JSX.Element> = []

        if(this.props.content instanceof Array) {
            this.props.content.forEach((string)=> {
                out.push(<div className='tooltip-item' dangerouslySetInnerHTML={{ __html: string }}></div>)
            });
        } else {
            out.push(<div className='tooltip-item' dangerouslySetInnerHTML={{ __html: this.props.content }}></div>)
        }

        return(<div className='tooltip-content'>{out}</div>)
    }

    adjustPosition() {
        let newX = this.props.loc.x;
        let newY = this.props.loc.y;

        if(window.innerWidth < newX + this.componentRef.current!.clientWidth)
            newX -= (newX + this.componentRef.current!.clientWidth) - window.innerWidth;
        if(window.innerHeight < newY + this.componentRef.current!.clientHeight)
            newY -= (newY + this.componentRef.current!.clientHeight) - window.innerHeight;

        if(this.state.pos.x !== newX || this.state.pos.y !== newY) {
            this.setState({
                pos : {
                    x : newX,
                    y : newY
                }
            });
        }
    }

    componentDidMount() {
        if(this.props.show)
            this.adjustPosition();
    }

    componentDidUpdate() {
        if(this.props.show)
            this.adjustPosition();
    }

    render () {
        if (!this.props.show) {return null;}
        return ( 
            <>
            {createPortal((
                <div 
                    className='tooltip'
                    ref={this.componentRef}
                    style={{ transform : `translate(${this.state.pos.x}px, ${this.state.pos.y}px)` }}
                >
                    {this.buildContent()}
                </div>), overlay!)}
            </>
        );
    }
}