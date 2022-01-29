import React, { Component } from "react";
function Navbar() {
  return (
    <div className="row p-3 bg-warning text-dark">
      <div className="col-1  text-right px-0">
        <img
          src="troll.png"
          className="img-fluid mt-3 pr-0 mr-2"
          width={50}
        ></img>
      </div>

      <span className="col-6 text-left mt-1 px-0" style={{ fontSize: 40 }}>
        Meme Generator
      </span>
      <span className=" col-5 mt-3 " style={{ fontSize: 25, paddingLeft: 123 }}>
        React Project 3
      </span>
    </div>
  );
}

export default Navbar;
