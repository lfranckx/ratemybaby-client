import React, { Component } from 'react'
import profilepic from '../../images/babydrawing.png'
import { Link } from 'react-router-dom'

export default class UserProfile extends Component {
    render() {
        const { baby } = this.props
        return (
            <section>
                <h3>{baby.baby_name}</h3>
                <Link to="/uploadimage">Edit</Link>
                <div>
                    <img src={profilepic} alt="profile-pic" id="profilepic" />
                </div>
                
                <div className="about">
                    <p className="text">
                        {baby.about}
                    </p>
                    <Link to="/editprofile">Edit</Link>
                </div>
                <button type="submit" id="continue">
                    <Link to="/">Continue</Link>
                </button>
            </section>
        )
    }
}