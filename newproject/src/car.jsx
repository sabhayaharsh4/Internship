import React from "react";
class Car extends React.Component {
  render() {
    return (
      <div>
        <h1>This is car {this.props.color}</h1>
      </div>
    );
  }
}

export default Car;
