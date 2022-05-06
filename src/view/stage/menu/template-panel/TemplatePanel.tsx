import React from 'react';
import DVSelect, {menuOption} from '../../../general/select/Select'
import TemplatePanelDragon from './TPDragon';
import TemplatePanelGender from './TPGender';
import TemplatePanelNumber from './TPNumber';
import './template-panel.css';

import Generator from '../../../../library/controller/Generator';
import { Property, DragProperty, NumProperty, GenderProperty } from '../../../../library/controller/GeneratorProperty';

import MenuOptions from '../../../_utilities/MenuOptions';
import { executionOutput } from '../../../../model/Model';

import { DataManager } from '../../../context/DataManager';
import TemplatePanelOperator from '../../../../controller/operators/TemplatePanelOperator';
import Templates from '../../../../controller/_Templates';

interface Props {
    setData : (response: Promise<executionOutput>) => void,
    handleClose : Function
}

interface State {
    loaded : boolean,
    currentOption : menuOption | null,
    currentTemplate : Generator | null,
    currentArgs : Array<any> | null,
}

export default class TemplatePanel extends React.Component<Props, State> {
    static contextType = DataManager;
    private operator? : TemplatePanelOperator | null;
    private templates? : Templates | null;
    private menuOptions? : Array<menuOption>;

    constructor(props: Props) {
        super(props);

        this.state = {
            loaded : false,
            currentOption : null,
            currentTemplate : null,
            currentArgs : null,
        }
    }

    setArg(argIndex: number, arg: any) {
        let newArgs = [...this.state.currentArgs!];
        newArgs[argIndex] = arg;
        this.setState({currentArgs : newArgs})
    }

    buildTemplateInterface() : JSX.Element {
        let largeSelectors = new Array<JSX.Element>();
        let smallSelectors = new Array<JSX.Element>();
        if (this.state.currentTemplate != null) {
            this.state.currentTemplate.props.forEach(
                (tProp: Property, index: number) => {
                    if(tProp instanceof DragProperty) {
                        largeSelectors.push(
                            <TemplatePanelDragon
                                key={this.state.currentTemplate!.id+tProp.id}
                                property = {tProp}
                                setArg = {(arg: any)=>{this.setArg(index, arg)}}
                            />
                        )
                    }
                    else if(tProp instanceof NumProperty) {
                        smallSelectors.push(
                            <TemplatePanelNumber
                                key={this.state.currentTemplate!.id+tProp.id}
                                property = {tProp}
                                setArg = {(arg: any)=>{this.setArg(index, arg)}}
                            />
                        )
                    }
                    else if(tProp instanceof GenderProperty) {
                        smallSelectors.push(
                            <TemplatePanelGender
                                key={this.state.currentTemplate!.id+tProp.id}
                                property = {tProp}
                                setArg = {(arg: any)=>{this.setArg(index, arg)}}
                            />
                        )
                    }
                }
            );
        }
        
        return(
            <div className='tp-properties'>
                <div className='tpi-box-large'>{smallSelectors}</div>
                {largeSelectors}
            </div>)
    }

    selectTemplate = (selectedOption: any) => {
        let templateId: string = selectedOption.value;
        if(this.templates != null) {
            this.setState({
                currentOption : selectedOption,
                currentTemplate : this.templates.dict.get(templateId)!,
                currentArgs : this.templates.dict.get(templateId)!.props.map((prop)=>{return prop.default;})
            }, () => {console.log(`Current Args:`); console.log(this.state.currentArgs)});
        }
        
    }

    generateTemplate = () => {
        if(this.operator != null && this.state.currentTemplate != null && this.state.currentArgs != null) {
            this.props.setData(
                this.operator.implementTemplate(
                    this.state.currentTemplate.execute(...this.state.currentArgs)
                )
            );
            this.context.update.mouseOverIndex(0);
            this.props.handleClose();
        }
    }

    componentDidMount() {
        this.operator = this.context.controller.templatePanel;
        this.templates = this.context.controller.templates;
        this.menuOptions = MenuOptions.templateOptions(this.templates!);

        if(this.operator && this.templates && this.menuOptions && !this.state.loaded) {
            this.setState({
                currentOption : this.menuOptions[0],
                currentTemplate : this.templates!.arr[0],
                currentArgs : this.templates!.arr[0].props.map((prop)=>{return prop.default;}),
            }, () => {
                this.setState({
                    loaded : true
                })
            })
        }
    }

    render () {
        if(!this.state.loaded) return <div />;
        else return (
            <div className='template-panel'>
                <div className='modal-title'>Lineage Generator</div>
                <div className='tp-select-template'>
                    <label>Template:</label>
                    <DVSelect
                        value = { this.state.currentOption! }
                        options = { this.menuOptions! }
                        onChange = { this.selectTemplate }
                    />
                </div>
                <div className='tp-description'>
                    <div className='tp-desc-text'>
                        { this.state.currentTemplate!.description }
                    </div>
                    <img className='tp-desc-image' 
                        src={`./previews/tpreview-${this.state.currentTemplate!.id}.png`} 
                        alt='template preview'
                    />
                </div>

                <div className='tp-properties-label'>Template Properties:</div>
                {this.buildTemplateInterface()}
                <button className='stage-button-large' onClick={ this.generateTemplate }>Generate</button>
            </div> 
        );
    }
}