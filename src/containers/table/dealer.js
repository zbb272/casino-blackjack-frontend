import React, { Component } from 'react';
import { dealerRevealCard } from '../../redux/actionCreators';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Card from '../../components/card';

const dealerBoxStyle = {
  minHeight: 200,
  textAlign: "center"
}

const dealerCardBoxStyle = {
  position: "absolute",
  left: "50%",
  marginLeft: "-75px",
  marginTop: 100,
  minHeight: 60,
  minWidth: 175,
}

class Dealer extends Component {

  hit = () => {
    console.log("dealer hit");
    this.props.dealerHit();
  }

  stay = () => {
    console.log("dealer stay");
    this.props.endDealerTurn();
    //end game
  }

  render(){
    let cards = [];

    if(this.props.dealerTurn){
      let callb = () => {console.log("here")}
      window.setTimeout(callb, 5000);
    }

    if(this.props.dealerCards){
      for(let i = 0; i < this.props.dealerCards.length; i++){
        cards.push(<Card key={`D${i}`} number={this.props.dealerCards[i]}/>);
      }
    }

    return(
      <div className="dealerBox" style={dealerBoxStyle}>
        <Segment className="dealerCards" style={dealerCardBoxStyle}>
          {cards}
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = (store, ownProps) => ({
  dealerCards:  store.dealerCards,
  dealerTurn:   store.dealerTurn,
})

const mapDispatchToProps = (dispatch) => ({
  dealerRevealCard:      ()=>{dispatch( dealerRevealCard() )},
})

export default connect(mapStateToProps, mapDispatchToProps)(Dealer);
