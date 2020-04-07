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
        console.log('ProfilePage props', this.props)
        this.context.clearError()
        let babyId = this.props.match.params.babyId
        BabyApiService.getBaby(babyId)
            .then(this.context.setBaby)
            .catch(this.context.setError)
    }
    
    // componentWillUnmount() {
    //     this.context.clearBaby();
    // }
    
    render() {
        const { baby } = this.context
        console.log('ProfilePage baby', this.context);
        if (!baby) {
            return <div className='loading'>Loading...</div>
        }
        return( 
            <UserProfile baby={baby}/>
        )
    }
}

export default ProfilePage