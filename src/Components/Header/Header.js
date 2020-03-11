import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import IdleService from '../../Services/idle-service'

export default class Nav extends Component {
    handleLogout = () => {
        console.log('running handleLogout');
        
        TokenService.clearAuthToken()
        /* when logging out, clear the callbacks to the refresh api and idle auto logout */
        TokenService.clearCallbackBeforeExpiry()
        IdleService.unRegisterIdleResets()
    }

    renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
                <Link
                    onClick={this.handleLogout}
                    to='/'>
                    Logout
                </Link>
            </div>            
        )
    }

    renderLoginLink() {
        return (
            <div className='Header__not-logged-in'>
                <Link
                to='/login'>
                Log in
                </Link>
                <Link
                to='/register'>
                Register
                </Link>
            </div>
        )
    }

    render() {
        return ( 
                <nav>
                    <Link to='/'><h1>Rate My Baby</h1></Link>
                    <h2>Upload your baby the world rates it</h2>
                    {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
                </nav>
        )
    }
}