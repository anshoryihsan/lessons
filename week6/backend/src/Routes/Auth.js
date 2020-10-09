const authRouter = require('express').Router()
const authController = require('../Controllers/Auth')

authRouter.post('/register', authController.register)
authRouter.get('/login', authController.login)

module.exports = authRouter