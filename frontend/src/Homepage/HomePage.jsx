import React from 'react'
import Aside from '../Header/Aside';
import Menu from '../Header/Menu';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { displayCategories } from '../Redux/UserCategories/categoriesSlice';
import DisplayCategories from './DisplayCategories';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(displayCategories());
  }, [dispatch]);
  const { loading, success, categories, error } = useSelector((state) => state.categories);

  const navigate = useNavigate();
  const handleAddCategory = () => {
    navigate('/category');
  };
  console.log(categories);
  return (
      <div className='main-content'>
        <Aside />
        <div className='display-movies'>
          {/* <h1 style={{ marginLeft: '50px' }}>Categories</h1> */}
          {loading ? (<div class="spinner-border"></div>
          ) : (
            categories.map((item) => (
              <DisplayCategories item={item} key={item.id} />
            ))
          )
          }
        </div>
        {/* <button onClick={handleAddCategory} className="btn btn-primary">
          Add New Category
        </button> */}
      </div>
  );
};

export default HomePage;