import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {

    handleLike = (baby) => {
        baby.total_score = baby.total_score + 5;
        baby.total_votes = baby.total_votes + 5;
    }

    handleDislike = (baby) => {
        baby.total_votes = baby.total_votes + 5;
    }
    
    render() {
        const babies = this.props.babies;
        let randomBaby = babies[Math.floor(Math.random() * babies.length)];
        let rating = (randomBaby.total_score / randomBaby.total_votes) * 5;
        let newRating = Math.round(rating * 10) / 10;
        
        return (
            <>
                <header>
                    <h1>Rate My Baby</h1>
                    <h2>Upload your baby, the world rates it.</h2>
                </header>
                <main>
                    <section>
                        <h3>{randomBaby.name}</h3>
                        <div id="rating">{newRating} / 5</div>
                        <img src={randomBaby.image_url} alt="baby" id="baby-pic"></img>
                        <div id="about">{randomBaby.about}</div>
                    </section>
                    <button 
                        className="rating-button" 
                        onClick={() => {
                            this.handleDislike(randomBaby)
                        }}
                    >
                        <Link to="/">
                            <span role="img" aria-label="no" className="emoji">🚫</span>
                        </Link>
                    </button>
                    <button 
                        className="rating-button"
                        onClick={() => {
                            this.handleLike(randomBaby)
                        }}
                    >
                        <Link to="/">
                            <span role="img" aria-label="yes" className="emoji" id="yes">👼</span>
                        </Link>
                    </button>
                </main>
            </>
        )
    }
}

export default Home;