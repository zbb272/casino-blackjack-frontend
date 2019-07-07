import React, { Component } from 'react';
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

  render(){
    let cards = [];
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
})

export default connect(mapStateToProps)(Dealer);
