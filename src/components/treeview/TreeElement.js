import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import EditWindow from './TreeElementPopover';

export default class DragonElement extends React.Component {
  
  onPopoverFieldChange(popoverData) {
    console.log("popover change detected in tree...")
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

    if (this.props.data.father !== undefined) {
      parents.push(
      <DragonElement 
        data={this.props.data.father} 
        onChange={(parentData) => this.onIncomingFieldChange(this.props.data.father, parentData)}
      />);
    }
    if (this.props.data.mother !== undefined) {
      parents.push(
        <DragonElement 
          data={this.props.data.mother} 
          onChange={(parentData) => this.onIncomingFieldChange(this.props.data.mother, parentData)}
        />);
    }

    return ( 
      <li>
        <OverlayTrigger 
          trigger="click"
          rootClose
          overlay={<EditWindow
            data={this.props.data}
            update={(popoverData) => this.onPopoverFieldChange(popoverData)}
          />}>
        <div>
          <img 
            src={process.env.PUBLIC_URL + 'portraits/' + ((this.props.data.portraitObject !== undefined) ? this.props.data.portraitObject.thumbPath : "testDrag.png")} 
            alt={this.props.data.name + "'s portrait"} 
          />
          <label>{this.props.data.name}</label>
        </div>
        </OverlayTrigger>
        <ul>
          {parents}
        </ul>
      </li>
    )
  }
}