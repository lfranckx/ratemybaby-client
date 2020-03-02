import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import AppContext from '../AppContext'
import Nav from '../Nav/Nav';
import Home from '../Home/Home'
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile';
import UploadImage from '../UploadImage/UploadImage';
import config from '../config';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      babies: [],
      error: null,
    }

    this.handleUploadImage = this.handleUploadImage.bind(this)
    this.handleProfileChange = this.handleProfileChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`
      }
    }
    fetch(`${config.API_ENDPOINT}/babies`, options)
    .then(response => response.json())
    .then(data => {
      this.setState({ babies: data })
      if(data){
        console.log(this.state);
      }
    })
    .catch(error => {
      this.setState({ error: error.message })
    })

    
  }

  handleUploadImage() {
    console.log('uploading-image');
    this.props.history.push('/profile')
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
      loggedIn: true,
      email: email,
      username: username,
      user_password: password
    })
  }

  handleLogin(username, password) {
    console.log('logging-in', username, password);
    this.setState({
      loggedIn: true,
      username: username,
      user_password: password
    })
  }

  handleLogout() {
    console.log('logging-out');
    this.setState({
      loggedIn: false,
      username: '',
      user_password: ''
    })
  }

  render() {
    if (!this.state.babies) {
      return <div>Loading...</div>
    }
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
          loggedIn={this.state.loggedIn} 
          username={this.state.username}
        />
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
                  handleSignUp={this.handleSignUp}
                />} 
            />
            <Route 
              render={(props) =>
                <Profile 
                  {...props}
                />
              }
              path='/profile'
            />
            <Route 
              path='/editprofile'
              render={(props) => 
                <EditProfile 
                  {...props}
                  loggedIn={this.state.loggedIn}
                  handleProfileChange={this.handleProfileChange}
                />}
            />
            <Route 
              path='/uploadimage'
              render={(props) =>
                <UploadImage 
                  {...props}
                  handleUploadImage={this.handleUploadImage}
                />}
            />
          </Switch>
      </AppContext.Provider>
    )
  }
}

export default withRouter(App);