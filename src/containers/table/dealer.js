import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

const dealerBoxStyle = {
  minHeight: 200,
  textAlign: "center"
}

const dealerCardBoxStyle = {
  position: "absolute",
  margin: "0 auto",
  minHeight: 60,
  minWidth: 175,
}

class Dealer extends Component {

  render(){
    return(
      <div className="dealerBox" style={dealerBoxStyle}>
        <div className="dealerCards" style={dealerCardBoxStyle}>
          <h4 >Dealer cards go here</h4>
        </div>
      </div>
    )
  }
}

export default Dealer;
