import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Container } from 'semantic-ui-react';
import Card from '../../components/card';

const playerBoxStyle = {
  minHeight: 200,
  marginTop: 0,
  position:  "absolute",
  textAlign: "center"
}

class ComputerPlayer extends Component {

  render(){
    let cards = [];
    let marginL = 400 * this.props.playerNumber;
    if(this.props.playerCards){
      for(let i = 0; i < this.props.playerCards.length; i++){
        cards.push(<Card key={`P${i}`} position={i} card={this.props.playerCards[i]}/>);
      }
    }

    return (
      <Container className="playerBox" style={{minHeight: 200, position:"absolute", left: marginL}}>
         <div>Card Total: {this.props.cardTotal}</div>
         <div style={{marginLeft: "-30%"}}>
          {cards}
         </div>
      </Container>
    )
  }
}

export default ComputerPlayer;
