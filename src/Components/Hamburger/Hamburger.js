import React, { Component } from 'react'
import './Hamburger.css'
import HamburgerContext from '../../Contexts/HamburgerContext'
import BabyApiService from '../../Services/baby-api-service'
import UsersBabies from './UsersBabies'

export default class Hamburger extends Component { 

    static contextType = HamburgerContext

    componentDidMount() {
        BabyApiService.getByParentId()
            .then(res => {
                this.context.setUsersBabies(res)
            })
            .catch(this.context.setError)
    }

    render() {
        const { usersBabies } = this.context
        if (usersBabies.length === 0) {
            return <></>
        }
        // Trigger for activating menu
        const active = this.context.active
 
        const hamburgerMenu = (active) => (
            <nav
                aria-label='secondary'
                className={`menu-wrap ${active ? "active" : "disabled"}`}
            >
                <div className={`toggle-label`} >
                    <div className='hamburger-container'>
                        <div 
                            id='toggle'
                            className={`hamburger ${active ? "checked" : ""}`}
                            onClick={() => {this.context.toggleActive()}} >
                            <div></div>
                        </div>
                    </div>
                    <h2 className={`menu-label ${active ? "show-label" : ""}`}>
                        Babies
                    </h2>
                </div>
                
                <div className={`menu ${active ? "checked" : ""}`}>
                    <ul>
                    {usersBabies.map(baby => (
                        <UsersBabies
                            active={active} 
                            key={baby.id}
                            baby={baby} />
                        ))}
                    </ul>
                </div>
            </nav>
        )
        
        return hamburgerMenu(active)
    }
}