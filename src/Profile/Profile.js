import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import AppContext from '../AppContext';
import profilepic from '../images/babydrawing.png'
import config from '../config';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            no_image: profilepic,
            name: '',
            about: '',
        }
    }           

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/babies/${this.props.baby_id}`)
    }
    render() {
        return (
            <AppContext.Consumer>
                {(props) => (
                    <main>
                        <h1>{this.state.name}</h1>
                        <section>
                            <Link to="/uploadimage">Edit</Link>
                            <div>
                                <img src={this.state.no_image} alt="profile" id="profilepic" />
                            </div>
                            
                            <div className="about">
                                <p className="text">
                                    {this.state.about}
                                </p>
                                <Link to="/editprofile">Edit</Link>
                            </div>
                            <button type="submit" id="continue">
                                <Link to="/">Continue</Link>
                            </button>
                        </section>
                    </main>
                )}
            </AppContext.Consumer>
        )
    }
}

export default Profile;