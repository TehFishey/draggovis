import React from 'react';

export default class DragonElement extends React.Component {
  onFieldChange(fieldName, event) {
    const fieldValue = event.target.value;
    
    let newData = this.props.data;
    newData[fieldName] = fieldValue;
  
    console.log(`onFieldChange triggered in node ${this.props.data.name}`)
    console.log(`sending newData to parent: `, newData)

    this.props.onChange(newData);
  }

  onChildFieldChange(parent, parentData) {
    let newData = this.props.data;
    newData[parent] = parentData;

    console.log(`onChildFieldChange triggered in node ${this.props.data.name}`)
    console.log(`sending newData to 'child': `, newData)

    this.props.onChange(newData);
  }

  render () {
    let parents =[];

    if (this.props.data.mother !== undefined) {
      parents.push
        (<DragonElement 
          data={this.props.data.mother} 
          onChange={(parentData) => this.onChildFieldChange(this.props.data.mother, parentData)}
        />)
    }
    if (this.props.data.father !== undefined) {
      parents.push
      (<DragonElement 
        data={this.props.data.father} 
        onChange={(parentData) => this.onChildFieldChange(this.props.data.father, parentData)}
      />)
    }

    return ( 
      <li>
        <div>
          <img 
            src={this.props.data.imagePath} 
            alt={this.props.data.name + "'s portrait"} 
          />
          <input
            type="text"
            value={this.props.data.name}
            onChange={e => this.onFieldChange('name', e)}
          />
        </div>
        <ul>
          {parents}
        </ul>
      </li>
    )
  }
}