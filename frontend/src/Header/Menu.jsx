import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logout } from "../Redux/Auth/LoginUser";

const Menu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        // Add confirmation dialog
        const confirmLogout = window.confirm("Are you sure you want to logout?");

        if (confirmLogout) {
            try {
                // Dispatch logout action
                await dispatch(logout());
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
                <div className='logout-header' class="fa fa-sign-out">
                    <NavLink
                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
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