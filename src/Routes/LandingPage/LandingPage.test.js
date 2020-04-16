import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LandingPage from './LandingPage';

describe(`LandingPage component`, () => {

    it(`renders page without crashing`, () => {
        const wrapper = shallow(<LandingPage />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it(`links to sign up page`, () => {
        const wrapper = shallow(<LandingPage />);
        expect(wrapper.find('#registerlink').props().to).toBe('/register');
    });
})