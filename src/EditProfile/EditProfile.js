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
                <section>
                    <form action="upload.php" method="post" enctype="multipart/form-data" class="upload-form"> 
                        <label>Select image to upload:</label>
                        <input type="file" name="fileToUpload" id="fileToUpload"></input>
                    </form>

                    <form id="editform">
                        <label>Name</label>
                        <input 
                            onChange={event => {
                                this.nameChange(event.target.value)
                            }}
                            class="" 
                            type="text"
                            name="name" 
                            required 
                        />
                        <label>About</label>
                        <textarea 
                            onChange={event => {
                                this.aboutChange(event.target.value)
                            }}
                            name="about-me" 
                            rows="15" 
                        />
                        <Link class="form-submit" to="profile">Submit</Link>
                    </form>
                </section>
            </main>
        )
    }

}

export default EditProfile;
