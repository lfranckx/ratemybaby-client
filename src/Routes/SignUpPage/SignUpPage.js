import React, { Component } from 'react'
import { Section } from '../../Components/Utils/Utils'
import SignUpForm from '../../Components/SignUpForm/SignUpForm'

export default class SignUpPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleSignUpSuccess = user => {
    console.log(user);
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)  }

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
