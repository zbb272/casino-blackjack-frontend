import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startRound, playerHit, endPlayerTurn, dealerRevealCard,
   startDealerTurn, setCurrenBet, setPlayerDoubledTrue,
   setPlayerCards, setPlayerSplitCards, } from '../../redux/actionCreators';

class Controls extends Component {

   getSuite = () => {
    let suiteNum = Math.floor(Math.random() * 3);
    switch(suiteNum){
      case 0:
        return "C";
      case 1:
        return "D";
      case 2:
        return "H";
      case 3:
        return "S";
      default:
        return "S";
    }
  }

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
    if(this.props.playerCards[0].slice(1, 3) === this.props.playerCards[1].slice(1, 3)){
      console.log("splitting")
      let cards = [];
      cards.push(this.props.playerCards[0]);
      cards.push(`${this.getSuite()}${Math.floor(Math.random() * 13) + 2}`);

      let splitCards = [];
      splitCards.push(this.props.playerCards[1]);
      splitCards.push(`${this.getSuite()}${Math.floor(Math.random() * 13) + 2}`);

      this.props.setPlayerCards(cards);
      this.props.setPlayerSplitCards(splitCards);

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
  roundStarted:   store.roundStarted,
  playerTurn:     store.playerTurn,
  playerCards:    store.playerCards,
  dealerTurn:     store.dealerTurn,
  playerBet:      store.playerBet,
  playerChips:    store.playerChips,
  playerDoubled:  store.playerDoubled,
})

const mapDispatchToProps = (dispatch) => ({
  startRound:      ()=>{dispatch( startRound()       )},
  playerHit:       ()=>{dispatch( playerHit()        )},
  dealerRevealCard:()=>{dispatch( dealerRevealCard() )},
  endPlayerTurn:   ()=>{dispatch( endPlayerTurn()    )},
  startDealerTurn: ()=>{dispatch( startDealerTurn()  )},
  setPlayerDoubledTrue:   ()=>{dispatch( setPlayerDoubledTrue()    )},
  setCurrenBet:    (amount)=>{dispatch( setCurrenBet(amount))},
  setPlayerCards:  (cards)=>{dispatch( setPlayerCards(cards))},
  setPlayerSplitCards: (cards)=>{dispatch( setPlayerSplitCards(cards))},
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
