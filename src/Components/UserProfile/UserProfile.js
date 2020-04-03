import React, { Component } from 'react'
import noProfilePic from '../../images/babydrawing.png'
import { Link } from 'react-router-dom'
import BabyContext from '../../Contexts/BabyContext'
import './UserProfile.css'

export default class UserProfile extends Component {

    static contextType = BabyContext

    renderNoBabyProfile() {
        return <section className="profile-container">
                    <Link to="/uploadimage">Change Photo</Link>
                    <div>
                        <img src={noProfilePic} alt="profile" className="profilepic" />
                    </div>
                    <div className="about">
                        <Link to="/editprofile">Edit</Link>
                    </div>
                </section>
    }

    renderWithBabyProfile() {
        const { baby } = this.props

        return (
            <section className="profile-container">
                <img src={baby.image_url} alt="profile" className="baby-pic" />
                <Link id="change-photo" to="/uploadimage">Change Photo</Link>  
                <div className="name-age">
                    <h3>{baby.baby_name}</h3>
                    <span className="age">
                        <img src="./tinder_icons/bdaycake.png" alt="birthday-cake" id="cake" />
                        2
                    </span>
                    <span className="country">
                        <img src="./tinder_icons/house.png" alt="house" id="house" />
                        Country
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
        // console.log('this.props:', this.props);
        
        // if (this.props.baby.baby === null) {
        //     return this.renderNoBabyProfile()
        // }
        return this.renderWithBabyProfile()
    }
}