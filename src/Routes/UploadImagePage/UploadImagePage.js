import React, { Component } from 'react'
import UploadImageForm from '../../Components/UploadImageForm/UploadImageForm'
import HamburgerContext from '../../Contexts/HamburgerContext'
import BabyApiService from '../../Services/baby-api-service'
import './UploadImage.css'

export default class UploadImagePage extends Component {

    static defaultProps = {
        match: { params: {} },
        location: {},
        history: {
          push: () => {},
        },
    }

    static contextType = HamburgerContext

    componentDidMount() {
        this.context.clearError()
        this.context.setNotActive()
        const babyId = this.props.match.params.babyId
        BabyApiService.getBaby(babyId)
            .then(this.context.setBaby)
            .catch(this.context.setError)
    }

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