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
      undoList: this.state.undoList.concat(value)
    })
  }

  render() {
    const { undoList } = this.state
    return (
      <div>
        <Header addUndoItem={this.addUndoItem} />
        <UndoList />
      </div>
    )
  }
}

export default TodoList;

