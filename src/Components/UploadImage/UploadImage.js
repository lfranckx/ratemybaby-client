import React, { Component } from 'react';
import './UploadImage.css'
import AppContext from '../../AppContext';

export default class UploadImage extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {(props) => (
                    <main>
                        <h1>Upload Image</h1>
                        <section>
                            <form 
                                action="upload.php" 
                                method="post" 
                                encType="multipart/form-data" 
                                id="upload-form"
                                onSubmit={event => {
                                    event.preventDefault();
                                    this.props.handleUploadImage()
                                }}
                            >
                                <label>Select image to upload:</label>
                                <input type="file" name="fileToUpload" id="fileToUpload"></input>
                                <button id="image-submit" type="submit">Submit</button>
                            </form>
                        </section>
                    </main>
                )}
            </AppContext.Consumer>
        )
    }
}