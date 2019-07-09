import React, { Component } from 'react';
import { dealerRevealCard, dealerHit, endDealerTurn, startPayout, } from '../../redux/actionCreators';
import { Segment, Grid, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Card from '../../components/card';

const dealerBoxStyle = {
  minHeight: 200,
  textAlign: "center"
}

const dealerCardBoxStyle = {
  position: "absolute",
  left: "30%",
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
    this.props.startPayout();
    this.props.endDealerTurn();

    //end game
  }

  render(){
    let cards = [];

    if(this.props.dealerCards){
      for(let i = 0; i < this.props.dealerCards.length; i++){
        cards.push(<Card key={`D${i}`} position={i} card={this.props.dealerCards[i]}/>);
      }
    }

    if(this.props.dealerTurn){
      let callb = () => {console.log("here")}
      if(this.props.cardTotal > 21){
        console.log("dealer bust, end game")
        this.props.startPayout();
        this.props.endDealerTurn();
      } else if (this.props.cardTotal >= 17){
        console.log("dealer stay, end game")
        window.setTimeout(this.stay, 1000);
      } else {
        console.log("wait time, dealer hit")
        window.setTimeout(this.hit, 1000);
      }

      window.setTimeout(callb, 1000);
    }

    return(
      <Container className="dealerBox" style={dealerBoxStyle}>
        <Grid columns='equal'>
         <Grid.Column>
           <Segment>
            Card Total: {this.props.cardTotal}
           </Segment>
         </Grid.Column>
         <Grid.Column width={8}>
           <div className="dealerCards" style={dealerCardBoxStyle}>
            {cards}
           </div>
         </Grid.Column>
         <Grid.Column>
           <Segment>Dealer Info</Segment>
         </Grid.Column>
       </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (store, ownProps) => ({
  dealerCards:  store.dealerCards,
  dealerTurn:   store.dealerTurn,
})

const mapDispatchToProps = (dispatch) => ({
  dealerRevealCard:      ()=>{dispatch( dealerRevealCard() )},
  dealerHit:             ()=>{dispatch( dealerHit() )},
  endDealerTurn:         ()=>{dispatch( endDealerTurn() )},
  startPayout:           ()=>{dispatch( startPayout() )},
})

export default connect(mapStateToProps, mapDispatchToProps)(Dealer);
