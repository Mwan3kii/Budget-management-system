import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory } from '../Redux/UserCategories/categoriesSlice';


const DisplayCategories = ({item}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSingleProduct =() => {
        navigate(`/home/${item.id}`, {
            state: {
                item: item
            }
        })
    }

    const handleDeleteCategory = () => {
      dispatch(deleteCategory(item.id));
      // console.log("Categories after deletion:", categories);
      navigate('/home');
    };

  return (
    <section className="main-card" key={item.id}>
        <div className="main-dynamic-object">
          <div className="main-dynamic-bottom-section">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.createdAt}</p>
            <button onClick={handleSingleProduct}>View Category</button>
            <button onClick={handleDeleteCategory}>Delete Category</button>
          </div>
        </div>{" "}
      </section>
  )
}

export default DisplayCategories;