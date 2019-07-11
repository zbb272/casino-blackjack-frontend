import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Container } from 'semantic-ui-react';
import Card from '../../components/card';

const playerBoxStyle = {
  minHeight: 200,
  marginTop: 200,
  textAlign: "center"
}

class ComputerPlayer extends Component {

  render(){
    let cards = [];
    if(this.props.playerCards){
      for(let i = 0; i < this.props.playerCards.length; i++){
        cards.push(<Card key={`P${i}`} position={i} card={this.props.playerCards[i]}/>);
      }
    }

    return (
      <Container className="playerBox" style={playerBoxStyle}>
         <div>Card Total: {this.props.cardTotal}</div>
         <div style={{marginLeft: "-30%"}}>
          {cards}
         </div>
      </Container>
    )
  }
}

const mapStateToProps = (store, ownProps) => ({
  playerCards:  store.playerCards,
})

export default connect(mapStateToProps)(ComputerPlayer);
