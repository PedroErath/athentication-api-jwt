const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')

router.post('/userregister', UserController.UserRegister)
router.post('/login', UserController.Login)

module.exports = router