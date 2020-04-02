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
    const destination = (location.state || {}).from || '/createprofile'
    history.push(destination)  }

  render() {
    return (
      <section id="register-section">
        <h3 id="register-header">Register</h3>
        <SignUpForm
          onSignUpSuccess={this.handleSignUpSuccess}
        />
      </section>
    )
  }
}
