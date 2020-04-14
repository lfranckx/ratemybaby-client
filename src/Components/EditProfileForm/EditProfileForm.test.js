import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditProfileForm from './EditProfileForm';

const simulateChangeOnInput = (wrapper, inputSelector, newValue) => {
    const input = wrapper.find(inputSelector);
    input.simulate('change', {
        target: {value: newValue}
    });
    return wrapper.find(inputSelector);
};

describe(`EditProfileForm component`, () => {
    const props = {
        babies: {
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

    it(`renders a form given props`, () => {
        const wrapper = shallow(<EditProfileForm {...props}/>)
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