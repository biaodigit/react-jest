import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../index'

let wrapper, Header;
describe('test todoList componennt', () => {
    beforeEach(() => {
        wrapper = shallow(<TodoList />)
        Header = wrapper.find('Header')
    })
    test('the initialization list is empty', () => {
        expect(wrapper.state('undoList')).toEqual([])
        expect(Header.prop('addUndoItem')).toBeTruthy()
    })

    test('addUndoItem method is called,undoList data item is added', () => {
        wrapper.instance().addUndoItem('test1')
        expect(wrapper.state('undoList').length).toBe(1)
        expect(wrapper.state('undoList')[0]).toEqual({ focus: false, value: 'test1' })
        wrapper.instance().addUndoItem('test2')
        expect(wrapper.state('undoList').length).toBe(2)

    })

    test('undoList accepted three parameters:list, deleteItem , changeStatus and handleBlur', () => {
        const UndoList = wrapper.find('UndoList')
        expect(UndoList.prop('list')).toBeTruthy()
        expect(UndoList.prop('deleteItem')).toBeTruthy()
        expect(UndoList.prop('changeStatus')).toBeTruthy()
        expect(UndoList.prop('handleBlur')).toBeTruthy()
    })

    test('deleteItem method is called,undolist data item is deleted', () => {
        wrapper.setState({
            undoList: [{ focus: false, value: 'test1' }, { focus: false, value: 'test2' }]
        })
        wrapper.instance().deleteItem(0)
        expect(wrapper.state('undoList')).toEqual([{ focus: false, value: 'test2' }])
    })

    test('changeStatus method is called,undolist data item is changed', () => {
        wrapper.setState({
            undoList: [{ focus: false, value: 'test1' }, { focus: false, value: 'test2' }]
        })
        wrapper.instance().changeStatus(1)
        expect(wrapper.state('undoList')[1]).toEqual({ focus: true, value: 'test2' })
    })
    it('handleBlur method is called', () => {
        const fn = jest.fn()

    })
})
