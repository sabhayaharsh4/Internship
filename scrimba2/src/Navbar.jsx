import React, { Component } from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1 mx-auto">
        <i
          style={{ fontSize: 45 }}
          className="navbar--icon far fa-globe-europe  mx-3 "
        ></i>
        <span className="lead my-2" style={{ fontSize: 32 }}>
          My travel journal.
        </span>
      </span>
    </nav>
  );
}

export default Navbar;
