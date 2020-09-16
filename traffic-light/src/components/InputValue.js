import React, { Component } from 'react';
// import classNames from 'classnames';

// const currentValue = textEl.textContent;

class InputValue extends Component {
  constructor() {
    super();
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div className="InputValue">
        <h2>Binding value</h2>
        <p id="binding-block">Hello, {this.state.value} </p>
        <input id="typing-area" type="text" placeholder="Nhap ten cua ban" value={this.state.value} onChange={this.handleChange} />
      </div>
    )
  }
}
export default InputValue;
