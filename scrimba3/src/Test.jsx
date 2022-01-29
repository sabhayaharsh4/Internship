import React, { Component } from "react";

class Test extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = { favoritecolor: "red" };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("props");
    return { favoritecolor: props.favcol };
  }
  componentDidMount() {
    console.log("component did mount");
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("snapshot");
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    console.log(" component did update");
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

export default Test;
// ReactDOM.render(<Test />, document.getElementById("root"));
