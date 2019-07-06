import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Dealer from './dealer';
import Player from './player';

//styles
const tableContainerStyle = {
  position: "fixed",
  marginTop: 56,
  minHeight: 500,
  minWidth: 600,
  backgroundColor: "green",
}

class Table extends Component {

  render(){
    return (
      <Container style={tableContainerStyle} className="Table">
        <Dealer/>
        <Player/>
      </Container>
    )
  }
}

export default Table;
