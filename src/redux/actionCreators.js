import { BLACKJACK_RULES_OPEN, BLACKJACK_RULES_CLOSED,
       CASINO_RULES_OPEN, CASINO_RULES_CLOSED }
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

export { openBlackjackRules, closeBlackjackRules,
         openCasinoRules, closeCasinoRules }
