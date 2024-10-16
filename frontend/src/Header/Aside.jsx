import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import { useNavigate } from 'react-router-dom';


const Aside = () => {
  const navigate = useNavigate();
  const handleAddCategory = () => {
    navigate('/category');
  };
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
            <Link to="#"></Link>Logout
          </li>
        </ul>
      </aside>
  )
}

export default Aside;