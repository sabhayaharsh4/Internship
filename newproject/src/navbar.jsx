import React, { PureComponent } from "react";
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">
            Navbar
            <span
              className="badge badge-pill badge-info mx-2"
              style={{ fontSize: "20px" }}
            >
              {this.props.totalcounters}
            </span>
          </span>
        </nav>
      </div>
    );
  }
}

export default Navbar;
