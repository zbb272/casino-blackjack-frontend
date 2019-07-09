import React, { Component } from 'react';
import { dealerRevealCard } from '../../redux/actionCreators';
import { Segment, Grid, Container } from 'semantic-ui-react';
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
    let total = 0;

    if(this.props.dealerCards){
      for(let i = 0; i < this.props.dealerCards.length; i++){
        cards.push(<Card key={`D${i}`} number={this.props.dealerCards[i]}/>);
        if(this.props.dealerCards[i] > 10){
          total += 10;
        } else if (this.props.dealerCards[i] >= 1){
          total += this.props.dealerCards[i];
        }
      }
    }

    if(this.props.dealerTurn){
      let callb = () => {console.log("here")}

      if(total > 21){
        console.log("dealer bust, end game")
      } else if (total >= 17){
        console.log("dealer stay, end game")
      } else {
        console.log("wait time, dealer hit")
      }

      window.setTimeout(callb, 1000);
    }

    return(
      <Container className="dealerBox" style={dealerBoxStyle}>
        <Grid columns='equal'>
         <Grid.Column>
           <Segment>
            Total: {total}
           </Segment>
         </Grid.Column>
         <Grid.Column width={8}>
           <Segment className="dealerCards" style={dealerCardBoxStyle}>
            {cards}
           </Segment>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Dealer);
