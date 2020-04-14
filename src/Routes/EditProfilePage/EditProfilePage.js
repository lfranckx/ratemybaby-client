import React, { Component } from 'react'
import EditProfileForm from '../../Components/EditProfileForm/EditProfileForm'
import HamburgerContext from '../../Contexts/HamburgerContext'
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
    
    static contextType = HamburgerContext

    componentDidMount() {
        this.context.clearError()
        this.context.setNotActive()
        const babyId = this.props.match.params.babyId
        console.log('babyId', babyId);
        
        BabyApiService.getBaby(babyId)
            .then(this.context.setBaby)
            .catch(this.context.setError)
            .then(res => {
                BabyApiService.getByParentId()
                .then(res => {
                    this.context.setUsersBabies(res)
                })
                .catch(this.context.setError)
            })
    }

    componentWillUnmount() {
        this.context.setNotActive()
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