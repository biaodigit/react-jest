import React, { Component } from 'react';
import Header from './components/Header'
import UndoList from './components/UndoList'
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      undoList: []
    }
  }

  addUndoItem = (value) => {
    this.setState({
      undoList: [...this.state.undoList, { focus: false, value }]
    })
  }

  deleteItem = (index) => {
    const newList = [...this.state.undoList]
    newList.splice(index, 1)
    this.setState({
      undoList: newList
    })
  }

  changeStatus = (index) => {
    const newList = this.state.undoList.map((item, idx) => {
      if (idx === index) {
        return { ...item, focus: true }
      }
      return item
    })
    this.setState({ undoList: newList })
  }

  handleBlur = (index) => {

  }

  render() {
    const { undoList } = this.state
    return (
      <div>
        <Header addUndoItem={this.addUndoItem} />
        <UndoList list={undoList} deleteItem={this.deleteItem} changeStatus={this.changeStatus} handleBlur={this.handleBlur} />
      </div>
    )
  }
}

export default TodoList;

