const Category = require('../models/category');
const Transaction = require('../models/transaction');
const catchAsyncError = require('../middleware/catchAsyncErrors');

exports.createCategory = catchAsyncError(async (req, res, next) => {
    const { name, description } = req.body;
    try {
        const category = await Category.create({
            name,
            description,
        });
        res.status(201).json({
            success: true,
            message: "Category created successfully.",
            category,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "The category was not created.",
            error: err,
        });
    }
});

exports.getCategories = catchAsyncError(async (req, res, next) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json({
            success: true,
            categories,
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "The Categories Have not Loaded",
            error: err,
        });
    }
});

exports.categoryDetails = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    const category = await Category.findOne({
        where: { id }
    });
    if (!category) {
        return res.status(404).json({
            success: false,
            message: "The category does not exist",
        });
    }

    const transactions = await Transaction.findAll({
        where: { category_id: id },
    });
    const totalAmount = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

    await Category.update(
        { totalamount: totalAmount },
        { where: { id } }
    )

    res.status(200).json({
        success: true,
        category,
        transactions,
        totalAmount
    });
});

exports.deleteCategory = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;

    const category = await Category.destroy({
        where: { id }
    });
    if (!category) {
        return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json({ message: 'Category deleted successfully', category });
});