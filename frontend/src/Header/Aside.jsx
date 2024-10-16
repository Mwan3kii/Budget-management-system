import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import { useNavigate } from 'react-router-dom';



const Aside = () => {
  const navigate = useNavigate();
  const handleAddCategory = () => {
    navigate('/category');
  };
  // const handleLogout = (event) => {
  //   event.preventDefault();
  //   try {
  //     navigate('/logout');
  //   } catch (error) {
  //     console.error('Error logging out', error);
  //   }
  // };
  return (
    <aside className="side-bar">
        <ul className='pl-1' style={{ marginLeft: '1px' }}>
          <li>
            <span className="material-symbols-outlined">manage_accounts</span>
            <Link to="#">Profile</Link>
          </li>
          <button onClick={handleAddCategory} className="btn btn-info ml-1 p-2">
          Add New Category
          </button>
          <li className="logout-bar">
            <span className="material-symbols-outlined">logout</span>
            <Link to="/logout" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Logout
                </Link>
          </li>
        </ul>
      </aside>
  )
}

export default Aside;