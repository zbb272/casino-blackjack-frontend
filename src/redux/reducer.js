import { combineReducers } from 'redux';
import { BLACKJACK_RULES_OPEN, BLACKJACK_RULES_CLOSED,
       CASINO_RULES_OPEN, CASINO_RULES_CLOSED,
       ROUND_FINISHED, ROUND_STARTED, PLAYER_TURN_STARTED,
       PLAYER_TURN_FINISHED, DEALER_TURN_STARTED, DEALER_TURN_FINISHED,
      }
       from './actionType';

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

const roundOverReducer = ( oldState = true, action ) => {
  switch(action.type) {
    case ROUND_FINISHED:
      return true;
    case ROUND_STARTED:
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

const rootReducer = combineReducers({
  blackjackRulesOpen: blackjackRulesReducer,
  casinoRulesOpen: casinoRulesReducer,
  roundOver: roundOverReducer,
  playerTurn: playerTurnReducer,
  dealerTurn: dealerTurnReducer,
})

export default rootReducer;
