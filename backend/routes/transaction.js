const express = require('express');
const router = express.Router();

const { createTransaction, getTransactions } = require('../controllers/transactioncontroller');
const { isAuthenticatedUser } = require('../middleware/auth');

router.route('/home/:id/transaction').post(isAuthenticatedUser, createTransaction);
router.route('/home/:id').get(isAuthenticatedUser, getTransactions);

module.exports = router;