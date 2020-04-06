import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'
import BabyContext from '../../Contexts/BabyContext'
import BabyApiService from '../../Services/baby-api-service'

export default class SideBar extends Component { 
    static defaultProps = {
        match: { params: {} }
    }

    static contextType = BabyContext

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        const parent_id = user.id
        console.log('localStorage user:', user);
        BabyApiService.getBaby(parent_id)
            .then(this.context.setBaby)
            .catch(this.context.setError)
    }
    render() {
        const {baby} = this.context
        console.log('baby from sidebar:', baby);
        
        return <nav id="sidebar">
            < div id='sidebarheader'><h2>Your Babies</h2></div>
            
            <div className='side-bar-link'>
                <ul>
                    <li>
                        <Link 
                            to='/profile'
                        >
                            {baby.baby_name}
                        </Link>
                    </li>
                </ul>
            </div>
            
            
        </nav>
    }
}