import React, { Component } from 'react'
import CreateProfileForm from '../../Components/CreateProfileForm/CreateProfileForm'
import BabyContext from '../../Contexts/BabyContext'
import './CreateBabyPage.css'

export default class EditProfile extends Component {
    static defaultProps = {
        location: {},
        history: {
            push:() => {}
        }
    }
    
    static contextType = BabyContext

    handleSubmitForm = () => {
        console.log('successfully creating baby profile');
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