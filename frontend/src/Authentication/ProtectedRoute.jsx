import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    const { isAuthenticated } = useSelector(state => state.loginuser);
    const localUser = JSON.parse(localStorage.getItem('user logged-in'));
  
    const navigate = useNavigate();

    // Check if the user is authenticated
    if (!localUser?.token) {
        return <Navigate to='/login' />;
    }

    return <Outlet />;
};

export default ProtectedRoute;