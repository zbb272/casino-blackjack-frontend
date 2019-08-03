import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Container } from 'semantic-ui-react';
import Card from '../../components/card';
import PlayerInformation from '../../components/playerInformation';

const playerBoxStyle = {
  minHeight: 200,
  marginTop: 200,
  textAlign: "center"
}

class Player extends Component {

  render(){
    let cards = [];
    if(this.props.playerCards){
      for(let i = 0; i < this.props.playerCards.length; i++){
        cards.push(<Card key={`P${i}`} position={i} card={this.props.playerCards[i]}/>);
      }
    }
    let splitCards = [];
    if(this.props.playerSplitCards){
      console.log(this.props.playerSplitCards)
      splitCards.push(<div>Card Total: {this.props.cardTotal}</div>);
      splitCards.push(<div>Current Bet: {this.props.playerBet}</div>);
      for(let i = 0; i < this.props.playerSplitCards.length; i++){
        splitCards.push(<Card key={`P${i}`} position={i} card={this.props.playerSplitCards[i]}/>);
      }
    }

    return (
      <Container className="playerBox" style={playerBoxStyle}>
        <Grid columns='equal'>
         <Grid.Column>
           {splitCards}
         </Grid.Column>
         <Grid.Column width={8}>
           <div style={{marginLeft: "-30%"}}>
           <div>Card Total: {this.props.cardTotal}</div>
           <div>Current Bet: {this.props.playerBet}</div>
            {cards}
           </div>
         </Grid.Column>
         <Grid.Column>
           <PlayerInformation chipTotal={this.props.playerChips}/>
         </Grid.Column>
       </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (store, ownProps) => ({
  playerCards:      store.playerCards,
  playerChips:      store.playerChips,
  playerBet:        store.playerBet,
  playerSplitCards: store.playerSplitCards,
})

export default connect(mapStateToProps)(Player);
