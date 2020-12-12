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

    it('render style',() => {
        expect(wrapper).toMatchSnapshot()
    })

    it('basic header', () => {
        expect(inputEl.length).toBe(1)
        expect(inputEl.prop('value')).toEqual('')
    });

    it('header input onchange value',() => {
        inputEl.simulate('change',{
            target: {
                value: 'jest'
            }
        })
        expect(wrapper.state('value')).toEqual('jest')
    })

    it('input onchange enter',() => {
        const fn = jest.fn()
        wrapper = shallow(<Header addUndoItem={fn}/>)
        inputEl = wrapper.find('[data-test="input"]')
        wrapper.setState({value:'test'})
        inputEl.simulate('keyUp',{
            keyCode: 13
        })
        expect(fn).toHaveBeenCalledWith('test')
        const newInput = wrapper.find('[data-test="input"]')
        expect(newInput.prop('value')).toEqual('')
    })
})
