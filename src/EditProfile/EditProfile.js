import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EditProfile.css';
import AppContext from '../AppContext';

class EditProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_baby: {
                name: ``,
                about: ``,
            }
        }
    }

    nameChange = letter => {
        // save user_baby object so the aboutChange() doesn't overwrite the object
        let newName = this.state.user_baby;
            newName.name = letter;
        this.setState({ 
            newName
        })
    }

    aboutChange = letter => {
        // save user_baby object so the nameChange() doesn't overwrite the object
        let newAbout = this.state.user_baby;
            newAbout.about = letter;
        this.setState({ 
            newAbout
        })
    }

    render() {
        return (
            <AppContext.Consumer>
                {(props) => (
                    <main>
                        <h1>Edit Profile</h1>
                        <section>
                            <form action="upload.php" method="post" encType="multipart/form-data" className="upload-form"> 
                                <div className="editFormItems">
                                    <label>Select image to upload:</label>
                                </div>
                                <div className="editFormItems">
                                <input type="file" name="fileToUpload" id="fileToUpload"></input>
                                </div>
                                
                            </form>
        
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
                                        onChange={event => {
                                            this.nameChange(event.target.value)
                                        }}
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
                                        onChange={event => {
                                            this.aboutChange(event.target.value)
                                        }}
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
