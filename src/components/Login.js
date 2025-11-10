import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/splitmycredit logo.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic if needed
    navigate('/dashboard');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <img src={logo} alt="Split My Credit Logo" className="login-logo"/>
        <h2>Login to Split My Credit</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">Login</button>
        <p className="signup-link">
          Don't have an account?{' '}
          <button type="button" className="link-button" onClick={handleSignUp}>
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;