import React, { Component } from 'react';
import AuthApiService from '../../Services/auth-api-service'
import UserApiService from '../../Services/user-api-service'
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
        const user = {username, password}
        this.context.setUser(user)

        AuthApiService.postLogin({
          username: username.value,
          user_password: password.value,
        })
        .then(res => {
            UserApiService.getUser(username.value)
                .then(user => {
                    console.log('UserApiService Response:',user);
                    username.value = ''
                    password.value = ''
                    this.context.setUser(user)
                    this.props.onLoginSuccess()
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
                id='login-form'
                onSubmit={this.handleSubmitJwtAuth}
            >
                <div role='alert' className="error">{error && <p className='error'>{error}</p>}</div>
                <div className="input-box">
                    <label className='label'>
                        Username
                    </label>
                    <input
                        type="text" 
                        name='username' 
                        className='username' />
                </div>
                <div className="input-box">
                    <label className='label'>
                        Password
                    </label> 
                    <input 
                        type="password" 
                        name='password' 
                        className='password' />
                </div>
                <button id="login-button" type="submit">Login</button>
            </form>
        )
    }
}