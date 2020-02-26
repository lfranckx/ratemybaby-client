import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

class Login extends Component {
    constructor(props) {
        super()
        this.state = {
            username: '',
            user_password: ''
        }
    }

    usernameChange = (letter) => {
        this.setState({
            username: letter
        })
    }

    passwordChange = (letter) => {
        this.setState({
            user_password: letter
        })
    }

    render() {
        return (
            <> 
                <header>
                    <h1>Rate My Baby</h1>
                    <h2>Upload your baby, the world rates it.</h2>
                </header>

                <main>
                    <section>
                        <form 
                            id='login-form'
                            onSubmit={event => {
                                event.preventDefault();
                                this.props.handleLogin(this.state.username, this.state.user_password)
                            }}
                        >
                            <div className="input-box">
                                <label htmlFor="username">Username:</label>
                                <input 
                                    onChange={event => {
                                        this.usernameChange(event.target.value)
                                    }}
                                    type="text" 
                                    name='username' 
                                    id='username' />
                            </div>
                            <div className="input-box">
                                <label htmlFor="password">Password:</label>
                                <input 
                                    onChange={event => {
                                        this.passwordChange(event.target.value)
                                    }}
                                    type="password" 
                                    name='password' 
                                    id='password' />
                            </div>
                            <button type="submit">Login</button>
                        </form>
                        <div className="text">Not a member?</div>
                        <button type="submit">
                            <Link to="/signup">
                                Sign up!
                            </Link>
                        </button>
                    </section>
                </main>
            </>
        )
    }
}

export default Login