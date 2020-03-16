import React, { Component } from 'react'
import BabyApiService from '../../Services/baby-api-service'
import BabyContext from '../../Contexts/BabyContext'
import UserProfile from '../../Components/UserProfile/UserProfile'

class ProfilePage extends Component {

    static defaultProps = {
        match: { params: {} }
    }

    static contextType = BabyContext
    
    componentDidMount() {
        let babyId = this.context.user.baby_id
        this.context.clearError()

        BabyApiService.getBaby(babyId)
            .then(this.context.setBaby)
            .catch(this.context.setError)
    }

    render() {
        const { baby } = this.context
        if (!baby) {
            return <div>Loading...</div>
        } 
        return(
            <UserProfile baby={baby}/>
        )
    }
}

export default ProfilePage