import React from 'react';
import DragonElement from './TreeElement';
import './tree-root.css';

export default class TreeRoot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
    }
  }

  render () {
    return ( 
    <div className="lineage-element">
      <ul id ="tree-root">
        <DragonElement 
          data={this.state.data} 
          onChange={(data) => this.setState({data})}
        />
      </ul>
    </div>)
  }
}