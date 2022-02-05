import React, { Component, useEffect, useState } from "react";
import Display from "./Display";
import { Base64 } from "js-base64";
const Input1 = () => {
  const [fname, setFname] = React.useState("");
  const [id, setId] = useState(0);
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [profile, setProfile] = useState([]);
  const [encode, setEncode] = React.useState(false);
  const [edit, setEdit] = React.useState(true);
  const [updateFname, setUpdateFname] = useState("");
  const [updateLname, setUpdateLname] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updatePhoneNumber, setUpdatePhoneNumber] = useState("");
  const [updateProfile, setUpdateProfile] = useState([]);
  const [style, setStyle] = React.useState(true);
  const [update, setUpdate] = React.useState(true);
  const handledelete = (index) => {
    setProfile(
      profile.filter((data, i) => {
        return i !== index;
      })
    );
  };
  let tempT = "";
  const handleCancel = () => {
    setStyle(false);
    setUpdate(true);
  };
  const handleEdit = (index) => {
    // console.log("edit", index);
    // let temp = [...profile];
    // setEdit(temp[index]);
    // console.log(temp[index]);
    // setProfile(temp[index]);
    //console.log("TempT", tempT);
    // const temp = profile.find((data, id) => {
    //   return id === index;
    // });
    // setStyle(true);
    // setEdit(false);
    // setUpdateFname(temp.fname);
    // setUpdateLname(temp.lname);
    // setUpdateEmail(temp.email);
    // setUpdatePhoneNumber(temp.mobileNumber);
    // setUpdate(false);
    // console.log(temp);
    let tempEdit = [...profile];
    tempEdit[index].style = !tempEdit[index].style;
    tempEdit[index].update = !tempEdit[index].update;
    console.log("tempEdit[index].style", tempEdit[index].style);
    setProfile(tempEdit);
  };
  const handleUpdate = (id) => {
    setUpdate(true);
    setStyle(false);
    const update_profile = {
      updateFname,
      updateLname,
      updateEmail,
      updatePhoneNumber,
    };
    setUpdateProfile([update_profile]);
    console.log(updateProfile);
    const tempData = profile.find((data, index) => index === id);
    setFname(updateFname);
    //console.log(profile, "tempData");
    console.log(fname);
    let tempEdit = [...profile];
    tempEdit[id].style = !tempEdit[id].style;
    // tempEdit[id].update = !tempEdit[id].update;
    console.log("tempEdit[id].style", tempEdit[id].style);
    setProfile(tempEdit);
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleEncode = (id) => {
    // console.log("jk :", profile);
    let temp = [...profile];
    temp[id].encode = !temp[id].encode;
    setProfile(temp);
  };
  // console.log(selected_object);

  useEffect(() => {
    console.log(profile, "UseEffect");
    //console.log("profile change : 0", profile);
  }, [profile]);

  //   console.log(fname);
  const handleSubmit = (e) => {
    // console.log(checkout);
    e.preventDefault();
    let Profile_data = {
      fname,
      lname,
      email,
      password,
      mobileNumber,
      checked,
      id,
      encode: false,
      style: true,
      update: true,
    };
    if (
      fname.length > 0 &&
      lname.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      mobileNumber.length > 0
    )
      if (checked) {
        setProfile([...profile, Profile_data]);
        setId((prevId) => prevId + 1);
      } else alert("please checked ");
    else {
      alert("Please Enter Form Details Properly!");
    }
    setId(id + 1);
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
    setMobileNumber("");
    setChecked(false);
    localStorage.getItem("profile_data", profile);
    localStorage.setItem("profile_data", JSON.stringify(profile));
  };
  console.log(localStorage.getItem("profile_data", profile));
  //-------------------Table Search Row -------------------------------

  // const row = (
  //   <tr>
  //     <td></td>
  //     <td>
  //       <input
  //         type="text"
  //         name="updateFname"
  //         // value={edit.fname}
  //         onChange={(event) => {
  //           // setUpdateFname(event.target.value);
  //         }}
  //       />
  //     </td>
  //     <td>
  //       <input
  //         type="text"
  //         // id="updateLname"
  //         name="updateLname"
  //         // value={edit.lname}
  //         onChange={(event) => {
  //           // setUpdateLname(event.target.value);
  //           console.log("change");
  //         }}
  //       />
  //     </td>
  //     <td>
  //       <input
  //         type="text"
  //         name="updateEmail"
  //         // value={updateEmail}
  //         onChange={(event) => {
  //           // setUpdateEmail(event.target.value);
  //         }}
  //       />
  //     </td>
  //     <td>
  //       <input type="text" disabled />
  //     </td>
  //     <td></td>
  //     <td>
  //       <input
  //         type="text"
  //         // value={updatePhoneNumber}
  //         onChange={(event) => {
  //           // setUpdatePhoneNumber(event.target.value);
  //         }}
  //       />
  //     </td>
  //     <td>
  //       <button className="btn btn-outline-info">Update</button>
  //     </td>
  //     <td>
  //       <button className="btn btn-outline-info">Cancel</button>
  //     </td>
  //   </tr>

  //--------------------------------------------------------------------
  return (
    <div className="container">
      <form>
        <div className="form-row mt-4">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">First Name</label>
            <input
              type="emtextail"
              className="form-control"
              id="fname"
              placeholder="First Name"
              value={fname}
              onChange={(event) => {
                setFname(event.target.value);
              }}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lname"
              placeholder="Last Name"
              value={lname}
              onChange={(event) => {
                setLname(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                Base64.encode(event.target.value);

                setPassword(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(event) => {
              setMobileNumber(event.target.value);
            }}
          />
        </div>

        {/* <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="city">City</label>
            <input type="text" className="form-control" id="city" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="state">State</label>
            <select id="state" className="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="zip">Zip</label>
            <input type="text" className="form-control" id="zip" />
          </div>
        </div> */}
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
              checked={checked}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>

      <br></br>
      <hr></hr>
      <Display
        data={profile}
        handledelete={handledelete}
        handleEncode={handleEncode}
        encode={encode}
        handleEdit={handleEdit}
        id={id}
        updateData={edit}
        updateFname={updateFname}
        setUpdateFname={setUpdateFname}
        updateLname={updateLname}
        setUpdateLname={setUpdateLname}
        updateEmail={updateEmail}
        setUpdateEmail={setUpdateEmail}
        updateNumber={updatePhoneNumber}
        setUpdatePhoneNumber={setUpdatePhoneNumber}
        handleCancel={handleCancel}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};
export default Input1;
