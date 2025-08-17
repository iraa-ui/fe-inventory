import React, { useState } from 'react';
import { FaUser, FaEyeSlash } from 'react-icons/fa';
import '../styles/Register.css';
import logo from "../logo/logo.png";

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password });
  };

  return (
    <div className="register-container">
      <form className="register-card" onSubmit={handleSubmit}>
        <img src={logo} alt="Logo" className="brand-logo" />
        <h2 className="register-title">Register</h2>


        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>


        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaUser className="icon" />
        </div>


        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaEyeSlash className="icon" />
        </div>


        <button type="submit" className="register-btn">
          REGISTER
        </button>
      </form>
    </div>
  );
}

export default Register;
