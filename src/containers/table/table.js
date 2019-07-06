import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Dealer from './dealer';

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
      <div style={tableContainerStyle} className="Table">
        <Dealer/>
      </div>
    )
  }
}

export default Table;
