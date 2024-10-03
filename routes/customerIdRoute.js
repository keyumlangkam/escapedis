const express = require('express');
const router = express.Router()
const customerId = require('../controllers/customerIdController')

router.post('/customerid', customerId.postCustomerId)

module.exports = router