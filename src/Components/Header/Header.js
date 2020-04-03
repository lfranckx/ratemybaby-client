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
            <>
                <Link id="title-logo" to='/rate'>
                    <img src="./tinder_icons/logo-red.png" alt="logo" id="logo" />  
                    <h1 id="todler">toddler</h1>
                </Link>
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
            </>          
        )
    }

    renderLoginLink() {
        return (
            <>
                <Link id="title-logo" to='/'>
                    <img src="./tinder_icons/logo-red.png" alt="logo" id="logo" />  
                    <h1 id="todler">toddler</h1>
                </Link>
                <div className='Header__not-logged-in'>
                    <Link 
                        onClick={this.handleOverlay}
                        to='/login'>
                        LOG IN
                    </Link>
                </div>
            </>
        )
    }

    render() {
        return ( 
                <nav>
                    {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
                </nav>
        )
    }
}