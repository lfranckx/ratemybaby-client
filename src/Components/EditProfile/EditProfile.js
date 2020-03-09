import React, { Component } from 'react';
import './EditProfile.css';
import AppContext from '../../AppContext';
import config from '../../config';

class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: this.props.loggedIn,
            id: this.props.id
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
            },
            body: JSON.stringify({
                baby_name: this.state.name,
                about: this.state.user_baby.about,
                image_url: this.state.user_baby.image_url,
                total_score: this.state.user_baby.total_score,
                total_votes: this.state.user_baby.total_votes,
                user_id: this.state.user_baby
            })
        }
    }

    render() {
        return (
            <AppContext.Consumer>
                {(props) => (
                    <main>
                        <h1>Edit Profile</h1>
                        <section>
                            <form 
                                id="editform"
                                onSubmit={event => {
                                    event.preventDefault();
                                    this.props.handleProfileChange(this.state.user_baby.name, this.state.user_baby.about)
                                }}
                            >
                                <div className="editFormItems">
                                    <label>Name</label>
                                </div>
                                <div className="editFormItems">
                                    <input 
                                        onChange={this.handleChange}
                                        className="edit-input" 
                                        type="text"
                                        name="name" 
                                        required 
                                    />
                                </div>
                                <div className="editFormItems">
                                    <label>About</label>
                                </div>
                                <div className="editFormItems">
                                    <textarea 
                                        onChange={this.handleChange}
                                        className="edit-input"
                                        name="about-me" 
                                        rows="15" 
                                    />
                                </div>
                                <div className="editFormItems">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </section>
                    </main>
                )}
            </AppContext.Consumer>
        )
    }

}

export default EditProfile;
