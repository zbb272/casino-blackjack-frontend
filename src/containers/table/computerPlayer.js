import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Card from '../../components/card';

class ComputerPlayer extends Component {

  render(){
    let cards = [];
    if(this.props.playerCards){
      for(let i = 0; i < this.props.playerCards.length; i++){
        cards.push(<Card key={`P${i}`} position={i} card={this.props.playerCards[i]}/>);
      }
    }

    return (
      <div className={`computer-player-${this.props.playerNumber}`} >
         <div>Card Total: {this.props.cardTotal}</div>
         <div style={{marginLeft: "-30%"}}>
          {cards}
         </div>
      </div>
    )
  }
}

export default ComputerPlayer;
