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

    handleSingleFileChange = ev => {
        ev.preventDefault()
        const fileSelected = ev.target.files[0]
        console.log('setting this.state.fileSelected:', fileSelected);
        
        this.setState({ 
            fileSelected: fileSelected
        })
    }

    handleSingleFileUpload = ev => {
        ev.preventDefault()
        this.setState({ error: null })

        const { fileSelected } = this.state
        const data = {
            'image': fileSelected,
        }
        if (this.state.fileSelected) {
            BabyApiService.postImageFile(data)
                .then(res => {
                    console.log('response from server:', res);
                    this.props.onUploadSuccess()
                })
        }
    }

    render() {
        const { error } = this.state

        return (
            <section>
                <h3>Upload Image</h3>
                <form 
                    id="upload-form"
                    onSubmit={this.handleSingleFileUpload}
                >
                    <div role='alert'>{error && <p className='error'>{error}</p>}</div>
                    <label>Select an image to upload:</label>
                    <input 
                        onChange={this.handleSingleFileChange}
                        type="file" 
                        name="fileToUpload" 
                        id="fileToUpload" ></input>
                    <button type="submit">Submit</button>
                </form>
            </section>
        )
    }
}