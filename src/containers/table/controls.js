import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  startRound, endPlayerTurn,
  startDealerTurn, setCurrenBet, setPlayerDoubledTrue,
} from '../../redux/actionCreators';
import {
  playerHit, dealerRevealCard, playerSplitHand, playerSplitNew,
} from '../../cardActions';


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
    this.props.playerHit();
  }

  stay = () => {
    console.log("stay");
    this.props.endPlayerTurn();
    this.props.startDealerTurn();
    this.props.dealerRevealCard();
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
      elements.push( <button key="pHit" onClick={this.hit}>Hit</button> );
      elements.push( <button key="pStay" onClick={this.stay}>Stay</button> );
      elements.push( <button key="pDouble" onClick={this.double}>Double</button> );
      elements.push( <button key="pSplit" onClick={this.split}>Split</button> );
    } else if(this.props.dealerTurn){
      elements.push( <button key="pDealer">Dealer Turn Now</button>);
    } else {
      elements.push(<button key="lowerBet"  onClick={this.lowerBet}>Lower Bet</button>);
      elements.push(<button key="raiseBet"  onClick={this.raiseBet}>Raise Bet</button>);
      elements.push(<button key="startgame" onClick={this.startGame}>Deal</button>);
    }


    return (
      <div>
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
  playerHit:       ()=>{dispatch( playerHit()        )},
  dealerRevealCard:()=>{dispatch( dealerRevealCard() )},
  endPlayerTurn:   ()=>{dispatch( endPlayerTurn()    )},
  startDealerTurn: ()=>{dispatch( startDealerTurn()  )},
  setPlayerDoubledTrue:   ()=>{dispatch( setPlayerDoubledTrue()    )},
  setCurrenBet:    (amount)=>{dispatch( setCurrenBet(amount))},
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
