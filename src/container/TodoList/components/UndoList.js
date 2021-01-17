import React, { Component } from 'react';
import '../style.css'

class UndoList extends Component {

    render() {
        const { list, deleteItem, changeStatus, handleBlur } = this.props
        return (
            <div className="undo-list">
                <div className="undo-list-title">
                    正在进行
                    <div data-test="count" className="undo-list-count">{list.length}</div>
                </div>
                <ul className="undo-list-content">
                    {list.map((item, index) => (
                        <li key={index} data-test="list-item" className="undo-list-item" onClick={() => changeStatus(index)}>
                            {item.focus ? <input data-test="input" onBlur={() => handleBlur(index)} value={item.value} /> : item.value}
                            <span onClick={() => deleteItem(index)} data-test="del-item" className="undo-list-delete">-</span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default UndoList;
