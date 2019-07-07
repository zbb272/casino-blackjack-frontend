import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startRound, startPlayerTurn } from '../../redux/actionCreators';

class Controls extends Component {
  constructor(props){
    super(props);
  }

  startGame = () => {
    this.props.startRound();
  }


  render(){
    let elements = [];

    if(this.props.roundStarted && this.props.playerTurn){
      elements.push(
        <button key="control1">player controls here</button>
      )
    } else {
      elements.push(
        <button key="startgame" onClick={this.startGame}>Deal</button>
      )
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
})

const mapDispatchToProps = (dispatch) => ({
  startRound: ()=>{dispatch( startRound() )},
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
