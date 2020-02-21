import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <Link to="/">
                <div id="logo"></div>
            </Link>
            <div class="title">Rate My Baby</div>
            <div >
                <Link id="nav-sign-up" to="/sign-up">Sign Up</Link>
            </div>
        </nav>
    )
}