import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

class Login extends Component {
    
    
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
                            
                        >
                            <div className="input-box">
                                <label htmlFor="username">Username:</label>
                                <input type="text" name='username' id='username' />
                            </div>
                            <div className="input-box">
                                <label htmlFor="password">Password:</label>
                                <input type="password" name='password' id='password' />
                            </div>
                            <button 
                                type="submit"
                                onClick={() => {this.props.handleLogin()}}
                            >
                                <Link to='/editprofile'>
                                    Log in
                                </Link>
                            </button>
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