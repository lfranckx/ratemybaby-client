import React, { Component } from 'react'
import SignUpForm from '../../Components/SignUpForm/SignUpForm'

export default class SignUpPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleSignUpSuccess = () => {
    console.log('successfully signed up and logging in');
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
