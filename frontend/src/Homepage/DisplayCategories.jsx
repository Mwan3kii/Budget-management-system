import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, displayCategories } from '../Redux/UserCategories/categoriesSlice';
import './HomePage.css';


const DisplayCategories = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { success } = useSelector((state) => state.categories);

  const handleSingleProduct = () => {
    navigate(`/home/${item.id}`, {
      state: {
        item: item
      }
    })
  }

  const handleDeleteCategory = () => {
    dispatch(deleteCategory(item.id))
      .then(() => {
        if (success) {
          dispatch(displayCategories());
          navigate('/home');
        }
      });
  };

  return (
    <div className='display-categories'>
      <section className="main-card" key={item.id}>
        <div className="main-dynamic-object">
          <div className="main-dynamic-bottom-section" style={{ margin: '0px' }}>
            <h2>{item.name}
              <p className="total-amount">Ksh.{item.totalamount}</p>
            </h2>
            <hr />
            <p>{item.createdAt}</p>
            <button onClick={handleSingleProduct}>View Category</button>
            <button onClick={handleDeleteCategory}>Delete Category</button>
          </div>
        </div>{" "}
      </section>
    </div>
  )
}

export default DisplayCategories;