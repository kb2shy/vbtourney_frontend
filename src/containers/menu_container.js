import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';

import NavBar from '../components/nav_bar'

export default class MenuContainer extends Component {

  render() {

    return (
      <Container>
        <Segment color='green' inverted>
          <NavBar updateDisplay={this.props.updateDisplay}/>
        </Segment>
      </Container>
    )
  }
}
