import React, { Component } from 'react'
import CreateProfileForm from '../../Components/CreateProfileForm/CreateProfileForm'
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
        console.log('successfully creating baby profile');

        const { location, history } = this.props
        const destination = (location.state || {}).from || '/uploadimage'
        history.push(destination)
    }

    render() {
        const { user } = this.context        
        return (
            <section>
                <h3>Create Baby Profile</h3>
                <CreateProfileForm 
                    onSubmitForm={this.handleSubmitForm} 
                    user={user}
                />
            </section>
        )
    }
}