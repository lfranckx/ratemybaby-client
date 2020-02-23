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
                        <section>
                            {/* <h1>{this.props.user_baby.name}</h1>
                            <img src={profilepic} alt="profile" id="profilepic">
                                <Link class="edit-link" to="/editprofile">Change</Link>
                            </img>
                            <div class="about">
                                <p class="text">
                                    {this.props.user_baby.about}
                                </p>
                            </div> */}
                        </section>
                    </main>
                )}
            </AppContext.Consumer>
        )
    }
}

export default Profile;