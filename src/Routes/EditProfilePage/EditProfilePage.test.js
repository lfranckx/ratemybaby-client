import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditProfilePage from './EditProfilePage';

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

describe(`EditProfilePage component`, () => {

    it(`renders edit profile page without crashing`, () => {
        const wrapper = mount(<EditProfilePage />, { context: context })        
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})