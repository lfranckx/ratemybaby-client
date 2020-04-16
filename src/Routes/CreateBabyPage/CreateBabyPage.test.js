import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import CreateBabyPage from './CreateBabyPage';

const nullBaby = {
    baby: null
}

const context = {
    active: false,
    usersBabies: [],
    babies: [],
    baby: nullBaby,
    error: null,
    setError: () => {},
    clearError: () => {},
    toggleActive: () => {},
    setNotActive: () => {},
    setBaby: () => {},
    clearBaby: () => {},
    setUsersBabies: () => {}
}

describe(`CreateBabyPage component`, () => {
    it(`renders page without crashing`, () => {
        const wrapper = mount(<CreateBabyPage />, { context: context })
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    
})