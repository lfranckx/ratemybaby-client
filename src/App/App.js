import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import AppContext from '../AppContext'
import dummystore from '../dummy-store'
import Nav from '../Nav/Nav';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import CreateProfile from '../CreateProfile/CreateProfile';
import Profile from '../Profile/Profile'

class App extends Component {
  state = {
      babies: [],
      username: '',
      password: '',
      email: '',
      total_score: '',
      total_votes: '',
      rating: ''
  } 


  render() {
    return (
      <AppContext.Provider>
        <Nav />
        <Route
          exact path='/'
          component={Login}
        />
        <Route
          path='/sign-up'
          component={SignUp} 
        />
        <Route 
          path='/create-profile'
          component={CreateProfile}
        />
        <Route 
          path='/profile'
          component={Profile}
        />
      </AppContext.Provider>
    )
  }
}

export default App;