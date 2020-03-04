import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import EditWindow from '../Popover/EditWindow';

export default class DragonElement extends React.Component {
  
  onPopoverFieldChange(popoverData) {
    this.props.onChange(popoverData);
  }

  onIncomingFieldChange(parent, parentData) {
    let newData = this.props.data;
    newData[parent] = parentData;

    console.log(`onIncomingFieldChange triggered in node ${this.props.data.name}`)
    console.log(`sending newData to higher node: `, newData)

    this.props.onChange(newData);
  }

  render () {
    
    let parents =[];

    if (this.props.data.mother !== undefined) {
      parents.push
        (<DragonElement 
          data={this.props.data.mother} 
          onChange={(parentData) => this.onIncomingFieldChange(this.props.data.mother, parentData)}
        />)
    }
    if (this.props.data.father !== undefined) {
      parents.push
      (<DragonElement 
        data={this.props.data.father} 
        onChange={(parentData) => this.onIncomingFieldChange(this.props.data.father, parentData)}
      />)
    }

    return ( 
      <li>
        <div>
          <OverlayTrigger 
          trigger="click" 
          overlay={<EditWindow
            data={this.props.data}
            onChange={(popoverData) => this.onPopoverFieldChange(popoverData)}
          />}>
          <img 
            src={this.props.data.imagePath} 
            alt={this.props.data.name + "'s portrait"} 
          />
          </OverlayTrigger>
          <label>{this.props.data.name}</label>
        </div>
        <ul>
          {parents}
        </ul>
      </li>
    )
  }
}