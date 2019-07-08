import { combineReducers } from 'redux';
import { BLACKJACK_RULES_OPEN, BLACKJACK_RULES_CLOSED,
       CASINO_RULES_OPEN, CASINO_RULES_CLOSED,
       ROUND_FINISHED, ROUND_STARTED, PLAYER_TURN_STARTED,
       PLAYER_TURN_FINISHED, DEALER_TURN_STARTED, DEALER_TURN_FINISHED,
       DEALER_START, DEALER_REVEAL, DEALER_HIT, PLAYER_START, PLAYER_HIT,
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

const dealerCardsReducer = ( oldState = false, action ) => {
  switch(action.type) {
    case DEALER_START:
      return action.payload;
    case DEALER_REVEAL:
      let newCards = [...oldState];
      newCards.splice(0, 1, action.payload);
      return newCards;
    case DEALER_HIT:
      let newState = [...oldState];
      newState.push(action.payload);
      return newState;
    default:
      return oldState;
  }
}

const playerCardsReducer = ( oldState = false, action ) => {
  switch(action.type) {
    case PLAYER_START:
      return action.payload;
    case PLAYER_HIT:
      let newCards = [...oldState];
      newCards.push(action.payload);
      return newCards;
    default:
      return oldState;
  }
}

const rootReducer = combineReducers({
  blackjackRulesOpen: blackjackRulesReducer,
  casinoRulesOpen: casinoRulesReducer,
  roundStarted: roundReducer,
  playerTurn: playerTurnReducer,
  dealerTurn: dealerTurnReducer,
  dealerCards: dealerCardsReducer,
  playerCards: playerCardsReducer,
})

export default rootReducer;
