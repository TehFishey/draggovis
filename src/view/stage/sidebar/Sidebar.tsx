import React from 'react';
import Image from '../../general/image/Image'
import { SettingsConsumer, DragDrop } from '../../context/Settings';
import './sidebar.css';
import Tree from '../../../library/model/Tree';
import { DataConsumer } from '../../context/DataManager';
import Modal from '../../general/modal/Modal';
import StatsPanel from './stats-panel/StatsPanel';

interface Props {
    tree : Tree;
}

interface State {
    imgError : boolean
    showStats : boolean
}

export default class Sidebar extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            imgError : false,
            showStats : false
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

    openStats = () => {
        this.setState({
            showStats : true
        });
    }

    closeStats = () => {
        this.setState({
            showStats : false
        });
    }

    render() {
        return (
            <div className='stage-sidebar'>
                <Modal 
                    show = {this.state.showStats}
                    handleClose = {this.closeStats}
                    children = { 
                        <StatsPanel tree={this.props.tree} />
                    }
                />
                <SettingsConsumer>
                    {settings => { return (
                    <div className='sidebar-content'>
                        <DataConsumer> 
                            {data => { return (
                            <div className='sidebar-image'>
                                <Image 
                                    node={(this.props.tree[data!.mouseOverIndex] != null) ? 
                                        this.props.tree[data!.mouseOverIndex]! : 
                                        this.props.tree[0]!} 
                                    time={settings.caveTime}/>
                            </div>    
                            )}}
                        </DataConsumer>
                        <div className='sidebar-feedback'></div>
                        <div className='sidebar-settings'>
                            <div className='sb-label'>Display</div>
                            <div className='sb-setting'>
                                <div>
                                    Cave Time: 
                                    {this.createTimeSelect(
                                        settings.caveTime,
                                        (e: React.ChangeEvent<HTMLSelectElement>)=>{
                                            settings.update.caveTime(e.target.value)}
                                    )}
                                </div>
                                <div onClick={e=>{settings.update.showName(!settings.showName)}} style={{cursor: 'default'}}>
                                    <input type='checkbox'
                                        checked={settings.showName}
                                        readOnly
                                    />
                                    Show Names
                                </div>
                                <div onClick={e=>{settings.update.showGen(!settings.showGen)}} style={{cursor: 'default'}}>
                                    <input type='checkbox'
                                        checked={settings.showGen}
                                        readOnly
                                    />
                                    Show Generations
                                </div>
                            </div>
                            <div className='sb-label'>Drag - Drop</div>
                            <div className='sb-setting'>
                                <select 
                                    value={settings.dragDrop}
                                    onChange={e=>{settings.update.dragDrop(e.target.value as DragDrop)}}>
                                    <option value={DragDrop.CopyOne}>Copy Dragon</option>
                                    <option value={DragDrop.CopySet}>Copy Lineage</option>
                                    <option value={DragDrop.SwapOne}>Swap Dragon</option>
                                    <option value={DragDrop.SwapSet}>Swap Lineage</option>
                                </select>
                            </div>
                            <div className='sb-label'>Validation</div>
                            <div className='sb-setting'>
                                    <div onClick={e=>{settings.update.disableValid(!settings.disableValid)}} style={{cursor: 'default'}}>
                                        <input type='checkbox'
                                            checked={settings.disableValid}
                                            readOnly
                                        />
                                        Override Validation
                                    </div>
                                    <div onClick={e=>{settings.update.enableWarn(!settings.enableWarn)}} style={{cursor: 'default'}}>
                                        <input type='checkbox'
                                            checked={!settings.enableWarn}
                                            readOnly
                                        />
                                        Override Warnings
                                    </div>
                                </div>
                        </div>
                        <div className='sidebar-buttons'>
                        <div className='sb-label'>Data</div>
                            <button className='stage-button-small' onClick={this.openStats}>Lineage Stats</button>
                        </div>
                    </div>
                    )}}
                </SettingsConsumer>
                <div className='sidebar-spacer'/>
            </div>
        );
    }
}