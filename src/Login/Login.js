import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
    render() {
        return (
            <> 
                <header>
                    <h1>Upload your baby the world rates it.</h1>
                </header>

                <main>
                    <section id="container">
                        <form id='login-form'>
                            <label for="username">Username</label>
                            <input type="text" name='username' id='username' />
                        </form>
                    </section>
                </main>
            </>
        )
    }
}

export default Login