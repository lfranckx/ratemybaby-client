import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoginForm from './LoginForm';

const simulateChangeOnInput = (wrapper, inputSelector, newValue) => {
    const input = wrapper.find(inputSelector);
    input.simulate('change', {
        target: {value: newValue}
    });
    return wrapper.find(inputSelector);
};

describe(`LoginForm component`, () => {
    const props = {
        handleLoginSuccess: () => {}
    };

    it(`renders form given props`, () => {
        const wrapper = shallow(<LoginForm {...props}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it(`lets me fill out the form and reset`, () => {
        const wrapper = shallow(<EditProfileForm {...props}/>);
        simulateChangeOnInput(wrapper, '#loginuser', 'test')
        simulateChangeOnInput(wrapper, '#loginpass', 3)
    });
})