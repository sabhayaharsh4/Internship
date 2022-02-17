import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../useAuth";
export default function Home(props) {
  let navigate = useNavigate();
  const { authed_1 } = props;
  console.log(authed_1, "authed");
  return (
    <section
      className="vh-100"
      style={{ backgroundColor: "smokey", marginTop: 20 }}
    >
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg mr-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="fname">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="fname"
                            className="form-control"
                            name="fname"
                            value={props.data.fname}
                            onChange={(e) => {
                              props.setFname(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg mr-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="email_id">
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="email_id"
                            className="form-control"
                            name="email_id"
                            value={props.data.email_id}
                            onChange={(e) => {
                              props.setEmail_id(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg mr-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="pwd">
                            Password
                          </label>
                          <input
                            type="password"
                            id="pwd"
                            className="form-control"
                            name="pwd"
                            value={props.data.pwd}
                            onChange={(e) => {
                              props.setPwd(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg mr-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="cpwd">
                            Repeat your password
                          </label>
                          <input
                            type="password"
                            id="cpwd"
                            className="form-control"
                            name="cpwd"
                            value={props.data.cpwd}
                            onChange={(e) => {
                              props.setCpwd(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-start mb-5">
                        <input
                          className="form-check-input mr-2"
                          type="checkbox"
                          checked={props.checked}
                          onChange={(e) => {
                            props.setChecked((preValue) => !preValue);
                          }}
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          I agree All Terms & Conditons{" "}
                        </label>
                      </div>

                      <div className="d-flex text-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                          onClick={props.handleSubmit}
                        >
                          Register
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary ml-3 btn-lg"
                          onClick={() => {
                            navigate("/login");
                          }}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
