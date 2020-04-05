import React, { Component } from 'react'
import BabyApiService from '../../Services/baby-api-service'
import BabyContext from '../../Contexts/BabyContext'
import UserProfile from '../../Components/UserProfile/UserProfile'
import CreateProfileForm from '../../Components/CreateProfileForm/CreateProfileForm'

class ProfilePage extends Component {

    static defaultProps = {
        match: { params: {} }
    }

    static contextType = BabyContext
    
    componentDidMount() {
        this.context.clearError()
        const user = JSON.parse(localStorage.getItem('user'));
        const parent_id = user.id
        console.log('localStorage user:', user);
        

        BabyApiService.getBaby(parent_id)
            .then(this.context.setBaby)
            .catch(this.context.setError)
    }

    render() {
        const { baby } = this.context
        if (!baby) {
            return <CreateProfileForm />
        } 
        return(
            <UserProfile baby={baby}/>
        )
    }
}

export default ProfilePage