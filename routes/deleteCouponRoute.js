const express = require('express');
const router = express.Router()
const deleteCoupon = require('../controllers/deleteCouponController')

router.post('/deletecoupon', deleteCoupon.deleteCoupon)

module.exports = router