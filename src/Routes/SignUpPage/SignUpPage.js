import React, { Component } from 'react'
import SignUpForm from '../../Components/SignUpForm/SignUpForm'
import './SignUpPage.css'

export default class SignUpPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleSignUpSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/rate'
    history.push(destination)  
  }

  render() {
    return (
      <section id="register-section">
        <h2 id="register-header">Register</h2>
        <SignUpForm
          onSignUpSuccess={this.handleSignUpSuccess}
        />
      </section>
    )
  }
}
