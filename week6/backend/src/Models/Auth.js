const bycript = require("bcrypt");
const db = require("../Helpers/db");

const authModel = {
  postNewUser: (body) => {
    return new Promise((resolve, reject) => {
      bycript.genSalt(10, (err, salt) => {
        if (err) {
          reject(err);
        }
        let { password } = body;
        bycript.hash(password, salt, (err, hashed) => {
          if (err) {
            reject(err);
          }
          const newBody = {...body, password: hashed}
          const query = "INSER INTO users SET ?"
          db.query(query, newBody, (err, data) => {
              if(!err) {
                  resolve(data)
              }else{
                  reject(err)
              }
          })
        });
      });
    });
  },
  loginUser: (body) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT username, password FROM users WHERE username=?"
      db.query(query, body.username, (err, data) => {
          if(!err) {
              resolve(data)
          }else{
              reject(err)
          }
      })
    });
  },
};
