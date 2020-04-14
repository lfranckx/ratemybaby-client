import React, { Component } from 'react'
import BabyApiService from '../../Services/baby-api-service'
import HamburgerContext from '../../Contexts/HamburgerContext'
import UserProfile from '../../Components/UserProfile/UserProfile'

class ProfilePage extends Component {

    static defaultProps = {
        match: { params: {} }
    }
    
    static contextType = HamburgerContext

    componentDidMount() {
        this.context.clearError()
        this.context.setNotActive()
        let babyId = this.props.match.params.babyId
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
    
    render() {
        const { baby } = this.context        
        if (!baby) {
            return <div className='loading'>Loading...</div>
        }
        return( 
            <UserProfile baby={baby}/>
        )
    }
}

export default ProfilePage