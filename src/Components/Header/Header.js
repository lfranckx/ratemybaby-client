import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import IdleService from '../../Services/idle-service'
import SideBar from '../SideBar/SideBar'

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
                <nav className="header">
                    <Link id="title-logo" to='/rate'>
                        <img src="https://ratemybaby-images.s3-us-west-1.amazonaws.com/logos-icons/logo-red.png" 
                            alt="logo" 
                            id="logo" />  
                        <h1 id="todler">toddler</h1>
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
                            Logout
                        </Link>
                    </div>  
                </nav>    
                <SideBar />  
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
                    <h1 id="todler">toddler</h1>
                </Link>
                <div className='Header__not-logged-in'>
                    <Link 
                        to='/login'>
                        LOG IN
                    </Link>
                </div>
            </nav>
        )
    }

    render() {
        return ( 
                <>
                    {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
                </>
        )
    }
}