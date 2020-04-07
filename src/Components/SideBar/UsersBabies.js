import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'

export default class ThingListItem extends Component {
    
    render() {
        const {baby} = this.props
        // console.log('UsersBabies props:', baby);
        
        return  <li className='side-bar-link'>
                    <Link 
                        to={`/profile/${baby.id}`}
                    >
                        {baby.baby_name}
                    </Link>
                </li>
    }              
}



        
        