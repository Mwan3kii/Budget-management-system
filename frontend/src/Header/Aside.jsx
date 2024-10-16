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
          <button onClick={handleAddCategory} style={{ color: 'black', fontSize: '20px' }} className="btn mt-5 p-2">
          Add Category
          </button>
          <li className="logout-bar">
            <Link to="/logout" style={{ color: 'black', fontSize: '22px' }}>
                    Logout
                </Link>
          </li>
        </ul>
      </aside>
  )
}

export default Aside;