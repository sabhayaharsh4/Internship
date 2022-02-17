import { useNavigate } from "react-router-dom";
import "../Pages/login.css";
export default function Login(props) {
  const navigate = useNavigate();
  return (
    <div className="container" id="body_login">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="box">
              <h1>Login</h1>
              <p className="text-muted">
                {" "}
                Please enter your login and password!
              </p>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  props.setLoginEmail(e.target.value);
                }}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  props.setLoginPwd(e.target.value);
                }}
              />
              <a className="forgot text-muted mr-5" href="#">
                Forgot password?
              </a>
              <span className="text-light ">
                New User
                <a
                  className="forgot text-muted ml-1"
                  onClick={() => {
                    if (!props.display) navigate("/");
                    else navigate("/success");
                  }}
                >
                  Create an account
                </a>
              </span>
              <input
                type="submit"
                name=""
                value="Login"
                onClick={props.handleLogin}
              />
              <div className="col-md-12">
                <ul className="social-network social-circle">
                  <li>
                    <a href="#" className="icoFacebook" title="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoTwitter" title="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="icoGoogle" title="Google +">
                      <i className="fab fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
