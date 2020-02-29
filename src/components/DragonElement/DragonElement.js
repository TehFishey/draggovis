import React from 'react';
import './DragonElement.css';

export default class DragonElement extends React.Component {
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


/*function DragonRoot(data) {
  return (
    <li>
      <div>
        <a className = "dragon-portrait"><img src={data.imagePath}></img></a>
        <label>{data.name}</label>
      </div>
      <ul>
        { DragonElement(data.mother) }
        { DragonElement(data.father) }
      </ul>
    </li>
  )
}*/
