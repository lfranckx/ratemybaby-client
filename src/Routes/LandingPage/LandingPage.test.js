import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LandingPage from './LandingPage';

describe(`LandingPage component`, () => {

    it(`renders page by default`, () => {
        const wrapper = shallow(<LandingPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it(`links to sign up page`, () => {
        const wrapper = shallow(<LandingPage />)
        wrapper.find('Link').prop('to').toEqual('/register')
    });
})