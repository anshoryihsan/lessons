const userRoute = require('express').Router()
const usersController = require('../Controllers/Users')

userRoute.get('/', usersController.getAllUsers)
// userRoute.get('/search', usersController.getAllUsers)


module.exports = userRoute


