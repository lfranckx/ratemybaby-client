import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <> 
                <header>
                    <h1>Upload your baby, the world rates it.</h1>
                </header>

                <main>
                    <section id="container">
                        <form id='login-form'>
                            <div class="input-box">
                                <label for="username">Username:</label>
                                <input type="text" name='username' id='username' />
                            </div>
                            <div class="input-box">
                                <label for="password">Password:</label>
                                <input type="password" name='password' id='password' />
                            </div>
                            <div>
                                <Link id='login-button' class="button" to='/profile'>
                                    Log in
                                </Link>
                            </div>
                        </form>
                        <div class="text">Not a member?</div>
                        <div>
                            <Link id="sign-up-button" class="button" to="/sign-up">
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