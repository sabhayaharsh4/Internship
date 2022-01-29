import React, { Component } from "react";
import Count from "./count";
import Counter from "./Counter";
class Example extends React.Component {
  render() {
    const { onReset, counter, onDelete, onIncrement, onDecrement, onResetCom } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-outline-danger mx-5 my-3">
          Reset
        </button>
        {counter.map((data) => (
          <Count
            key={data.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onResetCom={onResetCom}
            data={data}
          />
        ))}
      </div>
    );
  }
}

export default Example;
