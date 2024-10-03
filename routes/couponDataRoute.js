const express = require('express');
const router = express.Router()
const couponData = require('../controllers/couponDataController')

router.get('/coupondata', couponData.getCouponData)

module.exports = router
