import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoginPage from './LoginPage';

describe(`LoginPage component`, () => {

    it(`renders log in page by default`, () => {
        const wrapper = shallow(<LoginPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})