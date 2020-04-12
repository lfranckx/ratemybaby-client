import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BabyContext from '../../Contexts/BabyContext'
import './Hamburger.css'

export default class ThingListItem extends Component {

    static contextType = BabyContext

    renderUsersBabies() {
        const {baby} = this.props
        return (
            <li>
                <Link 
                    className="toddler-links"
                    to={`/profile/${baby.id}`}
                >
                    {baby.baby_name}
                </Link>
            </li>
        )
    }

    render() {
        const { error } = this.context
        
        return (  
            <> 
            {error
                ? <p className='red'>There was an error, try again</p>
                : this.renderUsersBabies()} 
            </>
        )        
    }              
}



        
        