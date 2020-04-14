import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BabiesPage from '../BabiesPage/BabiesPage';

describe(`BabiesPage component`, () => {
    const props = {
        babies: [
            {
                "baby_name": "Jeb",
                "age": "11", 
                "age_format": "months",
                "country": "United States",
                "about": "Small awkward creature who can often be found dancing.",
                "image_url": "https://ratemybaby-images.s3-us-west-1.amazonaws.com/John.jpg",
                "total_score": "10",
                "total_votes": "20",
                "parent_id": "9"
            },
            {
                "baby_name": "Sam",
                "age": "4", 
                "age_format": "months",
                "country": "United States",
                "about": "Testing data",
                "image_url": "https://ratemybaby-images.s3-us-west-1.amazonaws.com/John.jpg",
                "total_score": "16",
                "total_votes": "30",
                "parent_id": "6"
            },
            {
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
        ]
    };

    it(`renders loading by default`, () => {
        const wrapper = shallow(<BabiesPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
    
    it('receives an array of baby profiles', () => {
        const wrapper = shallow(<BabiesPage {...props}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
