import { BLACKJACK_RULES_OPEN, BLACKJACK_RULES_CLOSED,
       CASINO_RULES_OPEN, CASINO_RULES_CLOSED,
       ROUND_FINISHED, ROUND_STARTED, PLAYER_TURN_STARTED,
       PLAYER_TURN_FINISHED, DEALER_TURN_STARTED, DEALER_TURN_FINISHED,
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

export { openBlackjackRules, closeBlackjackRules,
         openCasinoRules, closeCasinoRules }
