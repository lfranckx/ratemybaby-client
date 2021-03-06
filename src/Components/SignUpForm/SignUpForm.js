import React, { Component } from 'react';
import AuthApiService from '../../Services/auth-api-service'
import BabyContext from '../../Contexts/BabyContext'

export default class SignUp extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    static contextType = BabyContext

    state = { error: null }

    handleSubmit = ev => {
        ev.preventDefault()
        const { username, password, email } = ev.target
        this.setState({ error: null })
        
        AuthApiService.postUser({
            username: username.value,
            user_password: password.value,
            email: email.value
        })
        .then(res => {
            AuthApiService.postLogin({
                username: username.value,
                user_password: password.value
            })
            .then(user => {
                username.value = ''
                password.value = ''
                this.props.onSignUpSuccess()
            })
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    render() {
        const { error } = this.state
        return (
            <form 
                id='sign-up-form'
                onSubmit={this.handleSubmit}
            >
                <div role='alert'>
                    {error && <p className='error'>{error}</p>}
                </div>
                <div className="input-box">
                    <label className='label'>
                        Email Address
                        <span className='required'>*</span>
                    </label>
                    <input 
                        id="signinemail"
                        type="text" 
                        aria-label='email'
                        name='email' 
                        required />
                </div>
                <div className="input-box">
                    <label className='label'>
                        Username
                        <span className='required'>*</span>
                    </label>
                    <input 
                        id="signinuser"
                        type="text" 
                        name='username' 
                        aria-label='username'
                        required
                        className='username' />
                </div>
                <div className="input-box">
                    <label className='label'>
                        Password
                        <span className='required'>*</span>
                    </label>                    
                    <input 
                        id="signinpass"
                        autoComplete="on"
                        type="password"
                        aria-label='password' 
                        name='password'
                        required
                        className='password' />
                </div>
                <button id="sign-up-button" type="submit">Sign Up</button>
            </form>
        )
    }
}