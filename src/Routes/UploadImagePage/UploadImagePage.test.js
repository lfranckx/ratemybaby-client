import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import UploadImagePage from './UploadImagePage';

describe(`UploadImagePage component`, () => {

    it(`renders upload page without crashing`, () => {
        const wrapper = mount(<UploadImagePage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})