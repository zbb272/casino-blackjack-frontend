import React, { Component } from 'react';

const dealerBoxStyle = {
  minHeight: 200,
  textAlign: "center"
}

const dealerCardBoxStyle = {
  position: "absolute",
  left: "50%",
  marginLeft: "-75px",
  marginTop: 100,
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
