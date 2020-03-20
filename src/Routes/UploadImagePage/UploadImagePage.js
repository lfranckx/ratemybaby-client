import React, { Component } from 'react'
import UploadImageForm from '../../Components/UploadImageForm/UploadImageForm'
import BabyContext from '../../Contexts/BabyContext'

export default class UploadImagePage extends Component {
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
    }

    static contextType = BabyContext

    handleUploadSuccess = () => {
        console.log('successfully uploading picture');
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
    }

    render() {
        const { baby } = this.context
        return (
            <UploadImageForm 
                onUploadSuccess={this.handleUploadSuccess}
                baby={baby}    
            />
        )
    }
}