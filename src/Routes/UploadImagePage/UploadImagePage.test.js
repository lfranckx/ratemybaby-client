import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import UploadImagePage from './UploadImagePage';

const context = {
    active: false,
    usersBabies: [],
    babies: [],
    baby: {},
    error: null,
    setError: () => {},
    clearError: () => {},
    toggleActive: () => {},
    setNotActive: () => {},
    setBaby: () => {},
    clearBaby: () => {},
    setUsersBabies: () => {}
}

describe(`UploadImagePage component`, () => {

    it(`renders upload page without crashing`, () => {
        const wrapper = mount(<UploadImagePage />, { context: context })
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})