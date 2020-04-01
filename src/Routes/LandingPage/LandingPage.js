import React, { Component } from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'
// import BabyApiService from '../../Services/baby-api-service'
// import BabiesContext from '../../Contexts/BabiesContext'

export default class LandingPage extends Component {
    render() {
        return (
            <section className="landing-section">
                <h3 id="landing-header">Upload your baby, the world rates it.</h3>

                    <div>
                        <Link className="register" to='/register'>
                            Sign Up
                        </Link>
                    </div>
            </section>
        )
    }
}