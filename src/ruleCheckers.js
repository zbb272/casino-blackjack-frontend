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
    console.log("Rule 1: user should hit");
  }
}

//if the dealers face-up card is less than seven but more than 3,
//you should hit until the value of your hand hits a minimum of 12
function hitRule2(dealerUpcard, userCards){
  if(calculateTotal(userCards) < 12){
    if(getCardNumber(dealerUpcard) < 7 && getCardNumber(dealerUpcard) > 3){
      console.log("Rule 2: user should hit");
    }
  }
}

//if the dealers face-up card is a two or three, you should hit until
//your hand is worth 13 or more
function hitRule3(dealerUpcard, userCards){
  if(getCardNumber(dealerUpcard) === 2 || getCardNumber(dealerUpcard) === 3){
    if(calculateTotal(userCards) < 13){
      console.log("Rule 3: user should hit");
    }
  }
}

//if you have a soft hand such as an ace and a five, you should
//continue hitting until the value of your hand is 18 or more
function hitRule4(dealerUpcard, userCards){
  if(isHandSoft(userCards) && calculateTotal(userCards) < 18){
    console.log("Rule 4: user should hit");
  }
}

//always stand with a pair of 9's when the dealers upcard is a 7
function hitRule5(dealerUpcard, userCards){
  if(getCardNumber(userCards[0]) === 9 && getCardNumber(userCards[1]) === 9
  && getCardNumber(dealerUpcard) === 7){
    console.log("Rule 5: user should stay");
  }
}

//stand on hard 16 against a dealers 10 upcard if your 16 is multi-card
function hitRule6(dealerUpcard, userCards){
  if(userCards.length > 2 && calculateTotal(userCards) === 16 && getCardNumber(dealerUpcard) === 10){
    console.log("Rule6: user should stay")
  }
}

//------------------
//  double rules
//------------------

//you should double down if your initial cards have a combined value
//of 11

//if your cards total 10, double down if the dealers upcard is 9 or less

//if your initial two cards have a total value of nine, you should
//only double down if the dealer is showing a two through six

//always double down A2 - A7 when the dealers upcard ia a 5 or 6

//------------------
//  split rules
//------------------

//if you have a pair of aces or eights, you should split your hand

//if you have a pair of 2's, 3's, or 7's you should split your hand
//unless the dealer is showing an eight, nine, ten, face card, or ace

//you should only split sixes if the dealer's face-up card is a
//two, three, four, five, or six

//do not split your hand when you have a pair of 4's, 5's, or 10's
