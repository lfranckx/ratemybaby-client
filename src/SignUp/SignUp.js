import React, { Component } from 'react';
import './SignUp.css';
import config from '../config'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false,
            validationMessage: '',
            error: null,
        }
        this.handleSignUp = this.handleSignUp.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    isUserValid = (email, username, password) => {
        if (!this.state.email) {
            this.setState({
                validationMessage: "Please enter a valid email."
            })
        } else if (!this.state.username) {
            this.setState({
                validationMessage: "Please enter a username."
            })
        } else if (!this.state.password) {
            this.setState({
                validationMessage: "Please enter a password."
            })
        } else {
            this.setState({
                validationMessage: '',
                userValid: true
            },
            () => { this.handleSignUp(email, username, password) })
        }
    }

    handleSignUp(email, username, password) {
        console.log('sending to server...', email, username, password);
        
        this.setState({
            loggedIn: true,
            email: email,
            username: username,
            user_password: password,
        })

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
            },
            body: JSON.stringify({
                email: this.state.email,
                username: this.state.username,
                user_password: this.state.password,
            })
        }
        
        fetch(`${config.API_ENDPOINT}/users`, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong.')
                }
                return response
            })
            .then(response => response.json())
            .then(data => {
                this.context.handleSignUp(data)
            })
            .catch(error => {
                this.setState({ error: error.message })
            })
            this.props.history.push('/editprofile')
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
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
                            this.isUserValid(this.state.email, this.state.username, this.state.password)
                        }}
                    >
                        <div className="input-box">
                            
                            <input 
                                onChange={this.handleChange}
                                value={this.state.email}
                                type="text" 
                                name='email' 
                                placeholder='Email'
                                id='email' />
                        </div>
                        <div className="input-box">
                            <input 
                                onChange={this.handleChange}
                                value={this.state.username}
                                type="text" 
                                name='username' 
                                placeholder='Username'
                                id='username' />
                        </div>
                        <div className="input-box">
                            <input 
                                onChange={this.handleChange}
                                value={this.state.user_password}
                                type="password" 
                                name='password'
                                placeholder='Password' 
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