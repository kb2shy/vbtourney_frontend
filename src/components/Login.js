import React, { Component } from 'react';
import { Container, Form, Button } from 'semantic-ui-react';

const Login = () => {
  state = {
    username: '',
    password: '',
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  return (
    <Container>
      <Form>
        <Form.Field>
          <label>User name</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.username}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            type="password"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  )
}
