import React, { Component } from 'react'
import './Hamburger.css'
import BabyContext from '../../Contexts/BabyContext'
import BabyApiService from '../../Services/baby-api-service'
import UsersBabies from './UsersBabies'
import { min } from 'date-fns'

export default class Hamburger extends Component { 
    static defaultProps = {
        match: { params: {} }
    }

    static contextType = BabyContext

    state = { 
        isChecked: false
    }

    componentDidMount() {
        BabyApiService.getByParentId()
            .then(res => {
                this.context.setUsersBabies(res)
            })
            .catch(this.context.setError)
    }

    toggleCheck = () => {
        this.setState({ isChecked: !this.state.isChecked })
    }

    render() {
        const { usersBabies } = this.context
        console.log(this.state);
        
        if (usersBabies.length === 0) {
            return <></>
        }

        const menuWrap = document.getElementById('menu-wrap')
        if (this.state.isChecked) {
            menuWrap.classList.add('checked')
        } 
        if (this.state.isChecked === false) {
            menuWrap.classList.remove('checked')
            menuWrap.classList.add('notChecked')
        }
        

        return (
            <div id="menu-wrap">
                <label id="menu-label">Babies</label>
                <input 
                    name="babies"
                    type='checkbox' 
                    className='toggler'
                    onClick={() => {this.toggleCheck()}} />
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
            </div>
        )
    }
}