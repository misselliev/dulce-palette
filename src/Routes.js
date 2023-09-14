/* eslint-disable import/extensions */
import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Favorites from './pages/Favorites';

function Routes() {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/favorites" component={Favorites} />
      <Route exact path="/" component={Dashboard} />
    </Switch>
  );
}

export default Routes;
