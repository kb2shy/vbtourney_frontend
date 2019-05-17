import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import MenuContainer from './containers/menu_container'
import Home from './components/Home'

export default class App extends Component {

  state = {
    displayThis: "home",
  }

  updateDisplay = (displayThis) => {
    this.setState({ displayThis });
    if (displayThis === "home") {
      return <Home />;
    }
  }

  render() {
    return (
      <div>
        <MenuContainer updateDisplay={this.updateDisplay}/>
        {console.log(this.updateDisplay)}
      </div>
    )
  }
}
