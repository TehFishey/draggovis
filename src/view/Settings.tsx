import React from 'react';

enum DragDrop {
    CopyOne = 'copyOne',
    CopySet = 'copySet',
    SwapOne = 'swapOne',
    SwapSet = 'swapSet'
}

interface SettingValues {
    showName : boolean
    showGen : boolean
    caveTime: string
    dragDrop : DragDrop
    disableValid : boolean
    enableWarn : boolean
    mouseOverIndex : number
    update: {
        showName: (show: boolean) => void,
        showGen : (show: boolean) => void,
        caveTime : (time: string) => void,
        dragDrop : (type: DragDrop) => void,
        disableValid : (disable: boolean) => void,
        enableWarn : (enable: boolean) => void,
        mouseOverIndex: (node: number) => void
    }
}

const Settings = React.createContext<SettingValues>({
    showName : true,
    showGen : true,
    caveTime: '12:00:00',
    dragDrop : DragDrop.CopyOne,
    disableValid : false,
    enableWarn : true,
    mouseOverIndex : 0,
    update: {
        showName: (show: boolean) => {},
        showGen : (show: boolean) => {},
        caveTime : (time: string) => {},
        dragDrop : (type: DragDrop) => {},
        disableValid : (disable: boolean) => {},
        enableWarn : (enable: boolean) => {},
        mouseOverIndex: (node: number) => {}
    }
});
const Consumer = Settings.Consumer;
const Provider = Settings.Provider;

interface Props {}

class SettingsControl extends React.Component<Props, SettingValues> {
    public constructor(props: Props) {
        super(props);
  
        this.state = {
            showName : true,
            showGen : true,
            caveTime: '12:00:00',
            dragDrop : DragDrop.CopyOne,
            disableValid : false,
            enableWarn : true,
            mouseOverIndex : 0,
            update: {
                showName: (show: boolean) => {this.setState({showName: show})},
                showGen : (show: boolean) => {this.setState({showGen: show})},
                caveTime : (time: string) => {this.setState({caveTime : time})},
                dragDrop : (type: DragDrop) => {this.setState({dragDrop: type})},
                disableValid : (disable: boolean) => {this.setState({disableValid: disable})},
                enableWarn : (enable: boolean) => {this.setState({enableWarn: enable})},
                mouseOverIndex : (index: number) => {this.setState({mouseOverIndex : index})}
            }
        };
    }
  
    public render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        );
    }
}

export { 
    Settings as Settings,
    SettingsControl as SettingsProvider, 
    Consumer as SettingsConsumer, 
    DragDrop
};