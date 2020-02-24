import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default class Nav extends Component {

    render() {
        if (this.props.loggedIn === true) {
            return (
                <>
                <nav>
                    <div id="logo"><p id="logo-text" class="text">logo</p></div>
                    <div className="nav-container">
                        <Link className="nav-links" to="/profile">Profile</Link>
                        <Link className="nav-links" to="/">Home</Link>
                        <Link 
                            onClick={this.props.handleLogout}
                            className="nav-links" 
                            to="/" >
                            Log Out
                        </Link>
                    </div>
                    <div id="user-display">
                        <p id="user-text">{this.props.username}</p>
                    </div>
                </nav>
                </>
            )
        }
        return (
                <nav>
                    <div id="logo"><p id="logo-text" class="text">logo</p></div>
                    <div className="nav-container">
                        <Link className="nav-links" to="/signup">Sign Up</Link>
                        <Link className="nav-links" to="/">Home</Link>
                        <Link className="nav-links" to="/login">Login</Link>
                    </div>
                    <div id="user-display"></div>
                </nav>
        )
    }
}