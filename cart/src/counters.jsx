import React, { Component } from "react";
import Counter from "./counter";
class Counters extends React.Component {
  state = {
    counters: [
      { id: "1", value: 6 },
      { id: "2", value: 4 },
      { id: "3", value: 5 },
      { id: "4", value: 6 },
      { id: "5" },
    ],
  };
  handleDelete = (counterId) => {
    var counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <button className="btn btn-outline-danger">Reset</button>
        {this.state.counters.map((data) => (
          <Counter key={data.id} onDelete={this.handleDelete} data={data} />
        ))}
      </div>
    );
  }
}

export default Counters;
