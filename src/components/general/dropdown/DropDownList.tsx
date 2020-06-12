import React from 'react';

interface Props {
    setShow : Function
    data : Array<{label : string, onClick : Function}>
}

interface State {}

export default class DropDownList extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {}
    }

    createChildren() {
        let children: Array<JSX.Element> = []
        
        this.props.data.forEach((listItem)=>{
            children.push((
                <li className="drop-item" onClick={e=>{
                    this.props.setShow(); 
                    listItem.onClick(); 
                }}>
                    {listItem.label}
                </li>
            ))
        })
        return children;
    }

    render () {
        return (
            <ul className="drop-list">
                {this.createChildren()}
            </ul>
        );
    }
}