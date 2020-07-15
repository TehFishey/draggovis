import React from 'react';
import Model from '../../model/Model';
import Controller from '../../controller/Controller';

interface DataManagerValues {
    model : Model
    controller : Controller
    mouseOverIndex : number
    update: {
        mouseOverIndex: (node: number) => void
    }
}

const DataManager = React.createContext<DataManagerValues | undefined>(undefined);
const Consumer = DataManager.Consumer;
const Provider = DataManager.Provider;

interface Props {
    model: Model
    controller : Controller
}

class DataManagerControl extends React.Component<Props, DataManagerValues> {
    public constructor(props: Props) {
        super(props);
  
        this.state = {
            model : this.props.model,
            controller: this.props.controller,
            mouseOverIndex : 0,
            update: {
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
    DataManager,
    DataManagerControl as DataProvider, 
    Consumer as DataConsumer
};