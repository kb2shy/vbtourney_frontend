import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import MenuContainer from './containers/menu_container'

export default class App extends Component {
  render() {
    return (
      <div>
        <MenuContainer />
        <Container>

          My React App

        </Container>
      </div>
    )
  }
}
