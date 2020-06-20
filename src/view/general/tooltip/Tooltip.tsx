import React from 'react';
import {createPortal} from "react-dom";
import './tooltip.css';

const overlay = document.getElementById("overlay");

type windowCoordinates = {x: number, y: number}

interface Props {
    show: boolean,
    loc: windowCoordinates,
    content: string | Array<string>,
}
  
interface State {}

export default class Tooltip extends React.Component<Props,State> {
    
    componentRef: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
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

    render () {
        if (!this.props.show) {return null;}
        return ( 
            <>
            {createPortal((
                <div 
                    className='tooltip'
                    ref={this.componentRef}
                    style={{ transform : `translate(${this.props.loc.x}px, ${this.props.loc.y}px)` }}
                >
                    {this.buildContent()}
                </div>), overlay!)}
            </>
        );
    }
}