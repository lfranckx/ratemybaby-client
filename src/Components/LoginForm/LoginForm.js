import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import config from '../../config'
import { Button, Input } from '../Utils/Utils'
import AuthApiService from '../../Services/auth-api-service'

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    state = { error: null }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { username, password } = ev.target
    
        AuthApiService.postLogin({
          username: username.value,
          password: password.value,
        })
        .then(res => {
            username.value = ''
            password.value = ''
            this.props.onLoginSuccess()
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    render() {
        const { error } = this.state
        return (
            <section>
                <form 
                    id='login-form'
                    onSubmit={this.handleSubmitJwtAuth}
                >
                    <div role='alert'>{error && <p className='error'>{error}</p>}</div>
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
                            value={this.state.password}
                            type="password" 
                            name='password'
                            placeholder='Password' 
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
        )
    }
}