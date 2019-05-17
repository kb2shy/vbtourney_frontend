import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ActionCable from 'action-cable-react-jwt';

import MenuContainer from './containers/menu_container'
import LoginSignup from './containers/LoginSignup_Container'

const LOGIN_URL = "ws://localhost:3000/cable"

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      current_user: '',

    }
  }

  componentDidMount() {
    this.createSocket();
  }

  createSocket = () => {
    const userToken = localStorage.Token;

    let App = {}
    App.cable = ActionCable.createConsumer(LOGIN_URL, userToken)

    this.subscription = App.cable.subscriptions.create({channel: 'CurrentGamesChannel'},
      { connected: () => { console.log("cable: connected")},
        disconnected: () => { console.log("cable: disconnect")},
        received: (data) => { console.log("cable received: ", data)}
      }
    )
  }
  //
  // updateDisplay = (displayThis) => {
  //   this.setState({ displayThis });
  //   if (displayThis === "home") {
  //     return <Home />;
  //   }
  // }

  render() {
    return (
      <Container>
        <MenuContainer updateDisplay={this.updateDisplay}/>
        <LoginSignup createSocket={this.createSocket}/>

      </Container>
    )
  }
}
