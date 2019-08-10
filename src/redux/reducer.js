import { combineReducers } from 'redux';
import { BLACKJACK_RULES_OPEN, BLACKJACK_RULES_CLOSED,
       CASINO_RULES_OPEN, CASINO_RULES_CLOSED,
       PAYOUT_STARTED, PAYOUT_FINISHED,
       ROUND_FINISHED, ROUND_STARTED, PLAYER_TURN_STARTED,
       PLAYER_TURN_FINISHED, DEALER_TURN_STARTED, DEALER_TURN_FINISHED,
       SET_PLAYER_CHIPS, SET_CURRENT_BET,
       COMP_ONE_TURN_STARTED, COMP_TWO_TURN_STARTED, COMP_ONE_TURN_FINISHED, COMP_TWO_TURN_FINISHED,
       PLAYER_SPLIT_TURN_STARTED, PLAYER_SPLIT_TURN_FINISHED,
       SET_PLAYER_CARDS, SET_PLAYER_SPLIT_CARDS,
       PLAYER_DOUBLED, RESET_PLAYER_DOUBLED,
       SET_DEALER_CARDS, SET_COMP_ONE_CARDS, SET_COMP_TWO_CARDS,
      }
       from './actionType';

//-------------
//RULES REDUCERS
//-------------
const blackjackRulesReducer = ( oldState = true, action ) => {
  switch(action.type) {
    case BLACKJACK_RULES_OPEN:
      return true;
    case BLACKJACK_RULES_CLOSED:
      return false;
    default:
      return oldState
  }
}

const casinoRulesReducer = ( oldState  = true, action ) => {
  switch(action.type) {
    case CASINO_RULES_OPEN:
      return true;
    case CASINO_RULES_CLOSED:
      return false;
    default:
      return oldState
  }
}



//-------------
//TURN REDUCERS
//-------------
const roundReducer = ( oldState = false, action ) => {
  switch(action.type) {
    case ROUND_FINISHED:
      return false;
    case ROUND_STARTED:
      return true;
    default:
      return oldState;
  }
}

const payoutReducer = ( oldState = false, action ) => {
  switch(action.type) {
    case PAYOUT_STARTED:
      return true;
    case PAYOUT_FINISHED:
      return false;
    default:
      return oldState;
  }
}

const playerTurnReducer = ( oldState = false, action ) => {
  switch(action.type) {
    case PLAYER_TURN_STARTED:
      return true;
    case PLAYER_TURN_FINISHED:
      return false;
    default:
      return oldState;
  }
}

const playerSplitTurnReducer = ( oldState = false, action ) => {
  switch(action.type) {
    case PLAYER_SPLIT_TURN_STARTED:
      return true;
    case PLAYER_SPLIT_TURN_FINISHED:
      return false;
    default:
      return false;
  }
}

const playerDoubleReducer = ( oldState = false, action ) => {
  switch(action.type) {
    case PLAYER_DOUBLED:
      return true;
    case RESET_PLAYER_DOUBLED:
      return false;
    default:
      return false;
  }
}

const dealerTurnReducer = ( oldState = false, action ) => {
  switch(action.type) {
    case DEALER_TURN_STARTED:
      return true;
    case DEALER_TURN_FINISHED:
      return false;
    default:
      return oldState;
  }
}

const compOneTurnReducer = ( oldState = false, action ) => {
  switch(action.type){
    case COMP_ONE_TURN_STARTED:
      return true;
    case COMP_ONE_TURN_FINISHED:
      return false;
    default:
      return oldState;
  }
}

const compTwoTurnReducer = ( oldState = false, action ) => {
  switch(action.type){
    case COMP_TWO_TURN_STARTED:
      return true;
    case COMP_TWO_TURN_FINISHED:
      return false;
    default:
      return oldState;
  }
}

//-------------
//CARD REDUCERS
//-------------
const playerSplitCardsReducer = ( oldState = false, action ) => {
  switch(action.type) {
    case SET_PLAYER_SPLIT_CARDS:
      return action.payload;
    default:
      return false;
  }
}

const dealerCardsReducer = ( oldState = false, action ) => {
  switch(action.type) {
    case SET_DEALER_CARDS:
      return action.payload;
    default:
      return oldState;
  }
}

const playerCardsReducer = ( oldState = false, action ) => {
  switch(action.type) {
    case SET_PLAYER_CARDS:
      return action.payload;
    default:
      return oldState;
  }
}

const computerPlayersReducer = ( oldState = [[] , []], action ) => {
  let updatedPlayers = [...oldState];
  switch(action.type) {
    case SET_COMP_ONE_CARDS:
      updatedPlayers[0] = action.payload;
      return updatedPlayers;
    case SET_COMP_TWO_CARDS:
      updatedPlayers[1] = action.payload;
      return updatedPlayers;
    default:
      return oldState;
  }
}

//-------------
//CHIP & BET REDUCERS
//-------------
const playerChipsReducer = ( oldState = false, action ) => {
  switch(action.type) {
    case SET_PLAYER_CHIPS:
      return action.payload;
    default:
      return oldState;
  }
}

const playerBetReducer = ( oldState = false, action ) => {
  switch(action.type) {
    case SET_CURRENT_BET:
      return action.payload;
    default:
      return oldState;
  }
}

const rootReducer = combineReducers({
  blackjackRulesOpen: blackjackRulesReducer,
  casinoRulesOpen:    casinoRulesReducer,
  roundStarted:       roundReducer,
  payout:             payoutReducer,
  playerTurn:         playerTurnReducer,
  playerSplitTurn:    playerSplitTurnReducer,
  playerSplitCards:   playerSplitCardsReducer,
  dealerTurn:         dealerTurnReducer,
  compOneTurn:        compOneTurnReducer,
  compTwoTurn:        compTwoTurnReducer,
  dealerCards:        dealerCardsReducer,
  playerCards:        playerCardsReducer,
  playerChips:        playerChipsReducer,
  playerBet:          playerBetReducer,
  playerDoubled:      playerDoubleReducer,
  computerPlayers:    computerPlayersReducer,
})

export default rootReducer;
