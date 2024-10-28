import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logoutUser } from '../Redux/Auth/LogoutUser';
import image from '../Assets/Images/budgetPlan-icon.png';

const Menu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userName = JSON.parse(localStorage.getItem('user logged-in'));
    const user = userName.user.name;

    const handleLogout = async () => {
        // Add confirmation dialog
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            try {
                // Dispatch logout action
                await dispatch(logoutUser());
                // Redirect to login page
                navigate("/login");
            } catch (error) {
                // Handle errors gracefully
                console.error("Logout failed:", error);
                alert("Logout failed. Please try again later.");
            }
        }
    };

    return (
        <header className="header-top">
            <figure class="user">
                <div class="user-avatar">
                    <img src={image} alt="Budget"/>
                </div>
                <figcaption>
                    {user}
                </figcaption>
            </figure>
            <div className="header-firstdiv">
                <Link to={'/home'}>
                    <h2 className="header-h2">BudgetPlan dashboard</h2>
                </Link>
                
                    <div className='logout-header'>
                        <NavLink style={{ color: 'black', marginRight: '10px' }}
                            onClick={handleLogout}
                            data-te-dropdown-item-ref
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21c4.411 0 8-3.589 8-8 0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.999 5.999 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8z" /><path d="M11 2h2v10h-2z" /></svg>
                        </NavLink>
                    </div>
                </div>
        </header>
    );
}

export default Menu;