import React from 'react';
import { SettingsConsumer, DragDrop } from '../../Settings';
import './sidebar.css';
import Portrait from '../../../library/defines/Portrait';
import DragonNode from '../../../library/controller/DragonNode'

interface Props {
    mouseOver : DragonNode;
}

interface State {}

export default class Sidebar extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {}
    }

    render () {
        return (
            <div className='stage-sidebar'>
                <div className='sidebar-content'>
                    <div className='sidebar-image'
                        style={{
                            backgroundImage : `url(${Portrait.getLargeImg(this.props.mouseOver.portrait)})`,
                            backgroundRepeat : 'no-repeat', 
                            backgroundPosition : '50% 50%'}}/>
                    <div className='sidebar-feedback'></div>
                    <SettingsConsumer>
                        {value => { return (
                        <div className='sidebar-settings'>
                            <div className='sb-setting-label'>Display</div>
                            <div className='sb-setting'>
                                <div onClick={e=>{value.update.showName(!value.showName)}} style={{cursor: 'default'}}>
                                    <input type='checkbox'
                                        checked={value.showName}
                                        readOnly
                                    />
                                    Show Names
                                </div>
                                <div onClick={e=>{value.update.showGen(!value.showGen)}} style={{cursor: 'default'}}>
                                    <input type='checkbox'
                                        checked={value.showGen}
                                        readOnly
                                    />
                                    Show Generations
                                </div>
                            </div>
                            <div className='sb-setting-label'>Drag - Drop</div>
                            <div className='sb-setting'>
                                <select 
                                    value={value.dragDrop}
                                    onChange={e=>{value.update.dragDrop(e.target.value as DragDrop)}}>
                                    <option value={DragDrop.CopyOne}>Copy Dragon</option>
                                    <option value={DragDrop.CopySet}>Copy Lineage</option>
                                    <option value={DragDrop.SwapOne}>Swap Dragon</option>
                                    <option value={DragDrop.SwapSet}>Swap Lineage</option>
                                </select>
                            </div>
                            <div className='sb-setting-label'>Validation</div>
                            <div className='sb-setting'>
                                <div onClick={e=>{value.update.disableValid(!value.disableValid)}} style={{cursor: 'default'}}>
                                    <input type='checkbox'
                                        checked={value.disableValid}
                                        readOnly
                                    />
                                    Ignore Validation
                                </div>
                                <div onClick={e=>{value.update.enableWarn(!value.enableWarn)}} style={{cursor: 'default'}}>
                                    <input type='checkbox'
                                        checked={value.enableWarn}
                                        readOnly
                                    />
                                    Highlight Warnings
                                </div>
                            </div>
                        </div>
                        )}}
                    </SettingsConsumer>
                </div>
                <div className='sidebar-spacer'/>
            </div>
        );
    }
}