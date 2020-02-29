import React from 'react';
import './DragonRoot.css';
import DragonElement from '../DragonElement/DragonElement';

export default class DragonRoot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data
    }
  }
  
  render () {
    return ( 
    <div className="lineage-element">
      <ul id ="tree-root">
        <DragonElement data={this.state.data} />
      </ul>
    </div>)
  }
}

/*



export default class DragonRoot extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <ul className="dragon-root">
        { DragonElement(props.dragon) }
      </ul>
    </div>
    )
  }
}

export default App;
*/
