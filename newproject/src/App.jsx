import React from "react";
import Car from "./car";
import Navbar from "./navbar";
import Test from "./Test";
//import Navbar from "./navbar";
import Example from "./example";
class App extends React.Component {
  state = {
    counters: [
      { id: "1", value: 6 },
      { id: "2", value: 4 },
      { id: "3", value: 5 },
      { id: "4", value: 6 },
      { id: "5", value: 0 },
    ],
  };
  handleIncrement = (data) => {
    // console.log(data);
    const counters = [...this.state.counters];
    //console.log(counters);
    const index = counters.indexOf(data);
    //console.log(index);
    counters[index] = { ...data };
    // console.log(counters[index]);
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (data) => {
    const counters = [...this.state.counters];

    const index = counters.indexOf(data);
    counters[index] = { ...data };
    counters[index].value--;

    this.setState({ counters });
  };

  handleDelete = (counter) => {
    var counters = this.state.counters.filter((c) => c.id !== counter);
    this.setState({ counters });
  };
  handleReset = () => {
    var counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleResetComp = (data) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(data);
    counters[index] = { ...data };
    counters[index].value = 0;
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalcounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <Example
          counter={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onResetCom={this.handleResetComp}
        />
      </React.Fragment>
    );
  }
}

export default App;
