import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'

export default class ThingListItem extends Component {
    
    render() {
        const {baby} = this.props
        
        return ( 
                    <Link 
                    className="toddler-links"
                    to={`/profile/${baby.id}`}
                    >
                        {baby.baby_name}
                    </Link>
        )        
    }              
}



        
        