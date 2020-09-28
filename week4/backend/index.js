const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./src/helper/db");
//midleware
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (request, response) => {
  response.send("hello world");
});

//GET METHOD
app.get("/users", (req, res) => {
  let { page, limit } = req.query;

  if (!limit) limit = 5;
  else limit = parseInt(limit);

  if (!page) page = 1;
  else page = parseInt(page);

  db.query(
    `SELECT * FROM users LIMIT ${limit} OFFSET ${(page - 1) * limit}`,
    (err, result, fields) => {
      if (!err) {
        res.status(200).send({
          success: true,
          message: "Success get all Users Data",
          data: result,
        });
      } else {
        console.log(err);
        res.status(500).send({
          success: false,
          message: "Failed to fetch Users Data.",
          data: [],
        });
      }
    }
  );
});

//GET 1 DATA
app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  db.query(`SELECT * FROM users where id=${id}`, (err, result, fields) => {
    if (!err) {
      res.status(200).send({
        success: true,
        message: "Success get data by id",
        data: result,
      });
    } else {
      console.log(err);
      res.status(500).send({
        success: false,
        message: "Failed get data by id",
        data: [],
      });
    }
  });
});
//POST METHOD
app.post("/users", (req, res) => {
  const {
    name,
    phone,
    email,
    password,
    balance,
    verified,
    photo,
    pin,
  } = req.body;
  if (
    name &&
    phone &&
    email &&
    password &&
    balance &&
    verified &&
    photo &&
    pin
  ) {
    db.query(
      `INSERT INTO users (name, phone, email, password, balance, verified, photo, pin) VALUES ('${name}', '${phone}', '${email}', '${password}', '${balance}', ${verified}, '${photo}', '${pin}')`,
      (err, result, fields) => {
        if (!err) {
          res.status(201).send({
            success: true,
            message: "Success created user data",
            data: result,
          });
        } else {
          console.log(err);
          res.status(500).send({
            success: false,
            message: "Internal Server Error",
            data: [],
          });
        }
        db.end();
      }
    );
  } else {
    res.status(400).send({
      success: false,
      message: "All Fields must be filled",
      data: [],
    });
  }
});

//UPDATE METHOD (PATCH)
app.patch("/users/:id", (req, res) => {
  const { id } = req.params;
  const {
    name = "",
    phone = "",
    email = "",
    password = "",
    balance = "",
    verified = "",
    photo = "",
    pin = "",
  } = req.body;

  if (
    name.trim() ||
    phone.trim() ||
    email.trim() ||
    password.trim() ||
    balance.trim() ||
    verified.trim() ||
    photo.trim() ||
    pin.trim()
  ) {
    db.query(`SELECT * FROM users where id=${id}`, (err, result, fields) => {
      if (!err) {
        if (result.length) {
          const data = Object.entries(req.body).map((item) => {
            return parseInt(item[1]) > 0
              ? `${item[0]}=${item[1]}`
              : `${item[0]}='${item[1]}'`;
          });
          console.log(data)
          let query = `UPDATE users SET ${data} WHERE id=${id}`;
          db.query(query, (err, result, fields) => {
            if (result.affectedRows) {
              res.status(200).send({
                success: true,
                message: `User ${id} Succesfully updated`,
              });
            } else {
              res.status(400).send({
                success: false,
                message: "Failed update user",
              });
            }
          });
        } else {
          res.status(400).send({
            success: false,
            message: "id not found",
          });
        }
      } else {
        console.log(err);
        res.status(500).send({
          success: false,
          message: "Failed update user",
        });
      }
    });
  }
});
//UPDATE METHOD (PUT)
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const {
    name,
    phone,
    email,
    password,
    balance,
    verified,
    photo,
    pin,
  } = req.body;
  if (
    name &&
    phone &&
    email &&
    password &&
    balance &&
    verified &&
    photo &&
    pin
  ) {
    let query = `UPDATE users SET name='${name}', phone='${phone}', email='${email}', password='${password}', balance='${balance}', verified=${verified}, photo='${photo}', pin='${pin}' where id=${id}`;
    db.query(query, (err, result, fields) => {
      if (!err) {
        res.status(201).send({
          success: true,
          message: `Success update user data ${id}`,
          data: result,
        });
      } else {
        console.log(err);
        res.status(500).send({
          success: false,
          message: "Internal Server Error",
          data: [],
        });
      }
      db.end();
    });
  } else {
    res.status(400).send({
      success: false,
      message: "All Fields must be filled",
      data: [],
    });
  }
});

//DELETE METHOD
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  db.query(`DELETE FROM users where id=${id}`, (err, result, fields) => {
    if (!err) {
      res.status(200).send({
        success: true,
        message: "Success delete user",
        data: result,
      });
    } else {
      console.log(err);
      res.status(500).send({
        success: false,
        message: "Failed delete user",
        data: [],
      });
    }
  });
});

// app.get('/users', (req, res) => {
//     res.status(200).send({
//         succes: true,
//         message: 'success get all users data',
//         data: [
//             {
//                 id: 45,
//                 name: "Tova Maulana Irvan",
//                 username: 'irvanster',
//                 password: 'google098'
//             },
//             {
//                 id: 45,
//                 name: "Anjas",
//                 username: 'anjas',
//                 password: 'google123'
//             },
//             {
//                 id: 45,
//                 name: "Nurita",
//                 username: 'nurita',
//                 password: 'google092'
//             },
//         ]
//     })
// })


// app.get("/users", (req, res) => {
//   db.query(`SELECT * FROM users`, (err, result, fields) => {
//     if (!err)
//       res.status(200).send({
//         success: true,
//         message: "Success get all Users Data",
//         data: result,
//       });
//     else
//       res.status(500).send({
//         success: false,
//         message: "Failed to fetch Users Data.",
//         data: [],
//       });
//   });
// });

app.listen(8000, () => {
  console.log("server running on port 8000");
});
