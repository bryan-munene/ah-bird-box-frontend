/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationView from './components/Navigation';
import Home from './components/views/HomeView';
import LoginView from './components/login/Login';
import Profile from './components/profile/profile';
import EditProfile from './components/profile/editprofile';

import Register from './components/register/Register';
import verifyMail from './components/register/verifyEmail';
import verify from './components/register/verify';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationView />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/verifymail" component={verifyMail} />
            <Route exact path="/verify/:token" component={verify} />
            <Route path="/getprofile" component={Profile} />
            <Route path="/edit-profile" component={EditProfile} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);
