import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import IdleService from '../../Services/idle-service'
import Hamburger from '../Hamburger/Hamburger'

export default class Nav extends Component {
    handleLogout = () => {
        TokenService.clearAuthToken()
        /* when logging out, clear the callbacks to the refresh api and idle auto logout */
        TokenService.clearCallbackBeforeExpiry()
        IdleService.unRegisterIdleResets()
    }
    
    renderLogoutLink() {
        return (
            <>
                <nav 
                    aria-label='primary'
                    className="header">
                    <Link id="title-logo" to='/rate'>
                        <img src="https://ratemybaby-images.s3-us-west-1.amazonaws.com/logos-icons/logo-red.png" 
                            alt="logo" 
                            id="logo" />  
                        <h1>toddler</h1>
                    </Link>
                    <div className='Header__logged-in'>
                        <Link 
                            to='/createprofile'
                        >
                            Create Profile
                        </Link>
                        <Link
                            onClick={this.handleLogout}
                            to='/'>
                            LOG OUT
                        </Link>
                    </div>  
                </nav> 
                <Hamburger />   
            </>    
        )
    }

    renderLoginLink() {
        return (
            <nav className="header">
                <Link id="title-logo" to='/'>
                    <img src="https://ratemybaby-images.s3-us-west-1.amazonaws.com/logos-icons/logo-red.png" 
                        alt="logo" 
                        id="logo" />  
                    <h1>toddler</h1>
                </Link>
                <div className='Header__not-logged-in'>
                    <Link 
                        id='loginlink'
                        to='/login'>
                        LOGIN
                    </Link>
                </div>
            </nav>
        )
    }

    render() {
        return ( 
                <header>
                    {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
                </header>
        )
    }
}