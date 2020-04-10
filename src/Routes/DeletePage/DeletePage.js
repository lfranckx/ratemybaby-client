import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BabyContext from '../../Contexts/BabyContext'
import BabyApiService from '../../Services/baby-api-service'
import './DeletePage.css'

export default class DeletePage extends Component {

    static defaultProps = {
        match: { params: {} },
    }

    static contextType = BabyContext

    componentDidMount() {
        this.context.clearError()
        let babyId = this.props.match.params.babyId
        BabyApiService.getBaby(babyId)
            .then(this.context.setBaby)
            .catch(this.context.setError)
    }

    componentWillUnmount() {
        window.reload.location(false)
    }

    handleDeleteSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/rate'
        history.push(destination)
      }

    deleteBaby = (id) => {
        BabyApiService.deletBaby(id)
            .then(this.handleDeleteSuccess)
    }

    render() {
        const { error } = this.context
        const { baby } = this.context
        console.log(baby);
        
        return (

            <section id="delete-section">
                <form id='delete-form'>
                    <div role='alert'>{error && <p className='error'>{error}</p>}</div>
                    <h3 className="delete-prompt">Are you sure you want to delete?</h3>
                    <button 
                        id="delete-button" 
                        type="submit"
                        onClick={()=> {
                            this.deleteBaby(baby.id)
                        }}
                    >
                        Delete
                    </button>
                </form>
            </section> 
        )
    }
}
