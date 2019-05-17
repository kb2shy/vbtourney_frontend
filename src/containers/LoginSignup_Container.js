import React from 'react';
import { Divider, Grid, Segment, Button } from 'semantic-ui-react';

import Login from '../components/Login';
import '../stylesheets/LoginSignup_Container.css';

const LoginSignup = (props) => (

    <Segment raised>
      <Grid centered columns={2} stackable className="login-div">
        <Grid.Column>
          <Login login={props.createSocket}/>
        </Grid.Column>
        <Grid.Column verticalAlign="middle">
          <Button content="Sign Up" icon="signup" size="big" />
        </Grid.Column>
      </Grid>
      <Divider vertical>Or</Divider>
    </Segment>


)

export default LoginSignup;
