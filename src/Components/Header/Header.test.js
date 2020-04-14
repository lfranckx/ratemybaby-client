import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './Header';

describe(`Header component`, () => {

    it(`renders header by default`, () => {
        const wrapper = shallow(<Header />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it(`links to log in page`, () => {
        const wrapper = shallow(<Header />)
        wrapper.find('Link').prop('to').toEqual('/login')
    });

    it(`links to main page`, () => {
        const wrapper = shallow(<Header />)
        wrapper.find('Link').prop('to').toEqual('/')
    });

})