import React, { useState } from 'react'
import { createTransaction } from '../Redux/Transactions/transactionSlice';
import { displaySingleTransaction } from '../Redux/Transactions/displayTransactions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Transaction = ({ categoryId }) => {
    console.log(categoryId);
    const dispatch = useDispatch();
    const [newTransaction, setNewTransaction] = useState({
        name: '',
        amount: ''
    });
    const handleAddTransaction = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setNewTransaction((prevTransaction) => ({
            ...prevTransaction,
            [name]: value
        }));
    };
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const transactionData = {
            name: newTransaction.name,
            amount: newTransaction.amount,
            categoryId: categoryId
        };
        dispatch(createTransaction({ id: categoryId, transactionData }));
        dispatch(displaySingleTransaction(categoryId));
        navigate(`/home/${categoryId}`);
        // setNewTransaction({ name: '', amount: '' }); // Reset the state
    };

    return (
        <div className="modal fade" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Add new transaction</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="transactionName" className="form-label">Transaction Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="transactionName"
                                    name="name"
                                    value={newTransaction.name}
                                    onChange={handleAddTransaction}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="transactionAmount" className="form-label">Amount</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="transactionAmount"
                                    name="amount"
                                    value={newTransaction.amount}
                                    onChange={handleAddTransaction}
                                    required
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save Transaction</button>
                            </div>
                        </form>       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transaction;