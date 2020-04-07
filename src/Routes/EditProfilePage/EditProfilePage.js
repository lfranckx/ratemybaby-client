import React, { Component } from 'react'
import EditProfileForm from '../../Components/EditProfileForm/EditProfileForm'
import BabyContext from '../../Contexts/BabyContext'
import BabyApiService from '../../Services/baby-api-service'
import './EditProfilePage.css'

export default class EditProfile extends Component {
    static defaultProps = {
        location: {},
        history: {
            push:() => {}
        }
    }
    
    static contextType = BabyContext

    handleSubmitForm = () => {
        const { baby } = this.context   
        const { location, history } = this.props
        const destination = (location.state || {}).from || `/profile/${baby.id}`
        history.push(destination)
    }

    render() {
        const { baby } = this.context   
        console.log('EditProfile context', this.context);
             
        return (
            <section id="edit-section">
                <h3 id="edit-header">Edit Profile</h3>
                <EditProfileForm 
                    onSubmitForm={this.handleSubmitForm} 
                    baby={baby}
                />
            </section>
        )
    }
}