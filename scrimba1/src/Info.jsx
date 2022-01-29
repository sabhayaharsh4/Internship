import React, { Component } from "react";
import "./index.css";
import photo from "../src/user2.jpg";
function Info() {
  return (
    <div className="info--h">
      <div className="value--holder">
        <img className="info--image" src={photo} />
        <h2 className="info--user">Harsh Sabhaya</h2>
        <h4 className="info--dev">Developer</h4>
        <h5 className="info--web">harshsabhaya4</h5>
        <a href="" role="button" target="_blank" className="info--btn">
          <i class="fal fa-envelope"></i>
          &nbsp;&nbsp;&nbsp;Email
        </a>
        <a
          href="https://in.linkedin.com/"
          role="button"
          target="_blank"
          className="info--ld"
        >
          <i className="fab fa-linkedin"></i>
          &nbsp;&nbsp;&nbsp;Linkdin
        </a>
      </div>
    </div>
  );
}
// function Linkdin() {
//   console.log("hello");
//   <a href=""></a>;
//   //return <a href="https://in.linkedin.com/"></a>;
// }
export default Info;
