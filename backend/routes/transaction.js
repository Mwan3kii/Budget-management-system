const express = require('express');
const router = express.Router();

const { createTransaction, getTransactions } = require('../controllers/transactioncontroller');

router.route('/home/:id/transaction').post(createTransaction);
router.route('/home/:id').get(getTransactions);

module.exports = router;