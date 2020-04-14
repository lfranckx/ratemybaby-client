import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UploadImageForm from './UploadImageForm';

const simulateChangeOnInput = (wrapper, inputSelector, newValue) => {
    const input = wrapper.find(inputSelector);
    input.simulate('change', {
        target: {value: newValue}
    });
    return wrapper.find(inputSelector);
};

describe(`UploadImageForm component`, () => {
    const props = {
        babies: {},
        handleUploadSuccess: () => {}
    }

    it(`renders a form given props`, () => {
        const wrapper = shallow(<UploadImageForm {...props}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it(`lets me select a file`, () => {
        const wrapper = shallow(<UploadImageForm {...props}/>);
        simulateChangeOnInput(wrapper, '#file', 'file.jpeg');
    });
})