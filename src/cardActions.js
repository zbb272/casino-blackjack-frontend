//CAN PROBABLY BE MOVED OR ERASED
function dealDealerCards(){
  let cards = [];
  cards.push("A-1");
  cards.push(`${getSuite()}${Math.floor(Math.random() * 13) + 2}`);
  setDealerCards(cards);
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
