import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './EditProfile.css';

class EditProfile extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            name: '',
            about: '',
            picture: '',
            total_score: '',
            total_votes: ''
        }
    }

    updateProfile = () => {
        
    }

    nameChange = letter => {
        this.setState({ name: letter })
    }

    aboutChange = letter => {
        this.setState({ about: letter })
    }

    render() {
        return (
            <main>
                <h1>Create Profile</h1>
                <section>
                    <form action="upload.php" method="post" encType="multipart/form-data" className="upload-form"> 
                        <label>Select image to upload:</label>
                        <input type="file" name="fileToUpload" id="fileToUpload"></input>
                    </form>

                    <form id="editform">
                        <label>Name</label>
                        <input 
                            onChange={event => {
                                this.nameChange(event.target.value)
                            }}
                            className="edit-input" 
                            type="text"
                            name="name" 
                            required 
                        />
                        <label>About</label>
                        <textarea 
                            onChange={event => {
                                this.aboutChange(event.target.value)
                            }}
                            className="edit-input"
                            name="about-me" 
                            rows="15" 
                        />
                        <button type="submit">
                            <Link to="profile">Submit</Link>
                        </button>
                    </form>
                </section>
            </main>
        )
    }

}

export default EditProfile;
