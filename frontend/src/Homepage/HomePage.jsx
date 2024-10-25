import React from 'react'
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

  const retrievedCategories = categories.categories;

  const navigate = useNavigate();
  const handleAddCategory = () => {
    navigate('/category');
  };
  
  return (
    <div>
      <Menu />
      <h1 className='title'>Categories</h1>
      <div className='main-content'>
        {loading ? (<div class="spinner-border"></div>
        ) : (
          retrievedCategories?.map((item) => (
            <DisplayCategories item={item} key={item.id} />
          ))
        )}
      </div>
      <button onClick={handleAddCategory} className='category-button'>
        Add New Category
      </button>
    </div>
  );
};

export default HomePage;