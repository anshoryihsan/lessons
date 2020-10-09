const userRoute = require('express').Router()
const usersController = require('../Controllers/Users')

userRoute.get('/', usersController.getAllUsers)


module.exports = userRoute


