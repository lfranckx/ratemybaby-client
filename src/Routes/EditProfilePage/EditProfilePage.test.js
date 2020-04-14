import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditProfilePage from './EditProfilePage';

describe(`EditProfilePage component`, () => {
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
        }
    }

    it(`renders edit profile page given props`, () => {
        const wrapper = shallow(<EditProfilePage {...props}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})