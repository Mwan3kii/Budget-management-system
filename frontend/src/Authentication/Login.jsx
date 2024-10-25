import React from 'react'
import { useState } from "react";
import { loginUser } from "../Redux/Auth/LoginUser";
import { useDispatch, useSelector } from "react-redux";
import "../Authentication/Auth.css";
import { Navigate, useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.loginuser);
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const localUser = JSON.parse(localStorage.getItem("user logged-in"));
  const token = localUser?.token;

  const handleInputChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.email && values.password) {
      setValid(true);
    }
    const userData = {
      email: values.email,
      password: values.password
    };
    try {
      dispatch(loginUser(userData));
      setSubmitted(true);
    } catch (err) {
      console.log(err);
    }
  };
  const navigate = useNavigate();
  if (success) {
    navigate("/home");
  }

  if (token) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        {loading ? (
          <div className="spinner-border"></div>) : (success ? submitted && valid && (
            <div className="success-message">
              <h3>Welcome {values.name}{" "}</h3>
              <div> Your login was successful! </div>
            </div>
          ) : (<></>))}
        <h2>Welcome Back!</h2>
        {!valid && (
          <input
            className="form-field"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        )}


        {!valid && (
          <input
            className="form-field"
            type="password"
            placeholder="Enter Password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
            required
          />
        )}

        {submitted && !values.email && (
          <span id="email-error">Please enter email</span>
        )}
        {!valid && (
          <button className="form-field" type="submit">
            Login
          </button>
        )}
      </form>
      <p>Don't have an account? <Link to="/signup">Signup now</Link></p>
    </div>
  );
};

export default Login;