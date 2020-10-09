const jwt = require('jsonwebtoken')
const authModel = require('../Models/Auth')

const authRouter = {
    register: (req, res)=> {
        authModel.postNewUser(req.body).then((data) =>{

        }).catch((err) => err)
    },
    login: (req, res)=> {
        const token = jwt.sign(req.body, process.env.SECRET_KEY,{
            expiresIn: '2d'
        })

        res.json({
            token
        })
    },
}

module.exports = authRouter