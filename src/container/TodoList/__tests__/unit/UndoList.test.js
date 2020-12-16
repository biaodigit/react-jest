import React from 'react';
import { shallow } from 'enzyme';
import { findTestWrapper } from '../../../../utils/testUtils'
import UndoList from '../../components/UndoList'

let wrapper;
describe('test undolist component', () => {
    beforeEach(() => {
    })

    it('render empty undolist', () => {
        // expect(wrapper).toMatchSnapshot()
        wrapper = shallow(<UndoList list={[]} />)
        const countEl = findTestWrapper(wrapper, 'count')
        const listItems = findTestWrapper(wrapper, 'list-item')
        expect(countEl.text()).toEqual('0')
        expect(listItems.length).toEqual(0)
    })

    it('render unempty undolist', () => {
        // expect(wrapper).toMatchSnapshot()
        wrapper = shallow(<UndoList list={['test1', 'test2']} />)
        const countEl = findTestWrapper(wrapper, 'count')
        const listItems = findTestWrapper(wrapper, 'list-item')
        expect(countEl.text()).toEqual('2')
        expect(listItems.length).toEqual(2)
    })

    it('if undolist unempty,can delete', () => {
        const fn = jest.fn()
        wrapper = shallow(<UndoList deleteItem={fn} list={['test1', 'test2']} />)
        const delItems = findTestWrapper(wrapper, 'del-item')
        delItems.at(1).simulate('click')
        expect(fn).toHaveBeenLastCalledWith(1)
    })

})
