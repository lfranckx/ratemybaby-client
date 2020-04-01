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
                <Link to='/login'>
                    LOG IN
                </Link>
            </div>
        )
    }

    render() {
        return ( 
                <nav>
                    <Link to='/'><h1>todler</h1></Link>
                    <h2>Born to Rate</h2>
                    {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
                </nav>
        )
    }
}