import {
  calculateTotal, isHandSoft, getCardNumber,
} from './cardHelperFunctions';
//------------------
//  hitting rules
//------------------

//if the dealers face-up card is greater than 6 you should continue
//hitting until your hand has a value of at least 17
function hitRule1(dealerUpcard, userCards){
  if(getCardNumber(dealerUpcard) > 6 && calculateTotal(userCards) < 17){
    console.log("Hit Rule 1: user should hit");
  }
}

//if the dealers face-up card is less than seven but more than 3,
//you should hit until the value of your hand hits a minimum of 12
function hitRule2(dealerUpcard, userCards){
  if(calculateTotal(userCards) < 12){
    if(getCardNumber(dealerUpcard) < 7 && getCardNumber(dealerUpcard) > 3){
      console.log("Hit Rule 2: user should hit");
    }
  }
}

//if the dealers face-up card is a two or three, you should hit until
//your hand is worth 13 or more
function hitRule3(dealerUpcard, userCards){
  if(getCardNumber(dealerUpcard) === 2 || getCardNumber(dealerUpcard) === 3){
    if(calculateTotal(userCards) < 13){
      console.log("Hit Rule 3: user should hit");
    }
  }
}

//if you have a soft hand such as an ace and a five, you should
//continue hitting until the value of your hand is 18 or more
function hitRule4(userCards){
  if(isHandSoft(userCards) && calculateTotal(userCards) < 18){
    console.log("Hit Rule 4: user should hit");
  }
}

//always stand with a pair of 9's when the dealers upcard is a 7
function hitRule5(dealerUpcard, userCards){
  if(getCardNumber(userCards[0]) === 9 && getCardNumber(userCards[1]) === 9
  && getCardNumber(dealerUpcard) === 7){
    console.log("Hit Rule 5: user should stay");
  }
}

//stand on hard 16 against a dealers 10 upcard if your 16 is multi-card
function hitRule6(dealerUpcard, userCards){
  if(userCards.length > 2 && calculateTotal(userCards) === 16
  && getCardNumber(dealerUpcard) >= 10 && getCardNumber(dealerUpcard) <= 13){
    console.log("Hit Rule6: user should stay")
  }
}

//------------------
//  double rules
//------------------

//you should double down if your initial cards have a combined value
//of 11
function doubleRule1(userCards){
  if(userCards.length === 2 && calculateTotal(userCards) === 11){
    console.log("Double Rule1: user should double down");
  }
}

//if your cards total 10, double down if the dealers upcard is 9 or less
function doubleRule2(dealerUpcard, userCards){
  if(getCardNumber(dealerUpcard) <= 9 && calculateTotal(userCards) === 10){
    console.log("Double Rule2: user should double down");
  }
}

//if your initial two cards have a total value of nine, you should
//only double down if the dealer is showing a two through six
function doubleRule3(dealerUpcard, userCards){
  if(userCards.length === 2 && calculateTotal(userCards) === 9 && getCardNumber(dealerUpcard) >= 2 && getCardNumber(dealerUpcard) <= 6){
    console.log("Double Rule3: user should double down");
  }
}

//always double down A2 - A7 when the dealers upcard ia a 5 or 6
function doubleRule4(dealerUpcard, userCards){
  if((getCardNumber(dealerUpcard) === 5 || getCardNumber(dealerUpcard) === 6)
  && userCards.length === 2){
    if(getCardNumber(userCards[0]) === 14 || getCardNumber(userCards[1]) === 14){
      if(getCardNumber(userCards[0]) <= 7 || getCardNumber(userCards[1]) <= 7){
        console.log("Double Rule4: user should double down");
      }
    }
  }
}

//------------------
//  split rules
//------------------

//if you have a pair of aces or eights, you should split your hand

//if you have a pair of 2's, 3's, or 7's you should split your hand
//unless the dealer is showing an eight, nine, ten, face card, or ace

//you should only split sixes if the dealer's face-up card is a
//two, three, four, five, or six

//do not split your hand when you have a pair of 4's, 5's, or 10's


//-----------------
// helper functions
//-----------------

function checkAllRules(dealerCards, userCards){
  if(dealerCards && userCards){
    let dealerUpcard = dealerCards[1];
    hitRule1(dealerUpcard, userCards);
    hitRule2(dealerUpcard, userCards);
    hitRule3(dealerUpcard, userCards);
    hitRule4(userCards);
    hitRule5(dealerUpcard, userCards);
    hitRule6(dealerUpcard, userCards);
    doubleRule1(userCards);
    doubleRule2(dealerUpcard, userCards);
    doubleRule3(dealerUpcard, userCards);
    doubleRule4(dealerUpcard, userCards);
  }
}

export {
  hitRule1, hitRule2, hitRule3, hitRule4, hitRule5, hitRule6,
  doubleRule1, doubleRule2, doubleRule3, doubleRule4,
  checkAllRules,
}
