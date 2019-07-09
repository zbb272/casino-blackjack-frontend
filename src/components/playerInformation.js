import React from 'react';
import { Segment } from 'semantic-ui-react';

const PlayerInfo = ( props ) => {
  return (
    <Segment>
      Chips: {props.chipTotal}
    </Segment>
  )
}

export default PlayerInfo;
