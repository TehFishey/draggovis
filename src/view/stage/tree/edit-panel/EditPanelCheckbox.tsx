import React from 'react';
import Condition, { CompoundCondition } from '../../../../library/defines/Condition';
import DragonNode from '../../../../library/model/DragonNode';
import Tooltip from '../../../general/tooltip/Tooltip';

type windowCoordinates = {x: number, y: number}

interface Props {
    label: string;
    checked: boolean;
    node: DragonNode;
    condition?: Condition;
    onClick: Function;
}

interface State {
    checkable: boolean;
    tooltipVisible: boolean;
    tooltipContent: string;
    tooltipLoc: windowCoordinates;
}

export default class EditPanelCheckbox extends React.Component<Props, State> {
    checkbox: React.RefObject<HTMLInputElement>;

    constructor(props: Props) {
        super(props);

        this.state = {
            checkable : true,
            tooltipVisible: false,
            tooltipContent: '',
            tooltipLoc: {x: 0, y: 0}
        }

        this.checkbox = React.createRef();
        this.updateTooltipLoc = this.updateTooltipLoc.bind(this)
    }

    onClick = () => {this.props.onClick()}

    displayTooltip(show: boolean) {
        if(!this.state.checkable) {
            if(show) this.updateTooltipLoc();
            this.setState({tooltipVisible : show});
        }
        else this.setState({tooltipVisible : false});
    }

    checkCondition() {
        let check: boolean = true;
        let warning: string = '';
        let c: boolean;
        let w: string;

        if(this.props.condition != null) {
            if(this.props.condition instanceof CompoundCondition) {
                let tooltips: Array<string> = []
            
                this.props.condition.conditions.forEach((condition)=> {
                    [c, w] = condition.validateVerbose(this.props.node);
                    if(!c) tooltips.push(w);
                });
                if(tooltips.length > 0) {
                    warning = tooltips.join('<br/>')
                    check = false;
                }
            }
            else {
                [check, w] = this.props.condition.validateVerbose(this.props.node);
                warning = (check)? '' : w
            }
        }

        this.setState({
            checkable : check,
            tooltipContent: (warning !== '') ? warning : this.state.tooltipContent
        })
        //if(this.props.checked && !this.state.checkable) this.onClick.call([]);
    }

    updateTooltipLoc() {
        if(this.checkbox.current != null) {
            let rect = this.checkbox.current.getBoundingClientRect();
            let coords : windowCoordinates = {x : 0, y : 0};

            coords.x = rect.x + rect.width;
            coords.y = rect.y + rect.height;

            this.setState({tooltipLoc: coords})
        }
    }

    componentDidMount() {
        this.checkCondition();
        this.updateTooltipLoc();
        window.addEventListener("resize", this.updateTooltipLoc);
    }

    componentDidUpdate(prevProps: Props) {
        if(this.props.node !== prevProps.node)
            this.checkCondition()
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateTooltipLoc);
    }

    render() {
        return (
            <>
                <div className ={(this.state.checkable) ? 'ep-checkbox' : 'ep-checkbox ep-checkbox-disabled'}
                    onClick={(this.state.checkable) ? this.onClick : undefined }
                    onMouseOver={e=>{this.displayTooltip(true)}}
                    onMouseLeave={e=>{this.displayTooltip(false)}} 
                    style={{cursor: 'default'}}
                >
                    <input 
                        type='checkbox'
                        disabled={!this.state.checkable}
                        checked={this.props.checked}
                        ref={this.checkbox}
                        readOnly
                    />
                    {this.props.label}
                </div>
                <Tooltip 
                    show={this.state.tooltipVisible}
                    loc={this.state.tooltipLoc}
                    content={this.state.tooltipContent}
                />
            </>
        );
    }
}