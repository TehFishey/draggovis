import React from 'react';
import Popover from 'react-bootstrap/Popover';

export default class EditWindow extends React.Component{
    constructor(props){
      super(props);
    }

    onFieldChange(fieldName, event) {
        const fieldValue = event.target.value;
        
        let newData = this.props.data;
        newData[fieldName] = fieldValue;
      
        console.log(`onFieldChange triggered ${this.props.data.name}'s popover window`)
        console.log(`sending newData to ${this.props.data.name}'s tree node: `, newData)
    
        this.props.onChange(newData);
      }
  
    render() {
      return (
        <Popover id="popover-basic" {...this.props}>
            <Popover.Title as="h3">Popover right</Popover.Title>
            <Popover.Content>
                <input
                    type="text"
                    value={this.props.data.name}
                    onChange={e => this.onFieldChange('name', e)}
                />
            </Popover.Content>
        </Popover>
      );
    }
  }