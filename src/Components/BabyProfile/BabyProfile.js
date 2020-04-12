import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BabyContext from '../../Contexts/BabyContext'
import './BabyProfile.css'

export default class BabyProfile extends Component {

    static defaultProps = {
        match: { params: {} },
    }

    static contextType = BabyContext

    componentDidMount() {
        this.context.setBaby(this.props.baby)
    }

    handleLike = (baby) => {
        baby.total_score += 2
        baby.total_votes += 2
        this.context.updateBaby(baby)
    }

    handleSuperLike = (baby) => {
        baby.total_score += 5
        baby.total_votes += 5
        this.context.updateBaby(baby)
    }

    handleDislike = (baby) => {
        baby.total_votes += 2
        this.context.updateBaby(baby)
    }
    
    render() {
        const { baby } = this.props
        if (!baby) {
            return <div className='loading'>Loading...</div>
        }

        if (baby.image_url === "") {
            return baby.image_url === "https://ratemybaby-images.s3-us-west-1.amazonaws.com/logos-icons/babydrawing.png"
        }
        
        let rating = (baby.total_score / baby.total_votes)
        let percent = rating * 100
        let roundPercent = Math.round(percent) + '%'

        return (
                <section className="profile-container">
                    <img src={baby.image_url} alt="baby" className="baby-pic" />
                    <div className="name-age">
                        <h3 id="babyprofilename">{baby.baby_name}</h3>
                        <span className="age">
                            <img src="https://ratemybaby-images.s3-us-west-1.amazonaws.com/logos-icons/bdaycake.png" 
                                alt="birthday-cake" 
                                id="cake" />
                            {baby.age}
                        </span>
                        <span className="country">
                            <img src="https://ratemybaby-images.s3-us-west-1.amazonaws.com/logos-icons/house.png" 
                                alt="house" 
                                id="house" />
                            {baby.country}
                        </span>
                    </div>
                    
                    <div className="about">{baby.about}</div>
                    <div className="rating">{roundPercent}</div>
                    <button 
                        className="rate-button buttons" 
                        onClick={() => {
                            this.handleDislike(baby)
                        }}
                    >
                        <Link to="/rate">
                                <img src="https://ratemybaby-images.s3-us-west-1.amazonaws.com/logos-icons/dislike.png" 
                                    alt="dislike" 
                                    className="rate-icon" 
                                    id="dislike"/>
                        </Link>
                    </button>
                    <button 
                        className="buttons"
                        id="superlikebutton"
                        onClick={() => {
                            this.handleSuperLike(baby)
                        }}
                    >
                        <Link to="/rate">
                            <img src="https://ratemybaby-images.s3-us-west-1.amazonaws.com/logos-icons/blueavocado.png" 
                                alt="superlike" 
                                className="rate-icon"
                                id="superlike"/>
                        </Link>
                    </button>
                    <button 
                        className="rate-button buttons"
                        onClick={() => {
                            this.handleLike(baby)
                        }}
                    >
                        <Link to="/rate">
                            <img src="https://ratemybaby-images.s3-us-west-1.amazonaws.com/logos-icons/avo.png" 
                                alt="like" 
                                className="rate-icon" 
                                id="like"/>
                        </Link>
                    </button>
                    
                    <div className="labels-container">
                        <span className="rate-labels" id="dislike-label">Dislike</span>
                        <span className="rate-labels" id="superlike-label">Superlike</span>
                        <span className="rate-labels" id="like-label">Like</span>
                    </div>
                </section>
        )
    }
}