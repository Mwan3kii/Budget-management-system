import React from 'react'
import { useState, useEffect } from "react";
import { loginUser } from "../Redux/Auth/LoginUser";
import { useDispatch, useSelector } from "react-redux";
import "../Authentication/Auth.css";
import { Navigate, useNavigate, Link } from 'react-router-dom';
import Menu from '../Header/Menu';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, success, error, user } = useSelector((state) => state.loginuser);
  const [values, setValues] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user logged-in"));
    if (localUser?.token && success) {
      navigate("/home");
    }
  }, [success, navigate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (values.email && values.password) {
      dispatch(loginUser(values));
    }
  };

return (
  <div className='auth-container'>
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {loading && <div className="spinner-border"></div>}
        {error && <div className="error-message">{error}</div>}
        <input
          className="form-field"
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
        <input
          className="form-field"
          type="password"
          placeholder="Enter Password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
          required
        />

        {submitted && !values.email && (
          <span id="email-error">Please enter email</span>
        )}
          <button className="form-field" type="submit">
            Login
          </button>
      </form>
      <p>Don't have an account? <Link to="/signup" className='auth-redirect'>Signup now</Link></p>
    </div>
  </div>
);
};

export default Login;