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
        console.log('CreateBabyPage rendered');
        
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