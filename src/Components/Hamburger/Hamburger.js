import React, { Component } from 'react'
import './Hamburger.css'
import BabyContext from '../../Contexts/BabyContext'
import BabyApiService from '../../Services/baby-api-service'
import UsersBabies from './UsersBabies'

export default class Hamburger extends Component { 

    static contextType = BabyContext

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
        console.log(this.context);

        // Trigger for activating menu
        const active = this.context.active
 
        const hamburgerMenu = (active) => (
            <nav
                aria-label='secondary'
                className={`menu-wrap ${active ? "active" : "disabled"}`}
            >
                <div className="toggle-label">
                    <div className='hamburger-container'>
                        <div 
                            id='toggle'
                            className={`hamburger ${active ? "checked" : ""}`}
                            onClick={() => {this.context.toggleActive()}} >
                            <div></div>
                        </div>
                    </div>
                    <h3 className={`menu-label ${active ? "show-label" : ""}`}>
                        Babies
                    </h3>
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