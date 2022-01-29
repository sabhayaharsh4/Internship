import React, { Component } from "react";
function MainComponent(props) {
  return (
    <div id="card">
      <div className="row">
        <div className="col-sm-2">
          <img className="img-fluid m-2 p-3" src={props.item.imageUrl} alt="" />
        </div>
        <div className="col-sm-10 text-left">
          <div className="row pt-5 text-left">
            <>
              <div className="col-sm-5">
                <i className="fas fa-map-marker-alt text-danger mx-2"></i>
                {props.item.location}
                <a
                  href={props.item.googleMapsUrl}
                  className="mx-2 text-dark"
                  target={"_blanky"}
                >
                  <span>
                    <u>View Location Here</u>
                  </span>
                </a>
              </div>
            </>
          </div>
          <h1 className="text-left">{props.item.title}</h1>
          <b className="text-dark">{props.item.startDate}</b>
          <b className="text-dark mx-2">{props.item.endDate}</b>
          <p className="text-dark">{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
