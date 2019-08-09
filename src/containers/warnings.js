import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import {
  hitRule1, hitRule2, hitRule3, hitRule4, hitRule5, hitRule6,
  doubleRule1, doubleRule2, doubleRule3, doubleRule4,
} from '../ruleCheckers.js';

const warningsStyle = {
  position: "absolute",
  left: "30%",
  marginLeft: "-75px",
  marginTop: 640,
  minHeight: 60,
  minWidth: 175,
}

class Warnings extends Component {
  constructor(props){
    super(props);
    this.state = {
      warnings: [],
      currentWarningIndex: 0,
    }
  }

  //manage warning in this component

  //if any rules apply, create divs and apply styling around cards

  //only check for rules if it is the users turn


  render(){
    return (
      <div style={warningsStyle}>
        <Segment>
          warnings go here
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = (store, ownProps) => {
  dealerCards: store.dealerCards,
  playerCards: store.playerCards,
  playerTurn:  store.playerTurn,
}

export default connect(mapStateToProps)(Warnings);
