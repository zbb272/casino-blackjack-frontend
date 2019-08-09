

function getCardNumber(card){
  return parseInt(card.slice(1));
}


function countAces(cards){
  let aces = 0;
  if(cards){
    for(let i = 0; i < cards.length; i++){
      let cardNum = getCardNumber(cards[i]);
      if(cardNum === 14){
        aces++;
      }
    }
  }
  return aces;
}

function countTotalNoAces(cards){
  let total = 0;
  if(cards){
    for(let i = 0; i < cards.length; i++){
      let cardNum = getCardNumber(cards[i]);
      if(cardNum > 10){
        total += 10;
      } else if(cardNum > 1){
        total += cardNum;
      }
    }
  }
  return total;
}

function calculateTotal(cards){
  let total = 0;
  if(cards){
    total += countTotalNoAces(cards);
    let aces  = countAces(cards);
    if(aces > 0){
      for(let i = 0; i < aces; i++){
        if((total + 11) > 21){
          total += 1;
        } else {
          total += 11;
        }
      }
    }
  }
  return total;
}

function isHandSoft(cards){
  let total = 0;
  if(cards){
    total += countTotalNoAces(cards);
    let aces = countAces(cards);
    for(let i = 0; i < cards.length; i++){
      if(aces > 0){
        for(let i = 0; i < aces; i++){
          if((total + 11) > 21){
            return false;
          } else {
            return true;
          }
        }
      }
    }
  }
  return false;
}

export {
  calculateTotal, isHandSoft, getCardNumber,
}
