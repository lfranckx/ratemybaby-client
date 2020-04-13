import React, { Component } from 'react'
import BabyApiService from '../../Services/baby-api-service'
import BabyContext from '../../Contexts/BabyContext'
import { Link } from 'react-router-dom'
import './DeletePage.css'


export default class DeletePage extends Component {

    static defaultProps = {
        match: { params: {} }
    }

    static contextType = BabyContext

    componentDidMount() {
        this.context.clearError()
        this.context.setNotActive()
        const babyId = this.props.match.params.babyId
        BabyApiService.getBaby(babyId)
            .then(this.context.setBaby)
            .catch(this.context.setError)
        BabyApiService.getByParentId()
            .then(res => {
                this.context.setUsersBabies(res)
            })
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        this.context.clearBaby()
        BabyApiService.getByParentId()
            .then(res => {
                console.log('setting usersbabies DeletePage', res)
                this.context.setUsersBabies(res)
            })
            .catch(this.context.setError)
    }

    deleteBaby = (babyId) => {
        BabyApiService.deletBaby(babyId)
    }

    render() {
        console.log('DeletePage rendered');
        
        const { baby } = this.context
        console.log('context DeletePage', this.context);
        
        if (!baby) {
            return <div className='loading'>Loading...</div>
        }
        return ( 
            <section id="delete-section">
                <h3 >Are you sure you want to delete?</h3>
                <button 
                    id='delete-button'
                    onClick={() => {
                        this.deleteBaby(baby.id)
                    }}
                >
                    <Link 
                        id='delete-link' 
                        to='/rate'>
                            Delete
                    </Link>
                </button>
            </section>
            
        )
    }
}