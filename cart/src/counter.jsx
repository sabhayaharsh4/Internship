import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: 0,
    // tags: ["tag1", "tag2", "tag3"],
  };
  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };
  render() {
    return (
      <div>
        <span className={this.newValue()}>{this.countNew()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-outline-primary"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.data.id)}
          className="btn btn-outline-danger"
        >
          Delete
        </button>
      </div>
    );
  }
  newValue() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  countNew() {
    return this.state.value;
  }
}
export default Counter;
