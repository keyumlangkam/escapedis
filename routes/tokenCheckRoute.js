const express = require('express');
const router = express.Router();
const tokenCheck = require('../controllers/tokenCheckController')


router.get('/checktoken', tokenCheck.checkToken)

module.exports = router;
