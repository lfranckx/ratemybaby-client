import React, { Component } from 'react'
import UploadImageForm from '../../Components/UploadImageForm/UploadImageForm'
import BabyContext from '../../Contexts/BabyContext'
import './UploadImage.css'

export default class UploadImagePage extends Component {
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
    }

    static contextType = BabyContext

    handleUploadSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/rate'
        history.push(destination)
    }

    render() {
        const { babies } = this.context
        return (
            <section id="upload-section">
                <h3 id="upload-header">Upload Image</h3>
                    <UploadImageForm 
                        onUploadSuccess={this.handleUploadSuccess}
                        baby={babies}    
                    />
            </section>
        )
    }
}