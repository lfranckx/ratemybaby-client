import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'

export default class ThingListItem extends Component { 
    render() {
        const {baby} = this.props
        console.log('this.props.baby', baby);
        
        // localStorage.setItem(`${baby.id}`, JSON.stringify(baby))
        
        // const localBaby = localStorage.getItem(`${baby.id}`)
        // console.log('baby from localStorage:', localBaby);

        return  <li className='side-bar-link'>
                    <Link 
                        to='/profile'
                    >
                        {baby.baby_name}
                    </Link>
                </li>

    }
                                
}



        
        