import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../Redux/Auth/LogoutUser';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, success, error } = useSelector((state) => state.logoutuser);
    const handleLogout = (event) => {
        event.preventDefault();
        try {
            dispatch(logoutUser());
          navigate('/');
        } catch (error) {
          console.error('Error logging out', error);
        }
      };
  return (
    <div>
        {loading ? (
            <div className="spinner-border"></div> 
        ) : ( success ? (
          <div className="success-message">
            <div>
                Logging out...
            </div>
          </div>
        ): (<></>))}
    </div>
  )
}

export default Logout;