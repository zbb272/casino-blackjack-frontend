import React, { Component } from 'react';
import { Grid, Segment, Container } from 'semantic-ui-react'

const playerBoxStyle = {
  minHeight: 200,
  marginTop: 200,
  textAlign: "center"
}

class Player extends Component {

  render(){
    return (
      <Container className="playerBox" style={playerBoxStyle}>
        <Grid columns='equal'>
         <Grid.Column>
           <Segment></Segment>
         </Grid.Column>
         <Grid.Column width={8}>
           <Segment>Player Cards</Segment>
         </Grid.Column>
         <Grid.Column>
           <Segment>Player Info</Segment>
         </Grid.Column>
       </Grid>
      </Container>
    )
  }
}

export default Player;
