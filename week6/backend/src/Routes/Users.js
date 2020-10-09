const usersRoute = require('express').Router()
const users = require('../Controllers/Users')

usersRoute.post('/users', users.getAllUser)

module.exports = usersRoute