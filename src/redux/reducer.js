import { combineReducers } from 'redux';
import { BLACKJACK_RULES_OPEN, BLACKJACK_RULES_CLOSED,
       CASINO_RULES_OPEN, CASINO_RULES_CLOSED,
       PAYOUT_STARTED, PAYOUT_FINISHED,
       ROUND_FINISHED, ROUND_STARTED, PLAYER_TURN_STARTED,
       PLAYER_TURN_FINISHED, DEALER_TURN_STARTED, DEALER_TURN_FINISHED,
       DEALER_START, DEALER_REVEAL, DEALER_HIT, PLAYER_START, PLAYER_HIT,
       SET_PLAYER_CHIPS, SET_CURRENT_BET,
       COMP_ONE_TURN_STARTED, COMP_TWO_TURN_STARTED, COMP_ONE_TURN_FINISHED, COMP_TWO_TURN_FINISHED,
       COMP_ONE_START, COMP_TWO_START, COMP_ONE_HIT, COMP_TWO_HIT,
       PLAYER_SPLIT_STARTED, PLAYER_SPLIT_HIT, PLAYER_SPLIT_FINISHED,
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

const playerSplitReducer = ( oldState = false, action ) => {
  switch(action.type) {
    case PLAYER_SPLIT_STARTED:
      return true;
    case PLAYER_SPLIT_HIT:
      return true;
    case PLAYER_SPLIT_FINISHED:
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

const computerPlayersReducer = ( oldState = [], action ) => {
  let updatedPlayers = [...oldState];
  switch(action.type) {
    case COMP_ONE_START:
      updatedPlayers = [];
      updatedPlayers.push(action.payload);
      return updatedPlayers;
    case COMP_TWO_START:
      updatedPlayers.push(action.payload);
      return updatedPlayers;
    case COMP_ONE_HIT:
      let newPlayerOneCards = [...oldState[0]];
      newPlayerOneCards.push(action.payload);
      updatedPlayers[0] = newPlayerOneCards;
      return updatedPlayers;
    case COMP_TWO_HIT:
      let newPlayerTwoCards = [...oldState[1]];
      newPlayerTwoCards.push(action.payload);
      updatedPlayers[1] = newPlayerTwoCards;
      return updatedPlayers;
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
  playerSplit:        playerSplitReducer,
  dealerTurn:         dealerTurnReducer,
  compOneTurn:        compOneTurnReducer,
  compTwoTurn:        compTwoTurnReducer,
  dealerCards:        dealerCardsReducer,
  playerCards:        playerCardsReducer,
  playerChips:        playerChipsReducer,
  playerBet:          playerBetReducer,
  computerPlayers:    computerPlayersReducer,
})

export default rootReducer;
