import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default class Nav extends Component {

    render() {
        if (this.props.loggedIn === true) {
            return (
                <nav>
                    <Link className="nav-links" to="/profile">Profile</Link>
                    <Link className="nav-links" to="/">Home</Link>
                    <Link 
                        onClick={this.props.handleLogout}
                        className="nav-links" 
                        to="/" >
                        Log Out
                    </Link>
                </nav>
            )
        }
        return (
            <nav>
                <div className="nav-container">
                    <Link className="nav-links" to="/signup">Sign Up</Link>
                    <Link className="nav-links" to="/">Home</Link>
                    <Link className="nav-links" to="/login">Login</Link>
                </div>
            </nav>
        )
    }
}