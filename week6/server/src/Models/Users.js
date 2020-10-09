const db = require('../Helpers/db')

const userModel = {
    getAllUsers: ()=> {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users', (err, res) => {
                if(!err) {
                    resolve(res)
                }
                console.log(err)
            })
        })
    },
}


module.exports = userModel

