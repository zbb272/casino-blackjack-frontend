import React, { Component } from 'react';
import { Menu, Container, Button} from 'semantic-ui-react';

//styles
const containerStyle = {
  minWidth: "100%",
}

// const menuStyle = {
//   maxHeight: 60,
// }

class NavBar extends Component {

  render(){
    return(
      <div>
        <Menu fixed='top' inverted >
          <Container style={containerStyle}>
            <Menu.Item header>
              <Button icon="bars" size="big" />
            </Menu.Item>
            <Menu.Item>
              <h2>Casino Blackjack</h2>
            </Menu.Item>
            <Menu.Item>
              <Button icon="help" size="big" />
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }
}

export default NavBar;
