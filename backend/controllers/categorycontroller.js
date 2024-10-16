const Category = require('../models/category');
const catchAsyncError = require('../middleware/catchAsyncErrors');

exports.createCategory = catchAsyncError (async(req, res, next) => {
    const { name, description } = req.body;
    console.log("Received data from frontend:", req.body);
    const user = await Category.create({
        name,
        description
    });
});

exports.getCategories = catchAsyncError (async(req, res, next) => {
    const categories = await Category.findAll();
    res.json(categories);
});

