import React, { Component } from 'react'
import AuthApiService from '../../Services/auth-api-service'
import BabyContext from '../../Contexts/BabyContext'

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    static contextType = BabyContext

    state = { error: null }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { username, password } = ev.target
        
        AuthApiService.postLogin({
          username: username.value,
          user_password: password.value,
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
            <form 
                id='login-form'
                onSubmit={this.handleSubmitJwtAuth}
            >
                <div role='alert'>{error && <p className='error'>{error}</p>}</div>
                <div className="input-box">
                    <label className='label'>
                        Username
                    </label>
                    <input
                        type="text" 
                        name='username' 
                        aria-label='username'
                        className='username' 
                        required />
                </div>
                <div className="input-box">
                    <label className='label'>
                        Password
                    </label> 
                    <input 
                        autoComplete="on"
                        type="password" 
                        name='password' 
                        aria-label='password'
                        className='password'
                        required />
                </div>
                <button id="login-button" type="submit">Login</button>
            </form>
        )
    }
}