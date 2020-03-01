import React from 'react';

export default class DTreeRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          lineageTree: props.lineageTree
        }
      }

    render () {
        return ( 
        <div className="lineage-element">
          <ul id ="tree-root">
            <DragonElement 
                lineageTree={this.state.lineageTree}
                onChange = {(lineageTree) => this.setState({lineageTree})}
            />
          </ul>
        </div>)
    }
}