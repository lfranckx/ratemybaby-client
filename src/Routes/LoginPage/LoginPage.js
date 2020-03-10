import React, { Component } from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'

export default class LoginPage extends Component {
    static defaultProps = {
      location: {},
      history: {
        push: () => {},
      },
    }
  
    handleLoginSuccess = () => {
      const { location, history } = this.props
      const destination = (location.state || {}).from || '/'
  
      history.push(destination)
    }
  
    render() {
      return (
        <> 
                <header>
                    <h1>Rate My Baby</h1>
                    <h2>Upload your baby, the world rates it.</h2>
                </header>

                <main>
                    <LoginForm />
                </main>
            </>
      )
    }
  }