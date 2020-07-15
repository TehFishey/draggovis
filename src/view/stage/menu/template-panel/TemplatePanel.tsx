import React from 'react';
import DVSelect, {menuOption} from '../../../general/select/Select'
import TemplatePanelDragon from './TPDragon';
import TemplatePanelGender from './TPGender';
import TemplatePanelNumber from './TPNumber';
import './template-panel.css';

import Template from '../../../../library/view/LineageTemplate';
import { TemplateProperty, DragProperty, NumProperty, GenderProperty } from '../../../../library/view/TemplateProperty';


import { Templates } from '../../../../defines/Defines';
import MenuOptions from '../../../_utilities/MenuOptions';
import Model from '../../../../controller/Model';
import { executionOutput } from '../../../../controller/DataManager';

interface Props {
    setData : (response: Promise<executionOutput>) => void,
    handleClose : Function
}

interface State {
    currentOption : menuOption,
    currentTemplate : Template,
    currentArgs : Array<any>,
}

const menuOptions = MenuOptions.templateOptions();

export default class TemplatePanel extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props);

        this.state = {
            currentOption : menuOptions[0],
            currentTemplate : Templates.arr[0],
            currentArgs : Templates.arr[0].props.map((prop)=>{return prop.default;}),
        }
    }

    setArg(argIndex: number, arg: any) {
        let newArgs = [...this.state.currentArgs];
        newArgs[argIndex] = arg;
        this.setState({currentArgs : newArgs})
    }

    buildTemplateInterface() : JSX.Element {
        let largeSelectors = new Array<JSX.Element>();
        let smallSelectors = new Array<JSX.Element>();
        this.state.currentTemplate.props.forEach(
            (tProp: TemplateProperty, index: number) => {
                if(tProp instanceof DragProperty) {
                    largeSelectors.push(
                        <TemplatePanelDragon
                            key={this.state.currentTemplate.id+tProp.id}
                            id = {tProp.id}
                            label = {tProp.label}
                            gender = {tProp.validGender}
                            setArg = {(arg: any)=>{this.setArg(index, arg)}}
                        />
                    )
                }
                else if(tProp instanceof NumProperty) {
                    smallSelectors.push(
                        <TemplatePanelNumber
                            key={this.state.currentTemplate.id+tProp.id}
                            id = {tProp.id}
                            label = {tProp.label}
                            options = {tProp.options}
                            setArg = {(arg: any)=>{this.setArg(index, arg)}}
                        />
                    )
                }
                else if(tProp instanceof GenderProperty) {
                    smallSelectors.push(
                        <TemplatePanelGender
                            key={this.state.currentTemplate.id+tProp.id}
                            id = {tProp.id}
                            label = {tProp.label}
                            setArg = {(arg: any)=>{this.setArg(index, arg)}}
                        />
                    )
                }
            }
        );
        return(
            <div className='tp-properties'>
                <div className='tpi-box-large'>{smallSelectors}</div>
                {largeSelectors}
            </div>)
    }

    selectTemplate = (selectedOption: any) => {
        let templateId: string = selectedOption.value;
        this.setState({
            currentOption : selectedOption,
            currentTemplate : Templates.dict.get(templateId)!,
            currentArgs : Templates.dict.get(templateId)!.props.map((prop)=>{return prop.default;})
        });
    }

    generateTemplate = () => {
        this.props.setData(
            Model.templateWindow.implementTemplate(
                this.state.currentTemplate.execute(...this.state.currentArgs)
            )
        );
        //this.context.update.mouseOverIndex(0);
        this.props.handleClose();
    }

    render () {
        return (
            <div className='template-panel'>
                <div className='modal-title'>Lineage Generator</div>
                <div className='tp-select-template'>
                    <label>Template:</label>
                    <DVSelect
                        value = { this.state.currentOption }
                        options = { menuOptions }
                        onChange = { this.selectTemplate }
                    />
                </div>
                <div className='tp-description'>
                    <div className='tp-desc-text'>
                        {this.state.currentTemplate.description}
                    </div>
                    <img className='tp-desc-image' src={`./previews/tpreview-${this.state.currentTemplate.id}.png`} alt='template preview'/>
                </div>
                
                <div className='tp-properties-label'>Template Properties:</div>
                {this.buildTemplateInterface()}
                <button className='stage-button-large' onClick={ this.generateTemplate }>Generate</button>
            </div>
        );
    }
}