const express = require('express')

const authRouter = require('./Auth')
const usersRoute = require('./Users')

const router = express.Router()

router.use('/auth', authRouter)
router.use('/users', usersRoute)

module.exports = router