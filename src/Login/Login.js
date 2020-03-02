import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import config from '../config'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false,
            error: null,
            username: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    handleLogin(username, password) {
        console.log('sending to server...', username, password);

        this.setState({
            username: username,
            password: password,
        })

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
            },
            body: JSON.stringify({
                username: this.state.username,
                user_password: this.state.password,
            })
        }
        
        fetch(`${config.API_ENDPOINT}/login/${this.state.username}`, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong.')
                }
                return response
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.context.handleLogin(data)
            })
            .catch(error => {
                this.setState({ error: error.message })
            })
            this.props.handleLogin(username, password);
            this.props.history.push('/profile');
    }   

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
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
                                this.handleLogin(this.state.username, this.state.password)
                            }}
                        >
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
                </main>
            </>
        )
    }
}

export default Login