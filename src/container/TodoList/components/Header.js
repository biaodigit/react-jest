import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      value:''
    }
  }

  onChange = (e) => {
    this.setState({value:e.target.value})
  }

  render() {
    const {value }= this.state
    return (
      <div className="header">
        <input data-test="input" value={value} onChange={this.onChange}/>
      </div>
    )
  }
}

export default Header;
