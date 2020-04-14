import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CreateBabyPage from './CreateBabyPage';

describe(`CreateBabyPage component`, () => {
    it(`renders page by default`, () => {
        const wrapper = shallow(<CreateBabyPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})