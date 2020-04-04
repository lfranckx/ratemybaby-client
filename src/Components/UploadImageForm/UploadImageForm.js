import React, { Component } from 'react'
import BabyContext from '../../Contexts/BabyContext'
import BabyApiService from '../../Services/baby-api-service'
import { Link } from 'react-router-dom'


export default class UploadImage extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    static contextType = BabyContext

    constructor(props) {
        super(props)
        this.fileInput = React.createRef()
        // console.log('this.props.baby:', this.props.baby);
        
        this.state = {
            error: null,
            fileSelected: null
        }
    }

    handleSingleFileUpload = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const localBaby = JSON.parse(localStorage.getItem('baby'))
        console.log('localBaby:', localBaby);
        // let baby  = this.props.baby
        // console.log('this.props.baby:', baby);
        
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
                    localBaby.image_url = data.image_url
                    BabyApiService.updateBaby(localBaby)
                    this.props.onUploadSuccess()
                })
        })
    }

    render() {
        const { error } = this.state

        return (
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
                        id="file" 
                        required/>
                    <button className="upload-button">
                        <Link id="cancel-upload" to="/profile">Cancel</Link>
                    </button>
                    <button className="upload-button" type="submit">Submit</button>
                </form>
        )
    }
}
