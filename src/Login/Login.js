import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: 'no',
            username: '',
            password: ''
        }
    }

    handleLogIn(event) {
        this.setState({
            loggedIn: true,
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
                                this.handleLogIn(event)
                            }}
                        >
                            <div class="input-box">
                                <label for="username">Username:</label>
                                <input type="text" name='username' id='username' />
                            </div>
                            <div class="input-box">
                                <label for="password">Password:</label>
                                <input type="password" name='password' id='password' />
                            </div>
                            <div>
                                <Link id='login-button' class="button" to='/editprofile'>
                                    Log in
                                </Link>
                            </div>
                        </form>
                        <div class="text">Not a member?</div>
                        <div>
                            <Link id="sign-up-button" class="button" to="/signup">
                                Sign up!
                            </Link>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

export default Login