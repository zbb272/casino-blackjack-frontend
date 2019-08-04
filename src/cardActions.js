import {
  setPlayerCards, setPlayerSplitCards,
  setCompOneCards, setCompTwoCards, setDealerCards } from './redux/actionCreators';

//HELPER FUNCTIONS
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

function getCard(){
  return `${getSuite()}${Math.floor(Math.random() * 13) + 2}`;
}

function hit(oldCards){
  let cards = [...oldCards];
  cards.push(getCard());
  return cards;
}


//CARD FUNCTIONS
function dealDealerCards(){
  let cards = [];
  cards.push("A-1");
  cards.push(getCard());

  setDealerCards(cards);
}

function dealPlayerCards(){
  let cards = [];
  cards.push(getCard());
  cards.push(getCard());

  setPlayerCards(cards);
}

function playerSplitHand(card){
  let cards = [];
  cards.push(card);
  cards.push(getCard());

  setPlayerCards(cards);
}

function playerSplitNew(card){
  let cards = [];
  cards.push(card);
  cards.push(getCard());

  setPlayerSplitCards(cards);
}

function dealCompOne(){
  let cards = [];
  cards.push(getCard());
  cards.push(getCard());

  setCompOneCards(cards);
}

function dealCompTwo(){
  let cards = [];
  cards.push(getCard());
  cards.push(getCard());

  setCompTwoCards(cards);
}

function dealerRevealCard(oldCards){
  let cards = [...oldCards];
  cards.splice(0, 1, getCard());

  setDealerCards(cards)
}

function dealerHit(oldCards){
  setDealerCards(hit(oldCards));
}

function playerHit(oldCards){
  setPlayerCards(hit(oldCards));
}

function playerSplitHit(oldCards){
  setPlayerSplitCards(hit(oldCards));
}

function compOneHit(oldCards){
  setCompOneCards(hit(oldCards));
}

function compTwoHit(oldCards){
  setCompTwoCards(hit(oldCards));
}

export {
  dealDealerCards, dealPlayerCards, dealCompOne, dealCompTwo,
  playerSplitHand, playerSplitNew, dealerRevealCard,
  dealerHit, playerHit, compOneHit, compTwoHit,
}
