import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import Dashboard from "./Pages/dashboard";
import Home from "./Pages/Home";
import Price from "./Pages/price";
import Login from "./Pages/login";
import Settings from "./Pages/setting";
import { useAuth } from "./useAuth";
import { useEffect, useState } from "react";
import SuccessSignup from "./Pages/successSignup";
import SuccessLogin from "./Pages/successLogin";
import userData from "./MOCK.json";

function App() {
  let navigate = useNavigate();
  const [display, setDisplay] = useState(false);
  const location = useLocation();
  const { state } = useLocation();
  const { login, logout, authed } = useAuth();
  const [signupDisplay, setSignupDisplay] = useState(false);
  const [fname, setFname] = useState("");
  const [email_id, setEmail_id] = useState("");
  const [pwd, setPwd] = useState("");
  const [cpwd, setCpwd] = useState("");
  const [profile, setProfile] = useState([]);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPwd, setLoginPwd] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = () => {
    const duplicate_array = JSON.parse(localStorage.getItem("data")).filter(
      (data) => data.email_id == email_id
    );
    console.log(checked, "checked");
    if (
      fname.length !== 0 &&
      email_id.length !== 0 &&
      pwd.length !== 0 &&
      cpwd.length !== 0
    ) {
      if (pwd === cpwd) {
        if (checked) {
          if (duplicate_array.length == 0) {
            const profile_data = {
              fname,
              email_id,
              pwd,
              cpwd,
            };

            let temp1 = localStorage.getItem("data");
            const temp = [...JSON.parse(temp1), profile_data];
            setProfile([...profile, profile_data]);
            setSignupDisplay(true);
            console.log("temp ======> ", temp);
            console.log("temp ======> ");
            localStorage.setItem("data", JSON.stringify(temp));

            navigate("/success");
            console.log(display);
            console.log(...profile);
          } else alert("You are already Registered");
        } else {
          alert("Please Agree Terms & Conditions");
        }
      } else alert("Not match Password");
    } else alert("Enter Proper Data");
  };

  useEffect(() => {
    let temp = [];
    if (!localStorage.getItem("data"))
      localStorage.setItem("data", JSON.stringify(temp));
  }, []);

  useEffect(() => {
    console.log("ProfileData", profile);
  }, [profile]);
  useEffect(() => {
    console.log("authed valued", authed);
    setDisplay((prevValue) => !prevValue);
  }, [authed]);
  const handleLogin = () => {
    // if (loginEmail.length > 0 && loginPwd.length > 0) {
    //   if (userData.find((data) => data.email == loginEmail)) {
    //     if (userData.find((data) => data.Password == loginPwd)) {
    //       login().then(() => {
    //         navigate(state?.path || "/dashboard");
    //       });
    //     } else {
    //       alert("Enter Correct Password");
    //     }
    //   } else {
    //     alert("Wrong Credentials");
    //   }
    // } else {
    //   alert("Wrong Credentials");
    // }
    let temp = localStorage.getItem("data", profile);
    //const temp1 = temp?.find((data) => data);
    let dataHoldder = JSON.parse(temp);
    console.log(dataHoldder, "Dataholder");
    console.log(dataHoldder[0].email_id, "Email", loginEmail, "Login");
    console.log(dataHoldder[0].pwd, "password");
    let temp_email = dataHoldder.find((data) => data.email_id === loginEmail);
    console.log(temp_email, "Temp Email");
    dataHoldder.map((data) => console.log(data.pwd, "login"));
    if (loginEmail.length > 0 && loginPwd.length > 0) {
      if (temp_email) {
        if (temp_email.email_id === loginEmail && temp_email.pwd === loginPwd) {
          login().then(() => {
            navigate(state?.path || "/dashboard");
          });
        } else {
          alert("Wrong Password");
        }
      } else {
        alert("Wrong Credentials");
      }
    } else {
      alert("Wrong Credentials");
    }

    // const temp2 = temp_data.find((data, index) => {
    //   return email_id === data.email_id[index];
    // });
    // console.log(temp2);
    setChecked((prevValue) => !prevValue);
    console.log(authed);
  };
  const handleLogout = () => {
    navigate("/");
    setSignupDisplay((prevValue) => !prevValue);
    logout();
  };

  function Nav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a
                className="nav-link"
                onClick={() => {
                  if (!signupDisplay) {
                    navigate("/");
                  } else if (signupDisplay && authed) {
                    navigate("/successlogin");
                  } else if (signupDisplay) {
                    navigate("/success");
                  }
                }}
              >
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  navigate("/price");
                }}
              >
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                onClick={() => {
                  navigate("/settings");
                }}
              >
                Setting
              </a>
            </li>
          </ul>
          {authed && (
            <div className="form-inline my-2 my-lg-0">
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          )}
          {/* {authed && (
          <button
          className="btn btn-outline-warning my-2 my-sm-0"
          type="submit"
          onClick={handleLogout}
          >
          Logout
          </button>
        )} */}
        </div>
      </nav>
    );
  }

  function RequireAuth({ children }) {
    return authed === true ? (
      children
    ) : (
      <Navigate to="/login" replace state={{ path: location.pathname }} />
    );
  }
  return (
    <div>
      <Nav />
      <Routes>
        {!signupDisplay ? (
          <Route
            path="/"
            element={
              <Home
                authed_1={display}
                handleSubmit={handleSubmit}
                data={profile}
                display={signupDisplay}
                setFname={setFname}
                setEmail_id={setEmail_id}
                setPwd={setPwd}
                setCpwd={setCpwd}
                setChecked={setChecked}
              />
            }
          />
        ) : (
          <Route path="/success" element={<SuccessSignup />} />
        )}
        <Route path="/price" element={<Price />} />
        <Route
          path="/login"
          element={
            <Login
              handleLogin={handleLogin}
              data={profile}
              setLoginEmail={setLoginEmail}
              setLoginPwd={setLoginPwd}
              display={signupDisplay}
              setSignupDisplay={setSignupDisplay}
            />
          }
        />
        <Route
          path="/settings"
          element={
            <RequireAuth>
              <Settings />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        {signupDisplay && <Route path="/success" element={<SuccessSignup />} />}
        <Route path="successlogin" element={<SuccessLogin />} />
      </Routes>
    </div>
  );
}

export default App;
