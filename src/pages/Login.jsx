import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaUser, FaEyeSlash } from 'react-icons/fa';
import '../styles/Login.css';
import logo from '../logo/logo.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password });
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
         <img src={logo} alt="Logo" className="brand-logo" />
        <h2 className="login-title">Login</h2>

        
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
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaEyeSlash className="icon" />
        </div>
        <Link to="/" style={{ width: "100%", display: "block", textDecoration: "none" }}>
             <button type="button" className="login-btn">
                 LOGIN
             </button>
        </Link>

      </form>
    </div>
  );
}

export default Login;
