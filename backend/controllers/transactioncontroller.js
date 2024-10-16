const Transaction = require('../models/transaction');
const catchAsyncError = require('../middleware/catchAsyncErrors');
const Category = require('../models/category');


exports.createTransaction = catchAsyncError (async(req, res, next) => {
    const { id } = req.params;
    const { name, amount } = req.body;

    console.log("Received data from frontend:", req.body);
    const transaction = await Transaction.create({
        name,
        amount,
        categoryId: id
    });
    console.log('Saved transaction:', transaction);
    res.status(201).json({
        success: true,
        transaction
    });
});

exports.getTransactions = catchAsyncError (async(req, res, next) => {
    const { categoryId } = req.query;
    const category = await Category.findByPk(id); // Assuming you have a Category model
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