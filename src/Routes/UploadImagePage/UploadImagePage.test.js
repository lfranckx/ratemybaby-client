import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UploadImagePage from './UploadImagePage';

describe(`UploadImagePage component`, () => {
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

    it(`renders without exploding`, () => {
        expect(
            shallow(
                <UploadImagePage />
            ).length
        ).toEqual(1)
    })

    it(`renders edit profile page by default`, () => {
        const wrapper = shallow(<UploadImagePage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it(`renders edit profile page given props`, () => {
        const wrapper = shallow(<UploadImagePage {...props}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})