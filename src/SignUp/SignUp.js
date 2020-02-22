import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <main>
            <section>
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
                    <div>
                        <Link id="sign-up-button" className="button" type='submit' to="/editprofile">
                            Sign Up
                        </Link>
                    </div>
                </form>
            </section>
        </main>
    )
}