import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../components/Header'


Enzyme.configure({ adapter: new Adapter() });


let wrapper,inputEl;
describe('test header component', () => {
    beforeEach(() => {
        wrapper = shallow(<Header />)
        inputEl = wrapper.find('[data-test="input"]')
    })

    test('basic header', () => {
        expect(inputEl.length).toBe(1)
        expect(inputEl.prop('value')).toEqual('')
    });

    test('header input onChange value',() => {
        inputEl.simulate('change',{
            target: {
                value: 'jest'
            }
        })
        expect(wrapper.state('value')).toEqual('jest')
    })
})
