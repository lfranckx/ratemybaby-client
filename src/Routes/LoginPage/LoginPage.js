import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../Components/LoginForm/LoginForm'
import './LoginPage.css'

export default class LoginPage extends Component {
    static defaultProps = {
      location: {},
      history: {
        push: () => {},
      },
    }
  
    handleLoginSuccess = () => {
      const { location, history } = this.props
      const destination = (location.state || {}).from || '/rate'
      history.push(destination)
    }
  
    render() {
      return (
        <section id="login-section">
          <h3 id="login-header">Login</h3>
          <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
          <Link id="login-signup-button"className="register" to='/register'>
            Sign Up
          </Link>  
        </section>
      )
    }
  }