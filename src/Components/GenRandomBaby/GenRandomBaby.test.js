import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import GenRandomBaby from '../GenRandomBaby/GenRandomBaby';
import { it } from 'date-fns/locale';

describe(`GenRandomBaby component`, () => {

    const props = {
        
    }

    it(`renders loading by default`, () => {
        const wrapper = shallow(<GenRandomBaby />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it(`passes one random object to BabyProfile component`, () => {
        
    })
})