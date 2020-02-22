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
import data from '../dummy-store'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      babies: data,
      username: '',
      password: '',
      email: '',
    }
  }

  handleLogin = () => {
    this.setState({
      loggedIn: true
    })
  }

  render() {
    console.log(this.state.loggedIn);
    
    return (
      <AppContext.Provider
        value={{
          loggedIn: this.state.loggedIn,
          babies: this.state.babies,
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
        }}
      >
        <Nav loggedIn={this.state.loggedIn}/>
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
      </AppContext.Provider>
    )
  }
}

export default App;