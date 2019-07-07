import React from 'react';
import { Segment } from 'semantic-ui-react';

const Card = ( props ) => {
  return (
    <Segment>
      {props.number}
    </Segment>
  )
}

export default Card;
