import { useState, useEffect } from 'react'
import './HomePage.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { displaySingleCategory } from '../Redux/UserCategories/singleCategorySlice';
import Transaction from './Transaction';
import { createTransaction } from '../Redux/Transactions/transactionSlice';
import { displaySingleTransaction } from '../Redux/Transactions/displayTransactions';
import Menu from '../Header/Menu';


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
        <div>
            <Menu />
            <div className="container container-fluid">
            
                <h2 className="mt-3 ml-5">Category Details</h2>
                <div className="row mt-3 user-info d-flex">
                    {loading ? (<div class="spinner-border"></div>) : (<>
                        <div className="col-11 col-md-5">
                            <div className="d-flex gap-4">
                                <h4>Category Name:</h4>
                                <p>{category.name}</p>
                            </div>
                            <hr />
                            <div className="d-flex gap-4">
                                <h4>Description:</h4>
                                <p>{category.description}</p>
                            </div>
                            <hr />
                            <div className="d-flex gap-4">
                                <h4>Transaction</h4>
                                <ul>
                                    {singleTran ? (
                                        <li>
                                            <h4>{singleTran.name}</h4>
                                            <p>Amount: Ksh{singleTran.amount}</p>
                                        </li>
                                    ) : (
                                        <p>No transactions available.</p>
                                    )}
                                </ul>
                            </div>
                            <hr />

                            <button type="button" className="main-dynamic-bottom-section button" data-bs-toggle="modal" data-bs-target="#myModal">
                                Add transaction
                            </button>
                            <Transaction categoryId={id} />
                        </div></>)}
                </div>
            </div>
        </div>
    )
}

export default CategoryDetails;