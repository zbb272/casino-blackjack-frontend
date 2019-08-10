import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  startRound, endPlayerTurn,
  startCompTwoTurn, setCurrenBet, setPlayerDoubledTrue,
} from '../../redux/actionCreators';
import {
  playerHit, dealerRevealCard, playerSplitHand, playerSplitNew,
} from '../../cardActions';
import { Button } from 'semantic-ui-react';


class Controls extends Component {

  startGame = () => {
    this.props.startRound();
  }

  lowerBet = () => {
    let newBet = this.props.playerBet - 10;
    newBet < 10 ? newBet = 10 : newBet = newBet;
    this.props.setCurrenBet(newBet);
  }

  raiseBet = () => {
    let newBet = this.props.playerBet + 10;
    newBet > this.props.playerChips ? newBet = this.props.playerChips : newBet = newBet;
    this.props.setCurrenBet(newBet);
  }

  hit = () => {
    console.log("hit");
    this.props.playerHit(this.props.playerCards);
  }

  stay = () => {
    console.log("stay");
    this.props.endPlayerTurn();
    this.props.startCompTwoTurn();
  }

  split = () => {
    if(!this.props.playerSplitCards && this.props.playerCards[0].slice(1, 3) === this.props.playerCards[1].slice(1, 3)){
      console.log("splitting")
      let card1 = this.props.playerCards[0];
      let card2 = this.props.playerCards[1];
      this.props.playerSplitHand(card1);
      this.props.playerSplitNew(card2);
    } else {
      window.alert("cannot split")
    }
  }

  double = () => {
    let newBet = this.props.playerBet * 2;
    if(!this.props.playerDoubled && this.props.playerChips >= newBet) {
      this.props.setCurrenBet(newBet);
      this.props.setPlayerDoubledTrue();
    }
  }


  render(){
    let elements = [];

    if(this.props.roundStarted && this.props.playerTurn){
      elements.push( <Button key="pHit" onClick={this.hit}>Hit</Button> );
      elements.push( <Button key="pStay" onClick={this.stay}>Stay</Button> );
      elements.push( <Button key="pDouble" onClick={this.double}>Double</Button> );
      elements.push( <Button key="pSplit" onClick={this.split}>Split</Button> );
    } else if(this.props.dealerTurn){
      elements.push( <Button key="pDealer">Dealer Turn Now</Button>);
    } else {
      elements.push(<Button key="lowerBet"  onClick={this.lowerBet}>Lower Bet</Button>);
      elements.push(<Button key="raiseBet"  onClick={this.raiseBet}>Raise Bet</Button>);
      elements.push(<Button key="startgame" onClick={this.startGame}>Deal</Button>);
    }


    return (
      <div className="controls">
        {elements}
      </div>
    )
  }
}

const mapStateToProps = (store, ownProps) => ({
  roundStarted:     store.roundStarted,
  playerTurn:       store.playerTurn,
  playerCards:      store.playerCards,
  dealerTurn:       store.dealerTurn,
  playerBet:        store.playerBet,
  playerChips:      store.playerChips,
  playerDoubled:    store.playerDoubled,
  playerSplitCards: store.playerSplitCards,
})

const mapDispatchToProps = (dispatch) => ({
  startRound:      ()=>{dispatch( startRound()       )},
  playerHit:       (oldCards)=>{dispatch( playerHit(oldCards)        )},
  dealerRevealCard:(oldCards)=>{dispatch( dealerRevealCard(oldCards) )},
  endPlayerTurn:   ()=>{dispatch( endPlayerTurn()    )},
  startCompTwoTurn: ()=>{dispatch( startCompTwoTurn() )},
  setPlayerDoubledTrue:   ()=>{dispatch( setPlayerDoubledTrue()    )},
  setCurrenBet:    (amount)=>{dispatch( setCurrenBet(amount))},
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
