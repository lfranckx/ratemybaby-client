import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditProfilePage from './EditProfilePage';

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

describe(`EditProfilePage component`, () => {

    it(`renders edit profile page without crashing`, () => {
        const wrapper = mount(<EditProfilePage />, { context: context })        
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})