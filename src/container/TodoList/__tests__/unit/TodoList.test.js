import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../index'

let wrapper, Header;
describe('test todoList componennt', () => {
    beforeEach(() => {
        wrapper = shallow(<TodoList />)
        Header = wrapper.find('Header')
    })
    test('basic totoList', () => {
        expect(wrapper.state('undoList')).toEqual([])
        expect(Header.prop('addUndoItem')).toBe(wrapper.instance().addUndoItem)
    })

    test('todolist add new item', () => {
        const addFun = Header.prop('addUndoItem')
        addFun('test')
        expect(wrapper.state('undoList').length).toEqual(1)
        expect(wrapper.state('undoList')[0]).toEqual('test')
    })
})