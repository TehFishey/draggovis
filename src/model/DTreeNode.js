import React from 'react';
import './DragonElement.css';

export function DTreeNode({tree, onChange, lineageTree}) {

  const handleNodeChange = () => {

  }
  const handleSubNodeChange = () => {

  }

  return (
    <li>
      <div>
        <img 
          src={this.state.imagePath} 
          alt={this.state.name + "'s portrait"} 
        />
        <input
          type="text"
          value={this.state.name}
          onChange={e => handleNodeChange('name', e)}
        />
      </div>
      <ul>
        {children}
      </ul>
    </li>
  )

}
/*
export default class DTreeNode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imagePath: props.data.imagePath,
      name: props.data.name,
      mother: props.data.mother,
      father: props.data.father
    }
  }
  
  render () {
    let children =[];

    if (this.state.mother !== undefined) {
      children.push(<DragonElement data={this.state.mother} />)
    }
    if (this.state.father !== undefined) {
      children.push(<DragonElement data={this.state.father} />)
    }

    return ( 
        <li>
          <div>
            <img src={this.state.imagePath} alt={this.state.name + "'s portrait"}></img>
            <label>{this.state.name}</label>
          </div>
          <ul>
            {children}
          </ul>
        </li>
    )}
}
*/