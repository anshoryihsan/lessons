const express = require("express");
const bodyParser = require("body-parser");
const db = require("./src/helper/db");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

//step dua
app.post("/users", (req, res) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    db.query(
      `INSER INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`,
      (error, result, fields) => {
        if (!err) {
          res.status(201).send({
            success: true,
            message: "success create user",
            data: req.body,
          });
        } else {
          res.status(500).send({
            success: false,
            message: "Internal Server Error",
          });
        }
      }
    );
    db.end();
  } else {
    res.status(400).send({
      success: false,
      message: "all field must be filled",
    });
  }
});
//end step dua
//awal
app.get("/", (request, response) => {
  response.send("haloo!");
});

app.get("/home", (request, response) => {
  response.send("welcome home");
});

app.get("/users", (req, res) => {
  let { page, limit } = req.query;
  if (!limit) limit = 5;
  else limit = parseInt(limit);

  if (!page) page = 1;
  else page = parseInt(page);

  db.query(`SELECT * FROM items LIMIT  ${limit} OFFSET ${page-1 * limit}`, (err, result, fields)=> {
    if(!err)
     res.send({
         success: true,
         message: 'List Item',
         data: result
     })
     else
     console.log(err)
     res.status(500).send({
         success: false,
         message: 'Internal'
     })
  })
});
//end awal

app.listen(8000, () => {
  console.log("listen on port 8000");
});
