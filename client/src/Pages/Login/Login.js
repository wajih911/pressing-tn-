import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/actions/user";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = ({ history }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="login_backgroud">
        <div className="login-form">
          <form action="/examples/actions/confirmation.php" method="post">
            <img src={logo} className="logo" alt="React Bootstrap logo" />

            <h2 className="text-center">Se connecter</h2>
            <div className="form-group">
              <input
                className="input_login"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                className="input_login"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                type="submit"
                id="submit"
                defaultValue="Submit"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(login(user, history));
                }}
              >
                Log in
              </button>
            </div>
            <div className="clearfix">
              <label className="float-left form-check-label">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="float-right">
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-center">
            <Link to="/registre">
              {" "}
              <a href="#">Create an Account</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
