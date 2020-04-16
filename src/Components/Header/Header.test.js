import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './Header';

describe(`Header component`, () => {

    it(`renders header without crashing`, () => {
        const wrapper = shallow(<Header />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it(`links to log in page`, () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('#loginlink').props().to).toBe('/login');
    });
});