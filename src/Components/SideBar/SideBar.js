import React, { Component } from 'react'
import './SideBar.css'
import BabiesContext from '../../Contexts/BabiesContext'
import BabyApiService from '../../Services/baby-api-service'
import UsersBabies from './UsersBabies'

export default class SideBar extends Component { 
    static defaultProps = {
        match: { params: {} }
    }

    static contextType = BabiesContext

    componentDidMount() {
        BabyApiService.getByParentId()
            .then(res => {
                this.context.setUsersBabies(res)
            })
            .catch(this.context.setError)
    }

    renderUsersBabies() {
        console.log('SideBar context', this.context);
        const { usersBabies } = this.context
        console.log('SideBar usersBabies', usersBabies);
        
        if (!usersBabies) {
            return <div className='loading'>Loading...</div>
        }   
        return  usersBabies.map(baby => 
                    <UsersBabies 
                        key={baby.id}
                        baby={baby}
                    />)
    }

    render() {
        const { error } = this.context
        return (
            <nav id="sidebar">
                <div id='sidebarheader'><h3>Babies</h3></div>
                <ul>
                    {error
                        ? <p className='red'>There was an error, try again</p>
                        : this.renderUsersBabies()}
                </ul>
            </nav>
        )
    }
}