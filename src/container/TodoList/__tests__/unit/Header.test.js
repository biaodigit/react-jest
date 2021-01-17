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

    it('should render style', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should be include input and initial value should be empty', () => {
        expect(inputEl.length).toBe(1)
        expect(inputEl.prop('value')).toEqual('')
    });

    it('the content of the input box changes with user input', () => {
        inputEl.simulate('change', {
            target: {
                value: 'jest'
            }
        })
        expect(wrapper.state('value')).toEqual('jest')
    })

    it('press enter when there is no content of the input box,no response', () => {
        const fn = jest.fn()
        wrapper.setState({ value: '' })
        inputEl.simulate('keyUp', {
            keyCode: 13
        })
        expect(fn).not.toHaveBeenCalled()
    })

    it('press enter when the input box has content, the external function has called, the content is cleared', () => {
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
