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
        
        dispatch(displaySingleTransaction(id));
    }, [dispatch, id]);

    const { loading, success, category, error } = useSelector((state) => state.singleCategory);
    // const { transaction } = useSelector((state) => state.transactions);
    const singleTran = category?.transactions;

    return (
        <div>
            <Menu />
            <div>
                <div className="details-container">
                    <h2 style={{ fontSize: '1.7em' }} className="mt-3 ml-5">Category Details</h2>
                    <div className="row ml-5 mt-3 user-info d-flex">
                        {loading ? (<div class="spinner-border"></div>) : (<>
                            <div className="col-11 col-md-5 ml-5">
                                <div className="d-flex gap-4">
                                    <h4>Category Name:</h4>
                                    <p>{category?.category?.name}</p>
                                </div>
                                <hr />
                                <div className="d-flex gap-4">
                                    <h4>Description:</h4>
                                    <p>{category?.category?.description}</p>
                                </div>
                                <hr />
                                <div className="transactions d-flex gap-4">
                                    <h4>Transaction:</h4>
                                    <ul>
                                        {singleTran && singleTran.length > 0 ? (
                                            singleTran.map((tran) => (
                                                <li key={tran.id}>
                                                    <h4>{tran.name}</h4>
                                                    <p>Amount: Ksh{tran.amount}</p>
                                                </li>
                                            ))
                                        ) : (
                                            <p>No transactions available.</p>
                                        )}
                                    </ul>
                                </div>
                                <Transaction categoryId={id} />
                            </div></>)}
                    </div>

                </div>
            </div>
        <button type="button" className="main-dynamic-bottom-section button" data-bs-toggle="modal" data-bs-target="#myModal">
            Add transaction
        </button>
        </div>
    )
}

export default CategoryDetails;