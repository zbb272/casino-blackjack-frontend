import { setPlayerCards, setPlayerSplitCards,
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

//CAN PROBABLY BE MOVED OR ERASED
function dealDealerCards(){
  let cards = [];
  cards.push("A-1");
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);

  setDealerCards(cards);
}

function dealPlayerCards(){
  let cards = [];
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);

  setPlayerCards(cards);
}

function playerSplitHand(card){
  let cards = [];
  cards.push(card);
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);

  setPlayerCards(cards);
}

function playerSplitNew(card){
  let cards = [];
  cards.push(card);
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);

  setPlayerSplitCards(cards);
}

function dealCompOne(){
  let cards = [];
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);

  setCompOneCards(cards);
}

function dealCompTwo(){
  let cards = [];
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);

  setCompTwoCards(cards);
}

function dealerRevealCard(){
  let card = `${getSuite()}${Math.floor(Math.random() * 13) + 2}`;
  return { type: DEALER_REVEAL, payload: card };
}

function dealerHit(){
  let card = `${getSuite()}${Math.floor(Math.random() * 13) + 2}`;
  return { type: DEALER_HIT, payload: card };
}



function playerHit(){
  let card = `${getSuite()}${Math.floor(Math.random() * 13) + 2}`;
  return { type: PLAYER_HIT, payload: card };
}







function compOneHit(){
  let card = `${getSuite()}${Math.floor(Math.random() * 13) + 2}`;
  return { type: COMP_ONE_HIT, payload: card };
}

function compTwoHit(){
  let card = `${getSuite()}${Math.floor(Math.random() * 13) + 2}`;
  return { type: COMP_TWO_HIT, payload: card };
}
