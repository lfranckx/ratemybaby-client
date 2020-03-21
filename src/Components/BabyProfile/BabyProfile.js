import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BabyContext from '../../Contexts/BabyContext'

export default class BabyProfile extends Component {
    static defaultProps = {
        match: { params: {} },
    }

    static contextType = BabyContext

    componentDidMount() {
        this.context.clearError()
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
        if (!baby) {
            return <div>Loading...</div>
        }
        
        let rating = (baby.total_score / baby.total_votes)
        let percent = rating * 100
        let roundPercent = Math.round(percent) + '%'
        return (
            <>
                <section>
                    <h3>{baby.baby_name}</h3>
                    <img src={baby.image_url} alt="baby" id="baby-pic"></img>
                    <div className="about">{baby.about}</div>
                    <div className="rating">{roundPercent}</div>
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
                </section>
            </>
        )
    }
}