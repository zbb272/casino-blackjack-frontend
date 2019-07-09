import { BLACKJACK_RULES_OPEN, BLACKJACK_RULES_CLOSED,
       CASINO_RULES_OPEN, CASINO_RULES_CLOSED,
       PAYOUT_STARTED, PAYOUT_FINISHED,
       ROUND_FINISHED, ROUND_STARTED, PLAYER_TURN_STARTED,
       PLAYER_TURN_FINISHED, DEALER_TURN_STARTED, DEALER_TURN_FINISHED,
       DEALER_START, DEALER_REVEAL, DEALER_HIT, PLAYER_START, PLAYER_HIT,
       SET_PLAYER_CHIPS, SET_CURRENT_BET,
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

function setPlayerChips(amount){
  return { type: SET_PLAYER_CHIPS, payload: amount };
}

function setCurrenBet(amount){
  return { type: SET_CURRENT_BET, payload: amount };
}

export { openBlackjackRules, closeBlackjackRules,
         openCasinoRules, closeCasinoRules,
         startRound, endRound, startPlayerTurn, endPlayerTurn,
         startDealerTurn, endDealerTurn,
         dealDealerCards, dealerRevealCard, dealerHit, dealPlayerCards,
         playerHit, setPlayerChips, startPayout, endPayout, setCurrenBet, }
