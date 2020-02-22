import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import AppContext from '../AppContext'
import Nav from '../Nav/Nav';
import Home from '../Home/Home'
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile'

class App extends Component {
  state = {
      loggedIn: false,
      babies: [],
      username: '',
      password: '',
      email: '',
      name: '',
      about: '',
      total_score: '',
      total_votes: '',
      rating: ''
  } 

  render() {
    return (
      <AppContext.Provider
        value={{
          loggedIn: this.state.loggedIn,
          babies: this.state.babies,
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          name: this.state.name,
          about: this.state.about,
          total_score: this.state.total_score,
          total_votes: this.state.total_votes,
          rating: this.state.rating
        }}
      >
        <Nav />
        <div className="container">
          <Switch>
            <Route
              exact path='/'
              component={Home}
            />
            <Route
              path='/login'
              component={Login}
            />
            <Route
              path='/signup'
              component={SignUp} 
            />
            <Route 
              path='/profile'
              component={Profile}
            />
            <Route 
              path='/editprofile'
              component={EditProfile}
            />
          </Switch>
        </div>
        
      </AppContext.Provider>
    )
  }
}

export default App;