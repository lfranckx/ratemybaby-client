import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import AppContext from '../AppContext'
import Nav from '../Nav/Nav';
import Home from '../Home/Home'
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile'
import data from '../dummy-store'


class App extends Component {
  constructor(props) {
    super(props)
    this.handleProfileChange = this.handleProfileChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.state = {
      loggedIn: false,
      babies: data,
      username: '',
      password: '',
      email: '',
      user_baby: {
        name: ``,
        about: ``,
        image_url: '',
        total_score: '',
        total_votes: ''
      }
    }
  }

  handleProfileChange(newName, newAbout) {
    console.log('changing-profile', newName, newAbout);
    this.setState({
        user_baby: {
            name: newName,
            about: newAbout
        }
    })
    this.props.history.push('/profile')
  }

  handleSignUp(email, username, password) {
    console.log('signing-up', email, username, password);
    this.setState({
      email: email,
      username: username,
      password: password
    })
    this.props.history.push('/editprofile')
  }

  handleLogin(username, password) {
    console.log('logging-in', username, password);
    this.setState({
      loggedIn: true,
      username: username,
      password: password
    })
    this.props.history.push('/editprofile')
  }

  handleLogout() {
    console.log('logging-out');
    this.setState({
      loggedIn: false,
      username: '',
      password: ''
    })
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
          user_baby: this.state.user_baby,
        }}
      >
        <Nav 
          handleLogout={this.handleLogout}
          loggedIn={this.state.loggedIn} />
          <Switch>
            <Route
              babies={this.state.babies}
              exact path='/'
              render={(props) => 
                <Home  
                  {...props}
                  babies={this.state.babies}
                />}
            />
            <Route
              path='/login'
              render={(props) => 
                <Login 
                  {...props}
                  handleLogin={this.handleLogin}
                />}
            />
            <Route
              path='/signup'
              render={(props) => 
                <SignUp 
                  {...props}
                  handeSignUp={this.handleSignUp}
                />} 
            />
            <Route 
              path='/profile'
              component={Profile}
            />
            <Route 
              path='/editprofile'
              render={(props) => 
                <EditProfile 
                  {...props}
                  handleProfileChange={this.handleProfileChange}
                />}
            />
          </Switch>
      </AppContext.Provider>
    )
  }
}

export default withRouter(App);