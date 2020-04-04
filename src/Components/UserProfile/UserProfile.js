import React, { Component } from 'react'
import noProfilePic from '../../images/babydrawing.png'
import { Link } from 'react-router-dom'
import BabyContext from '../../Contexts/BabyContext'
import CreateProfileForm from '../CreateProfileForm/CreateProfileForm'
import './UserProfile.css'

export default class UserProfile extends Component {

    static contextType = BabyContext

    renderWithBaby() {
        const { baby } = this.props
        if (baby.image_url === undefined) {
            return baby.image_url === noProfilePic
        }
        return (
            <section className="profile-container">
                <img src={baby.image_url} alt="profile" className="baby-pic" />
                <Link id="change-photo" to="/uploadimage">Change Photo</Link>  
                <div className="name-age">
                    <h3>{baby.baby_name}</h3>
                    <span className="age">
                        <img src="./tinder_icons/bdaycake.png" alt="birthday-cake" id="cake" />
                        {baby.age}
                    </span>
                    <span className="country">
                        <img src="./tinder_icons/house.png" alt="house" id="house" />
                        {baby.country}
                    </span>
                </div>
                <div className="about">
                    {baby.about}
                </div>
                <button className="edit-info">
                    <Link to="/editprofile">Edit Info</Link>
                </button>
            </section>
        )
    }

    render() {
        // const { baby } = this.context.state.baby
        // if (!baby) {
        //     return <CreateProfileForm />
        // }
        return this.renderWithBaby()
    }
}