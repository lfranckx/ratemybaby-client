import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Hamburger from './Hamburger';

describe(`Hamburger component`, () => {
    const props = {
        babies: [
            {
                "id": "12",
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
                "id": "13",
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
                "id": "14",
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

    it(`renders empty without props`, () => {
        const wrapper = shallow(<Hamburger />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it(`renders the user's babies`, () => {
        const wrapper = shallow(<Hamburger {...props}/>)
        wrapper.find('Link').prop('to').toEqual('/login')
    });

    // it(`navigates you to the profile page of the baby selected`, () => {
    //     const wrapper = shallow(<Hamburger {...props}/>)
    //     wrapper.find('Link').prop('to').toEqual(`/${props.baby}`)
    // });
    
})