import React, { Component } from 'react'
import noProfilePic from '../../images/babydrawing.png'
import { Link } from 'react-router-dom'
import BabyContext from '../../Contexts/BabyContext'
import './UserProfile.css'

export default class UserProfile extends Component {

    static contextType = BabyContext

    renderNoBabyProfile() {
        return <section>
                    <Link to="/uploadimage">Change</Link>
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
            <section>
                <h3>{baby.baby_name}</h3>
                <Link to="/uploadimage">Change</Link>
                <div>
                    <img src={baby.image_url} alt="profile" className="profilepic" />
                </div>
                <div className="about">
                    <p >{baby.about}</p>
                    <Link to="/editprofile">Edit</Link>
                </div>
            </section>
        )
    }

    render() {
        console.log('this.props:', this.props);
        
        if (this.props.baby.baby === null) {
            return this.renderNoBabyProfile()
        } else return this.renderWithBabyProfile()
    }
}