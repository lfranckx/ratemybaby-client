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
        this.setState({ 
            error: null,
        })

        const  fileSelected  = this.fileInput.current.files[0]
        fileSelected.path = this.fileInput.current.value
        // console.log(this.fileInput.current.value)
        console.log(fileSelected);
        

        const data = new FormData()
        data.append('image', fileSelected)
        console.log('formData:', Array.from(data));
        // const data = {
        //     'image': fileSelected
        // }
        
        BabyApiService.postImageFile(data)
                .then(res => {
                    console.log('response from server:', res);
                    this.props.onUploadSuccess()
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
