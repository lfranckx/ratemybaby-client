import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../../Components/LoginForm/LoginForm'
import BabyApiService from '../../Services/baby-api-service'
import './LoginPage.css'


export default class LoginPage extends Component {
    static defaultProps = {
      location: {},
      history: {
        push: () => {},
      },
    }
  
    render() {
      return (
        <>
          <section id="login-section">
            <h3 id="login-header">Login</h3>
            <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
          </section>
          <div className='link-container'>
            <Link className="register" to='/register'>
              Sign Up
            </Link> 
          </div>
          
        </> 
      )
    }
  }