import { useState, useEffect } from 'react'
import './HomePage.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { displaySingleCategory } from '../Redux/UserCategories/singleCategorySlice';
import Transaction from './Transaction';
import { createTransaction } from '../Redux/Transactions/transactionSlice';
import { displaySingleTransaction } from '../Redux/Transactions/displayTransactions';

const CategoryDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(displaySingleCategory(id));
        // dispatch(createTransaction(id));
        console.log('Current Transactions:', singleTran);
        dispatch(displaySingleTransaction(id));
    }, [dispatch, id]);

    const { loading, success, category, error } = useSelector((state) => state.singleCategory);
    // const { transaction } = useSelector((state) => state.transactions);
    const { singleTran } = useSelector((state) => state.displayTransaction);


    return (
        <div className="container container-fluid">
            <h2 className="mt-5 ml-5">Category Details</h2>
            <div className="row justify-content-around mt-5 user-info">
                {loading ? (<div class="spinner-border"></div>) : (<>
                    <div className="col-12 col-md-5">
                        <h4>Category Name</h4>
                        <p>{category.name}</p>

                        <h4>Description</h4>
                        <p>{category.description}</p>
                        <h4>Transactions</h4>
                        <ul>
                            {singleTran ? (
                                <li>
                                    <h2>{singleTran.name}</h2>
                                    <p>Amount: Ksh{singleTran.amount}</p>
                                </li>
                            ) : (
                                <p>No transactions available.</p>
                            )}
                        </ul>

                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                            Add transaction
                        </button>
                        <Transaction categoryId={id} />
                    </div></>)}
            </div>
        </div>
    )
}

export default CategoryDetails;