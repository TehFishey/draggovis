import React from 'react';
import Popover from 'react-bootstrap/Popover';

export default class EditWindow extends React.Component{
    constructor(props){
      super(props);
    }
  
    render() {
      return (
        <Popover id="popover-basic" {...this.props}>
            <Popover.Title as="h3">Popover right</Popover.Title>
            <Popover.Content>
                And here's some <strong>amazing</strong> content. It's very engaging. right?
            </Popover.Content>
        </Popover>
      );
    }
  }