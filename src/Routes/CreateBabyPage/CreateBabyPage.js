import React, { Component } from 'react'
import CreateProfileForm from '../../Components/CreateProfileForm/CreateProfileForm'
import BabyContext from '../../Contexts/BabyContext'
import BabyApiService from '../../Services/baby-api-service'
import './CreateBabyPage.css'

export default class EditProfile extends Component {
    static defaultProps = {
        location: {},
        history: {
            push:() => {}
        }
    }
    
    static contextType = BabyContext

    componentWillUnmount() {
        BabyApiService.getByParentId()
        .then(res => {
            this.context.setUsersBabies(res)
        })
        .catch(this.context.setError)
    }

    handleSubmitForm = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/uploadimage'
        history.push(destination)
    }

    render() {     
        return (
            <section id="create-section">
                <h3 id="create-header">Create Baby Profile</h3>
                <CreateProfileForm 
                    onSubmitForm={this.handleSubmitForm} 
                />
            </section>
        )
    }
}