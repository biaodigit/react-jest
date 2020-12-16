import React, { Component } from 'react';
import '../style.css'

class UndoList extends Component {
    // constructor(props) {
    //     super(props)
    // }


    render() {
        const { list, deleteItem } = this.props
        return (
            <div>
                <div data-test="count">{list.length}</div>
                <ul>
                    {list.map((item, index) => (
                        <li key={`${item}-${index}`} data-test="list-item">{item}
                            <span onClick={() => deleteItem(index)} data-test="del-item">-</span></li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default UndoList;
