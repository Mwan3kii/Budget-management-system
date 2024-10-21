const Transaction = require('../models/transaction');
const catchAsyncError = require('../middleware/catchAsyncErrors');
const Category = require('../models/category');


exports.createTransaction = catchAsyncError (async(req, res, next) => {
    const { id } = req.params; // Category id from params
    const { name, amount } = req.body;

    // Check if category exists before creating transaction
    const category = await Category.findByPk(id);
    if (!category) {
        return res.status(404).json({
            success: false,
            message: 'Category not found'
        });
    }
    console.log("Received data from frontend:", req.body);
    const transaction = await Transaction.create({
        name,
        amount,
        category_id: category.id
    });
    console.log('Saved transaction:', transaction);
    res.status(201).json({
        success: true,
        transaction
    });
});

exports.getTransactions = catchAsyncError (async(req, res, next) => {
    const { categoryId } = req.query;
    const category = await Category.findByPk(id);
    if (!category) {
        return res.status(404).json({ message: 'Category not found.' });
    }
    const transactions = await Transaction.findAll({
        where: { categoryId: id }
    });
    if (!transactions.length) {
        return res.status(404).json({ message: 'No transactions found for this category.' });
    }
    res.status(200).json(category, transactions);
});