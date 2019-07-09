import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dealDealerCards, dealPlayerCards, startPlayerTurn, endPlayerTurn, startDealerTurn, dealerRevealCard } from '../../redux/actionCreators';
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
    super(props)
  }



  render(){

    if(this.props.roundStarted && !this.props.playerTurn && !this.props.dealerTurn){
      console.log("game started")
      this.props.dealDealerCards();
      this.props.dealPlayerCards();
      this.props.startPlayerTurn();
    } else if(this.props.roundStarted && this.props.playerTurn){
      console.log("user turn");
    } else if (this.props.roundStarted && this.props.dealerTurn){
      console.log("dealer turn");
    } else {
      console.log("game not started");
    }

    console.log(this.props.dealerCards);
    console.log(this.props.playerCards);


    let total = 0;
    let aces = [];
    if(this.props.playerCards){
      for(let i = 0; i < this.props.playerCards.length; i++){
        if(this.props.playerCards[i] === 14){
          aces.push(14);
        }
        else if(this.props.playerCards[i] > 10){
          total += 10;
        } else{
          total += this.props.playerCards[i];
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
    console.log(total)
    if(total > 21 && this.props.playerTurn){
      console.log("BUST");
      this.props.endPlayerTurn();
      this.props.startDealerTurn();
      this.props.dealerRevealCard();
    }

    return (
      <Container style={tableContainerStyle} className="Table">
        <Dealer/>
        <Player cardTotal={total} />
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
})

const mapDispatchToProps = (dispatch) => ({
  dealDealerCards: ()=>{dispatch( dealDealerCards() )},
  dealPlayerCards: ()=>{dispatch( dealPlayerCards() )},
  startPlayerTurn: ()=>{dispatch( startPlayerTurn() )},
  endPlayerTurn:   ()=>{dispatch( endPlayerTurn()   )},
  startDealerTurn: ()=>{dispatch( startDealerTurn() )},
  dealerRevealCard:()=>{dispatch( dealerRevealCard())},
})

export default connect(mapStateToProps, mapDispatchToProps)(Table);
