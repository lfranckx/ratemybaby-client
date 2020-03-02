import React, { Component } from 'react';
import './EditProfile.css';
import AppContext from '../AppContext';
import config from '../config';

class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: this.props.loggedIn,
            user_baby: {
                name: this.props.name,
                about: this.props.about,
                image_url: this.props.image_url,
                total_score: this.props.total_score,
                total_votes: this.props.total_votes,
                baby_id: this.props.baby_id
            }
        }
    }

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/babies/${this.state.baby_id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Something went wrong.')
            }
            return response
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.context.handleLogin(data)
        })
        .catch(error => {
            this.setState({ error: error.message })
        })
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit() {

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
