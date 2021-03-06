import React, { Component } from 'react'
import CreateProfileForm from '../../Components/CreateProfileForm/CreateProfileForm'
import HamburgerContext from '../../Contexts/HamburgerContext'
import BabyApiService from '../../Services/baby-api-service'
import './CreateBabyPage.css'

export default class EditProfile extends Component {
    static defaultProps = {
        location: {},
        history: {
            push:() => {}
        }
    }
    
    static contextType = HamburgerContext

    componentDidMount() {
        this.context.setNotActive()
    }

    componentWillUnmount() {
        BabyApiService.getByParentId()
        .then(res => {
            this.context.setUsersBabies(res)
        })
        .catch(this.context.setError)
    }

    handleSubmitForm = () => {
        const { baby } = this.context
        const { location, history } = this.props
        const destination = (location.state || {}).from || `/uploadimage/${baby.id}`
        history.push(destination)
    }

    render() {             
        return (
            <section id="create-section">
                <h2 id="create-header">Create Baby Profile</h2>
                <CreateProfileForm 
                    onSubmitForm={this.handleSubmitForm} 
                />
            </section>
        )
    }
}