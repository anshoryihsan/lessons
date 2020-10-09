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
        });
      });
    });
  },
};
