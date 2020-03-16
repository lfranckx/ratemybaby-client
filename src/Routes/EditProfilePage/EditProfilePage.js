import React, { Component } from 'react'
import EditProfileForm from '../../Components/EditProfileForm/EditProfileForm'
import BabyContext from '../../Contexts/BabyContext'

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
        const { baby } = this.context        
        return (
            <section>
                <h3>Edit Profile</h3>
                <EditProfileForm 
                    onSubmitForm={this.handleSubmitForm} 
                    baby={baby}
                />
            </section>
        )
    }
}