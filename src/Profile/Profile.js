import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import AppContext from '../AppContext';
import profilepic from '../images/babydrawing.png'

class Profile extends Component {

    render() {
        
        return (
            <AppContext.Consumer>
                {(props) => (
                    <main>
                        <h1>{props.user_baby.name}</h1>
                        <section>
                            <Link to="/editprofile">Edit</Link>
                            <div>
                                <img src={profilepic} alt="profile" id="profilepic" />
                            </div>
                            
                            <div className="about">
                                <p className="text">
                                    {props.user_baby.about}
                                </p>
                            </div>
                        </section>
                    </main>
                )}
            </AppContext.Consumer>
        )
    }
}

export default Profile;