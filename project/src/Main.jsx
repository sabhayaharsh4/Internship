import React, { Component } from "react";
import Active from "./active";
import InActive from "./inactive";
class Main extends Component {
  state = {
    name: "",
    temp: [{ name: "Harsh", status: true }],
    status: true,
  };
  //   handleActive = (index) => {
  //     console.log(index);
  //     var newstate = this.state.temp.map((data) => (data.status = true));
  //     this.setState(newstate);
  //     console.log(newstate[index], index);
  //   };
  handleDeactive = (index) => {
    console.log("index : ");
    var newstate = this.state.temp;
    newstate[index].status = !newstate[index].status;
    this.setState({ temp: newstate });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = () => {
    if (this.state.name.length !== 0) {
      this.setState({ temp: [...this.state.temp, this.state] });
      this.setState({ name: "" });
    } else {
      alert("Enter Name");
    }
  };
  handleDelete = (index) => {
    this.setState({
      temp: this.state.temp.filter((data, i) => {
        return i !== index;
      }),
    });
  };
  handleReset = () => {
    this.setState({
      temp: [],
    });
  };
  render() {
    return (
      <div>
        <div class="form-group">
          <label htmlFor="formGroupExampleInput"> Friends Name</label>
          <input
            type="text"
            value={this.state.name}
            id="name"
            name="name"
            onChange={this.handleChange}
            placeholder="Enter Name"
            className="form-control"
          />
        </div>
        <button
          type="button"
          className="btn btn-grad1 "
          style={{ width: "100%", padding: "8px 14px", marginRight: "10%" }}
          onClick={this.handleSubmit}
        >
          Submit
        </button>
        <button
          type="reset"
          className="btn btn-grad"
          style={{ width: "100%", padding: "8px 14px" }}
          onClick={this.handleReset}
        >
          Clear
        </button>
        <Active
          data={this.state.temp}
          onDeactive={this.handleDeactive}
          onDelete={this.handleDelete}
        />
        <InActive data={this.state.temp} onDeactive={this.handleDeactive} />
      </div>
    );
  }
}

export default Main;
