const mysql = require('mysql')
const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
})
connect.connect()
module.exports = connect