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
        const user = JSON.parse(localStorage.getItem('user'));
        const parent_id = user.id
        console.log('localStorage user:', user);
        BabyApiService.getByParentId(parent_id)
            .then(res => {
                console.log('response from getByParentId and setting to localStorage:', res);
                localStorage.setItem(`babies`, res)
                this.context.setBaby(res)
            })
            .catch(this.context.setError)
    }

    renderUsersBabies() {
        const localBabies = localStorage.getItem('babies')
        console.log('localStorage babies:', localBabies);
        
        const { babies = [] } = this.context
        console.log('context babies', babies);
        
        if (!babies) {
            return <div>Loading...</div>
        }   
        // return  babies.map(baby => 
        //             <UsersBabies 
        //                 key={baby.id}
        //                 baby={baby}
        //             />
        //         )
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
                {/* <div className='side-bar-link'></div> */}
            </nav>
        )

        
        
    }
}