import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Authentication/Auth.css";
import { registerUser } from "../Redux/Auth/RegisterUser";
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, success, error } = useSelector((state) => state.registereduser);
  const [values, setValues] = useState({
    name: "",
    email: "",
    bio: "",
    password: ""
  });

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
    if (values.name && values.email && values.bio && values.password) {
      setValid(true);
    }
    if (values.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    const userData = {
      email: values.email,
      name: values.name,
      bio: values.bio,
      password: values.password
    }
    try {
      dispatch(registerUser(userData));
      setSubmitted(true);
    } catch (err) {
      console.log(err);
    }

    if (success) {
      navigate('/home');
    }

  };

  return (
    <div className='auth-container'>
      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>

          <h2>Sign up</h2>
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
              type="text"
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          )}

          {!valid && (
            <textarea
              className="form-field"
              rows={4}
              cols={20}
              placeholder="Enter Bio"
              name="bio"
              value={values.bio}
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
            />
          )}

          {loading ? (
            <div className="spinner-border"></div>) : (success ? submitted && valid && (
              <div className="success-message">
                <h3>
                  {" "}
                  Welcome {values.name}{" "}
                </h3>
                <div> Your registration was successful! </div>
              </div>
            ) : (<></>)
          )}
          {submitted && !values.email && !values.name && !values.password && (
            <span id="email-error">Please fill in all fields</span>
          )}
          {!valid && (
            <button style={{ marginBottom: '5px' }} className="form-field" type="submit">
              Register
            </button>
          )}
        </form>
        <p style={{ paddingTop: '5px' }}>Already have an account? <Link to="/login" className='auth-redirect'>Login</Link></p>
      </div>
    </div>
  );
};

export default Register;