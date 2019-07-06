import { combineReducers } from 'redux';
import { BLACKJACK_RULES_OPEN, BLACKJACK_RULES_CLOSED,
       CASINO_RULES_OPEN, CASINO_RULES_CLOSED }
       from './actionType';

const blackjackRulesReducer = ( oldState = false, action ) => {
  switch(action.type) {
    case BLACKJACK_RULES_OPEN:
      return true;
    case BLACKJACK_RULES_CLOSED:
      return false;
    default:
      return oldState
  }
}

const casinoRulesReducer = ( oldState  = false, action ) => {
  switch(action.type) {
    case CASINO_RULES_OPEN:
      return true;
    case CASINO_RULES_CLOSED:
      return false;
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  showBlackjackRules: blackjackRulesReducer,
  showCasinoRules: casinoRulesReducer,
})

export default rootReducer;
