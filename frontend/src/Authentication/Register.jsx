import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Authentication/Auth.css";

const Register = () => {
    const dispatch = useDispatch();
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
        
      };

    return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {loading ? (
            <div className="spinner-border"></div> ) : ( success ? submitted && valid && (
          <div className="success-message">
            <h3>
              {" "}
              Welcome {values.name}{" "}
            </h3>
            <div> Your registration was successful! </div>
          </div>
        ): (<></>))}
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
        

        {submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}
        {!valid && (
          <button className="form-field" type="submit">
            Register
          </button>
        )}
      </form>
    </div>
  );
};

export default Register;