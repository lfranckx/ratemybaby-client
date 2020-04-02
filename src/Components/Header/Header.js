import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import IdleService from '../../Services/idle-service'
import { differenceInMilliseconds } from 'date-fns'

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
                    to='/profile'
                >
                    Profile
                </Link>
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
                    onClick={this.handleOverlay}
                    to='/login'>
                    LOG IN
                </Link>
            </div>
        )
    }

    render() {
        return ( 
                <nav>
                    <div id="title-logo">
                        <img src="./tinder_icons/logo-red.png" alt="logo" id="logo" />
                        <Link to='/'><h1>todler</h1></Link>
                    </div>
                    
                    {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
                </nav>
        )
    }
}