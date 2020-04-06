import React, { Component } from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'

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