import React, { Component } from 'react'
import EditProfileForm from '../../Components/EditProfileForm/EditProfileForm'
import BabyContext from '../../Contexts/BabyContext'
import BabyApiService from '../../Services/baby-api-service'
import './EditProfilePage.css'

export default class EditProfile extends Component {

    static defaultProps = {
        match: { params: {} },
        location: {},
        history: {
            push:() => {}
        }
    }
    
    static contextType = BabyContext

    componentDidMount() {
        this.context.clearError()
        console.log('EditProfilePage babyId', this.props.match.params.babyId);
        
        let babyId = this.props.match.params.babyId
        BabyApiService.getBaby(babyId)
            .then(this.context.setBaby)
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearError()
        BabyApiService.getByParentId()
            .then(res => {
                this.context.setUsersBabies(res)
            })
            .catch(this.context.setError)
    }

    handleSubmitForm = () => {
        const { baby } = this.context   
        const { location, history } = this.props
        const destination = (location.state || {}).from || `/profile/${baby.id}`
        history.push(destination)
    }

    render() {
        const { baby } = this.context                
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