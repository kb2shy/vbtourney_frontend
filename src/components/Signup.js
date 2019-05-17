import React, { Component } from 'react';
import { Form, } from 'semantic-ui-react';

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password_confirm: '',
    }
  }

  handleChange = (event) => {
    this.setState( { [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
        </Form.Field>
      </Form>
    )
  }
}
