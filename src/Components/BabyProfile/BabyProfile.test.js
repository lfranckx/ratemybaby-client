import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BabyProfile from './BabyProfile';

describe(`BabyProfile component`, () => {
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
        }
    };

    it(`renders a profile given props`, () => {
        const wrapper = shallow(<BabyProfile {...props}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it(`renders loading without props`, () => {
        const wrapper = shallow(<BabyProfile />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
});