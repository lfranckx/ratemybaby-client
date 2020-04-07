import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BabyContext from '../../Contexts/BabyContext'
import './BabyProfile.css'

export default class BabyProfile extends Component {

    state = {

    }

    static defaultProps = {
        match: { params: {} },
    }

    static contextType = BabyContext

    componentDidMount() {
        this.context.clearError()
        this.context.setBaby(this.props.baby)
    }

    componentWillUnmount() {
        this.context.clearBaby()
    }

    handleLike = (baby) => {
        baby.total_score += 5
        baby.total_votes += 5
        this.context.updateBaby(baby)
    }

    handleDislike = (baby) => {
        baby.total_votes += 5
        this.context.updateBaby(baby)
    }
    
    render() {
        const { baby } = this.props
        console.log('BabyProfile props', this.props);
        

        if (!baby) {
            return <div className='loading'>Loading...</div>
        }
        
        let rating = (baby.total_score / baby.total_votes)
        let percent = rating * 100
        let roundPercent = Math.round(percent) + '%'

        return (
                <section className="profile-container">
                    <img src={baby.image_url} alt="baby" className="baby-pic" />
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
                    
                    <div className="about">{baby.about}</div>
                    <div className="rating">{roundPercent}</div>
                    <button 
                        className="rate-button" 
                        onClick={() => {
                            this.handleDislike(baby)
                        }}
                    >
                        <Link to="/rate">
                                <img src="./tinder_icons/dislike.png" alt="dislike" className="rate-icon" id="dislike"/>
                        </Link>
                    </button>
                    <button 
                        className="rate-button"
                        onClick={() => {
                            this.handleLike(baby)
                        }}
                    >
                        <Link to="/rate">
                            <img src="./tinder_icons/avo.png" alt="like" className="rate-icon" id="like"/>
                        </Link>
                    </button>
                </section>
        )
    }
}