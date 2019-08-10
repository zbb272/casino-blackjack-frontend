import React from 'react';


const Card = ( props ) => {
  let cardStyle = {
    position: "absolute",
    marginTop: 0,
    marginLeft: (props.position * 30 - 40),
    maxHeight: 160,
    minHeight: 130,
    maxWidth: 80,
  }

  let getNumber = (number) => {
    if(number <= 10){
      return number;
    } else if (number === 11){
      return "J";
    } else if (number === 12){
      return "Q";
    } else if (number === 13){
      return "K";
    } else if (number === 14){
      return "A";
    }
  }
  let cardNum = parseInt(props.card.slice(1));
  let cardSuite = props.card[0];
  let imageURL = ""
  cardNum !== -1 ? imageURL = `/images/${getNumber(cardNum)}${cardSuite}.png` : imageURL = "/images/playing_card_back.png";

  return (
    <img src={imageURL} alt={props.card} style={cardStyle}/>
  )
}

export default Card;
