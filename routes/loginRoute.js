const express = require('express');
const router = express.Router()
const loginuser = require('../controllers/loginController')

router.post('/login', loginuser.login)

module.exports = router