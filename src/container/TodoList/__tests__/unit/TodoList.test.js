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
        expect(Header.prop('addUndoItem')).toBeTruthy()
    })

    test('todolist add new item', () => {
        wrapper.instance().addUndoItem('test1')
        expect(wrapper.state('undoList').length).toBe(1)
        wrapper.instance().addUndoItem('test2')
        expect(wrapper.state('undoList').length).toBe(2)
    })

    test('todolist passes prop to undolist', () => {
        const UndoList = wrapper.find('UndoList')
        expect(UndoList.prop('list')).toBeTruthy()
        expect(UndoList.prop('deleteItem')).toBeTruthy()
    })

    test('todolist callbacl deleteItem fn,undolist delete item', () => {
        wrapper.setState({
            undoList: ['test1', 'test2']
        })
        wrapper.instance().deleteItem(0)
        expect(wrapper.state('undoList')).toEqual(['test2'])
    })
})
