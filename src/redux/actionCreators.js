import { BLACKJACK_RULES_OPEN, BLACKJACK_RULES_CLOSED,
       CASINO_RULES_OPEN, CASINO_RULES_CLOSED,
       PAYOUT_STARTED, PAYOUT_FINISHED,
       ROUND_FINISHED, ROUND_STARTED, PLAYER_TURN_STARTED,
       PLAYER_TURN_FINISHED, DEALER_TURN_STARTED, DEALER_TURN_FINISHED,
       DEALER_START, DEALER_REVEAL, DEALER_HIT, PLAYER_START, PLAYER_HIT,
       SET_PLAYER_CHIPS, SET_CURRENT_BET,
       COMP_ONE_TURN_STARTED, COMP_TWO_TURN_STARTED, COMP_ONE_TURN_FINISHED, COMP_TWO_TURN_FINISHED,
       COMP_ONE_START, COMP_TWO_START, COMP_ONE_HIT, COMP_TWO_HIT,
       PLAYER_SPLIT_STARTED, PLAYER_SPLIT_FINISHED,
       SET_PLAYER_CARDS, SET_PLAYER_SPLIT_CARDS, PLAYER_SPLIT_HIT,
       PLAYER_DOUBLED, RESET_PLAYER_DOUBLED,
      }
       from './actionType';

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

function getSuite(){
  let suiteNum = Math.floor(Math.random() * 3);
  switch(suiteNum){
    case 0:
      return "C";
    case 1:
      return "D";
    case 2:
      return "H";
    case 3:
      return "S";
    default:
      return "S";
  }
}

function dealDealerCards(){
  let cards = [];
  cards.push("A-1");
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);
  return { type: DEALER_START, payload: cards };
}

function dealerRevealCard(){
  let card = `${getSuite()}${Math.floor(Math.random() * 13) + 2}`;
  return { type: DEALER_REVEAL, payload: card };
}

function dealerHit(){
  let card = `${getSuite()}${Math.floor(Math.random() * 13) + 2}`;
  return { type: DEALER_HIT, payload: card };
}

function dealPlayerCards(){
  let cards = [];
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);

  return { type: PLAYER_START, payload: cards };
}

function playerHit(){
  let card = `${getSuite()}${Math.floor(Math.random() * 13) + 2}`;
  return { type: PLAYER_HIT, payload: card };
}

function playerSplitHand(card){
  let cards = [];
  cards.push(card);
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);

  return { type: PLAYER_START, payload: cards };
}

function playerSplitNew(card){
  let cards = [];
  cards.push(card);
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);

  return { type: PLAYER_SPLIT_STARTED, payload: cards };
}

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

function setPlayerDoubledTrue(){
  return { type: PLAYER_DOUBLED };
}

function resetPlayerDoubled(){
  return { type: RESET_PLAYER_DOUBLED };
}

function dealCompOne(){
  let cards = [];
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);
  return { type: COMP_ONE_START, payload: cards };
}

function dealCompTwo(){
  let cards = [];
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);
  return { type: COMP_TWO_START, payload: cards };
}

function compOneHit(){
  let card = `${getSuite()}${Math.floor(Math.random() * 13) + 2}`;
  return { type: COMP_ONE_HIT, payload: card };
}

function compTwoHit(){
  let card = `${getSuite()}${Math.floor(Math.random() * 13) + 2}`;
  return { type: COMP_TWO_HIT, payload: card };
}

export { openBlackjackRules, closeBlackjackRules,
         openCasinoRules, closeCasinoRules,
         startRound, endRound, startPlayerTurn, endPlayerTurn,
         startDealerTurn, endDealerTurn,
         dealDealerCards, dealerRevealCard, dealerHit, dealPlayerCards,
         playerHit, setPlayerChips, startPayout, endPayout, setCurrenBet,
         dealCompOne, dealCompTwo, compOneHit, compTwoHit,
         startCompOneTurn, startCompTwoTurn, endCompOneTurn, endCompTwoTurn,
         playerSplitHand, playerSplitNew,
         setPlayerDoubledTrue, resetPlayerDoubled,
         setPlayerSplitCards, setPlayerCards, }
