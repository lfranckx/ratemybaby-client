import React, { Component } from 'react'
import { Section } from '../../Components/Utils/Utils'
import SignUpForm from '../../Components/SignUpForm/SignUpForm'

export default class SignUpPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleSignUpSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <main>
        <h2>Register</h2>
        <SignUpForm
          onSignUpSuccess={this.handleSignUpSuccess}
        />
      </main>
    )
  }
}
