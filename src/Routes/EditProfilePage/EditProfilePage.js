import React, { Component } from 'react'
import EditProfileForm from '../../Components/EditProfileForm/EditProfileForm'
import BabyContext from '../../Contexts/BabyContext'
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
        console.log('successfully updating profile');

        const { location, history } = this.props
        const destination = (location.state || {}).from || '/profile'
        history.push(destination)
    }

    render() {
        const localBaby = JSON.parse(localStorage.getItem('baby'))
        console.log('localBaby:', localBaby);
        // const { baby } = this.context        
        return (
            <section id="edit-section">
                <h3 id="edit-header">Edit Profile</h3>
                <EditProfileForm 
                    onSubmitForm={this.handleSubmitForm} 
                    baby={localBaby}
                />
            </section>
        )
    }
}