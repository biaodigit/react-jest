import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleInputKeyup = (e) => {
    if(e.keyCode === 13 && this.state.value){
      this.props.addUndoItem(this.state.value)
      this.setState({value:''})
    }
  }

  render() {
    const { value } = this.state
    return (
      <div className="header">
        <input
          data-test="input"
          value={value}
          onChange={this.handleInputChange}
          onKeyUp={this.handleInputKeyup}
        />
      </div>
    )
  }
}

export default Header;
