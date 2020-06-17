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
    dragDrop : DragDrop
    disableValid : boolean
    enableWarn : boolean
    update: {
        showName: (show: boolean) => void,
        showGen : (show: boolean) => void,
        dragDrop : (type: DragDrop) => void,
        disableValid : (disable: boolean) => void,
        enableWarn : (enable: boolean) => void,
    }
}

const {Provider, Consumer} = React.createContext<SettingValues>({
    showName : true,
    showGen : false,
    dragDrop : DragDrop.CopyOne,
    disableValid : false,
    enableWarn : true,
    update: {
        showName: (show: boolean) => {},
        showGen : (show: boolean) => {},
        dragDrop : (type: DragDrop) => {},
        disableValid : (disable: boolean) => {},
        enableWarn : (enable: boolean) => {},
    }
});


interface Props {}

class SettingsControl extends React.Component<Props, SettingValues> {
    public constructor(props: Props) {
        super(props);
  
        this.state = {
            showName : true,
            showGen : false,
            dragDrop : DragDrop.CopyOne,
            disableValid : false,
            enableWarn : true,
            update: {
                showName: (show: boolean) => {this.setState({showName: show})},
                showGen : (show: boolean) => {this.setState({showGen: show})},
                dragDrop : (type: DragDrop) => {this.setState({dragDrop: type})},
                disableValid : (disable: boolean) => {this.setState({disableValid: disable})},
                enableWarn : (enable: boolean) => {this.setState({enableWarn: enable})},
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
    SettingsControl as SettingsProvider, 
    Consumer as SettingsConsumer, 
    DragDrop
};