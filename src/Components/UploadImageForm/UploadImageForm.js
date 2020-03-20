import React, { Component } from 'react'
import BabyContext from '../../Contexts/BabyContext'
import BabyApiService from '../../Services/baby-api-service'


export default class UploadImage extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    static contextType = BabyContext

    constructor(props) {
        super(props)
        const { baby } = this.props
        this.state = {
            error: null,
            fileSelected: null,
            id: baby.id
        }
    }

    handleUploadImage = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { fileSelected } = ev.target.files[0]
        console.log(fileSelected);

        // BabyApiService.updateBaby({
        //     id: this.state.id,
        //     image_url: 
        // })
    }

    render() {
        const { error } = this.state

        return (
            <section>
                <h1>Upload Image</h1>
                <form 
                    action="upload.php" 
                    method="post" 
                    encType="multipart/form-data" 
                    id="upload-form"
                    onSubmit={this.handleUploadImage}
                >
                    <div role='alert'>{error && <p className='error'>{error}</p>}</div>
                    <label>Select an image to upload:</label>
                    <input 
                        type="file" 
                        name="fileToUpload" 
                        id="fileToUpload" ></input>
                    <button type="submit">Submit</button>
                </form>
            </section>
        )
    }
}