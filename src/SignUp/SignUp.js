import React, { Component, useState } from 'react';
import './SignUp.css';
import config from '../config'
import Error from './Error'

function SignUp() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <main>
            <h1>Rate My Baby</h1>
            <section>
                <h2 id="signup-h2">Sign Up</h2>
                <form 
                    id='sign-up-form'
                    onSubmit={event => {
                        event.preventDefault();
                        this.isUserValid(email, username, password)
                    }}
                >
                    <div className="input-box">
                        <label htmlFor="email">Email</label>
                        <input 
                            onChange={event => {
                                setEmail(event.target.value)
                            }}
                            type="text" 
                            name='username' 
                            id='email' />
                    </div>
                    <div className="input-box">
                        <label htmlFor="username">Username</label>
                        <input 
                            onChange={event => {
                                setUsername(event.target.value)
                            }}
                            type="text" 
                            name='username' 
                            id='username' />
                    </div>
                    <div className="input-box">
                        <label htmlFor="password">Password</label>
                        <input 
                            onChange={event => {
                                setPassword(event.target.value)
                            }}
                            type="password" 
                            name='password' 
                            id='password' />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </section>
        </main>
    )
}

export default SignUp;