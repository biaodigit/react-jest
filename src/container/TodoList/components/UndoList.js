import React, { Component } from 'react';
import '../style.css'

class UndoList extends Component {
    // constructor(props) {
    //     super(props)
    // }


    render() {
        const { list, deleteItem } = this.props
        return (
            <div className="undo-list">
                <div className="undo-list-title">
                    正在进行
                    <div data-test="count" className="undo-list-count">{list.length}</div>
                </div>
                <ul className="undo-list-content">
                    {list.map((item, index) => (
                        <li key={`${item}-${index}`} data-test="list-item" className="undo-list-item">{item}
                            <span onClick={() => deleteItem(index)} data-test="del-item" className="undo-list-delete">-</span></li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default UndoList;
