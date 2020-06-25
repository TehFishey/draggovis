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
import Controller from '../../../../controller/Controller';

interface Props {
    setData : Function,
    handleClose : Function
}

interface State {
    currentOption : menuOption,
    currentTemplate : Template,
    currentArgs : Array<any>,
    validate : boolean
}

const menuOptions = MenuOptions.templateOptions();

export default class TemplatePanel extends React.Component<Props, State> {
    
    constructor(props: Props) {
        super(props);

        this.state = {
            currentOption : menuOptions[0],
            currentTemplate : Templates.arr[0],
            currentArgs : Templates.arr[0].props.map((prop)=>{return prop.default;}),
            validate : true
        }
    }

    setArg(argIndex: number, arg: any) {
        let newArgs = [...this.state.currentArgs];
        newArgs[argIndex] = arg;
        this.setState({currentArgs : newArgs})
    }

    composeTemplateSelectors() : JSX.Element {
        let selectors = new Array<JSX.Element>();
        this.state.currentTemplate.props.forEach(
            (tProp: TemplateProperty, index: number) => {
                if(tProp instanceof DragProperty) {
                    selectors.push(
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
                    selectors.push(
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
                    selectors.push(
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
        return(<div>{selectors}</div>)
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
            Controller.templateWindow.implementTemplate(
                this.state.currentTemplate.execute(...this.state.currentArgs)
            )
        );
        this.props.handleClose();
    }

    render () {
        return (
            <div className='template-panel'>
                <div>
                    Select Template:
                    <DVSelect
                        value = { this.state.currentOption }
                        options = { menuOptions }
                        onChange = { this.selectTemplate }
                    />
                </div>
                {this.composeTemplateSelectors()}
                <button onClick={ this.generateTemplate }>Generate</button>
            </div>
        );
    }
}