import React from "react";
import "../styles/Register.css";
import { FaUser, FaEnvelope, FaEye } from "react-icons/fa";
import logo from "../logo/logo.png";

export default function App() {
  return (
    <div className="page-wrapper">
      <div className="card">
         <img src={logo} alt="logo" className="logo"/>
        <h1 className="title">Register</h1>
        <form className="form">
          
          <div className="field">
            <label className="label-text">Username</label>
            <div className="input-row">
              <input
                type="text"
                className="text-input"
                placeholder="Username"
              />
              <span className="icon">
                <FaUser />
              </span>
            </div>
          </div>

          
          <div className="field">
            <label className="label-text">Email</label>
            <div className="input-row">
              <input
                type="email"
                className="text-input"
                placeholder="Email"
              />
              <span className="icon">
                <FaEnvelope />
              </span>
            </div>
          </div>

         
          <div className="field">
            <label className="label-text">Password</label>
            <div className="input-row">
              <input
                type="password"
                className="text-input"
                placeholder="Password"
              />
              <span className="icon">
                <FaEye />
              </span>
            </div>
          </div>

          <div className="spacer"></div>

          <button className="submit-btn" type="submit">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}

