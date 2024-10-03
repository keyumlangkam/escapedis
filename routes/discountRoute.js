const express = require('express');
const router = express.Router()
const discountAmount = require('../controllers/dicsountController')

router.get('/discount', discountAmount.getDiscountAmount)
router.post('/discount', discountAmount.setDiscountAmount)

module.exports = router