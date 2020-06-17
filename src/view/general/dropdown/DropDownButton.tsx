import React from 'react';
import DropDownList from './DropDownList';
import './drop-down.css';

interface Props {
    label: string,
    data : Array<{label : string, onClick : Function}>
}

interface State {
    show : boolean
}

export default class DropDownButton extends React.Component<Props, State> {

    dropRef: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);

        this.state = {
            show: false
        }

        this.dropRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    setShow(show : boolean) {
        this.setState({show : show});
    }

    handleClick(e: MouseEvent) {
        const element = e.target as HTMLElement;
        if(!element.closest(`.${this.dropRef.current!.className}`) && this.state.show)
            this.setShow(false);
    }

    componentDidMount() {
        document.addEventListener("click", this.handleClick);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick);
    }

    render () {
        return (
            <div className="drop-button"
                ref={this.dropRef}
                onClick={e=>{this.setShow(!this.state.show)}}>
                <label>{this.props.label}</label>
                {(this.state.show) ? <DropDownList data={this.props.data} setShow={()=>this.setShow(false)}/> : null }
            </div>
        );
    }
}