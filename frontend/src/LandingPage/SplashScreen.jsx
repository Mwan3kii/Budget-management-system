import React from 'react'
import './SplashScreen.css';
import { useNavigate } from 'react-router-dom';


const SplashScreen = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signup'); 
  };
  const handleLoginClick = () => {
    navigate('/login'); 
  };
  return (
    <div className='screen-container d-flex flex-column justify-content-between align-items-center vh-100'>
        <h2 className='display-4 text-white text-center mt-5 justify-content-center'>BudgetPal</h2>
        <div className='d-grid gap-2 nav-buttons mb-5 d-flex flex-column w-50'>
            <button onClick={handleLoginClick} className="btn btn-success">Login</button>
            <button onClick={handleSignInClick} className="btn btn-outline-success btn-block">Sign up</button>
        </div>
    </div>
  )
}

export default SplashScreen;