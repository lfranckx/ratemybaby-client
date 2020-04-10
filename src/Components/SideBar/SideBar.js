import React, { Component } from 'react'
import './SideBar.css'
import BabyContext from '../../Contexts/BabyContext'
import BabyApiService from '../../Services/baby-api-service'
import UsersBabies from './UsersBabies'

export default class SideBar extends Component { 
    static defaultProps = {
        match: { params: {} }
    }

    static contextType = BabyContext

    componentDidMount() {
        BabyApiService.getByParentId()
            .then(res => {
                this.context.setUsersBabies(res)
            })
            .catch(this.context.setError)
    }

    renderUsersBabies() {
        const { usersBabies } = this.context
        
        if (!usersBabies) {
            return <div className='loading'></div>
        }   

        return  usersBabies.map(baby => 
                    <UsersBabies 
                        key={baby.id}
                        baby={baby}
                    />)
    }

    render() {
        const { error } = this.context
        const { usersBabies } = this.context
        
        if (usersBabies.length === 0) {
            return <></>
        }
        return (
            <nav id="sidebar">
                <h3 id='sidebarheader'>Toddlers</h3>
                    {error
                        ? <p className='red'>There was an error, try again</p>
                        : this.renderUsersBabies()}
            </nav>
        )
    }
}