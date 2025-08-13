import React, { useState } from 'react';
import { FaUser, FaEyeSlash } from 'react-icons/fa';
import '../styles/Login.css';

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
        <h2 className="login-title">Login</h2>

        {/* Username */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>

        {/* Password */}
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaEyeSlash className="icon" />
        </div>

        {/* Tombol */}
        <button type="submit" className="login-btn">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Login;
