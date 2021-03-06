/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationView from './components/Navigation';
import HomeView from './components/articles/List';
import LoginView from './components/login/Login';
import Profile from './components/profile/profile';
import EditProfile from './components/profile/editprofile';

import Register from './components/register/Register';
import verifyMail from './components/register/verifyEmail';
import verify from './components/register/verify';
import UserProfiles from './components/profile/usersprofile';

import ResetPassword from './components/login/resetPassword';
import UpdatePass from './components/login/updatePass';
import PasswordUpdate from './components/login/updatePassword';
import SingleArticle from './components/articles/singleArticle';
import EditArticle from './components/articles/singleArticleEdit';
import createArticleView from './components/articles/Create';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavigationView />
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/verifymail" component={verifyMail} />
            <Route exact path="/verify/:token" component={verify} />
            <Route exact path="/getprofile" component={Profile} />
            <Route exact path="/edit-profile" component={EditProfile} />
            <Route exact path="/profiles" component={UserProfiles} />
            <Route path="/getprofile" component={Profile} />
            <Route path="/edit-profile" component={EditProfile} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route exact path="/updatepassword" component={UpdatePass} />
            <Route exact path="/update_password/:token" component={PasswordUpdate} />
            <Route exact path="/articles/:slug" component={SingleArticle} />
            <Route exact path="/articles/edit/:slug" component={EditArticle} />
            <Route exact path="/article" component={createArticleView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);
