import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CreateProfileForm from './CreateProfileForm';

const simulateChangeOnInput = (wrapper, inputSelector, newValue) => {
    const input = wrapper.find(inputSelector);
    input.simulate('change', {
        target: {value: newValue}
    });
    return wrapper.find(inputSelector);
}

describe(`CreateProfileForm component`, () => {
    const props = {
        handleSubmitForm: () => {}
    };

    it(`renders form given props`, () => {
        const wrapper = shallow(<CreateProfileForm {...props}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it(`lets me fill out the form`, () => {
        const wrapper = shallow(<CreateProfileForm {...props}/>);
        simulateChangeOnInput(wrapper, '#name', 'test')
        simulateChangeOnInput(wrapper, '#age', 3)
        simulateChangeOnInput(wrapper, '#format', 'months')
        simulateChangeOnInput(wrapper, '#country', 'US')
        simulateChangeOnInput(wrapper, '#about', 'test')
    });
})