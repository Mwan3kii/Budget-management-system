const express = require('express');
const router = express.Router();

const { createCategory, getCategories, categoryDetails, deleteCategory } = require('../controllers/categorycontroller');
const { isAuthenticatedUser } = require('../middleware/auth');

router.route('/category').post(isAuthenticatedUser, createCategory);
router.route('/home').get(isAuthenticatedUser, getCategories);
router.route('/home/:id').get(isAuthenticatedUser, categoryDetails);
router.route('/home/:id').delete(isAuthenticatedUser, deleteCategory);


module.exports = router;