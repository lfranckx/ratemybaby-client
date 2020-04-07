import React, { Component } from 'react'
import UploadImageForm from '../../Components/UploadImageForm/UploadImageForm'
import BabyContext from '../../Contexts/BabyContext'
import BabyApiService from '../../Services/baby-api-service'
import './UploadImage.css'

export default class UploadImagePage extends Component {
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
    }

    static contextType = BabyContext

    componentWillUnmount() {
        BabyApiService.getByParentId()
        .then(res => {
            this.context.setUsersBabies(res)
        })
        .catch(this.context.setError)
    }

    handleUploadSuccess = () => {
        const { baby } = this.context
        const { location, history } = this.props
        const destination = (location.state || {}).from || `/profile/${baby.id}`
        history.push(destination)
    }

    render() {
        console.log('UploadImage props', this.props);
        console.log('UploadImage context', this.context);
        
        const { baby } = this.context
        return (
            <section id="upload-section">
                <h3 id="upload-header">Upload Image</h3>
                    <UploadImageForm 
                        onUploadSuccess={this.handleUploadSuccess}
                        baby={baby}    
                    />
            </section>
        )
    }
}