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
                localStorage.setItem(`babies`, JSON.stringify(res))
                this.context.setBaby(res)
            })
            .catch(this.context.setError)
    }
    render() {

        const localBabies = localStorage.getItem('babies')
        // console.log('localStorage babies:', localBabies);
        
        const { babies = [] } = this.context
        // console.log('context babies', babies);
        
        return (
            <nav id="sidebar">
                <div id='sidebarheader'><h2>My Babies</h2></div>
                <div className='side-bar-link'>
                    <ul>
                        {/* {babies.map(baby => 
                            <UsersBabies 
                                key={baby.id}
                                baby={baby}
                            />
                        )} */}
                    </ul>
                </div>
                
            </nav>
        )

        
        
    }
}