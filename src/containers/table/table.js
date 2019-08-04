import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  startPlayerTurn, endPlayerTurn, startDealerTurn,
  setPlayerChips, setCurrenBet, endPayout, endRound,
  endCompOneTurn, startCompOneTurn, startCompTwoTurn, endCompTwoTurn,
} from '../../redux/actionCreators';
import {
  dealDealerCards, dealPlayerCards, dealCompOne, dealCompTwo,
  dealerRevealCard, compOneHit, compTwoHit,

} from '../../cardActions';
import { Container } from 'semantic-ui-react';
import Dealer from './dealer';
import Player from './player';
import ComputerPlayer from './computerPlayer';
import Controls from './controls'

//styles
const tableContainerStyle = {
  position: "fixed",
  marginTop: 56,
  minHeight: 500,
  minWidth: 600,
  backgroundColor: "green",
}

class Table extends Component {
  constructor(props){
    super(props);
    props.setPlayerChips(100);
    props.setCurrenBet(10);
  }

  calculateTotal = (cards) => {
    let total = 0;
    let aces = [];
    if(cards){
      for(let i = 0; i < cards.length; i++){
        let card = cards[i];
        let cardNum = parseInt(card.slice(1));
        if(cardNum === 14){
          aces.push(14);
        }
        else if(cardNum > 10){
          total += 10;
        } else if(cardNum > 1){
          total += cardNum;
        }
      }
      if(aces.length > 0){
        for(let i = 0; i < aces.length; i++){
          if((total + 11) > 21){
            total += 1;
          } else {
            total += 11;
          }
        }
      }
    }
    return total;
  }

  endPayoutStartNewRound = () => {
    let playerTotal = this.calculateTotal(this.props.playerCards);
    let dealerTotal = this.calculateTotal(this.props.dealerCards);

    if(playerTotal > 21){
      this.props.setPlayerChips(this.props.playerChips - this.props.playerBet)
    } else if(dealerTotal > 21){
      this.props.setPlayerChips(this.props.playerChips + this.props.playerBet)
    } else if (playerTotal > dealerTotal){
      this.props.setPlayerChips(this.props.playerChips + this.props.playerBet)
    } else if (dealerTotal > playerTotal){
      this.props.setPlayerChips(this.props.playerChips - this.props.playerBet)
    }
    this.props.endRound();
    this.props.endPayout();
  }

  computerOneHit = () => {
    this.props.compOneHit(this.props.computerPlayers[0])
  }

  computerTwoHit = () => {
    this.props.compTwoHit(this.props.computerPlayers[1])
  }

  render(){
    let playerTotal = this.calculateTotal(this.props.playerCards);
    let playerSplitTotal = this.calculateTotal(this.props.playerSplitCards);
    let dealerTotal = this.calculateTotal(this.props.dealerCards);

    let compPlayers = [];
    let computerPlayerTotals = [];
    for(let i = 0; i < this.props.computerPlayers.length; i++){
      computerPlayerTotals.push(this.calculateTotal(this.props.computerPlayers[i]));
      compPlayers.push(<ComputerPlayer key={i} playerNumber={i} cardTotal={computerPlayerTotals[i]} playerCards={this.props.computerPlayers[i]} />);
    }

    if(this.props.roundStarted && !this.props.playerTurn && !this.props.dealerTurn && !this.props.compOneTurn && !this.props.compTwoTurn && !this.props.payout){
      console.log("game started")
      this.props.dealDealerCards();
      this.props.dealCompOne();
      this.props.dealPlayerCards();
      this.props.dealCompTwo();
      if(this.props.computerPlayers[0].length > 0 && this.props.computerPlayers[1].length > 0){
        this.props.startCompOneTurn();
      }

    } else if(this.props.roundStarted && this.props.compOneTurn){
      let compOneTotal = computerPlayerTotals[0];
      if(compOneTotal > 21){
        this.props.endCompOneTurn();
        this.props.startPlayerTurn();
      } else if (compOneTotal >= 17){
        this.props.endCompOneTurn();
        this.props.startPlayerTurn();
      } else {
        window.setTimeout(this.computerOneHit, 1000);
      }
    } else if(this.props.roundStarted && this.props.playerTurn){
      console.log("user turn");
      if(playerTotal > 21){
        console.log("BUST");
        this.props.endPlayerTurn();
        this.props.startCompTwoTurn();
      }
    } else if (this.props.roundStarted && this.props.compTwoTurn){
      console.log("here")
      let compTwoTotal = computerPlayerTotals[1];
      if(compTwoTotal > 21){
        this.props.endCompTwoTurn();
        this.props.startDealerTurn();
        this.props.dealerRevealCard();
      } else if (compTwoTotal >= 17){
        this.props.endCompTwoTurn();
        this.props.startDealerTurn();
        this.props.dealerRevealCard();
      } else {
        window.setTimeout(this.props.computerTwoHit, 1000);
      }
    } else if (this.props.roundStarted && this.props.dealerTurn){
      console.log("dealer turn");
    } else if (this.props.roundStarted && this.props.payout){
      console.log("payout")
      this.endPayoutStartNewRound();
      //window.setTimeout(this.endPayoutStartNewRound, 1000);
    } else {
      console.log("game not started");
    }

    return (
      <Container style={tableContainerStyle} className="Table">
        <Dealer cardTotal={dealerTotal}/>
        {compPlayers}
        <Player cardTotal={playerTotal} />
        <Controls/>
      </Container>
    )
  }
}

const mapStateToProps = (store, ownProps) => ({
  roundStarted: store.roundStarted,
  playerTurn:   store.playerTurn,
  dealerTurn:   store.dealerTurn,
  dealerCards:  store.dealerCards,
  playerCards:  store.playerCards,
  payout:       store.payout,
  playerChips:  store.playerChips,
  playerBet:    store.playerBet,
  computerPlayers: store.computerPlayers,
  compOneTurn:     store.compOneTurn,
  compTwoTurn:     store.compTwoTurn,
  playerSplitCards:store.playerSplitCards,
  playerSplitTurn: store.playerSplitTurn,
})

const mapDispatchToProps = (dispatch) => ({
  dealDealerCards: ()=>{dispatch( dealDealerCards() )},
  dealPlayerCards: ()=>{dispatch( dealPlayerCards() )},
  startPlayerTurn: ()=>{dispatch( startPlayerTurn() )},
  endPlayerTurn:   ()=>{dispatch( endPlayerTurn()   )},
  startDealerTurn: ()=>{dispatch( startDealerTurn() )},
  dealerRevealCard:()=>{dispatch( dealerRevealCard())},
  setPlayerChips:(amount)=>{dispatch( setPlayerChips(amount)  )},
  setCurrenBet:  (amount)=>{dispatch( setCurrenBet(amount)    )},
  endPayout:       ()=>{dispatch( endPayout()   )},
  endRound:        ()=>{dispatch( endRound()    )},
  dealCompOne:     ()=>{dispatch( dealCompOne() )},
  dealCompTwo:     ()=>{dispatch( dealCompTwo() )},
  compOneHit:      (oldCards)=>{dispatch( compOneHit(oldCards)  )},
  compTwoHit:      (oldCards)=>{dispatch( compTwoHit(oldCards)  )},
  startCompOneTurn:()=>{dispatch( startCompOneTurn() )},
  endCompOneTurn:  ()=>{dispatch( endCompOneTurn()   )},
  startCompTwoTurn:()=>{dispatch( startCompTwoTurn() )},
  endCompTwoTurn:  ()=>{dispatch( endCompTwoTurn()   )},
})

export default connect(mapStateToProps, mapDispatchToProps)(Table);
