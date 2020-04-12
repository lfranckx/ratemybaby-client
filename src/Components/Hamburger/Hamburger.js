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
        
        // children of Hamburger Menu
        const children = (
            <>
                <input 
                    name="babies"
                    type='checkbox' 
                    className='toggler'
                    onClick={() => {this.context.toggleActive()}} />
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <ul>
                    {usersBabies.map(baby => (
                        <UsersBabies 
                            key={baby.id}
                            baby={baby} />
                        ))}
                    </ul>
                </div>
            </>
        )
        // Trigger for activating menu
        const active = this.context.active
 
        const menuWrap = (active) => (
            <div
                className={`menu-wrap ${active ? "active" : "disabled"}`}
            >
                <label className={`menu-label ${active ? "show-label" : ""}`}>Babies</label>
                {children}
            </div>
        )

        return menuWrap(active)
    }
}