import React, { Component, useState } from 'react';
import './SignUp.css';
import config from '../config'
import Error from './Error'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.handleSignUp = this.handleSignUp.bind(this)
        this.state = {
            loggedIn: false,
            email: '',
            username: '',
            password: '',
            userValid: false,
            validationMessage: '',
            error: null,
        }
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
                validationMessage: "Please enter a username."
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
        console.log(config.API_ENDPOINT);
        
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
        this.context.loggedIn = true;        
        this.props.history.push('/editprofile');
    }   

    // emailChange = letter => {
    //     this.setState({
    //         email: letter
    //     })
    // }

    // usernameChange = letter => {
    //     this.setState({
    //         username: letter
    //     })
    // }

    // passwordChange = letter => {
    //     this.setState({
    //         password: letter
    //     })
    // }

    

    render() {
        const [username, setUsername] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        return (
            <main>
                <h1>Rate My Baby</h1>
                <section>
                    <h2 id="signup-h2">Sign Up</h2>
                    <form 
                        id='sign-up-form'
                        onSubmit={event => {
                            event.preventDefault();
                            this.isUserValid(email, username, password)
                        }}
                    >
                        <div className="input-box">
                            <label htmlFor="email">Email</label>
                            <input 
                                onChange={event => {
                                    setEmail(event.target.value)
                                }}
                                type="text" 
                                name='username' 
                                id='email' />
                        </div>
                        <div className="input-box">
                            <label htmlFor="username">Username</label>
                            <input 
                                onChange={event => {
                                    setUsername(event.target.value)
                                }}
                                type="text" 
                                name='username' 
                                id='username' />
                        </div>
                        <div className="input-box">
                            <label htmlFor="password">Password</label>
                            <input 
                                onChange={event => {
                                    setPassword(event.target.value)
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