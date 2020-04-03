import React, { Component } from 'react'
import BabyApiService from '../../Services/baby-api-service'
import BabyContext from '../../Contexts/BabyContext'

class EditProfile extends Component {

    static defaultProps = {
        onSubmitForm: () => {}
    }

    static contextType = BabyContext

    constructor(props) {
        super(props)
        const { user } = this.props
        console.log('this.props.user:', user)
        
        this.fileInput = React.createRef()
        this.state = {
            error: null,
            id: user.id
        }
    }

    handleCreateBaby = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { name, age, country, about } = ev.target
        
        BabyApiService.postBaby({
            baby_name: name.value,
            age: age.value,
            country: country.value,
            about: about.value,
            image_url: '',
            total_score: 5,
            total_votes: 5,
            parent_id: this.state.id,
        }) 
        .then(res => {
            BabyApiService.getBaby(this.state.id)
            .then(baby => {
                name.value = ''
                about.value = ''
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
                            className="create-input"
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
                            className="create-input"
                            type="text"
                            name="age" 
                            required 
                        />
                    </div>
                    <div className="form-items">
                        <label className='create-form-label'>Country</label>
                    </div>
                    <div className="form-items">
                        <input 
                            className="create-input"
                            type="text"
                            name="country" 
                            required 
                        />
                    </div>
                    <div className="form-items">
                        <label className='create-form-label'>About</label>
                    </div>
                    <div className="form-items">
                        <textarea 
                            className="width-100 create-about"
                            name="about" 
                            rows="15" 
                        />
                    </div>
                    <div className="submit-item">
                        <button id="create-button" type="submit">Submit</button>
                    </div>
                </form>
    }
}

export default EditProfile;