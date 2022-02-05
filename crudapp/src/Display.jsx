import React, { Component, useEffect, useState } from "react";
import { Base64 } from "js-base64";

const Display = (props) => {
  const { updateData, display } = props;
  console.log(props.data, "data");
  const temp = updateData;
  //console.log(temp);

  //console.log("Updated Data", props.updateData);

  // const row1 = props.data.map((temp, index) => {
  //   // console.log(temp.fname);
  // });
  // console.log(localStorage.getItem("profile_data",profile));
  const row = props.data.map((t, index) => {
    //console.log(textToBinary("hello world"));
    const temp = Base64.encode(t.password);

    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{t.fname}</td>
        <td>{t.lname}</td>
        <td>{t.email}</td>

        <td>{!t.encode ? temp : t.password}</td>

        <td>
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              props.handleEncode(index);
            }}
          >
            {t.encode ? (
              <i className="fas fa-eye "></i>
            ) : (
              <i className="fas fa-eye-slash"></i>
            )}
          </button>
        </td>

        <td>{t.mobileNumber}</td>
        {/* {t.style ? (
          <td>
            <button
              className="btn btn-outline-warning"
              onClick={() => {
                props.handleEdit(index);
              }}
            >
              Edit
            </button>
          </td>
        ) : (
          <td>
            <button
              className="btn btn-outline-info"
              onClick={() => {
                props.handleUpdate(index);
                //console.log("index update btn");
              }}
            >
              Update
            </button>
          </td>
        )} */}
        <td>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              props.handledelete(index);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  console.log(display, "style");

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Index</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col"></th>
            <th scope="col">Mobile Number</th>
            {/* <th scope="col">Edit</th> */}
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* {!props.data.length > 0 && props.data.style ? (
            " "
          ) : (
            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  name="updateFname"
                  value={props.updateFname}
                  onChange={(event) => {
                    props.setUpdateFname(event.target.value);
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="updateLname"
                  name="updateLname"
                  value={props.updateLname}
                  onChange={(event) => {
                    props.setUpdateLname(event.target.value);
                  }}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="updateEmail"
                  value={props.updateEmail}
                  onChange={(event) => {
                    props.setUpdateEmail(event.target.value);
                  }}
                />
              </td>
              <td>
                <input type="text" disabled />
              </td>
              <td></td>
              <td>
                <input
                  type="text"
                  value={props.updateNumber}
                  onChange={(event) => {
                    props.setUpdatePhoneNumber(event.target.value);
                  }}
                />
              </td>

              <td>
                <button
                  className="btn btn-outline-info"
                  onClick={props.handleCancel}
                >
                  Cancel
                </button>
              </td>
            </tr>
          )} */}
          {row}
        </tbody>
      </table>
    </div>
  );
};
export default Display;
