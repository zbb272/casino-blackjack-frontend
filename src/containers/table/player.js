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
        cards.push(<Card key={`P${i}`} number={this.props.playerCards[i]}/>);
      }
    }

    return (
      <Container className="playerBox" style={playerBoxStyle}>
        <Grid columns='equal'>
         <Grid.Column>
           <Segment>
             <div>Card Total: {this.props.cardTotal}</div>
             <div>Current Bet: {this.props.playerBet}</div>
           </Segment>
         </Grid.Column>
         <Grid.Column width={8}>
           <Segment>
            {cards}
           </Segment>
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
  playerCards:  store.playerCards,
  playerChips:  store.playerChips,
  playerBet:    store.playerBet,
})

export default connect(mapStateToProps)(Player);
