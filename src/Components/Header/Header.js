import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'

export default class Nav extends Component {
    handleLogout = () => {
        TokenService.clearAuthToken()
        /* when logging out, clear the callbacks to the refresh api and idle auto logout */
        TokenService.clearCallbackBeforeExpiry()
        IdleService.unRegisterIdleResets()
    }

    renderLogoutLink() {
        return (
            
        )
    }

    renderLoginLink() {
        return (

        )
    }

    render() {
        <header>
            <Link to='/'><h1>Rate My Baby</h1></Link>
        </header>

    }
}

        // if (this.props.loggedIn === true) {
        //     return (
        //         <>
        //         <nav>
        //             <div id="logo"><p id="logo-text" className="text">logo</p></div>
        //             <div className="nav-container">
        //                 <Link className="nav-links" to="/profile">Profile</Link>
        //                 <Link className="nav-links" to="/">Home</Link>
        //                 <Link 
        //                     onClick={this.props.handleLogout}
        //                     className="nav-links" 
        //                     to="/" >
        //                     Log Out
        //                 </Link>
        //             </div>
        //             <div id="user-display">
        //                 <p id="user-text">{this.props.username}</p>
        //             </div>
        //         </nav>
        //         </>
        //     )
        // }
        // return (
        //         <nav>
        //             <div id="logo"><p id="logo-text" className="text">logo</p></div>
        //             <div className="nav-container">
        //                 <Link className="nav-links" to="/signup">Sign Up</Link>
        //                 <Link className="nav-links" to="/">Home</Link>
        //                 <Link className="nav-links" to="/login">Login</Link>
        //             </div>
        //             <div id="user-display"></div>
        //         </nav>
        // )