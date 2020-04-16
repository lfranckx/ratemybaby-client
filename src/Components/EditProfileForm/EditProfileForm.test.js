import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditProfileForm from './EditProfileForm';

const simulateChangeOnInput = (wrapper, inputSelector, newValue) => {
    const input = wrapper.find(inputSelector);
    input.simulate('change', {
        target: {value: newValue}
    });
    return wrapper.find(inputSelector);
};

const context = {
    active: false,
    usersBabies: [],
    babies: [],
    baby: {
        "baby_name": "Test",
        "age": "7", 
        "age_format": "months",
        "country": "United States",
        "about": "Testing data",
        "image_url": "https://ratemybaby-images.s3-us-west-1.amazonaws.com/John.jpg",
        "total_score": "25",
        "total_votes": "35",
        "parent_id": "2"
    },
    error: null,
    setError: () => {},
    clearError: () => {},
    toggleActive: () => {},
    setNotActive: () => {},
    setBaby: () => {},
    clearBaby: () => {},
    setUsersBabies: () => {}
}

describe(`EditProfileForm component`, () => {
    const props = {
        baby: {
            "baby_name": "Test",
            "age": "7", 
            "age_format": "months",
            "country": "United States",
            "about": "Testing data",
            "image_url": "https://ratemybaby-images.s3-us-west-1.amazonaws.com/John.jpg",
            "total_score": "25",
            "total_votes": "35",
            "parent_id": "2"
        },
        handleSubmitForm: () => {}
    };

    it(`renders a form without crashing`, () => {
        const wrapper = mount(<EditProfileForm {...props}/>, { context: context })
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it(`lets me fill out the form`, () => {
        const wrapper = shallow(<EditProfileForm {...props}/>);
        simulateChangeOnInput(wrapper, '#editname', 'test')
        simulateChangeOnInput(wrapper, '#editage', 3)
        simulateChangeOnInput(wrapper, '#editformat', 'months')
        simulateChangeOnInput(wrapper, '#editcountry', 'US')
        simulateChangeOnInput(wrapper, '#editabout', 'test')
    });
});