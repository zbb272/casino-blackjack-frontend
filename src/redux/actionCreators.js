import { BLACKJACK_RULES_OPEN, BLACKJACK_RULES_CLOSED,
       CASINO_RULES_OPEN, CASINO_RULES_CLOSED,
       PAYOUT_STARTED, PAYOUT_FINISHED,
       ROUND_FINISHED, ROUND_STARTED,
       PLAYER_TURN_STARTED, PLAYER_TURN_FINISHED,
       PLAYER_SPLIT_TURN_STARTED, PLAYER_SPLIT_TURN_FINISHED,
       DEALER_TURN_STARTED, DEALER_TURN_FINISHED,
       COMP_ONE_TURN_STARTED, COMP_TWO_TURN_STARTED,
       COMP_ONE_TURN_FINISHED, COMP_TWO_TURN_FINISHED,
       SET_PLAYER_CARDS, SET_PLAYER_SPLIT_CARDS,
       PLAYER_DOUBLED, RESET_PLAYER_DOUBLED,
       SET_COMP_ONE_CARDS, SET_COMP_TWO_CARDS, SET_DEALER_CARDS,
       SET_PLAYER_CHIPS, SET_CURRENT_BET,
      }
       from './actionType';

//CURRENTLY UNUSED ACTION CREATORS
function openBlackjackRules(){
  return { type: BLACKJACK_RULES_OPEN };
}

function closeBlackjackRules(){
  return { type: BLACKJACK_RULES_CLOSED };
}

function openCasinoRules(){
  return { type: CASINO_RULES_OPEN };
}

function closeCasinoRules(){
  return { type: CASINO_RULES_CLOSED };
}

//DEFINIETELY NEEDED

//---FOR TRACKING GAME PROGRESS
function startRound(){
  return { type: ROUND_STARTED };
}

function endRound(){
  return { type: ROUND_FINISHED };
}

function startPlayerTurn(){
  return { type: PLAYER_TURN_STARTED };
}

function endPlayerTurn(){
  return { type: PLAYER_TURN_FINISHED };
}

function startPlayerSplitTurn(){
  return { type: PLAYER_SPLIT_TURN_STARTED };
}

function endPlayerSplitTurn(){
  return { type: PLAYER_SPLIT_TURN_FINISHED };
}

function startDealerTurn(){
  return { type: DEALER_TURN_STARTED };
}

function endDealerTurn(){
  return { type: DEALER_TURN_FINISHED };
}

function startCompOneTurn(){
  return { type: COMP_ONE_TURN_STARTED };
}

function endCompOneTurn(){
  return { type: COMP_ONE_TURN_FINISHED };
}

function startCompTwoTurn(){
  return { type: COMP_TWO_TURN_STARTED };
}

function endCompTwoTurn(){
  return { type: COMP_TWO_TURN_FINISHED };
}

function startPayout(){
  return { type: PAYOUT_STARTED };
}

function endPayout(){
  return { type: PAYOUT_FINISHED };
}

function setPlayerDoubledTrue(){
  return { type: PLAYER_DOUBLED };
}

function resetPlayerDoubled(){
  return { type: RESET_PLAYER_DOUBLED };
}
//---FOR SETTING CARDS
function setPlayerCards(cards){
  return { type: SET_PLAYER_CARDS, payload: cards };
}

function setPlayerSplitCards(cards){
  return { type: SET_PLAYER_SPLIT_CARDS, payload: cards };
}

function setPlayerChips(amount){
  return { type: SET_PLAYER_CHIPS, payload: amount };
}

function setCurrenBet(amount){
  return { type: SET_CURRENT_BET, payload: amount };
}
//--SETTERS THAT NEED TO BE MADE
function setCompOneCards(cards){
  return { type: SET_COMP_ONE_CARDS, payload: cards };
}

function setCompTwoCards(cards){
  return { type: SET_COMP_TWO_CARDS, payload: cards };
}

function setDealerCards(cards){
  return { type: SET_DEALER_CARDS, payload: cards };
}

export { openBlackjackRules, closeBlackjackRules,
         openCasinoRules, closeCasinoRules,
         startRound, endRound, startPlayerTurn, endPlayerTurn,
         startDealerTurn, endDealerTurn, startPayout, endPayout,
         startCompOneTurn, startCompTwoTurn, endCompOneTurn, endCompTwoTurn,
         startPlayerSplitTurn, endPlayerSplitTurn,
         setPlayerChips, setCurrenBet,
         setPlayerDoubledTrue, resetPlayerDoubled,
         setPlayerSplitCards, setPlayerCards, }
