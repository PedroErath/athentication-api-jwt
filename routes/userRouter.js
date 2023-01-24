const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')
const AuthController = require('../controllers/authController')

router.post('/userregister', UserController.UserRegister)
router.post('/login', UserController.Login)
router.get('/verifytoken', AuthController.verifyToken)

module.exports = router