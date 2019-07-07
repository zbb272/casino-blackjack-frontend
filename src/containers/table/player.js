import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Container } from 'semantic-ui-react';
import Card from '../../components/card';

const playerBoxStyle = {
  minHeight: 200,
  marginTop: 200,
  textAlign: "center"
}

class Player extends Component {

  render(){
    let cards = [];
    let total = 0;
    if(this.props.playerCards){
      for(let i = 0; i < this.props.playerCards.length; i++){
        cards.push(<Card key={`P${i}`} number={this.props.playerCards[i]}/>);
        if(this.props.playerCards[i] > 10){
          total += 10;
        } else{
          total += this.props.playerCards[i];
        }
      }
    }

    return (
      <Container className="playerBox" style={playerBoxStyle}>
        <Grid columns='equal'>
         <Grid.Column>
           <Segment>
            Total: {total}
           </Segment>
         </Grid.Column>
         <Grid.Column width={8}>
           <Segment>
            {cards}
           </Segment>
         </Grid.Column>
         <Grid.Column>
           <Segment>Player Info</Segment>
         </Grid.Column>
       </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (store, ownProps) => ({
  playerCards:  store.playerCards,
})

export default connect(mapStateToProps)(Player);
