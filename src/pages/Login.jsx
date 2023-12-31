import React, { useState } from 'react';
import {
  Button, Form, Grid, Header, Segment, Icon,
} from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import PropTypes from 'proptypes';
import userActions from '../Redux/userActions';
import '../styles/styles-login.css';

function LoginPage(props) {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    const { history } = props;
    dispatch(userActions.loginUser(loginForm));
    history.push('/');
  };

  const handleChange = e => setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  const { email, password } = loginForm;

  return (
    <Grid textAlign="center" className="middle aligned wall login">
      <Grid.Column className="login-column">
        <Header as="h2" className="login-header" textAlign="center">
          <Icon name="home" />
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              id="form-input-control-email"
              fluid
              icon="user"
              iconPosition="left"
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              label="Email"
              className="login-input"
            />
            <Form.Input
              id="form-input-control-password"
              fluid
              icon="lock"
              iconPosition="left"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              label="Password"
              className="login-input"
            />
            <Button className="login-button" fluid size="large" type="submit">
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

LoginPage.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default LoginPage;
