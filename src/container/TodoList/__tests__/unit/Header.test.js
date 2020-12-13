import React from 'react';
import { shallow } from 'enzyme';
import { findTestWrapper } from '../../../../utils/testUtils'
import Header from '../../components/Header'

let wrapper, inputEl;
describe('test header component', () => {
    beforeEach(() => {
        wrapper = shallow(<Header />)
        inputEl = findTestWrapper(wrapper, 'input')
    })

    it('render style', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('basic header', () => {
        expect(inputEl.length).toBe(1)
        expect(inputEl.prop('value')).toEqual('')
    });

    it('header input onchange value', () => {
        inputEl.simulate('change', {
            target: {
                value: 'jest'
            }
        })
        expect(wrapper.state('value')).toEqual('jest')
    })

    it('input onchange enter', () => {
        const fn = jest.fn()
        wrapper = shallow(<Header addUndoItem={fn} />)
        inputEl = findTestWrapper(wrapper, 'input')
        wrapper.setState({ value: 'test' })
        inputEl.simulate('keyUp', {
            keyCode: 13
        })
        expect(fn).toHaveBeenCalledWith('test')
        const newInput = findTestWrapper(wrapper, 'input')
        expect(newInput.prop('value')).toEqual('')
    })
})
