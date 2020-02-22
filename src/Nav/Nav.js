import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default class Nav extends Component {

    state = {
        loggedIn: false
    }

    render() {
        if (this.state.loggedIn = false) {
            return (
                <nav>
                    <Link to="/">
                        <div id="logo"></div>
                    </Link>
                    <div class="title">Rate My Baby</div>
                    <div >
                        <Link id="nav-sign-up" to="/">Log Out</Link>
                    </div>
                </nav>
            )
        }
        return (
            <nav>
                <div className="nav-container">
                    <Link class="nav-links" to="/">Login</Link>
                    <Link class="nav-links" to="/">Home</Link>
                    <Link class="nav-links" to="/signup">Sign Up</Link>
                </div>
            </nav>
        )
    }
}