import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HamburgerContext from '../../Contexts/HamburgerContext'
import './UserProfile.css'

export default class UserProfile extends Component {

    static contextType = HamburgerContext

    render() {
        const { baby } = this.props     
        if (!baby) {
            return <div className='loading'>Loading...</div>
        }

        let rating = (baby.total_score / baby.total_votes)
        let percent = rating * 100
        let roundPercent = Math.round(percent) + '%'

        return (
            <>
            <section className="profile-container">
                <img src={baby.image_url} alt="profile" className="baby-pic" />
                <Link id="change-photo" to={`/uploadimage/${baby.id}`}>Change Photo</Link>  
                <div className="name-age">
                    <h3 id="user-baby-name">{baby.baby_name}</h3>
                    <span className="age">
                         <img src="https://ratemybaby-images.s3-us-west-1.amazonaws.com/logos-icons/bdaycake.png" 
                            alt="birthday-cake" 
                            id="cake" />
                        {baby.age} {baby.age_format}
                    </span>
                    <span className="country">
                        <img src="https://ratemybaby-images.s3-us-west-1.amazonaws.com/logos-icons/house.png" 
                            alt="house" 
                            id="house" />
                        {baby.country}
                    </span>
                </div>
                <div className="about">
                    {baby.about}
                </div>
                <div className='edit-info-box'>
                    <div className="user-rating">{roundPercent}</div>
                    <button className="edit-info">
                        <Link to={`/editprofile/${baby.id}`}>Edit Info</Link>
                    </button>
                </div>
                <Link to={`/delete/${baby.id}`}>Delete</Link> 
            </section>
            </>
        )
    }
}