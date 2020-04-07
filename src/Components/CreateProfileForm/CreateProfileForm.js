import React, { Component } from 'react'
import BabyApiService from '../../Services/baby-api-service'
import BabyContext from '../../Contexts/BabyContext'
import CountryDropDown from '../CountryDropDown/CountryDropDown'

class EditProfile extends Component {

    static defaultProps = {
        onSubmitForm: () => {}
    }

    static contextType = BabyContext

    constructor(props) {
        super(props)
        this.fileInput = React.createRef()
        this.state = {
            error: null
        }
    }

    componentDidMount() {
        this.context.clearError()
    }

    handleCreateBaby = ev => {
        ev.preventDefault()
        this.setState({ error: null })

        const { name, age, format, country, about } = ev.target
        const newBaby = {
            baby_name: name.value,
            age: age.value + " " + format.value,
            country: country.value,
            about: about.value,
            image_url: '',
            total_score: 1,
            total_votes: 1,
        }
        
        BabyApiService.postBaby(newBaby) 
        .then (res => {
            console.log('BabyApiService postBaby res:', res)
            BabyApiService.getBaby(res.id)
            .then(baby => {
                console.log('BabyApiService getBaby res', baby)
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
                            type="number"
                            min='1'
                            name="age" 
                            required 
                        />
                    </div>

                    <div className="form-items">
                        <select name='format' className="month-year selector">
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
                    <select 
                        id="country-selector" 
                        name="country" 
                        className="selector"
                        defaultValue="United States"
                    >
                        <CountryDropDown />
                    </select>
                    </div>

                    <div className="form-items">
                        <label className='create-form-label'>About</label>
                    </div>
                    <div className="form-items">
                        <textarea 
                            className="width-100 create-about"
                            name="about" 
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