import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logoutUser } from '../Redux/Auth/LogoutUser';

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
            <div className="header-firstdiv">
                <Link to={'/home'}>
                    <h2 className="header-h2">BudgetPlan dashboard</h2>
                </Link>
                {/* <div className="header-span fa fa-user"> */}
                    {user && (
                        <div>
                            <p>Hello, {user}!</p>
                        </div>
                    )}
                {/* </div> */}
                <div className='logout-header'>
                    <span className="header-span fa fa-sign-out "></span>
                    <NavLink
                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-large font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                        onClick={handleLogout}
                        data-te-dropdown-item-ref
                    >

                        Logout
                    </NavLink>
                </div>
            </div>

        </header>
    );
}

export default Menu;