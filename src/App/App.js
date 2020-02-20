import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav'
import Login from '../Login/Login'


class App extends Component {
  state = {
    users: {
      user_id:'',
      email: '',
      usersname: '',
      password: '',
      images: [],
      total_score: '',
      total_votes: ''
    }
  }

  render() {
    return (
      <>
        <Nav />
        <Login />
      </>
    )
  }
}

export default App;