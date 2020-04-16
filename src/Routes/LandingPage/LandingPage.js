import React, { Component } from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'

class LandingPage extends Component {

    render() {
        return (
            <section className="landing-section">
                <h2 id="landing-header">Upload your baby, the world rates it.</h2>
                <div>
                    <Link id='registerlink' className="register" to='/register'>
                        Sign Up
                    </Link>
                </div>
            </section>
        )
    }
}

export default LandingPage