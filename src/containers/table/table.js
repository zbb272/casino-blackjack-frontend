import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dealDealerCards, dealPlayerCards, startPlayerTurn } from '../../redux/actionCreators';
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
    } else {
      console.log("game not started")
    }

    console.log(this.props.dealerCards);
    console.log(this.props.playerCards);

    return (
      <Container style={tableContainerStyle} className="Table">
        <Dealer/>
        <Player/>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Table);
