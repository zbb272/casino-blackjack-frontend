import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Container, Button} from 'semantic-ui-react';
import { openBlackjackRules, closeBlackjackRules,
         openCasinoRules, closeCasinoRules } from '../redux/actionCreators'

//styles
const containerStyle = {
  minWidth: "100%",
}

class NavBar extends Component {
  //Event listeners
  toggleBlackjackRules = () => {
    this.props.blackjackRulesOpen ?
    this.props.closeBlackjackRules() : this.props.openBlackjackRules();
  }

  toggleCasinoRules = () => {
    this.props.casinoRulesOpen ?
    this.props.closeCasinoRules() : this.props.openCasinoRules();
  }

  render(){
    return(
      <div>
        <Menu fixed='top' inverted >
          <Container style={containerStyle}>
            <Menu.Item header>
              <Button icon="bars" size="big" onClick={this.toggleCasinoRules} />
            </Menu.Item>
            <Menu.Item>
              <h2>Casino Blackjack</h2>
            </Menu.Item>
            <Menu.Item>
              <Button icon="help" size="big" onClick={this.toggleBlackjackRules}/>
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (store, ownProps) => ({
  blackjackRulesOpen: store.blackjackRulesOpen,
  casinoRulesOpen:    store.casinoRulesOpen,
})

const mapDispatchToProps = (dispatch) => ({
  openBlackjackRules:  () => { dispatch(openBlackjackRules())  },
  closeBlackjackRules: () => { dispatch(closeBlackjackRules()) },
  openCasinoRules:     () => { dispatch(openCasinoRules())     },
  closeCasinoRules:    () => { dispatch(closeCasinoRules())    },
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
