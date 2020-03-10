import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './BabyProfile.css'

export default class BabyProfile extends Component {
    handleLike = (baby) => {
        baby.total_score += 5
        baby.total_votes += 5
        this.context.updateBaby(baby)
    }

    handleDislike(baby) {
        baby.total_votes += 5
        this.context.updateBaby(baby)
    }
    
    render() {
        const { baby } = this.props
        
        // let rating = (baby.total_score / baby.total_votes)
        // let roundedRating = Math.round(rating * 10) / 10
        return (
            <>
                <section>
                    {/* <h3>{baby.baby_name}</h3>
                    <div id="rating">{roundedRating} / 5</div>
                    <img src={baby.image_url} alt="baby" id="baby-pic"></img>
                    <div id="about">{baby.about}</div> */}
                </section>
                <button 
                    className="rating-button" 
                    onClick={() => {
                        this.handleDislike(baby)
                    }}
                >
                    <Link to="/">
                        <span role="img" aria-label="no" className="emoji">🚫</span>
                    </Link>
                </button>
                <button 
                    className="rating-button"
                    onClick={() => {
                        this.handleLike(baby)
                    }}
                >
                    <Link to="/">
                        <span role="img" aria-label="yes" className="emoji" id="yes">👼</span>
                    </Link>
                </button>
            </>
        )
    }
}