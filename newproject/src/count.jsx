import React, { Component } from "react";

class Count extends Component {
  render() {
    const { data, onIncrement, onDecrement, onResetCom, onDelete } = this.props;
    // console.log("props", this.props);
    let classes = "badge p-3 badge-";
    if (data.value === 0) {
      classes += "warning";
    } else if (data.value > 0 && data.value < 16) classes += "primary";
    else classes += "secondary";

    return (
      <div>
        <h3 style={{ color: "grey" }}> Product Number {data.id} </h3>
        <h3
          style={{
            marginLeft: 105,
            marginBottom: 2,
            marginTop: 15,
            fontSize: 18,
          }}
          className={classes}
        >
          {data.value}
        </h3>
        <br></br>
        <button
          className="btn btn-outline-primary m-3"
          onClick={() => {
            onIncrement(data);
          }}
          //onKeyPressCapture={this.increment}
        >
          <i className="fal fa-plus"></i>
        </button>
        <button
          disabled={data.value === 0}
          //id="decrement"
          className="btn btn-outline-warning mr-3"
          onClick={() => {
            onDecrement(data);
          }}
          // onKeyPressCapture={this.decrement}
        >
          <i className="fal fa-minus"></i>
        </button>
        <button
          style={{ height: 38, width: 50 }}
          disabled={data.value === 0}
          className="btn btn-outline-danger mr-3"
          onClick={() => {
            onResetCom(data);
          }}
        >
          <span className="material-icons">restart_alt</span>
        </button>
        <button
          className="btn btn-outline-danger"
          onClick={() => onDelete(data.id)}
        >
          <i className="fad fa-trash"></i>
        </button>
      </div>
    );
  }
}

export default Count;
