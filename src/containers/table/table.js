import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dealDealerCards, dealPlayerCards, startPlayerTurn,
   endPlayerTurn, startDealerTurn, dealerRevealCard, setPlayerChips,
   endPayout, endRound, setCurrenBet, } from '../../redux/actionCreators';
import { Container } from 'semantic-ui-react';
import Dealer from './dealer';
import Player from './player';
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
        if(cards[i] === 14){
          aces.push(14);
        }
        else if(cards[i] > 10){
          total += 10;
        } else if(cards[i] > 1){
          total += cards[i];
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

  render(){
    let playerTotal = this.calculateTotal(this.props.playerCards);
    let dealerTotal = this.calculateTotal(this.props.dealerCards);

    if(this.props.roundStarted && !this.props.playerTurn && !this.props.dealerTurn && !this.props.payout){
      console.log("game started")
      this.props.dealDealerCards();
      this.props.dealPlayerCards();
      this.props.startPlayerTurn();
    } else if(this.props.roundStarted && this.props.playerTurn){
      console.log("user turn");
      if(playerTotal > 21){
        console.log("BUST");
        this.props.endPlayerTurn();
        this.props.startDealerTurn();
        this.props.dealerRevealCard();
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

    console.log(this.props.dealerCards);
    console.log(this.props.playerCards);

    return (
      <Container style={tableContainerStyle} className="Table">
        <Dealer cardTotal={dealerTotal}/>
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
  endPayout:       ()=>{dispatch( endPayout() )},
  endRound:        ()=>{dispatch( endRound()  )},
})

export default connect(mapStateToProps, mapDispatchToProps)(Table);
