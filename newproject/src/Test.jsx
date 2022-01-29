import React from "react";
class Test extends React.Component {
  render() {
    const { color } = this.props;
    return (
      <div>
        <h1>this is test {color}</h1>
      </div>
    );
  }
}

export default Test;
