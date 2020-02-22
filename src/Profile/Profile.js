import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

class Profile extends Component {

    render(props) {
        return (
                <main>
                    <section>
                        <h3>{this.state.name}</h3>
                        <div class="pro-image">
                            <Link class="edit-link" to="/editprofile">Change</Link>
                        </div>
                        <div class="about">
                            <p class="text">
                                {this.props.state.name}
                            </p>
                        </div>
                    </section>
                </main>
        )
    }
}

export default Profile;