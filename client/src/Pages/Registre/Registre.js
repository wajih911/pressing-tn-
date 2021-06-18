import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registre } from "../../Redux/actions/user";
import logo from "../../assets/logo.png";
import "./Registre.css";
const Registre = ({ history }) => {
  const [user, setUser] = useState({});

  const dispatch = useDispatch();

  const handleRegistre = (Event) => {
    Event.preventDefault();
    dispatch(registre(user, history));
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-form">
      <form
        action="/examples/actions/confirmation.php"
        method="post"
        className="form-horizontal"
      >
        <img src={logo} className="logo" alt="React Bootstrap logo" />

        <div className="row">
          <div className="col-8 offset-4">
            <h2>Sign Up</h2>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label col-4">Username</label>
          <div className="col-8">
            <input
              type="text"
              className="form-control"
              name="name"
              required="required"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label col-4">Email Address</label>
          <div className="col-8">
            <input
              type="email"
              className="form-control"
              name="email"
              required="required"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label col-4">Phone</label>
          <div className="col-8">
            <input
              type="number"
              className="form-control"
              name="phone"
              required="required"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label col-4">Password</label>
          <div className="col-8">
            <input
              type="password"
              className="form-control"
              name="password"
              required="required"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-8 offset-4">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              onClick={handleRegistre}
            >
              S'inscrire
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Registre;
