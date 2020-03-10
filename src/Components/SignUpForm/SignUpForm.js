import React, { Component } from 'react';
// import './SignUp.css';
import { Button, Input, Required } from '../Utils/Utils'
import AuthApiService from '../../Services/auth-api-service'

export default class SignUp extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    state = { error: null }

    handleSubmit = ev => {
        ev.preventDefault()
        const { username, password, email } = ev.target

        this.setState({ error: null })
        AuthApiService.postUser({
            username: username.value,
            password: password.value,
            email: email.value,
        })
            .then(user => {
                email.value = ''
                username.value = ''
                password.value = ''
                this.props.onRegistrationSuccess()
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
                    id='sign-up-form'
                    onSubmit={this.handleSubmit}
                >
                    <div role='alert'>
                        {error && <p className='error'>{error}</p>}
                    </div>
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
        )
    }
}