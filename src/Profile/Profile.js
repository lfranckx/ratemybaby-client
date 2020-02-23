import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import AppContext from '../AppContext';
import profilepic from '../images/babydrawing2.png'

class Profile extends Component {

    render() {
        
        return (
            <AppContext.Consumer>
                {(props) => (
                    console.log(props),
                    <main>
                        <h1>{props.user_baby.name}</h1>
                        <section>
                            <div>
                                <img src={profilepic} alt="profile" id="profilepic" />
                            </div>
                            
                            <div class="about">
                                <p class="text">
                                    {props.user_baby.about}
                                </p>
                                <Link to="/editprofile">Edit</Link>
                            </div>
                        </section>
                    </main>
                )}
            </AppContext.Consumer>
        )
    }
}

export default Profile;