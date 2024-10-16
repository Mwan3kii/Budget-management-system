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

