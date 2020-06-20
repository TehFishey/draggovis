import React from 'react';
import Image from '../../general/image/Image'
import { SettingsConsumer, DragDrop } from '../../Settings';
import './sidebar.css';

import DragonNode from '../../../library/controller/DragonNode'

interface Props {
    mouseOver : DragonNode;
}

interface State {
    imgError : boolean
}

export default class Sidebar extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            imgError : false
        }
    }

    createTimeSelect(value: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>)=>void): JSX.Element {
        let options: Array<JSX.Element> = [];

        for (let i = 0; i < 24; i++) {
            ['00', '30'].forEach((minute: string) => {
                options.push(timeOption(i.toString().padStart(2,'0'), minute));
            })
        }

        return(
            <select 
                value={value}
                onChange={onChange}>
                {options}
            </select>
        )

        function timeOption(hour: string, minute: string) : JSX.Element {
            let h: number = parseInt(hour);
            let hLabel: number = (h > 12) ? h - 12 : ((h != 0) ? h : 12);
            let hSuffix: string = (h > 11) ? 'pm' : 'am';

            return (<option value={`${hour}:${minute}:00`}>{`${hLabel}:${minute}${hSuffix}`}</option>)
        }
    }

    render() {
        return (
            <div className='stage-sidebar'>
                <SettingsConsumer>
                    {value => { return (
                    <div className='sidebar-content'>
                        <div className='sidebar-image'>
                            <Image node={this.props.mouseOver} time={value.caveTime}/>
                            </div>
                        <div className='sidebar-feedback'></div>
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
                                <div>
                                    Cave Time: 
                                    {this.createTimeSelect(
                                        value.caveTime,
                                        (e: React.ChangeEvent<HTMLSelectElement>)=>{
                                            value.update.caveTime(e.target.value)}
                                    )}
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
                    </div>
                    )}}
                </SettingsConsumer>
                <div className='sidebar-spacer'/>
            </div>
        );
    }
}