import React, { Component } from "react";

export default class Test1 extends Component {
  state = {
    list0: ["list1", "list2", "list3"],
  };
  updateLiist = () => {
    if (this.state.list0.length === 0) {
      return "There is no list";
    } else
      return (
        <ul>
          {this.state.list0.map((list) => (
            <li key={list}>{list}</li>
          ))}
        </ul>
      );
  };
  render() {
    return (
      <div>
        <this.updateLiist />
      </div>
    );
  }
}
