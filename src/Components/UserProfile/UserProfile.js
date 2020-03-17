import React, { Component } from 'react'
import profilepic from '../../images/babydrawing.png'
import { Link } from 'react-router-dom'
import BabyContext from '../../Contexts/BabyContext'
// import EditProfileForm from '../EditProfileForm/EditProfileForm'
import './UserProfile.css'

export default class UserProfile extends Component {

    static contextType = BabyContext


    render() {
        const { baby } = this.props
        console.log('props:', baby, 'context:', this.context);
        return (
            <section>
                <h3>{baby.baby_name}</h3>
                <Link to="/uploadimage">Change</Link>
                <div>
                    <img src={profilepic} alt="profile" className="profilepic" />
                </div>
                <div className="about">
                    <p >{baby.about}</p>
                    <Link to="/editprofile">Edit</Link>
                </div>
            </section>
        )
    }
}