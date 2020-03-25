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
        this.fileInput = React.createRef()
        this.state = {
            error: null,
            fileSelected: null,
            id: baby.id
        }
    }

    handleSingleFileUpload = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        let baby = { id: this.state.id }
        
        const  fileSelected  = this.fileInput.current.files[0]
        const data = new FormData()
        data.append('image', fileSelected)
        
        BabyApiService.postImageFile(data)
                .then(res => {
                    (!res.ok)
                        ? res.json().then(e => Promise.reject(e))
                        : res.json()
                        .then(data => {
                            console.log('postImageFile response:', data);
                            baby.image_url = data.image_url
                            BabyApiService.updateBaby(baby)
                            this.props.onUploadSuccess()
                        })
                })
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
                        ref={this.fileInput}
                        type="file"
                        accept=".png, .jpg, .jpeg .gif"
                        name="file" 
                        id="file" />
                    <button type="submit">Submit</button>
                </form>
            </section>
        )
    }
}
