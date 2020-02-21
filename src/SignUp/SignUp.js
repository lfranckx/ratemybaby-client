import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <main>
            <section id="container">
                <form id='sign-up-form'>
                    <div>
                        <label for="email">Email</label>
                        <input type="text" name='username' id='username' />
                    </div>
                    <div>
                        <label for="username">Username</label>
                        <input type="text" name='username' id='username' />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" name='password' id='password' />
                    </div>
                    <div>
                        <Link id="sign-up-button" class="button" type='submit' to="/create-profile">
                            Sign Up
                        </Link>
                    </div>
                </form>
            </section>
        </main>
    )
}