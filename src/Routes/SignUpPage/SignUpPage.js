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
    console.log(user);
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section>
        <h3>Register</h3>
        <SignUpForm
          onSignUpSuccess={this.handleSignUpSuccess}
        />
      </section>
    )
  }
}
