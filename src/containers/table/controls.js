import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startRound, startPlayerTurn, playerHit, endPlayerTurn, startDealerTurn } from '../../redux/actionCreators';

class Controls extends Component {
  constructor(props){
    super(props);
  }

  startGame = () => {
    this.props.startRound();
  }

  hit = () => {
    console.log("hit");
    this.props.playerHit();
  }

  stay = () => {
    console.log("stay");
    this.props.endPlayerTurn();
    this.props.startDealerTurn();
  }


  render(){
    let elements = [];

    if(this.props.roundStarted && this.props.playerTurn){
      elements.push( <button key="pHit" onClick={this.hit}>Hit</button> );
      elements.push( <button key="pStay" onClick={this.stay}>Stay</button> );
      elements.push( <button key="pDouble">Double</button> );
      elements.push( <button key="pSplit">Split</button> );
    } else if(this.props.dealerTurn){
      elements.push( <button key="pDealer">Dealer Turn Now</button>);
    } else {
      elements.push(
        <button key="startgame" onClick={this.startGame}>Deal</button>
      )
    }

    let total = 0;
    if(this.props.playerCards){
      this.props.playerCards.forEach(num => {
        if(num > 10){
          total += 10;
        } else{
          total += num;
        }
      })
      console.log("total")
      console.log(total)
    }
    if(total > 21){
      console.log("BUST");
      window.alert("BUST");
      this.props.endPlayerTurn();
      this.props.startDealerTurn();
    }

    return (
      <div>
        {elements}
      </div>
    )
  }
}

const mapStateToProps = (store, ownProps) => ({
  roundStarted: store.roundStarted,
  playerTurn: store.playerTurn,
  playerCards: store.playerCards,
  dealerTurn: store.dealerTurn,
})

const mapDispatchToProps = (dispatch) => ({
  startRound:      ()=>{dispatch( startRound() )},
  playerHit:       ()=>{dispatch( playerHit()  )},
  endPlayerTurn:   ()=>{dispatch( endPlayerTurn() )},
  startDealerTurn: ()=>{dispatch( startDealerTurn() )},

})

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
