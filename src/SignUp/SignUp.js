import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            user_baby: {}
        }
    }

    emailChange = letter => {
        this.setState({
            email: letter
        })
    }

    usernameChange = letter => {
        this.setState({
            username: letter
        })
    }

    passwordChange = letter => {
        this.setState({
            password: letter
        })
    }

    render() {
        return (
            <main>
                <h1>Rate My Baby</h1>
                <section>
                    <h2 id="signup-h2">Sign Up</h2>
                    <form 
                        id='sign-up-form'
                        onSubmit={event => {
                            event.preventDefault();
                            this.props.handleSignUp(this.state.email, this.state.username, this.state.password)
                        }}
                    >
                        <div className="input-box">
                            <label htmlFor="email">Email</label>
                            <input 
                                onChange={event => {
                                    this.emailChange(event.target.value)
                                }}
                                type="text" 
                                name='username' 
                                id='email' />
                        </div>
                        <div className="input-box">
                            <label htmlFor="username">Username</label>
                            <input 
                                onChange={event => {
                                    this.usernameChange(event.target.value)
                                }}
                                type="text" 
                                name='username' 
                                id='username' />
                        </div>
                        <div className="input-box">
                            <label htmlFor="password">Password</label>
                            <input 
                                onChange={event => {
                                    this.passwordChange(event.target.value)
                                }}
                                type="password" 
                                name='password' 
                                id='password' />
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                </section>
            </main>
        )
    }
}

export default SignUp;