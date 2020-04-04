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
        // const localUser = JSON.parse(localStorage.getItem('user'))
        // console.log('localUser:', localUser);
        
        // let parent_id = localUser.id
        // this.context.clearError()

        // BabyApiService.getBaby(parent_id)
        //     .then(this.context.setBaby)
        //     .catch(this.context.setError)

        this.context.clearError()
        const { baby } = this.context.state.baby
        
        BabyApiService.getBaby(baby.id)
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