import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <main>
            <h1>Rate My Baby</h1>
            <section>
                <h2>Sign Up</h2>
                <form id='sign-up-form'>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='username' id='email' />
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name='username' id='username' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' />
                    </div>
                    <button type="submit">
                        <Link to="/editprofile">
                            Sign Up
                        </Link>
                    </button>
                </form>
            </section>
        </main>
    )
}