import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Hamburger from './Hamburger';

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

describe(`Hamburger component`, () => {
    
    it(`renders page without crashing`, () => {
        const wrapper = mount(<Hamburger />, { context: context })
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})