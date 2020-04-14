import React, { Component } from 'react'
import BabyApiService from '../../Services/baby-api-service'
import HamburgerContext from '../../Contexts/HamburgerContext'

class EditProfile extends Component {

    static defaultProps = {
        onSubmitForm: () => {}
    }

    static contextType = HamburgerContext

    state = {
        error: null
    }

    handleCreateBaby = ev => {
        ev.preventDefault()
        this.setState({ error: null })

        const { name, age, format, country, about } = ev.target
        const newBaby = {
            baby_name: name.value,
            age: age.value,
            age_format: format.value,
            country: country.value,
            about: about.value,
            image_url: '',
            total_score: 1,
            total_votes: 1,
        }
        
        BabyApiService.postBaby(newBaby) 
        .then (res => {
            BabyApiService.getBaby(res.id)
            .then(baby => {
                this.context.clearBaby()
                this.context.setBaby(baby)
                this.props.onSubmitForm()
            })
        })
    }

    render() {
        const { error } = this.state
        return  <form 
                    id="create-form"
                    onSubmit={this.handleCreateBaby}
                >
                    <div role='alert'>{error && <p className='error'>{error}</p>}</div>
                    
                    <div className="form-items">
                        <label className='create-form-label'>Name</label>
                    </div>

                    <div className="form-items">
                        <input 
                            aria-label="name"
                            className="create-input"
                            id="name"
                            type="text"
                            name="name" 
                            required 
                        />
                    </div>

                    <div className="form-items">
                        <label className='create-form-label'>Age</label>
                    </div>

                    <div className="form-items">
                        <input 
                            id="age"
                            aria-label="age"
                            className="create-input"
                            type="number"
                            min='1'
                            name="age" 
                            required 
                        />
                    </div>

                    <div className="form-items">
                        <select aria-label="format" name='format' id='format' className="month-year selector">
                            <option>month</option>
                            <option>months</option>
                            <option>year</option>
                            <option>years</option>
                        </select>
                    </div>

                    <div className="form-items">
                        <label className='create-form-label'>Country</label>
                    </div>

                    <div className="form-items">
                        <input
                            aria-label="country"
                            id="country" 
                            name="country" 
                            className="edit-input"
                        />
                    </div>

                    <div className="form-items">
                        <label className='create-form-label'>About</label>
                    </div>
                    <div className="form-items">
                        <textarea 
                            aria-label="about"
                            className="width-100 create-about"
                            name="about" 
                            id='about'
                            rows="10" 
                        />
                    </div>
                    <div className="submit-item">
                        <button id="create-button" type="submit">Submit</button>
                    </div>
                </form>
    }
}

export default EditProfile;