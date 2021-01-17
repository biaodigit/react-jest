import React from 'react';
import { shallow } from 'enzyme';
import { findTestWrapper } from '../../../../utils/testUtils'
import UndoList from '../../components/UndoList'

let wrapper, data;

describe('test undolist component', () => {
    beforeEach(() => {
        data = [
            { focus: false, value: 'test1' },
            { focus: true, value: 'test2' }
        ]
    })
    it('when the list data is empty,the count number is 0,the list has no content', () => {
        wrapper = shallow(<UndoList list={[]} />)
        const countEl = findTestWrapper(wrapper, 'count')
        const listItems = findTestWrapper(wrapper, 'list-item')
        expect(countEl.text()).toEqual('0')
        expect(listItems.length).toEqual(0)
    })

    it('the list data is not empty,the count number is show,the list is not emoty', () => {
        wrapper = shallow(<UndoList list={data} />)
        const countEl = findTestWrapper(wrapper, 'count')
        const listItems = findTestWrapper(wrapper, 'list-item')
        expect(countEl.text()).toEqual('2')
        expect(listItems.length).toEqual(2)
    })

    it('when the data has content,there is delete button,click a delete button, the delete method will be called', () => {
        const fn = jest.fn()
        wrapper = shallow(<UndoList deleteItem={fn} list={data} />)
        const delItems = findTestWrapper(wrapper, 'del-item')
        expect(delItems.length).toEqual(2)
        delItems.at(1).simulate('click')
        expect(fn).toHaveBeenLastCalledWith(1)
    })

    it('should be an item is clicked, the changeStatus is execute', () => {
        const fn = jest.fn()
        wrapper = shallow(<UndoList changeStatus={fn} list={data} />)
        const delItems = findTestWrapper(wrapper, 'list-item')
        delItems.at(1).simulate('click')
        expect(fn).toHaveBeenCalledWith(1)
    })
    it('should be an item is clicked, show input', () => {
        wrapper = shallow(<UndoList list={data} />)
        const inputItems = findTestWrapper(wrapper, 'input')
        expect(inputItems.length).toBe(1)
    })
    it('when the input loses blur, the handleBlur will be called', () => {
        const fn = jest.fn()
        const data = [
            { focus: false, value: 'test1' },
            { focus: true, value: 'test2' }
        ]
        wrapper = shallow(<UndoList handleBlur={fn} list={data} />)
        const inputItems = findTestWrapper(wrapper, 'input')
        inputItems.simulate('blur')
        expect(fn).toHaveBeenCalledWith(1)

    })
})
